import React, { useState } from "react";
import UserTalentTab from "./UserTalentTab";
import Round1Round2Tab from "./Round1Round2Tab";
import LeaderBoardBanner from "./LeaderBoardBanner";
import talent1Round1 from './img/Talent/1st Talent.png';
import talent2Round1 from './img/Talent/2nd talent.png';
import talent3Round1 from './img/Talent/3rd talent.png';
import talent1Round2 from './img/Talent/1st Talent.png';
import talent2Round2 from './img/Talent/2nd talent.png';
import talent3Round2 from './img/Talent/3rd talent.png';
import user1Round1 from './img/User/1st user.png';
import user2Round1 from './img/User/2nd user.png';
import user3Round1 from './img/User/3rd user.png';
import user1Round2 from './img/User/1st user.png';
import user2Round2 from './img/User/2nd user.png';
import user3Round2 from './img/User/3rd user.png';
import './style.css'

const LeaderBoard = () => {
    const [selectedTab, setSelectedTab] = useState('user');
    const [selectedRoundNumber, setSelectedRoundNumber] = useState(1);

    const talentRound1 = [
        {
            number: '02',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: talent2Round1,
            id: 'u_img_616526524',
            name: `talentRound1`,
            amount: '6,190,010'
        },
        {
            number: '01',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: talent1Round1,
            id: '628607365',
            name: `Minnie\nID:628607365`,
            amount: '10,001,100'
        },
        {
            number: '03',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: talent3Round1,
            id: 'u_img_616526524',
            name: `🦋🐼Vishh🖤\nID:602610147`,
            amount: '3,360,000'
        },
        {
            number: '04',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '05',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '06',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '07',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '08',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '09',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '10',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
    ]
    const talentRound2 = [
        {
            number: '02',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: talent2Round2,
            id: 'u_img_616526524',
            name: `talentRound2`,
            amount: '6,190,010'
        },
        {
            number: '01',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: talent1Round2,
            id: '628607365',
            name: `Minnie\nID:628607365`,
            amount: '10,001,100'
        },
        {
            number: '03',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: talent3Round2,
            id: 'u_img_616526524',
            name: `🦋🐼Vishh🖤\nID:602610147`,
            amount: '3,360,000'
        },
        {
            number: '04',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '05',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '06',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '07',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '08',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '09',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '10',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
    ]
    const userRound1 = [
        {
            number: '02',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: user2Round1,
            id: 'u_img_616526524',
            name: `userRound1`,
            amount: '6,190,010'
        },
        {
            number: '01',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: user1Round1,
            id: '628607365',
            name: `Minnie\nID:628607365`,
            amount: '10,001,100'
        },
        {
            number: '03',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: user3Round1,
            id: 'u_img_616526524',
            name: `🦋🐼Vishh🖤\nID:602610147`,
            amount: '3,360,000'
        },
        {
            number: '04',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '05',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '06',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '07',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '08',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '09',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '10',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
    ]
    const userRound2 = [
        {
            number: '02',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: user2Round2,
            id: 'u_img_616526524',
            name: `userRound2`,
            amount: '6,190,010'
        },
        {
            number: '01',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: user1Round2,
            id: '628607365',
            name: `Minnie\nID:628607365`,
            amount: '10,001,100'
        },
        {
            number: '03',
            link: 'http://www.kktv1.com/m/?roomid=578911093',
            src: user3Round2,
            id: 'u_img_616526524',
            name: `🦋🐼Vishh🖤\nID:602610147`,
            amount: '3,360,000'
        },
        {
            number: '04',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '05',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '06',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '07',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '08',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '09',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
        {
            number: '10',
            link: 'http://www.kktv1.com/m/?roomid=616526524',
            src: 'https://kkimg.kktv9.com/image/560691238_0_1602864350954.png!128',
            id: 'u_img_616526524',
            name: 'Mera Deewana ❤️❤️',
            amount: '571,000'
        },
    ]
    return (<div>
        <br />
        <UserTalentTab setSelectedTab={(tabName) => setSelectedTab(tabName)} id="leaderboard" />
        <Round1Round2Tab selectedRoundNumber={(number) => setSelectedRoundNumber(number)} />
        {selectedTab === 'talent' && selectedRoundNumber === 1 && <LeaderBoardBanner data={talentRound1} />}
        {selectedTab === 'talent' && selectedRoundNumber === 2 && <LeaderBoardBanner data={talentRound2} />}
        {selectedTab === 'user' && selectedRoundNumber === 1 && <LeaderBoardBanner data={userRound1} />}
        {selectedTab === 'user' && selectedRoundNumber === 2 && <LeaderBoardBanner data={userRound2} />}
    </div>)
}
export default LeaderBoard;