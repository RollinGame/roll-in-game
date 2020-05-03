import React from 'react';
import QuickLinks from './QuickLinks';
import SocialMedia from './SocialMedia';
import GamesLinks from './GamesLinks';
import FooterRaffle from './FooterRaffle';

const Footer = () => {
    return (
        <div class="footer">
            <SocialMedia />
            <QuickLinks />
            <GamesLinks />
            <FooterRaffle />
        </div>
    )
}

export default Footer