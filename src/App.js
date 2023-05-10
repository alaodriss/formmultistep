// import Home from "./page/Home";
// // import styled from "styled-components";
// // const SH = styled.div`
// // background-color: whitesmoke;
// // height: 100vh;
// // width: 100vw;

// // `
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { StateMachineProvider, createStore } from "little-state-machine";

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { StateMachineProvider, createStore } from "little-state-machine";
// import Step1 from "./components/Step_1";
// import Step2 from "./components/Step_2";

// createStore({});

import Step1 from "./components/Step_1";
function App() {
  return (
    <Step1 />
    // <StateMachineProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="" element={<Step1/>} />
    //       <Route path="/step2" element={<Step2/>} />
    //     </Routes>
    //   </BrowserRouter>
    // </StateMachineProvider>
  );
}

export default App;
