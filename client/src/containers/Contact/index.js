import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import { css } from 'aphrodite';
import styles from './styles';
import flowerImg from '../../assets/flower1.webp';
import flower2Img from '../../assets/flower2.webp';
import RSVPButton from '../../components/RSVPButton';

const ContactForm = ({ handleSubmit, reset }) => {
  const submit = e => {
    handleSubmit(e);
    reset();
  };

  return (
    <Grid fluid>
      <form onSubmit={ submit } className={ css(styles.form) + ' quicksandRegular' }>
        <Row center="xs">
          <Col>
            <img className={ css(styles.flower, styles.img) }
              src={ flowerImg }
              role="presentation"
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
    				<RSVPButton />
    			</Col>
    		</Row>
    		<Row center="xs" className={ css(styles.rsvpButtonText) }>
    			<Col>
    				<p>Don't forget to RSVP!<br />The deadline is May 27, 2017.</p>
    			</Col>
    		</Row>
        <Row center="xs">
          <Col xs={6}>
            <img className={ css(styles.flower, styles.flower2, styles.img) }
              src={ flower2Img }
              role="presentation"
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

const Contact = () => {
  const handleSubmit = ({ name, subject, message }) => {
    const formattedMessage = message.replace('\n', '%0D%0A');
    window.open(
      `mailto:stamp1413@gmai.com?subject=STAMP: ${subject}&body=${formattedMessage}%0D%0A%0D%0ALove, ${name}`, '_self'
    );
  };

  return <ConnectedContactForm onSubmit={ handleSubmit } />;
};

export default Contact;
