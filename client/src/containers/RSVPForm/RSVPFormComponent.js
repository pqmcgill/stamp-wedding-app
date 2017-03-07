import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector } from 'redux-form';
import { Row, Col } from 'react-flexbox-grid-aphrodite';
import { css } from 'aphrodite';
import styles from './styles';
import { RadioButton } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { RadioButtonGroup, Checkbox } from 'redux-form-material-ui';

const Form = ({ handleSubmit, user, guestRSVP, plusOneRSVP, ...props }) => {
  const hasGuestRSVPd = guestRSVP === 'Yes';
  const hasPlusOneRSVPd = plusOneRSVP === 'Yes';
  console.log(props);
  return (
    <form onSubmit={ handleSubmit } className=" quicksandRegular">
      <Row center="xs,sm,md,lg">

        <Col xs={11} sm={5} md={5} lg={5}>

          <div className={ css(styles.formSection) }>
            <Row start="xs,sm,md,lg">
              <Col xs={12} className={ css(styles.formHeader) + ' princessSofia'}>
                { user.guestName }
              </Col>
            </Row>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>Are you able to attend the wedding?</p>
                <Field name="guestRSVP" component={ RadioButtonGroup }>
                  <RadioButton value="Yes" label="Yes" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  <RadioButton value="No" label="No" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                </Field>
              </Col>
            </Row>
            { hasGuestRSVPd ?
              <Row start="xs,sm,md,lg">
                <Col xs={12}>
                  <p className={ css(styles.radioQuestion) }>What would you like for dinner?</p>
                  <Field name="guestDinnerSelection" component={ RadioButtonGroup }>
                    <RadioButton value="BRISKET" label="brisket" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="PULLED_PORT" label="pulled pork" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="VEGETARIAN" label="vegetarian meal" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="VEGAN" label="vegan meal" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  </Field>
                </Col>
              </Row>
            :''}

            { hasGuestRSVPd ?
              <Row start="xs,sm,md,lg">
                <Col xs={12}>
                  <p className={ css(styles.radioQuestion) }>I dance better when I drink...</p>
                  <Field name="guestBeverageSelection" component={ RadioButtonGroup }>
                    <RadioButton value="BEER" label="Beer" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="WINE" label="Wine" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="NON_ALC" label="Non alcoholic beverages" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  </Field>
                </Col>
              </Row>
            :''}
          </div>
        </Col>


        <Col xs={11} sm={5} md={5} lg={5}>
          <div className={ css(styles.formSection) }>
            <Row>
              <Col xs={12} className={ css(styles.formHeader) + ' princessSofia'}>
                { (user.plusOneName && user.plusOneName.length > 0) ? user.plusOneName : 'Plus One' }
              </Col>
            </Row>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>Are you able to attend the wedding?</p>
                <Field name="plusOneRSVP" component={ RadioButtonGroup }>
                  <RadioButton value="Yes" label="Yes" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  <RadioButton value="No" label="No" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                </Field>
              </Col>
            </Row>

            { hasPlusOneRSVPd ?
              <Row start="xs,sm,md,lg">
                <Col xs={12}>
                  <p className={ css(styles.radioQuestion) }>What would you like for dinner?</p>
                  <Field name="plusOneDinnerSelection" component={ RadioButtonGroup }>
                    <RadioButton value="BRISKET" label="brisket" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="PULLED_PORT" label="pulled pork" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="VEGETARIAN" label="vegetarian meal" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="VEGAN" label="vegan meal" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  </Field>
                </Col>
              </Row>
            :''}

            { hasPlusOneRSVPd ?
              <Row start="xs,sm,md,lg">
                <Col xs={12}>
                  <p className={ css(styles.radioQuestion) }>I dance better when I drink...</p>
                  <Field name="plusOneBeverageSelection" component={ RadioButtonGroup }>
                    <RadioButton value="BEER" label="Beer" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="WINE" label="Wine" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="NON_ALC" label="Non alcoholic beverages" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  </Field>
                </Col>
              </Row>
            :''}
          </div>
        </Col>


      </Row>
      { hasGuestRSVPd || hasPlusOneRSVPd ?
        <Row center="xs,sm,md,lg">
          <Col xs={12} className={ css(styles.formHeaderCenter) + ' princessSofia'}>
            General Questions
          </Col>
          <Col xs={11} sm={8} md={8} lg={8}>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>Will you be staying on the property overnight after the wedding? (See Important Info page for more details.)</p>
                <Field name="overnightSelection" component={ RadioButtonGroup }>
                  <RadioButton value="Yes" label="Yes, and I know I need to bring my own tent to stay in." checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  <RadioButton value="No" label="No, I am leaving after the reception and staying elsewhere." checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                </Field>
              </Col>
            </Row>
          </Col>

          <Col xs={11} sm={8} md={8} lg={8}>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>What flavors of ice cream do you like?</p>
                <Field name="strawberry" label="strawberry" component={ Checkbox } />
                <Field name="mint-choc-chip" label="mint chocolate chip" component={ Checkbox } />
                <Field name="cookies-n-cream" label="cookies 'n cream" component={ Checkbox } />
                <Field name="vanilla" label="vanilla" component={ Checkbox } />
                <Field name="gross" label="eww, ice cream is gross!" component={ Checkbox } />
              </Col>
            </Row>
          </Col>

          <Col xs={11} sm={8} md={8} lg={8}>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>What is one song that you love dancing to?</p>
                <Field className={ css(styles.input) }
                  name="songChoice"
                  label="strawberry"
                  component="input"
                  placeholder="ex: The Chicken Dance"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      :''}

      { props.dirty ?
        <Row center="xs,sm,md,lg">
          <button className={ css(styles.submitBtn) } label="Save changes" type="submit">SUBMIT RESPONSE</button>
        </Row>
      :''}
    </form>
  );
};

const selector = formValueSelector('rsvp');
const SelectingFormValuesForm = connect(
  state => {
    const { guestRSVP, plusOneRSVP } = selector(state, 'guestRSVP', 'plusOneRSVP');
    return {
      guestRSVP,
      plusOneRSVP
    };
  }
)(Form);

export default SelectingFormValuesForm;
