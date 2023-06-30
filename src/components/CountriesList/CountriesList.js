import React from 'react';
import PropTypes from 'prop-types';
import styles from './CountriesList.scss';

const CountriesList = props => (
	<div>This is a component called CountriesList.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class CountriesList extends React.Component {
//   render() {
//     return <div>This is a component called CountriesList.</div>;
//   }
// }

const CountriesListPropTypes = {
	// always use prop types!
};

CountriesList.propTypes = CountriesListPropTypes;

export default CountriesList;
