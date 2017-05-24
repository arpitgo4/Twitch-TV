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
			channels: [],
			activeMenu: 'all'
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="center-block">
					<div className="row">
						<div className="col-xs-6 col-xs-offset-3">
							<Header 
								onMenuClick={this._menuClickHandler.bind(this)}
								activeMenu={this.state.activeMenu}
							/>
						</div>
					</div>	
					<div className="row">
						<div className="col-xs-6 col-xs-offset-3">
							<ChannelList channelList={
								this.state.channels
									.filter(channel => {
										switch(this.state.activeMenu) {
											case 'all': return true; break;
											case 'offline': return channel.status === 'Offline'; break;
											default: return channel.status !== 'Offline';
										}
									})
							} />
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
		this.setState({ ...this.state, activeMenu: slideTitle });
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
						logo: res.body.logo || 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F',
						name: res.body.display_name,
						url: res.body.url,
						status: (status === null || status === undefined) ? 'Offline' : `${status.game}:${status.channel.status}`
					};
					
					this.setState({ ...this.state, channels: [ ...this.state.channels, c ] });
				})
			});	
		});
	}
}