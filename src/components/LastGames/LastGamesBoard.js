import React, { useState, useEffect } from 'react';
import { LastGamesAvatarsData } from '../../data/LastGames';
import LastGamesAvatar from './LastGamesAvatar';
import DashboardList from './DashboardList';
import LastGamesInfo from './LastGamesInfo';
import io from 'socket.io-client';

const socket = io('http://localhost:2325');

const updateLogs = cb => {
	socket.on('newLogAdded', log => {
		cb(log);
	});
};

const LastGamesBoard = () => {
	const [isActive, setIsActive] = useState('wheel');
	const [listData, setListData] = useState([]);
	const [allLogs, setAllLogs] = useState([]);

	// Handle clicking of avatars (styling and data changes)
	const handleIsActive = avatarName => {
		setIsActive(avatarName);
		setListData(allLogs.filter(logItem => logItem.game === avatarName));
  };
  
  //update the listData each time a new log is added.
  useEffect(() => {
    setListData(allLogs.filter(logItem => logItem.game === isActive))
  }, [allLogs])

	// Load the Wheel data on initial load of the page
	useEffect(() => {
		socket.on('initialLogs', initialLogs => {
			console.log('initial logs received from server', initialLogs);
			setAllLogs(initialLogs);
			setListData(initialLogs.filter(logItem => logItem.game === isActive));
		});

    // Register event for real-time dashboard updating.
		updateLogs(log => {
			setAllLogs(prevLogs => [log, ...prevLogs ]);
		});
	}, []);

	return (
		<div class="last-games__wrapper">
			<div class="dashboard__container">
				<div class="dashboard__avatars">
					{LastGamesAvatarsData.map((avatar, index) => (
						<LastGamesAvatar
							setIsActive={handleIsActive}
							key={index}
							image={avatar.image}
							avatarName={avatar.name}
							isActive={isActive}
						/>
					))}
				</div>
				<DashboardList listData={listData} />
			</div>
			<LastGamesInfo />
		</div>
	);
};

export default LastGamesBoard;
