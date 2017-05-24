import React from 'react';

import Menu from './Menu.component';

export default class Header extends React.Component {

	render() {
		return (
			<div className="heading">
				<div className="row">
					<div className="col-xs-8 col-xs-offset-0">
						<p className="heading-text">Twitch Streamers</p>
					</div>
					<div className="col-xs-4 col-xs-offset-0">
						<div className="heading-menu pull-right">
							<Menu onClickHandler={this.props.onMenuClick} />
						</div>
					</div>
				</div>
			</div>	
		);
	}

}