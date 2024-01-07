import React from "react";
import "./styles.css";
import TextField from '@mui/material/TextField';

const InputContainer= ({Title,Label}) => {
    return <div className="input-container">
        <p className="input-header">{Title}</p>
        <TextField
          id="filled-textarea"
          label={Label}
          multiline
          rows={4}
          className="input-text"
        />
    </div>
};

export default InputContainer;