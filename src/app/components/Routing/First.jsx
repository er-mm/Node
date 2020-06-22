import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainHeader from './MainHeader';
import HowToRoute from './HowToRoute';
import HowToNode from './HowToNode';

class First extends React.Component {
	render() {
		return (
			<Router>
				<div className="contaner" align="center">
					<MainHeader />
					<br/>
					Click on the above buttons to checkRouting
					<div>
						<Route path="/route" component={HowToRoute}/>
						<Route path="/node" component={HowToNode}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default First;
