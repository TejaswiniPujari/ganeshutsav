import React, { useEffect, useState } from "react";
import Round1Round2Tab from "./Round1Round2Tab";
import ScheduleBanner from "./ScheduleBanner";
import { fetchData } from './GoogleSheetData';

const Schedule = () => {
    const [selectedRoundNumber, setSelectedRoundNumber] = useState(1);
    const [scheduleRound1, setScheduleRound1] = useState([]);
    const [scheduleRound2, setScheduleRound2] = useState([]);


    useEffect(() => {
        fetchData('A2:H7', (data) => setScheduleRound1(data))
        fetchData('A10:H15', (data) => setScheduleRound2(data));
    }, [])

console.log('schedule')
    return (<div>
        {(scheduleRound1.length || scheduleRound2.length) &&
            <>
                <br />
                <Round1Round2Tab selectedRoundNumber={(number) => setSelectedRoundNumber(number)} round1Disable={!scheduleRound1.length} round2Disable={!scheduleRound2.length} />
                {selectedRoundNumber === 1 && <ScheduleBanner data={scheduleRound1} />}
                {selectedRoundNumber === 2 && <ScheduleBanner data={scheduleRound2} />}
            </>
        }
    </div>)
}
export default Schedule;