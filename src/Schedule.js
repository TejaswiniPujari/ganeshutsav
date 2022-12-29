import React, { useState } from "react";
import Round1Round2Tab from "./Round1Round2Tab";
import ScheduleBanner from "./ScheduleBanner";

const Schedule = () => {
    const [selectedRoundNumber, setSelectedRoundNumber] = useState(1);

    const scheduleRound1 = [{
        date: '01-09-2022',
        name1: 'Round1',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    },
    {
        date: '01-09-2022',
        name1: 'sïñgër diksha 🎧🎤',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    },
    {
        date: '01-09-2022',
        name1: 'sïñgër diksha 🎧🎤',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    },
    {
        date: '01-09-2022',
        name1: 'sïñgër diksha 🎧🎤',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    },
    {
        date: '01-09-2022',
        name1: 'sïñgër diksha 🎧🎤',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    }]
    const scheduleRound2= [{
        date: '01-09-2022',
        name1: 'Round2',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    },
    {
        date: '01-09-2022',
        name1: 'sïñgër diksha 🎧🎤',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    },
    {
        date: '01-09-2022',
        name1: 'sïñgër diksha 🎧🎤',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    },
    {
        date: '01-09-2022',
        name1: 'sïñgër diksha 🎧🎤',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    },
    {
        date: '01-09-2022',
        name1: 'sïñgër diksha 🎧🎤',
        link1: 'http://www.kktv1.com/m/?roomid=610655733',
        id1: '610655733',
        name2: '🦋🐼𝐕𝐢𝐬𝐡𝐡🖤',
        link2: 'http://www.kktv1.com/m/?roomid=602610147',
        id2: '602610147',
        time: '19:30-19:45 IST'
    }]

    return (<div>
        <br />
        <Round1Round2Tab selectedRoundNumber={(number) => setSelectedRoundNumber(number)} />
        {selectedRoundNumber === 1 && <ScheduleBanner data={scheduleRound1}/>}
        {selectedRoundNumber === 2 && <ScheduleBanner data={scheduleRound2}/>}
    </div>)
}
export default Schedule;