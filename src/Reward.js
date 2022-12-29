import React, { useState } from "react";
import UserTalentTab from "./UserTalentTab";
import Round1Round2Tab from "./Round1Round2Tab";
import RewardBannerRound1 from "./RewardBannerRound1";
import RewardBannerRound2 from "./RewardBannerRound2";
import UserRewards from "./UserRewards";

const Reward = () => {
    const [selectedTab, setSelectedTab] = useState('user');
    const [selectedRoundNumber, setSelectedRoundNumber] = useState(1);

    return (<div>
        <UserTalentTab setSelectedTab={(tabName) => setSelectedTab(tabName)} id="reward" />
        {selectedTab === 'talent' && <Round1Round2Tab selectedRoundNumber={(number) => setSelectedRoundNumber(number)} />}
        {selectedTab === 'talent' && selectedRoundNumber === 1 && <RewardBannerRound1 />}
        {selectedTab === 'talent' && selectedRoundNumber === 2 && <RewardBannerRound2 />}
        {selectedTab === 'user' && <UserRewards />}
    </div>)
}
export default Reward;