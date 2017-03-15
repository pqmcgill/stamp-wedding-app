import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import { css } from 'aphrodite';
import CompatibleImg from '../../components/CompatibleImg';
import styles from './styles';
import validate from './validate';

import Form from './RSVPFormComponent';

let RSVPForm = reduxForm({
  form: 'rsvp',
  validate
})(Form);

const RSVPFormContainer = ({ user, updateUser, push }) => {
  const handleSubmit = function(val) {
    updateUser(user.id, val, user.token)
        .then(() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            push('/welcome');
        })
        .catch(() => console.log('error'));
  };

  const {
    guestRSVP,
    plusOneRSVP,
    guestDinnerSelection,
    plusOneDinnerSelection,
    guestBeverageSelection,
    plusOneBeverageSelection,
    overnightSelection,
    iceCreamSelections,
    song
  } = user;

  const initialValues = {
    guestRSVP,
    plusOneRSVP,
    guestDinnerSelection,
    plusOneDinnerSelection,
    guestBeverageSelection,
    plusOneBeverageSelection,
    overnightSelection,
    iceCreamSelections,
    song
  };

  return (
    <Grid fluid>
      <Row center="xs">
  			<Col>
  				<CompatibleImg
  					className={ css(styles.flower) }
  					imgName="flower1"
                />
  			</Col>
  		</Row>
      <Row>
        <Col xs={12}>
          <RSVPForm onSubmit={ handleSubmit }
            initialValues={ initialValues }
            user={ user }
          />
        </Col>
      </Row>
    </Grid>
  );
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { updateUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVPFormContainer);
