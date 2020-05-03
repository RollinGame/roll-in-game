import React from 'react';
import { ReactComponent as Logo } from '../../images/logo_roll-in-game.svg';
const SocialMedia = () => {
    return (
        <div class="social-media">
            <div class="rolling-logo">
                <Logo className='rolling-games-logo' />
            </div>
            <div class="social-links">
                <div class="social-icon">
                    <img src={require(`../../images/instagram.svg`)} />
                </div>
                <div class="social-icon">
                    <img src={require(`../../images/facebook.svg`)} />
                </div>
                <div class="social-icon">
                    <img src={require(`../../images/twitter.svg`)} />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
    )
}

export default SocialMedia