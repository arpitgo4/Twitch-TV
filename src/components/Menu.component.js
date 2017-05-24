import React from 'react';

export default class Menu extends React.Component {

	render() {
		return (
			<div className="menu">
				<div className="row">
					<div className="col-xs-12">
						<Slide title="all" />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<Slide title="online" />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<Slide title="offline" />
					</div>
				</div>
			</div>
		);
	}

}

const Slide = ({ title }) => (
	<div className="slide">
		<div className="row">
			<div className="col-xs-3 col-xs-offset-1">
				<div className={`slide-icon ${title}`} />
			</div>
			<div className="col-xs-7 col-xs-offset-1">
				<div className="slide-text">
					<p>{title}</p>
				</div>
			</div>
		</div>
	</div>
);