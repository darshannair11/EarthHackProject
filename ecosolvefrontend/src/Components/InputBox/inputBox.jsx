import React from "react";
import "./styles.css";
import InputContainer from "./InputContainer";
import ButtonAnalyze from "./ButtonAnalyze";

const InputBox= ({AnalyzeButtonClick,analyzed}) => {
    const [doc,setDoc]=React.useState({});

    function ChangeTextState(e){
        setDoc((prevDoc) => {
            return {...prevDoc,[e.target.name]:e.target.value};
        })
    }

    return <div className="input-box">
        <InputContainer doc={doc} onChange={ChangeTextState} Title={"Problem Statment"} Label={"Enter your Problem Statment"}/>
        <ButtonAnalyze analyzed={analyzed} setDoc={setDoc} doc={doc} onClick={AnalyzeButtonClick}/>
        <InputContainer doc={doc} onChange={ChangeTextState} Title={"Suggested Solution"} Label={"Enter your Solution"}/>
    </div>
};

export default InputBox;