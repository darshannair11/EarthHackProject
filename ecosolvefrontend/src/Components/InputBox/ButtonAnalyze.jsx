import React from "react";
import "./styles.css";
import Button from '@mui/material/Button';
import InsightsIcon from '@mui/icons-material/Insights';

const ButtonAnalyze= ({analyzed,setDoc,doc,onClick}) => {
    return <Button onClick={() => {
        onClick(doc);
    }} variant="contained" className="button-ll">{analyzed ? <>Reset</> : <>Analyze <InsightsIcon /></>}</Button>
}

export default ButtonAnalyze;