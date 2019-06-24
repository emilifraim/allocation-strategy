import React, { Component } from 'react';
import InputTextField from './common/InputTextField';

export class TableItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		//console.log('********** shouldComponentUpdate *************', nextProps.data.value !== this.props.data.value);
		return nextProps.data.value !== this.props.data.value;
	}
	render() {
		return (
			<React.Fragment key={this.props.data.id}>
				<div className="custom-table-row">{this.props.data.name}</div>
				<div className="custom-table-row">
					<div className="form-group">
						<label htmlFor="cap" className="table-label">
							{(() => <span>{parseFloat(this.props.data.options[0].value).toFixed(2)}</span>)()}
							% Cap
						</label>

						<InputTextField
							key={this.props.data.id}
							type="text"
							pattern={'[0-9]*'}
							name={this.props.data.namefiled}
							value={this.props.data.value}
							placeholder=""
							onChange={(e) => this.props.onChangeCap(e, this.props.data.id)}
							disabled={false}
							min="0"
							max="100"
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default TableItem;
