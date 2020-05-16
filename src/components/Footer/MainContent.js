import React from 'react';
import QuickLinks from './QuickLinks';
import SocialMedia from './SocialMedia';
import GamesLinks from './GamesLinks';
import FooterRaffle from './FooterRaffle';

const MainContent = () => {
    return (
        <div class="mainContent">
            <SocialMedia />
            <QuickLinks />
            <GamesLinks />
            <FooterRaffle />
        </div>
    )
}

export default MainContent