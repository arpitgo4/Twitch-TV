import React from 'react';

export default class ChannelRow extends React.Component {

	render() {
		return (
			<div className="channel-row">
				<div className="row text-center">
					<div className="col-xs-1 col-xs-offset-1">
						<img src={this.props.logo} 
							className="img-responsive img-circle channel-img" />
					</div>
					<div className="col-xs-3 col-xs-offset-0">
						<p className="channel-name" onClick={((url) => () => this._openUrl(url))(this.props.url)}>{this.props.name}</p>
					</div>
					<div className="col-xs-7 col-xs-offset-0">
						<p className="channel-status">{this.props.status}</p>
					</div>
				</div>
			</div>
		);
	}

	_openUrl(url) {
		window.open(url, '_blank');
	}

}