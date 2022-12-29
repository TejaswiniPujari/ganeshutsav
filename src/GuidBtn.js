import React, { useState } from "react";
import guidBtn from './img/GuideButton.png';
import closeBtn from './img/Guide Close Button.png';
import guidText from './img/Guide Name Unit.png';
import './style.css';

const GuidBtn = () => {
    const [visible, setVisible] = useState(false);

    const showGuidline = () => {
        setVisible(true);
        document.getElementById('main').classList.add('main');
    }
    const hideGuidline = () => {
        setVisible(false);
        document.getElementById('main').classList.remove('main');
    }
    return (
        <div>
            <div className='guid-btn'>
                <button onClick={showGuidline}>
                    <img src={guidBtn} alt="car" width="100%" />
                </button>
            </div>
            {visible &&
                <div className="guidline">
                    <div class="guide-text">
                        <img src={guidText} alt="" width="100%" />
                    </div>
                    <div className="close">
                        <button onClick={hideGuidline} className="close-btn">
                            <img src={closeBtn} alt="car" width="100%" />
                        </button>
                    </div>
                    <div className="giuidline-bg">
                        <div className="rules">
                            <ul>
                                <li>Top 28 Talents have to register their ids with SK employees to participate in this event.</li>
                                <li>PK Battle will be held on this Ganesh Chaturthi Festival season.</li>
                                <li>There will be 5 min Official Pk match will be scheduled, talents need to come live before 15 min of the PK Battle.</li>
                                <li>Top 16 talent that earns maximum beans will qualified for the 2nd round i.e Final.</li>
                                <li>Talents will be ranked on the leader board according to the number of gems they receive in each round.</li>
                                <li>Users will be ranked according to their spending on each round of the tournament.</li>
                                <li>The winner of this tournament will be decided based on the gems they receive in the Final Round</li>
                                <li>The maximum spender will be the winner of the tournament.</li>
                                <li>ROUND 1 on 1st Sep-Total of 28 talents will be participating </li>
                                <li>ROUND 2 (Final) on 03rd Sep-Top 16 Talents with maximum beans earned will qualify for round 2 Battle.</li>
                                <li>Top Talent who receives 3 million or more beans in both rounds of the event will receive Rs 1500 as AMAZON E gift cards</li>
                                <li>If more than one talent meets the criteria, the top-earning talent will receive the given vouchers</li>
                                <li>Top Gifter and Top winner Talent of Round 2 and their Agency name will be featured in the Banner for 3 days + mentioned in instagram from Sk official A/C</li>
                                <li>Top 5 Talents and Users from round 2 will be mentioned on the web page.</li>
                            </ul>
                        </div>
                    </div>
                </div>}
        </div>)
}
export default GuidBtn;