import React from "react";
import "./styles.css";
import InputContainer from "./InputContainer";
import ButtonAnalyze from "./ButtonAnalyze";

const InputBox= () => {
    return <div className="input-box">
        <InputContainer Title={"Problem Statment"} Label={"Enter your Problem Statment"}/>
        <ButtonAnalyze />
        <InputContainer Title={"Suggested Solution"} Label={"Enter your Solution"}/>
    </div>
};

export default InputBox;