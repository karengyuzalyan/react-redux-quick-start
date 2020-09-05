import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Application from './application';

function Root(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
