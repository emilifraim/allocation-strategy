import React, { Component } from 'react';

import TableItem from './TableItem';

export class TableStrategy extends Component {
	render() {
		const { allocationStrategyData } = this.props;
		let formContnent = null;
		if (allocationStrategyData !== null || allocationStrategyData.length !== 0) {
			formContnent = allocationStrategyData.map((data) => (
				<TableItem key={data.id} data={data} onChangeCap={this.props.onChangeCap} />
			));
		}
		return (
			<div className="table_listing">
				<div className="custom-table">
					<div className="custom-table-heading">
						<span className="index-credit">Index crediting strategies</span>
					</div>
					<div className="custom-table-heading">
						<span className="year-P2P">1-Year P2P</span>
					</div>

					{formContnent}
				</div>
			</div>
		);
	}
}

export default TableStrategy;
