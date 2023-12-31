import React, { useState } from 'react'

export default function TextForm(props) {


    // this is a function to do letter in upper case 
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to Upper Case","success");
    }

    // this is a function to do letter in lower case 
    const handleLoClick = () => {
        // console.log("upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to Lower Case","success");
    }

    // this is function to copy the  text from text area
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied to ClipBoard","success");

    }

    // this is function to clear the  text from text area
    const handleClear = () => {
        setText("");
        // props.showAlert("Text cleared","success");
    }

    // this is function to remove extra spaces form  the text 
    const RemoveExtraSpaces = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert("Extra spaces has been removed","success");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container1">

                <h2 className="my-3" style={{ color: props.color }}>{props.heading} </h2>

                <div className="form-floating my-3">
                    <textarea style={{ color: props.color }} className={`form-control bg-${props.inputColor} `} value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>

                </div>
                <button type="submit" className={`btn btn-${props.BtnModeColor} my-3  border-${props.BtnBorderColor}`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="submit" className={`btn btn-${props.BtnModeColor} my-3 mx-3 border-${props.BtnBorderColor}`} onClick={handleLoClick}>Convert to LowerCase</button>
                <button type="submit" className={`btn btn-${props.BtnModeColor} my-3 mx-3 border-${props.BtnBorderColor}`} onClick={handleClear}>Clear Entered Text</button>
                <button type="submit" className={`btn btn-${props.BtnModeColor} my-3 mx-3 border-${props.BtnBorderColor}`} onClick={handleCopy}>Copy Entered Text</button>
                <button type="submit" className={`btn btn-${props.BtnModeColor} my-3 mx-3 border-${props.BtnBorderColor}`} onClick={RemoveExtraSpaces}>Remove Spaces</button>

            </div>
            <div className="container2 my-3">
                <h2 style={{ color: props.color }}>Your Text Summary</h2>
                <p style={{ color: props.color }}>{(text.split(" ").filter((element) => { return element.length !== 0 }).length)} words and  {((text.length) - (text.split(" ").length)) + 1} characters</p>

                <p style={{ color: props.color }}>{0.48 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} seconds to read </p>
                <p style={{ color: props.color }}>{0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)}  minuts to read </p>
                <h2 style={{ color: props.color }}>Preview</h2>
                <p style={{ color: props.color }}>{text.length > 0 ? text : "Nothing to Preview  "}</p>

            </div>

        </>
    )
}
