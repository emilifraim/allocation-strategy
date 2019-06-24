import React, { Component } from 'react';
import InputTextField from './common/InputTextField';

export class ConfirmationArea extends Component {
	render() {
		const { totalAllocation } = this.props;
		return (
			<div className="confirmation_area">
				<div className="form-group">
					<InputTextField
						type="number"
						name="total_allocation"
						value={totalAllocation}
						onChange={(e) => this.props.onChange(e)}
						disabled={true}
						className={totalAllocation === 100 ? 'valid' : 'in-invalid '}
					/>

					<label className="total-label" htmlFor="total_allocation">
						total allocation
					</label>
				</div>

				<div>
					<button
						className="btn btn-primary"
						onClick={this.props.handleSubmitConfirm}
						disabled={totalAllocation === 100 ? false : true}
					>
						Confirm
					</button>
					<button className="btn btn-invisible" onClick={this.props.handleResetData}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}

export default ConfirmationArea;
