import React from 'react';

import PropTypes from 'prop-types';

import '../../../root.css';

import './Text.css';

function Text({ value, color, type }) {
	return <p className={`${type} ${color}`}> {value} </p>;
}

Text.propTypes = {
	value: PropTypes.string,
	color: PropTypes.oneOf(['primary', 'secondary', 'terciary']),
	type: PropTypes.oneOf(['title', 'subtitle', 'paragraph']),
};

Text.defaultProps = {
	value: 'Sample',
	color: 'primary',
	type: 'title',
};

export default Text;
