import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableStrategy from './TableStrategy';
import ChargeArea from './ChargeArea';
import ConfirmationArea from './ConfirmationArea';
import UserData from './UserData';
import {
	fetchAllocationStrategy,
	changeAllocationStrategyValue,
	calculateTotalAllocationStrategy,
	confirmAllocationStrategy,
	resetTotalAllocationStrategyData
} from '../actions/allocationStrategyActions';

export class Main extends Component {
	componentDidMount() {
		this.props.fetchAllocationStrategy();
	}

	onChangeCap = (e, id) => {
		let { value, min, max } = e.currentTarget;
		if (!isNaN(value)) {
			value = Math.max(Number(min), Math.min(Number(max), Number(value)));
			this.props.changeAllocationStrategyValue(id, value);
			this.props.calculateTotalAllocationStrategy();
		}
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmitConfirm = (event) => {
		event.preventDefault();
		this.props.confirmAllocationStrategy();
	};

	handleResetData = () => {
		this.props.resetTotalAllocationStrategyData();
	};

	render() {
		const {
			allocation_strategy_data,
			total_allocation,
			user_allocation_strategy_data
		} = this.props.allocationStrategy;
		return (
			<section id="main-container">
				<div className="container">
					<div className="card-container">
						<header className="card_header">
							<div className="header-title">Allocation Strategy</div>
						</header>
						<div className="left_card">
							<UserData userAllocationStrategyData={user_allocation_strategy_data} />
						</div>

						<div className="right_card">
							<ChargeArea />
							<TableStrategy
								allocationStrategyData={allocation_strategy_data}
								onChangeCap={this.onChangeCap}
							/>
							<ConfirmationArea
								totalAllocation={total_allocation}
								onChange={this.onChange}
								handleSubmitConfirm={this.handleSubmitConfirm}
								handleResetData={this.handleResetData}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	allocationStrategy: state.allocationStrategy
});

export default connect(mapStateToProps, {
	fetchAllocationStrategy,
	changeAllocationStrategyValue,
	calculateTotalAllocationStrategy,
	confirmAllocationStrategy,
	resetTotalAllocationStrategyData
})(Main);
