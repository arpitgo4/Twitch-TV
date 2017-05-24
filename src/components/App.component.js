import React from 'react';

import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

import Header from './Header.component';
import Footer from './Footer.component';
import ChannelList from './ChannelList.component';

export default class App extends React.Component {

	TWITCH_API_CHANNEL = 'https://wind-bow.gomix.me/twitch-api/channels/';
	TWITCH_API_STREAM = 'https://wind-bow.gomix.me/twitch-api/streams/';

	CHANNELS = [
		"freecodecamp","test_channel","ESL_SC2"
	];

	constructor() {
		super();
		this.state = {
			channels: []
		};
	}

	render() {
		console.log('channels state', this.state.channels);
		return (
			<div className="container-fluid">
				<div className="center-block">
					<div className="row">
						<div className="col-xs-6 col-xs-offset-3">
							<Header onMenuClick={this._menuClickHandler.bind(this)}/>
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

	_menuClickHandler(slideTitle) {
		console.log('slide title', slideTitle);
	}

	componentDidMount() {
		this.CHANNELS.forEach(channel => {
			superagent
			.get(`${this.TWITCH_API_STREAM}/${channel}`)
			.use(jsonp)
			.end((err, res) => {
				if(err) return;

				const status = res.body.stream;

				superagent
				.get(`${this.TWITCH_API_CHANNEL}/${channel}`)
				.use(jsonp)
				.end((err, res) => {
					if(err) return;

					const c = {
						id: res.body._id,
						logo: res.body.logo,
						name: res.body.name,
						url: res.body.url,
						status: (status === null || status === undefined) ? 'Offline' : 'Online'
					};
					//console.log(c);
					this.setState({ ...this.state, channels: [ ...this.state.channels, c ] });
				})
			});	
		});
	}

}

/*const channels = [
	{ id: 1, logo: 'https://avatars2.githubusercontent.com/u/9892522?v=3&s=400', name: 'FreeCodeCamp', status: 'Offline'},
	{ id: 2, logo: 'https://avatars2.githubusercontent.com/u/9892522?v=3&s=400', name: 'Test_channel', status: 'Offline'},
	{ id: 3, logo: 'https://avatars2.githubusercontent.com/u/9892522?v=3&s=400', name: 'ESL_SC2', status: 'Offline'},
];*/