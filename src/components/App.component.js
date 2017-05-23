import React from 'react';

import Header from './Header.component';
import Footer from './Footer.component';

export default class App extends React.Component {

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
							<Footer />
						</div>
					</div>
				</div>
			</div>
		);
	}

}