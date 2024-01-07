import React from "react";
import "./styles.css";
import Button from '@mui/material/Button';
import InsightsIcon from '@mui/icons-material/Insights';

const ButtonAnalyze= () => {
    return <Button variant="contained" className="button-ll">Analyze <InsightsIcon /></Button>
}

export default ButtonAnalyze;