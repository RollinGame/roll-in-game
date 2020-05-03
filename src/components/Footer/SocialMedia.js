import React from 'react';

const SocialMedia = () => {
    return (
        <div class="social-media">
            <div class="rolling-logo">
                <img src={require(`../../images/wood.svg`)} />
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