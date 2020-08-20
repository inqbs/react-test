import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

import NumBtn from '../components/button/NumBtn';
import PlusBtn from '../components/button/PlusBtn';
import ResultDisplay from "../components/display/ResultDisplay";

class CalculatorContainer extends React.Component{
	render(){
		const { calculator, actions } = this.props;
		return (
			<div className="container">
				<ResultDisplay result={calculator.showingResult ? calculator.resultValue : calculator.inputValue}/>
				<div>
					<NumBtn num={1} onClick={()=>actions.onNumClick(1)} />
					<NumBtn num={2} onClick={()=>actions.onNumClick(2)} />
					<NumBtn num={3} onClick={()=>actions.onNumClick(3)} />
				</div>
				<div>
					<NumBtn num={4} onClick={()=>actions.onNumClick(4)} />
					<NumBtn num={5} onClick={()=>actions.onNumClick(5)} />
					<NumBtn num={6} onClick={()=>actions.onNumClick(6)} />
				</div>
				<div>
					<NumBtn num={7} onClick={()=>actions.onNumClick(7)} />
					<NumBtn num={8} onClick={()=>actions.onNumClick(8)} />
					<NumBtn num={9} onClick={()=>actions.onNumClick(9)} />
				</div>
				<div>
					<NumBtn num={0} onClick={()=>actions.onNumClick(0)} />
					<PlusBtn onClick={actions.onPlusClick}/>
				</div>
			</div>
		)
	}
}

const mapState = (state, ownProps) => ({
	calculator: state.calculator,
  });
  
  function mapDispatch(dispatch) {
	return {
	  actions: bindActionCreators(actions, dispatch),
	};
  }
  
  export default connect(mapState, mapDispatch)(CalculatorContainer);