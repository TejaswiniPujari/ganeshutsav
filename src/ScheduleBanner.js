import React from "react";
import eventTitle from './img/scheduleTitle.png';
import vsUnit from './img/Vs-min.png';
import './style.css';

const ScheduleBanner = ({data}) => {

    return (<div className="schedule">
        <div className="eventTitle schedule-title">
            <img src={eventTitle} alt="" width="100%" />
        </div>
        <div className="scheduleTable">
            <table>
                <tbody>
                    <tr className="r1">
                        <th>Date</th>
                        <th>Player1</th>
                        <th><img src={vsUnit} alt="" /></th>
                        <th>Player2</th>
                        <th>Time</th>
                    </tr>
                    {data.map(item =>
                        <tr>
                            <td>{item.date}</td>
                            <td>
                                {item.name1}<br />ID:<a href={item.link1}>{item.id1}</a>
                            </td>
                            <td><img src={vsUnit} alt="" /></td>
                            <td>
                                {item.name2}<br />ID:<a href={item.link2}>{item.id2}</a>
                            </td>
                            <td>{item.time}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>)
}
export default ScheduleBanner;