import React from 'react';

export default class ChannelRow extends React.Component {

	render() {
		return (
			<div className="channel-row">
				<div className="row">
					<div className="col-xs-1 col-xs-offset-1">
						<img className="img-circular channel-img">{this.props.channelImg}</img>
					</div>
					<div className="col-xs-2 col-xs-offset-0">
						<p className="channel-name">{this.props.channelName}</p>
					</div>
					<div className="col-xs-4 col-xs-2">
						<p className="channel-status">{this.props.channelStatus}</p>
					</div>
				</div>
			</div>
		);
	}

}