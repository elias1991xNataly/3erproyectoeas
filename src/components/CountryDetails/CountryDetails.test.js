import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CountryDetails from './CountryDetails';

describe('CountryDetails', () => {
  let props;
  let shallowCountryDetails;
  let renderedCountryDetails;
  let mountedCountryDetails;

  const shallowTestComponent = () => {
    if (!shallowCountryDetails) {
      shallowCountryDetails = shallow(<CountryDetails {...props} />);
    }
    return shallowCountryDetails;
  };

  const renderTestComponent = () => {
    if (!renderedCountryDetails) {
      renderedCountryDetails = render(<CountryDetails {...props} />);
    }
    return renderedCountryDetails;
  };

  const mountTestComponent = () => {
    if (!mountedCountryDetails) {
      mountedCountryDetails = mount(<CountryDetails {...props} />);
    }
    return mountedCountryDetails;
  };  

  beforeEach(() => {
    props = {};
    shallowCountryDetails = undefined;
    renderedCountryDetails = undefined;
    mountedCountryDetails = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
