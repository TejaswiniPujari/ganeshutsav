import React, { useState } from "react";
import eventTitle from './img/eventRewardTitle.png';
import PkSuperstarbadge from './img/PkSuperstarbadge.png';
import AudiothemeofPKSuperStar from './img/AudiothemeofPKSuperStar.png';
import PKsuperstarprofileframe from './img/PKsuperstarprofileframe.png'
import rightArrow from './img/right.png';
import leftArrow from './img/left.png';
import './style/style.css'

const RewardBannerRound2 = () => {
    const [slideNumber, setSlidNumber] = useState(0);
    const rewardTitle = {
        0: 'Target:10 Million & Above Gems target',
        1: 'Target:05- 10 Million Gems target',
        2: 'Target:03- 05 Million Gems target',
        3: 'Target:01- 03 Million Gems target'
    }

    const rewardDescription = {
        0: '15 days PK STAR BADGE + Audio theme of PK combat + PK SUperStar Profile Frame',
        1: '10 days Audio theme of PK combat + PK SUperStar Profile Frame',
        2: '07 days Audio theme of PK combat',
        3: '5 days Audio theme of PK combat'
    }
    const onLeftClick = () => {
        if (slideNumber > 0)
            setSlidNumber(slideNumber - 1);
    }

    const onRightClick = () => {
        if (slideNumber < 3)
            setSlidNumber(slideNumber + 1);
    }

    return (
        <div className="reward">
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

                {slideNumber === 0 &&
                    <div className="col3">
                        <div className="frame">
                            <img src={PkSuperstarbadge} alt="" width="100%" />
                        </div>
                        <div className="frame">
                            <img src={AudiothemeofPKSuperStar} alt="" width="100%" />
                        </div>
                        <div className="frame">
                            <img src={PKsuperstarprofileframe} alt="" width="100%" />
                        </div>
                    </div>
                }
                {slideNumber === 1 &&
                    <div className="col2">
                        <div className="frame">
                            <img src={AudiothemeofPKSuperStar} alt="" width="100%" />
                        </div>
                        <div className="frame">
                            <img src={PKsuperstarprofileframe} alt="" width="100%" />
                        </div>
                    </div>
                }
                {slideNumber > 1 &&
                    <div className="col1">
                        <div className="frame">
                            <img src={AudiothemeofPKSuperStar} alt="" width="100%" />
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
export default RewardBannerRound2;