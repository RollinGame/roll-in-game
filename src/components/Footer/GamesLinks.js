import React from 'react';

const GamesLinks = () => {
    return (
        <div class="game-links">
            <div class="game-link">
                <div class="game-avatar">
                    <img src={require(`../../images/wheel-avatar.svg`)} />
                </div>
                <div class="game-text">
                    <img src={require(`../../images/wood.svg`)} />
                </div>
            </div>
            <div class="game-link">
                <div class="game-avatar">
                    <img src={require(`../../images/dice-avatar.svg`)} />
                </div>
                <div class="game-text">
                    <img src={require(`../../images/wood.svg`)} />
                </div>
            </div>
            <div class="game-link">
                <div class="game-avatar">
                    <img src={require(`../../images/dice-avatar.svg`)} />
                </div>
                <div class="game-text">
                    <img src={require(`../../images/wood.svg`)} />
                </div>
            </div>
        </div>
    )
}

export default GamesLinks