import React from 'react';

const FooterRaffle = () => {
    return (
        <div class="footer-raffle">
            <h2>Check your luck today</h2>
            <div class="raffle-logo">
                <p> Daily Raffle </p>
            </div>

            <div class='raffle__cta'>
                <button>
                    Bet Now
                <span>
                        <div class='raffle__cta--betsize'>2 ADA</div>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default FooterRaffle