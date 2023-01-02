import React, { useState } from "react";
import eventTitle from './img/eventRewardTitle.png';
import first from './img/top3.png';
import second from './img/top2.png';
import third from './img/top1.png';
import firstRank from './img/1st-rank.png';
import secondRank from './img/2nd-rank.png';
import thirdRank from './img/3rd-rank.png';
import fourthRank from './img/4th-rank.png';
import fifthRank from './img/5th-rank.png';

import rightArrow from './img/right.png';
import leftArrow from './img/left.png';
import './style/style.css'

const UserRewards = () => {
    const [slideNumber, setSlidNumber] = useState(0);
    const rankImg = {
        0: firstRank,
        1: secondRank,
        2: thirdRank,
        3: fourthRank,
        4: fifthRank
    }
    const rewardImg = {
        0: first,
        1: second,
        2: third,
        3: third,
        4: third
    }
    const rewardDescription = {
        0: 'Top 1 User receives 25% of total beans pot',
        1: 'Top 1 User receives 20% of total beans pot',
        2: 'Top 1 User receives 15% of total beans pot',
        3: 'Top 1 User receives 10% of total beans pot',
        4: 'Top 5th-10th User receives 5%-10% of total beans pot'
    }
    const onLeftClick = () => {
        if (slideNumber > 0)
            setSlidNumber(slideNumber - 1);
    }

    const onRightClick = () => {
        if (slideNumber < 4)
            setSlidNumber(slideNumber + 1);
    }

    return (<div className="reward">
        <div className="eventTitle">
            <img src={eventTitle} alt="" width="100%" />
        </div>
        <div className="rank-img">
            <img src={rankImg[slideNumber]} alt="" width="100%" />
        </div>
        <div className="frame-collection">
            <button onClick={onLeftClick}>
                <img src={leftArrow} alt="" width="100%" />
            </button>
            <div className="col1">
                <div className="frame">
                    <img src={rewardImg[slideNumber]} alt="" width="100%" />
                </div>
            </div>
            <button onClick={onRightClick}>
                <img src={rightArrow} alt="" width="100%" />
            </button>
        </div>
        <div className="rewardDescription">
            {rewardDescription[slideNumber]}
        </div>
    </div>)
}
export default UserRewards;