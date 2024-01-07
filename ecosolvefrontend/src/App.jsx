import React from "react";
import "./styles.css";
import NavBarComp from "./Components/NavBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBox from "./Components/InputBox/inputBox";
import Divider from '@mui/material/Divider';
import MetricTemplate from "./Components/MetricTemplate/MetricTemplate";


const App=() => {
    return <>
    <NavBarComp />
    <InputBox />
    <Divider variant="middle" component="li" />
    <MetricTemplate />
    </>
};

export default App;