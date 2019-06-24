import React, { Component } from 'react';
import AnimatedPieHooks from './AnimatedPieHooks';

const colors = [ '#346CA9', '#525B78', '#69ACEB', '#9dbee1', '244b75' ];

export class UserData extends Component {
	render() {
		const { userAllocationStrategyData } = this.props;
		let userContent = (
			<div className="info">
				<span>
					<i className="fa fa-folder" aria-hidden="true" />
				</span>
				<p className="l-heading">
					Please input desired allocation info available strategies to enable analysis and further actions
				</p>
			</div>
		);
		if (userAllocationStrategyData !== null && userAllocationStrategyData.length !== 0) {
			userContent = userAllocationStrategyData.map((data, index) => (
				<div
					className="strategies_user_item"
					key={index}
					style={{
						borderStyle: 'solid',
						borderLeftWidth: 5,
						borderRightWidth: 0,
						borderBottomWidth: 0,
						borderTopWidth: 0,
						borderLeftColor: colors[index]
					}}
				>
					<div className="company-name">{data.name}</div>
					<div className="percentage">{data.value + '%'}</div>
				</div>
			));
		}
		return (
			<React.Fragment>
				<div className="strategies_chart">
					{userAllocationStrategyData !== null && userAllocationStrategyData.length !== 0 ? (
						<AnimatedPieHooks
							data={userAllocationStrategyData}
							width={200}
							height={200}
							innerRadius={60}
							outerRadius={100}
						/>
					) : (
						<div className="donut_placeholder" />
					)}
				</div>
				<div className="strategies_user_info">{userContent}</div>
				{userAllocationStrategyData !== null && userAllocationStrategyData.length !== 0 ? (
					<div className="">
						<button className="btn-block btn-primary">Submit</button>
					</div>
				) : null}
			</React.Fragment>
		);
	}
}

export default UserData;
