import React from 'react';

import ChannelRow from './ChannelRow.component';

export default class ChannelList extends React.Component {

	render() {
		return (
			{
				this.props.channelList.map(channel => <ChannelRow key={channel.id} ...channel />)	
			}
		);
	}

}