import React from 'react';

import Header from './Header.component';
import Footer from './Footer.component';
import ChannelList from './ChannelList.component';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			channels
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="center-block">
					<div className="row">
						<div className="col-xs-6 col-xs-offset-3">
							<Header />
						</div>
					</div>	
					<div className="row">
						<div className="col-xs-6 col-xs-offset-3">
							<ChannelList channelList={this.state.channels} />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6 col-xs-offset-3">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		);
	}

}

const channels = [
	{ id: 1, logo: 'https://avatars2.githubusercontent.com/u/9892522?v=3&s=400', name: 'FreeCodeCamp', status: 'Offline'},
	{ id: 2, logo: 'https://avatars2.githubusercontent.com/u/9892522?v=3&s=400', name: 'Test_channel', status: 'Offline'},
	{ id: 3, logo: 'https://avatars2.githubusercontent.com/u/9892522?v=3&s=400', name: 'ESL_SC2', status: 'Offline'},
];