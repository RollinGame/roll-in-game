import React from 'react';

const DashboardListItem = ({ alias, payout, time, game }) => {
	return (
		<li>
			<div>{alias}</div>
			<div>
				{game && <img src={require(`../../images/twitter.svg`)} />}
				<span>{payout}</span>
			</div>
			<div>{time}</div>
		</li>
	);
};

export default DashboardListItem;
