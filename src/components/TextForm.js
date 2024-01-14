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
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
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
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark'?'#13466e':'white', color :props.mode === 'dark'?'white':'#042743' }} onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={upClick}>Convert To UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={lowClick}>Convert To LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearClick}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     
    </div>
    <div className='container my-4' style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <hr className='hr hr-blurry'></hr>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008 * text.length} seconds require to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0?text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
