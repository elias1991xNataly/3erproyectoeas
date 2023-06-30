import React from 'react';
import PropTypes from 'prop-types';
import styles from './CountryDetails.scss';

const CountryDetails = props => (
	<div>This is a component called CountryDetails.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class CountryDetails extends React.Component {
//   render() {
//     return <div>This is a component called CountryDetails.</div>;
//   }
// }

const CountryDetailsPropTypes = {
	// always use prop types!
};

CountryDetails.propTypes = CountryDetailsPropTypes;

export default CountryDetails;
