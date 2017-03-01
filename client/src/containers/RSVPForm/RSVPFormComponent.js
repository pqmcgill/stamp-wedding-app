import React from 'react';
import { Field } from 'redux-form';
import { Row, Col } from 'react-flexbox-grid-aphrodite';
import { css } from 'aphrodite';
import styles from './styles';
// import radioCheck from '../../style/radioCheck.css';

const Form = ({ handleSubmit, user }) => {
  console.log(user);
  return (
    <form onSubmit={ handleSubmit } className="quicksandRegular">
      <Row center="xs,sm,md,lg">
        <Col xs={4} className={ css(styles.guestName) + ' princessSofia'}>
          { user.guestName }
        </Col>
        <Col xs={4} className={ css(styles.guestName) + ' princessSofia'}>
          { (user.plusOneName && user.plusOneName.length > 0) ? user.plusOneName : 'Plus One' }
        </Col>
      </Row>
      <Row center="xs,sm,md,lg">
        <Col xs={4}>
          <p className={ css(styles.radioQuestion) }>Are you coming?</p>
          <label className='control control--radio'>
            <Field name="guestConfirmation" component="input" type="radio" value="true" className="control-input red"/>
            <div className='control__indicator'></div>
            Yes
          </label>
          <label className='control control--radio'>
            <Field name="guestConfirmation" component="input" type="radio" value="false" className="control-input"/>
            <div className='control__indicator'></div>
            No
          </label>
        </Col>
        <Col xs={4}>
          <p className={ css(styles.radioQuestion) }>Are you coming?</p>
          <label className='control control--radio'>
            <Field name="plusOneConfirmation" component="input" type="radio" value="true" className="control-input"/>
            <div className='control__indicator'></div>
            Yes
          </label>
          <label className='control control--radio'>
            <Field name="plusOneConfirmation" component="input" type="radio" value="false" className="control-input"/>
            <div className='control__indicator'></div>
            No
          </label>
        </Col>
      </Row>
      <Row center="xs,sm,md,lg">
        <Col xs={4}>
          <p className={ css(styles.radioQuestion) }>What would you like for dinner?</p>
          <label className='control control--radio'>
            <Field name="guestDinnerSelection" component="input" type="radio" value="BRISKET" className="control-input"/>
            <div className='control__indicator'></div>
            brisket
          </label>
          <label className='control control--radio'>
            <Field name="guestDinnerSelection" component="input" type="radio" value="PULLED_PORK" className="control-input"/>
            <div className='control__indicator'></div>
            pulled pork
          </label>
          <label className='control control--radio'>
            <Field name="guestDinnerSelection" component="input" type="radio" value="VEGETARIAN" className="control-input"/>
            <div className='control__indicator'></div>
            vegetarian meal
          </label>
          <label className='control control--radio'>
            <Field name="guestDinnerSelection" component="input" type="radio" value="VEGAN" className="control-input"/>
            <div className='control__indicator'></div>
            vegan meal
          </label>
        </Col>
        <Col xs={4}>
          <p className={ css(styles.radioQuestion) }>What would you like for dinner?</p>
          <label className='control control--radio'>
            <Field name="plusOneDinnerSelection" component="input" type="radio" value="BRISKET" className="control-input"/>
            <div className='control__indicator'></div>
            brisket
          </label>
          <label className='control control--radio'>
            <Field name="plusOneDinnerSelection" component="input" type="radio" value="PULLED_PORK" className="control-input"/>
            <div className='control__indicator'></div>
            pulled pork
          </label>
          <label className='control control--radio'>
            <Field name="plusOneDinnerSelection" component="input" type="radio" value="VEGETARIAN" className="control-input"/>
            <div className='control__indicator'></div>
            vegetarian meal
          </label>
          <label className='control control--radio'>
            <Field name="plusOneDinnerSelection" component="input" type="radio" value="VEGAN" className="control-input"/>
            <div className='control__indicator'></div>
            vegan meal
          </label>
        </Col>
      </Row>
      <button label="Save changes" type="submit" />
    </form>
  );
};

export default Form;
