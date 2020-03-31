import React, {useContext} from 'react';
import FrontPageMenuMobile from '../components/FrontPageMenuMobile.js';
import FrontPageMenuDesktop from '../components/FrontPageMenuDesktop';
import {ResidenceContext} from '../contexts/ResidenceContextProvider';
import {CityContext} from '../contexts/CityContextProvider';

const Home = () => {
  const {residences} = useContext(ResidenceContext)
  // const residence = residences.map(r => r.city)
  console.log("reading from home", residences);

  const citiesInfo = useContext(CityContext)
  console.log(citiesInfo);

  return (
    <div className="frontpage-splash">
      <div className="d-lg-none"> {/*MOBILE-TABLET MODE */}
        <FrontPageMenuMobile />
      </div>
      <div className="d-none d-lg-block"> {/*DESKTOP MODE */}
        <FrontPageMenuDesktop />
      </div>
    </div>
  )
}

export default Home;