import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default ComposedComponent => {
  const AdminOnly = ({ access, ...props }) => ( 
    <div>
      { access === 'admin' ? 
        <ComposedComponent { ...props } /> : 
        <Redirect to='/' /> 
      }
    </div>
	); 

  AdminOnly.propTypes = {
    access: PropTypes.string
  };

	const mapStateToProps = state => ({
		access: state.user.access,
		token: state.user.token
	});

	return connect(mapStateToProps)(AdminOnly);
};


