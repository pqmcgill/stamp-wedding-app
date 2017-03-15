import React, { Component } from 'react';
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

class RSVPFormContainer extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate(props) {
      const newPropKeys = Object.keys(props.user);
      const oldPropKeys = Object.keys(this.props.user);
      if (newPropKeys.length !== oldPropKeys.length) {
          return true;
      }
      newPropKeys.forEach(key => {
          if (oldPropKeys[key] !== newPropKeys[key]) {
              return true;
          }
      });
      return false;
  }

  handleSubmit(val) {
    this.props.updateUser(this.props.user.id, val, this.props.user.token)
        .then(() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.props.push('/welcome');
        })
        .catch(() => console.log('error'));
  }

  render() {
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
    } = this.props.user;

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
      console.log('rendering rsvp component');

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
              <RSVPForm onSubmit={ this.handleSubmit }
                initialValues={ initialValues }
                user={ this.props.user }
              />
            </Col>
          </Row>
        </Grid>
      );
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { updateUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVPFormContainer);
