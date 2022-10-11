import "./App.css";
import Patient  from "./models/Patient"
import PatientList from "./models/PatientList";
import NavigationBar from "./models/Navigationbar";
import Footer from "./models/Footer";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MyAlert from "./models/MyAlert";
// import { useState } from "react";

function App() {
 

  // let showAlert = (type, message) => {
  //   setAlert({
  //     type: type,
  //     message: message,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000);
  // };

  return (
      <div className="App">
        <Router>
          <NavigationBar />
          {/* <MyAlert /> */}
          <Container>
            <Routes>
              <Route path="/Patient" element={<Patient/>} />
              <Route
                  path="/Patient:/PatientId"
                  element={<Patient />}
              />
              <Route
                  path="/PatientList"
                  element={<PatientList />}
                  
              />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
