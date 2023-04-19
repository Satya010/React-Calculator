import React from 'react';
import {useState} from 'react';
import './app.css';
// import math from 'math';

const App =()=>{
    const [result, setResult]= useState("");

    const Click =(event)=>{
        setResult(result+(event.target.name));
    }

    const Clear =()=>{
        setResult("");
    }

    const Del = () => {
        setResult(result.slice(0, -1));
    }
    const Answar = () => {
        try {
            setResult(eval(result).toString());
            // setResult(math.calculate(result).toString());
        } catch(err) {
            setResult("Error")
            // setResult((prevState) => ({ 
            //     result: prevState.result
            //  }))
        }        
    }

    return(
        <div className='container-box'>
            <form>
                <input type="text" value={result}/>
            </form>

            <div className='input-button'>
                <button name='1' onClick={Click}>1</button>
                <button name='2' onClick={Click}>2</button>
                <button name='3' onClick={Click}>3</button>
                <button className='special-button' name='+' onClick={Click}>+</button>
                <button name='4' onClick={Click}>4</button>
                <button name='5' onClick={Click}>5</button>
                <button name='6' onClick={Click}>6</button>
                <button className='special-button' name='-' onClick={Click}>-</button>
                <button name='7' onClick={Click}>7</button>
                <button name='8' onClick={Click}>8</button>
                <button name='9' onClick={Click}>9</button>
                <button className='special-button' name='*' onClick={Click}>*</button>
                <button name='0' onClick={Click}>0</button>
                <button name='.' onClick={Click}>.</button>
                <button name='%' className='special-button' onClick={Click}>%</button>
                <button className='special-button' name='/' onClick={Click}>/</button>
                <button className='special-button' onClick={Clear} id='Clear'>Clear</button>
                <button className='special-button' onClick={Del} id='Delete'>Del</button>
                <button className='special-button' onClick={Answar} id='result'>Result</button>
            </div>
        </div>
    );
}
export default App;