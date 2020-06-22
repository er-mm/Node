import React from "react";
import Subheader from './Subheader';
import FirstNode from './FirstNode';
import SecondNode from './SecondNode';
import { Route } from "react-router-dom";

export default class HowToNode extends React.Component {
	render() {
		const headerFor = 'node';
		return (
			<div className="container">
				<Subheader headerFor={headerFor} />
				<br />
					Click on the above buttons to check Node Routing
				<div>
					<Route path={`/${headerFor}/${headerFor}1`} component={FirstNode} />
					<Route path={`/${headerFor}/${headerFor}2`} component={SecondNode} />
				</div>
			</div>
		);
	}
}