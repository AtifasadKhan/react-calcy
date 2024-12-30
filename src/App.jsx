import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [num, setNum] = useState(" ")
    const handleCalculate = (val) => {
        if (val === '=') {
            setNum(eval(num).toString())
        } else if (val === 'C') {
            setNum(" ")
        } else {
            setNum(num + val)
        }
    }
    return (
        <>
            <div>
                <div className="display-item">
                    {num}
                </div>
                <div className="calc">
                    {["7", '8', '9', '4', '5', '6', '1', '2', '3', '/', '*', '-', '+', 'C', '='].map((item, index) => (
                        <div className="btn" key={index}>
                            <button onClick={() => handleCalculate(item)}> {item}</button>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default App
