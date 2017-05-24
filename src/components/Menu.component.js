import React from 'react';

export default class Menu extends React.Component {

	render() {
		return (
			<div className="menu">
				<div className="row">
					<div className="col-xs-12">
						<Slide title="all" 
							onClick={this.props.onClickHandler}
							activeMenu={this.props.activeMenu}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<Slide title="online" 
							onClick={this.props.onClickHandler} 
							activeMenu={this.props.activeMenu}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<Slide title="offline" 
							onClick={this.props.onClickHandler} 
							activeMenu={this.props.activeMenu}
						/>
					</div>
				</div>
			</div>
		);
	}

}

const Slide = ({ title, onClick, activeMenu }) => (
	<div className={`slide ${ activeMenu === title ? 'active' : '' }`} 
			onClick={() => onClick(title)}>
		<div className="row">
			<div className="col-xs-1 col-xs-offset-0">
				<div className={`slide-icon ${title}`} />
			</div>
			<div className="col-xs-8 col-xs-offset-0">
				<div className="slide-text">
					<p>{title}</p>
				</div>
			</div>
		</div>
	</div>
);