import React, { useState } from 'react'
export default function Texts(props) {
    const [textyu, setTextc] = useState("test in you side");
    //let text = setText("text just");
    const handleOnChange = (event) => {
        setTextc(event.target.value);
    }
    const textUpletter = () => {
        let newText = textyu.toUpperCase();
        setTextc(newText);
        //props.showAlert("Converted to uppercase!", "success");
    }
    return (
        <div className="mb-3">
            <h1>{props.headingText}</h1>
            <textarea  className="form-control"    value={textyu} onChange={handleOnChange} rows="8" ></textarea><br />
            <button    className="btn btn-primary" onClick={textUpletter}>Change Text </button>
            <div       className="mb-3" style={{ color: "red" }} >
                <p>Word counting</p>
                <p>{textyu.split(" ").length} Words and {textyu.length} character</p>
            </div>

        </div>
    )
}
