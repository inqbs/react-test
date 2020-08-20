import React from 'react'
import PropTypes from 'prop-types'
import * as actions from '../../actions'

const NumBtn = ({num, onClick}) => (
	<button onClick={onClick}>{num}</button>
);

NumBtn.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default NumBtn