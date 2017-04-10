import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import { css } from 'aphrodite';
import styles from './styles';
import CompatibleImg from '../../components/CompatibleImg';
import RSVPButton from '../../components/RSVPButton';

export const ContactForm = ({ handleSubmit, reset, hasSubmittedResponse }) => {
  const submit = e => {
    handleSubmit(e);
    reset();
  };

  return (
    <Grid fluid>
      <form onSubmit={ submit } className={ css(styles.form) + ' quicksandRegular' }>
        <Row center="xs">
          <Col>
            <CompatibleImg className={ css(styles.flower, styles.img) }
              imgName="flower1"
            />
          </Col>
        </Row>
        <Row center="xs,sm,md,lg">
          <Col xs={12} className={ css(styles.formControlContainer) }>
            Sam's cell: (812) 343-8556<br />
            Send us an email below! (stamp1413@gmail.com)<br /><br />
            <Row between="xs,sm,md,lg">
              <Col xs={2} className={css(styles.formControlLabel)}><label htmlFor="name">Name</label></Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                <Field
                  className={ css(styles.formControl) + ' quicksandRegular'}
                  name="name"
                  type="text"
                  component="input"
                  placeholder="ex: Honored Guest"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row center="xs,sm,md,lg">
          <Col xs={12} className={ css(styles.formControlContainer) }>
            <Row between="xs,sm,md,lg">
              <Col xs={2} className={css(styles.formControlLabel)}><label htmlFor="subject" >Subject</label></Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                <Field
                  className={ css(styles.formControl) + ' quicksandRegular'}
                  name="subject"
                  type="text"
                  component="input"
                  placeholder="ex: So excited!"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row center="xs,sm,md,lg">
          <Col xs={12} className={ css(styles.formControlContainer) }>
            <Row between="xs,sm,md,lg">
              <Col xs={2} className={css(styles.formControlLabel)}><label htmlFor="message">Message</label></Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                <Field
                  className={ css(styles.formControl, styles.textArea) + ' quicksandRegular'}
                  name="message"
                  type="text"
                  component="textarea"
                  placeholder="ex: Where the party at, yo?!"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row center="xs,sm,md,lg">
          <Col xs={12} className={ css(styles.formControlContainer) }>
            <Row center="xs" end="sm,md,lg">
              <Col xs={6} sm={12} md={12} lg={12}>
                <button className={ css(styles.submitBtn) }type="submit">SEND</button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className={ css(styles.divider) }/>
        <Row center="xs" className={ css(styles.rsvpButton) }>
    			<Col>
    				<RSVPButton hasSubmittedResponse={ hasSubmittedResponse }/>
    			</Col>
    		</Row>
            { hasSubmittedResponse ?
    			<Row center="xs" className={ css(styles.rsvpButtonText) }>
    				<Col>
    					<p>Thanks for your response!<br />The deadline to make changes is May 27, 2017.</p>
    				</Col>
    			</Row>
    		:
    			<Row center="xs" className={ css(styles.rsvpButtonText) }>
    				<Col>
    					<p>Don't forget to RSVP!<br />The deadline is May 27, 2017.</p>
    				</Col>
    			</Row>
    		}
        <Row center="xs">
          <Col xs={6}>
            <CompatibleImg className={ css(styles.flower, styles.flower2, styles.img) }
              imgName="flower2"
            />
          </Col>
        </Row>
      </form>
    </Grid>
  );
};

const ConnectedContactForm = reduxForm({
  form: 'contact'
})(ContactForm);

const Contact = ({ hasSubmittedResponse }) => {
  const handleSubmit = ({ name, subject, message }) => {
    const formattedMessage = message.replace('\n', '%0D%0A');
    window.open(
      `mailto:stamp1413@gmail.com?subject=STAMP: ${subject}&body=${formattedMessage}%0D%0A%0D%0ALove, ${name}`, '_self'
    );
  };

  return <ConnectedContactForm onSubmit={ handleSubmit } hasSubmittedResponse={ hasSubmittedResponse } />;
};

const mapStateToProps = ({ user }) => ({
	hasSubmittedResponse: user.hasSubmittedResponse
});

export default connect(mapStateToProps)(Contact);
