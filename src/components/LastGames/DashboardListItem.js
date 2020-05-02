import React from 'react';

const DashboardListItem = ({ player, alias, amount, time, game }) => {
	return (
		<li>
			<div>{alias || player}</div>
			<div>
				{game && <img src={require(`../../images/twitter.svg`)} />}
				<span>{amount}</span>
			</div>
			<div>{time}</div>
		</li>
	);
};

export default DashboardListItem;
