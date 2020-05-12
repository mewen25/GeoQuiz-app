import React, {useState, useEffect, useRef} from 'react';
import LearnTestModal from "./LearnTestModal"

function LearnSelected(props) {
    //const [quickTest, setQuickTest] = useState(false);
    const [quickTest, setQuickTest] = useState({
        active: false,
        country: {
            correct: false,
            value: "",
            ref: useRef(null)
        },
        capital: {
            correct: false,
            value: "",
            ref: useRef(null)
        }
    });

    useEffect(() => {
        if(quickTest.active){quickTest.country.ref.current.focus();}
    },[quickTest.active])

    useEffect(() => {
        if(quickTest.active){quickTest.capital.ref.current.focus()};
    },[quickTest.country.correct])

    useEffect(() => {
        if(quickTest.active && !quickTest.country.correct){quickTest.country.ref.current.focus();}
    },[quickTest.capital.correct])

    useEffect(() => {
        if(!props.isTest && quickTest.active){
            doReset();
        }
    },[props.isTest])

    const answers = {
        country: props.data.place,
        capital: props.data.capital
    };

    const handleStart = () => {
        props.setTest(true);
        setQuickTest(prevData => ({
            ...prevData, active: true
        }));
    }

    const doReset = () => {
        let countryObj = Object.assign(quickTest.country, {});
        let capitalObj = Object.assign(quickTest.capital, {});
        countryObj["value"] = "";
        countryObj["correct"] = false;
        capitalObj["value"] = "";
        capitalObj["correct"] = false;

        setQuickTest({
            active: false,
            country: countryObj,
            capital: capitalObj
        })
    }

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        let newObj = Object.assign(quickTest[name], {});
        newObj["value"] = value;
        if(checkAnswer(name, value)){
            newObj["correct"] = true;
            newObj["value"] = answers[name];
        }
        setQuickTest(prevData => ({
            ...prevData, [name]: newObj
        }));
    }

    const checkAnswer = (input, value) => {
        console.log(props.data.altNames[input]);
        return value.toLowerCase() === answers[input].toLowerCase() || (props.data.altNames && props.data.altNames[input].includes(value.toLowerCase()));
    }

    return (
        <>
        {!quickTest.active ? <div className="learn-page-selected">
            <div className="learn-selected-country">
                <p>{props.data.place}</p>
                <img src={props.data.img} alt={`${props.data.place}-flag`} />
            </div>
            <div className="learn-selected-capital">
                <p>Capital city: {props.data.capital}</p>
            </div>
            <div className="learn-selected-extras">
                {/* {props.extras} */}
            </div>
            <button onClick={handleStart}>
                Quick Test
            </button>
        </div> : 
        <div className="learn-page-selected" style={{backgroundColor: "#265D8F"}}>
            <div className="learn-selected-country">
                <input className="quickTest-input" placeholder="Country Name" disabled={quickTest.country.correct} value={quickTest.country.value} name="country" onChange={handleInput} ref={quickTest.country.ref} />
                <img src={props.data.img} alt={`${props.data.place}-flag`} />
            </div>
            <div className="learn-selected-capital">
                <input className="quickTest-input" placeholder="Capital Name" disabled={quickTest.capital.correct} value={quickTest.capital.value} name="capital" onChange={handleInput} ref={quickTest.capital.ref} />
            </div>
            <button>
                Check
            </button>
        </div>}
        </>
    )
}

export default LearnSelected;