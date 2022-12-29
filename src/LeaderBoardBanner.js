import React from "react";
import eventTitle from './img/leaderTitle.png';
import coin from './img/coin.png';
import './style.css';

const ScheduleBannerRound1 = ({ data }) => {
  return (
    <div className="leaderboard">
      <div className="eventTitle leaderboardTitle">
        <img src={eventTitle} alt="" width="100%" />
      </div>
      <div className="top3-winner">
        {data.slice(0, 3).map((item, index) =>
          <div className={`leaderborad-frame top${index + 1}`} >
            <div className="winner-info">
              <div className="winner-frame">
                <a href={item.link}><img src={item.src} alt="img" width="100%" /></a>
              </div>
              <br />
              <div className={`top${index}-description`}>
                {item.name}
                <img src="img/coin.png" alt="" /> {item.amount}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="collection-of-leaderStrip">
        {data.slice(3).map(item =>
          <div className="leaderStrip">
            <div>{item.number}</div>
            <div>
              <a href={item.link}><img src={item.src} id={item.id} alt="" width="100%" className="profile-img" /></a>
            </div>
            <div>
              <span>{item.name}</span>
            </div>
            <div>
              <img src={coin} className="coin-img" />
              {item.amount}
            </div>
          </div>)}
      </div>

    </div>)
}
export default ScheduleBannerRound1;