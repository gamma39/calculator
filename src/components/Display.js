import React from 'react';
import '../styles/Display.css'
function Display(props){
    return(
        <div id='display'>
            
                {props.value}
            
                
        </div>
    )
}

export default Display