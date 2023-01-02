import React, { useState } from "react";
import eventTitle from './img/eventRewardTitle.png';
import audioFrame from './img/audioRoom.png';
import profileFrame from './img/furyProfileFrame.png';
import rightArrow from './img/right.png';
import leftArrow from './img/left.png';
import './style/style.css'

const RewardBannerRound1 = () => {
    const [slideNumber, setSlidNumber] = useState(0);
    const rewardTitle = {
        0: 'Target:05 Million & Above Gems',
        1: 'Target:03-05 Million Gems',
        2: 'Target:01-03 Million Gems',
        3: 'Target:500K–1 Million Gems'
    }

    const rewardDescription = {
        0: '10 Days Celebration Audio Room Theme + Fury Profile Frame',
        1: '5 Days Celebration Audio Room theme + Fury Profile Frame',
        2: '3 Days Celebration Audio Room theme',
        3: '1 Day Celebration Audio Room theme'
    }
    const onLeftClick = () => {
        if (slideNumber > 0)
            setSlidNumber(slideNumber - 1);
    }

    const onRightClick = () => {
        if (slideNumber < 3)
            setSlidNumber(slideNumber + 1);
    }

    return (<div className="reward">
        <div className="eventTitle">
            <img src={eventTitle} alt="" width="100%" />
        </div>
        <div className="rewardTitle">
            {rewardTitle[slideNumber]}
        </div>
        <div className="frame-collection">
            <button onClick={onLeftClick}>
                <img src={leftArrow} alt="" width="100%" />
            </button>
            {slideNumber < 2 &&
                <div className="col2">
                    <div className="frame">
                        <img src={audioFrame} alt="" width="100%" />
                    </div>
                    <div className="frame">
                        <img src={profileFrame} alt="" width="100%" />
                    </div>
                </div>
            }
            {slideNumber > 1 &&
                <div className="col1">
                    <div className="frame">
                        <img src={audioFrame} alt="" width="100%" />
                    </div>
                </div>
            }
            <button onClick={onRightClick}>
                <img src={rightArrow} alt="" width="100%" />
            </button>
        </div>
        <div className="rewardDescription">
            {rewardDescription[slideNumber]}
        </div>
    </div>)
}
export default RewardBannerRound1;