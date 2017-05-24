import React from 'react';

import Menu from './Menu.component';

export default class Header extends React.Component {

	render() {
		return (
			<div className="heading">
				<p className="heading-text">Twitch Streamers</p>
				<div className="heading-menu pull-right">
					<Menu />
				</div>
			</div>
		);
	}

}