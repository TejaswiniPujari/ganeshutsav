
import React, { useState } from "react";
import round1SelectedBtn from './img/Round1ButtonSelect.png';
import round2UnselectedBtn from './img/Round2ButtonDeselect.png'
import round1UnselectedBtn from './img/Round1ButtonDeselect.png';
import round2SelectedBtn from './img/ROUND2BUTTONSELECT.png'
import './style.css'

const Round1Round2Tab = ({ selectedRoundNumber }) => {
    const [round1BtnImg, setRound1BtnImg] = useState(round1SelectedBtn);
    const [round2BtnImg, setRound2BtnImg] = useState(round2UnselectedBtn);

    const setRound1 = () => {
        setRound1BtnImg(round1SelectedBtn);
        setRound2BtnImg(round2UnselectedBtn);
        selectedRoundNumber(1);
    }

    const setRound2 = () => {
        setRound1BtnImg(round1UnselectedBtn);
        setRound2BtnImg(round2SelectedBtn);
        selectedRoundNumber(2);
    }

    return (<div className="round1-round2-tab">
        <button onClick={setRound1}>
            <img src={round1BtnImg} alt="car" width="100%" id='round1' />
        </button>
        <button onClick={setRound2}>
            <img src={round2BtnImg} alt="car" width="100%" id='round2' />
        </button>
    </div>)
}
export default Round1Round2Tab;