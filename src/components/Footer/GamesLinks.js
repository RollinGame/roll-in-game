import React from 'react';
import { ReactComponent as Logo } from '../../images/logo_roll-in-game.svg';

const GamesLinks = () => {
    return (
        <div class="game-links">
            <div class="game-link">
                <div class="game-avatar">
                    <img src={require(`../../images/wheel-avatar.svg`)} />
                </div>
                <div class="game-text">
                    <Logo className='rolling-games-logo' />
                </div>
            </div>
            <div class="game-link">
                <div class="game-avatar">
                    <img src={require(`../../images/dice-avatar.svg`)} />
                </div>
                <div class="game-text">
                    <Logo className='rolling-games-logo' />
                </div>
            </div>
            <div class="game-link">
                <div class="game-avatar">
                    <img src={require(`../../images/dice-avatar.svg`)} />
                </div>
                <div class="game-text">
                    <Logo className='rolling-games-logo' />
                </div>
            </div>
        </div>
    )
}

export default GamesLinks