import React from "react";
import eventTitle from './img/scheduleTitle.png';
import vsUnit from './img/Vs-min.png';
import './style/style.css';

const ScheduleBanner = ({ data }) => {
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
                            <td>{item.Date}</td>
                            <td>
                                {item.Player1}<br />ID:<a href={item.Link1}>{item.Id1}</a>
                            </td>
                            <td><img src={vsUnit} alt="" /></td>
                            <td>
                                {item.Player2}<br />ID:<a href={item.Link2}>{item.id2}</a>
                            </td>
                            <td>{item.Time}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>)
}
export default ScheduleBanner;