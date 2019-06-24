import React, { Component } from 'react';

export class ChargeArea extends Component {
	onChangeChargePeriod = () => {};
	render() {
		return (
			<div className="charge_period">
				<div className="form-group">
					<h4 className="charge-h">surrender charge period</h4>
					<div className="radio-toolbar">
						<input
							type="radio"
							id="radio5"
							name="radio-charge-period"
							onChange={this.onChangeChargePeriod}
							value="5"
							checked
						/>
						<label className="radio-label" htmlFor="radio5">
							5-Years
						</label>

						<input
							type="radio"
							id="radio7"
							name="radio-charge-period"
							onChange={this.onChangeChargePeriod}
							value="7"
						/>
						<label className="radio-label" htmlFor="radio7">
							7-Years
						</label>
					</div>
				</div>

				<div className="form-group">
					<h1 className="charge-h">initila period</h1>
					<div className="radio-toolbar">
						<input
							type="radio"
							id="radioInitialA"
							name="radio-initial-premium"
							value="$25K - $100K"
							onChange={this.onChangeChargePeriod}
							checked
						/>
						<label className="radio-label" htmlFor="radioInitialA">
							$25K - $100K
						</label>

						<input
							type="radio"
							id="radioInitialB"
							name="radio-initial-premium"
							value="$100K+"
							onChange={this.onChangeChargePeriod}
						/>
						<label className="radio-label" htmlFor="radioInitialB">
							$100K+
						</label>
					</div>
				</div>
			</div>
		);
	}
}

export default ChargeArea;
