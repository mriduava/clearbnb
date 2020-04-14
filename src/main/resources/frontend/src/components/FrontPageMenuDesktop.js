import React, { useState, useContext } from 'react';
import {Alert , Button, Form, Input, FormGroup } from 'reactstrap';
import Select from 'react-select';
import moment from 'moment'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { CityContext } from '../contexts/CityContextProvider'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import sv from "date-fns/locale/sv"; // the locale you want
registerLocale("sv", sv); // register it with the name you want


const FrontPageMenuDesktop = () => {
  const today = new Date()
  const tomorrow = today.setDate(today.getDate()+1)

  const { setResidences } = useContext(ResidenceContext)

  //const [region, setRegion] = useState('')
  //const [city, setCity] = useState('')
  const [start_date, setStartDate] = useState(new Date())
  const [end_date, setEndDate] = useState(tomorrow)
  const [count_person, setCountPerson] = useState('')
  const [city_id, setCityId] = useState('');
  const [message, setMessage] = useState();

  const { cities } = useContext(CityContext)

  var someArrayOfStrings =[];
  someArrayOfStrings.map(opt => ({
      label: opt,
      value: opt
  }));
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  const doSearch = async() => {
    const datas = {
                  //region,
                  //city,
                  city_id,
                  start_date: moment(start_date).format('X'),
                  end_date: moment(end_date).format('X'),
                  count_person
                  }
    console.log(datas.city_id+'-'+datas.start_date+'-'+datas.end_date+' person:'+datas.count_person);

    let res;
    if (datas.start_date > datas.end_date){
      setMessage('Felaktigt till datum.');
      setVisible(true);
      return
    }
    else if((!datas.city_id) || (!datas.start_date) || (!datas.end_date) || (!datas.count_person)) {
      res = await fetch('/api/clearbnb/residences')
      setMessage('Alla fält är obligatoriska!');
      setVisible(true);
    } else {
      res = await fetch('/api/clearbnb/residenceSearch/'+datas.city_id+'/'+datas.start_date+'/'
                                                        +datas.end_date+'/'+datas.count_person+'')
    }
    res = await res.json()
    setResidences(res)
  }
  const CitiesSelect = () => {
    return (
      <div className="reactSelectDd">
        <Select options={cities} onChange = {opt => setCityId(opt.value)} placeholder="Vart vill du åka?" isSearchable required />
      </div>
      )
  }
 
  return (
    <div className="d-flex justify-content-center">
      <Form className="bg-secondary rounded p-1 form-inline" style={{marginTop: '5%'}}>
          <FormGroup>
            {CitiesSelect()}
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <DatePicker
              className="p-2 rounded-lg"
              locale="sv"
              selected={start_date}
              onChange={date=>setStartDate(date)}
              dateFormat='MM/dd/yyyy'
              minDate={new Date()}
              isClearable
              showWeekNumbers
              showYearDropdown
              scrolllableMonthYearDropdown
              placeholderText=""
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <DatePicker
              className="p-2 rounded"
              locale="sv"
              style={{ padding:'2px !important'}}
              selected={end_date}
              onChange={date=>setEndDate(date)}
              dateFormat='MM/dd/yyyy'
              minDate={tomorrow}
              isClearable
              showWeekNumbers
              showYearDropdown
              scrolllableMonthYearDropdown
              placeholderText=""
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
              required
              value={count_person}
              onChange={e=>setCountPerson(e.target.value)} 
              type="text" name="count_person" 
              id="count_person" 
              placeholder="Hur många gäster?"
             />
          </FormGroup>
          <Button onClick={doSearch} color="info" size="lg" >Sök</Button>          
          <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={visible} toggle={onDismiss}>{message}</Alert>
      </Form>
    </div>
  )
}

export default FrontPageMenuDesktop