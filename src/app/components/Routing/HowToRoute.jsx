import React from "react";
import Subheader from './Subheader';
import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';
import { Route } from "react-router-dom";

export default class HowToRoute extends React.Component {
	render() {
		const headerFor = 'route';
		const path = window.location.pathname;
		const basePath = path.substring(0, path.lastIndexOf('/'));
		return (
			<div className="container">
				<Subheader headerFor={headerFor}/>
				<br />
					Click on the above buttons to check Route Routing
				<div>
					<Route path={`${basePath}/${headerFor}1`} component={FirstRoute} />
					<Route path={`${basePath}/${headerFor}2`} component={SecondRoute} />
				</div>
			</div>
		);
	}
}