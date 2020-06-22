import React from "react";
import Subheader from './Subheader';
import FirstNode from './FirstNode';
import SecondNode from './SecondNode';
import { Route } from "react-router-dom";

export default class HowToNode extends React.Component {
	render() {
		const headerFor = 'node';
		const path = window.location.pathname;
		const basePath = path.substring(0, path.lastIndexOf('/'));
		return (
			<div className="container">
				<Subheader headerFor={headerFor}/>
				<br />
					Click on the above buttons to check Node Routing
				<div>
					<Route path={`${basePath}/${headerFor}1`} component={FirstNode} />
					<Route path={`${basePath}/${headerFor}2`} component={SecondNode} />
				</div>
			</div>
		);
	}
}