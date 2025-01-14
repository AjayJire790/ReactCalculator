// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleEqual = () => {
        try {
            setResult(eval(input));
        } catch (e) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button className="operator largeBtn" onClick={handleClear}>C</button>
                <button className="operator" onClick={() => handleClick('+')}>+</button>
                <button className="operator" onClick={() => handleClick('-')}>-</button>

                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button className="operator" onClick={() => handleClick('*')}>*</button>

                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button className="operator" onClick={() => handleClick('%')}>%</button>

                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button className="operator" onClick={() => handleClick('/')}>/</button>

                <button onClick={() => handleClick('0')}>0</button>
                <button className="operator" onClick={() => handleClick('.')}>.</button>

                <button className="operator largeBtn" onClick={handleEqual}>=</button>
            </div>
        </div >
    );
};

export default Calculator;
