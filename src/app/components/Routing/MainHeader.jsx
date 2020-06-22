import React from "react";
import { Link } from "react-router-dom";

export default function MainHeader() {
	return (
		<div className="container" align="center">
			<table>
				<tbody>
					<tr>
						<td><Link to="/route" className="btn btn-primary">How to Route</Link></td>
						<td> <Link to="/node" className="btn btn-primary">Node</Link></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}