import React from 'react'

export default function About(props) { 
    let myStyle = {
        color : props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white'
    }
  return (
    <div className='container ms-1 my-1' style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h2>About Us</h2>
        <hr className='hr hr-blurry'/>
        <div class="accordion my-2" id="accordionExample" style={myStyle}>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Good way to analyze the text.</div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Compatible with the browser such as edge, chrome</div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Tech Stack
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Made with React JS, the java script library used for front end development mainly focussed on components based UI</div>
                </div>
            </div>
            </div>
        </div>
  )

}
