import React from 'react'
import '../styles/Buttons.css'

function Buttons(props){
    return(
        <div id="buttons-container">
            <div id='sub-container1'>
                <button id='clear' value='clear' onClick={props.onClick}>Clear</button>
            </div>
            <div id='sub-container2'>   
                <button id='one' value='1' onClick={props.onClick}>1</button>
                <button id='two' value='2' onClick={props.onClick}>2</button>
                <button id='three' value='3' onClick={props.onClick}>3</button>
                <button id='multiply' value='*' onClick={props.onClick}>x</button>
                <button id='four' value='4' onClick={props.onClick}>4</button>
                <button id='five' value='5' onClick={props.onClick}>5</button>
                <button id='six' value='6' onClick={props.onClick}>6</button>
                <button id='subtract' value='-' onClick={props.onClick}>-</button>
                <button id='seven' value='7' onClick={props.onClick}>7</button>
                <button id='eight' value='8' onClick={props.onClick}>8</button>
                <button id='nine'value='9' onClick={props.onClick}>9</button>
                <button id='add' value='+' onClick={props.onClick}>+</button>
                <button id='zero' value='0' onClick={props.onClick}>0</button>
                <button id='decimal' value='.' onClick={props.onClick}>.</button>
                <button id='divide' value='/' onClick={props.onClick}>/</button>
                <button id='equals' value='=' onClick={props.onClick}>=</button>
            </div>
        </div>
    )
}

export default Buttons