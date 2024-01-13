import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const upClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const lowClick =() => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const clearClick = () =>{
        setText("")
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select()
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard","success")
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")
    }
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark'?'grey':'white', color :props.mode === 'dark'?'white':'#042743' }} onChange={handleOnChange} onClick={clearClick} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={upClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={lowClick}>Convert To lowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearClick}>Clear</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     
    </div>
    <div className='container my-4' style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <hr className='hr hr-blurry'></hr>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.length} seconds require to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0?text : "Enter Something in TextArea"}</p>
    </div>
    </>
  )
}
