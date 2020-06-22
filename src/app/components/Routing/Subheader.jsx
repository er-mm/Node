import React from "react";
import { Link } from "react-router-dom";

export default class Subheader extends React.Component {
	render() {
		const { headerFor } = this.props;
		return (
			<div className="container" align="center">
				<table>
					<tbody>
						<tr>
							<td><Link to={`/${headerFor}/${headerFor}1`} className="btn btn-primary">{`First ${headerFor} App`}</Link></td>
							<td> <Link to={`/${headerFor}/${headerFor}2`} className="btn btn-primary">{`${headerFor} 2`}</Link></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	};
}