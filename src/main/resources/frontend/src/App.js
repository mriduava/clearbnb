import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyPage from "./pages/MyPage";
import About from "./pages/About";
import Residences from "./pages/Residences";
import ResidencePage from "./pages/ResidencePage";
import NewResidence from "./pages/NewResidence";
import CreateBooking from "./pages/CreateBooking";

import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

import ResidenceContextProvider from "./contexts/ResidenceContextProvider";
import ResidenceConProvider from "./contexts/ResidenceConProvider";
import AddressContextProvider from "./contexts/AddressContextProvider";
import UserContextProvider from "./contexts/UserContextProvider";
import CityContextProvider from "./contexts/CityContextProvider";
import AmenityContextProvider from "./contexts/AmenityContextProvider";
import AmenitiesResidencesIdConProvider from "./contexts/AmenitiesResidencesIdConProvider";
import BookingContextProvider from "./contexts/BookingContextProvider";
import PhotoContextProvider from "./contexts/PhotoContextProvider";
import OwnersResidencesIdConProvider from "./contexts/OwnersResidencesIdConProvider";

const App = () => {
  return (
    <div className="App">
      <ResidenceContextProvider>
        <ResidenceConProvider>
          <AddressContextProvider>
            <CityContextProvider>
              <UserContextProvider>
                <AmenityContextProvider>
                  <AmenitiesResidencesIdConProvider>
                   <BookingContextProvider>
                    <PhotoContextProvider>
                      <OwnersResidencesIdConProvider>
                        <Router>
                          <NavMenu />
                            <div className="content">
                              <Route exact path="/" component={Home} />
                              <Route exact path="/about" component={About} />
                              <Route exact path="/user-login" component={Login} />
                              <Route exact path="/user-register" component={Register} />
                              <Route exact path="/mypage" component={MyPage} />
                              <Route exact path="/residences" component={Residences} />
                              <Route exact path="/new-residence" component={NewResidence} />
                              <Route exact path="/create-booking" component={CreateBooking} />
                              <Route exact path="/residences/:id" children={<ResidencePage />} />
                            </div>
                          <Footer />
                        </Router>
                      </OwnersResidencesIdConProvider>
                    </PhotoContextProvider>
                  </BookingContextProvider>
                </AmenitiesResidencesIdConProvider>
              </AmenityContextProvider>
            </UserContextProvider> 
          </CityContextProvider>
        </AddressContextProvider>
      </ResidenceConProvider>
    </ResidenceContextProvider>
  </div>
  );
}

export default App;
