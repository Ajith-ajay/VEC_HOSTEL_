import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HostelHeader from "./Components/HeadHeader.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import StudentLayout from "./Layouts/StudentDashboard.jsx";
import WardenLayout from "./Layouts/WardenDashboard.jsx";
import SuperiorLayout from "./Layouts/SuperiorDashboard.jsx";
import HostelLogin from "./HostelPages/Hostel Login.jsx";
import SecurityLayout from "./Layouts/SecurityDashboard.jsx";
import ForgotPassword from "./HostelPages/ForgetPassword.jsx";


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  padding-top: 6%;
`;

const App = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>

      {/* The rest of the routes */}
      <Router>
        <AppContainer className="App">
          {/* Conditionally render Head and Footer */}
          {/* {window.location.pathname !== "/" && (
            <> */}
              <HostelHeader />
              <MainContentWrapper>
                <Routes>
                  <Route path="/student/*" element={<StudentLayout />} />
                  <Route path="/warden/*" element={<WardenLayout />} />
                  <Route path="/superior/*" element={<SuperiorLayout />} />
                  <Route path="/security/*" element={<SecurityLayout />} />
                  <Route path="/login" element={<HostelLogin/>}/>
                  <Route path="/" element={<HostelLogin/>}/>
                  <Route path="/forget-password" element={<ForgotPassword/>}/>
                </Routes>
              </MainContentWrapper>
            {/* </>
          )} */}
        </AppContainer>
      </Router>
    </>
  );
};

export default App;

