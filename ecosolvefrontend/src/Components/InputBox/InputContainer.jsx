import React from "react";
import "./styles.css";
import TextField from '@mui/material/TextField';

const InputContainer= ({doc,onChange,Title,Label}) => {
    return <div className="input-container">
        <p className="input-header">{Title}</p>
        <TextField
          id="filled-textarea"
          name={Title}
          label={Label}
          multiline
          rows={4}
          value={doc.Title}
          className="input-text"
          onChange={onChange}
        />
    </div>
};

export default InputContainer;