import React, { useState } from "react";
import userSelectedBtn from './img/UserButtonSelect.png';
import talentUnselectedBtn from './img/TalentButtonDeselect.png'
import userUnselectedBtn from './img/UserButtonDeselect.png';
import talentSelectedBtn from './img/TalentButtonSelect.png'
import './style.css'

const UserTalentTab = ({ setSelectedTab }) => {
    const [userBtnImg, setUserBtnImg] = useState(userSelectedBtn);
    const [talentBtnImg, setTalentBtnImg] = useState(talentUnselectedBtn);

    const setUserMode = () => {
        setUserBtnImg(userSelectedBtn);
        setTalentBtnImg(talentUnselectedBtn);
        setSelectedTab('user');
    }

    const setTalentMode = () => {
        setUserBtnImg(userUnselectedBtn);
        setTalentBtnImg(talentSelectedBtn);
        setSelectedTab('talent');
    }

    return (
        <div className="user-talent-tab">
            <button onClick={setUserMode}>
                <img
                    src={userBtnImg}
                    alt="car"
                    width="100%"
                    id='user'
                />
            </button>
            <button onClick={setTalentMode}>
                <img
                    src={talentBtnImg}
                    alt="car"
                    width="100%"
                    id='talent'
                />
            </button>
        </div>)
}
export default UserTalentTab;