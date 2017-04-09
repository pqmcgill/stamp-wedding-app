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

const Form = ({ handleSubmit, user, guestRSVP, plusOneRSVP, dirty, error, ...props }) => {
  const hasGuestRSVPd = guestRSVP === 'YES';
  const hasPlusOneRSVPd = plusOneRSVP === 'YES';
  let buttonClassName, buttonWrapperClassName;

  const capitalize = (val) => val.charAt(0).toUpperCase() + val.substring(1, val.length);
  buttonClassName = (dirty && !error) ?
    css(styles.submitBtn) :
    css(styles.submitBtn, styles.disabled);

	buttonWrapperClassName = (dirty && !error) ?
		css(styles.buttonWrapper) :
		css(styles.buttonWrapperDisabled);
    
    return (
    <form onSubmit={ handleSubmit } className=" quicksandRegular">
      <Row center="xs,sm,md,lg">

      <Col xsOffset={0} smOffset={0} mdOffset={1} lgOffset={1} xs={11} sm={5} md={4} lg={4}>

          <div className={ css(styles.formSection) }>
            <Row start="xs,sm,md,lg">
              <Col xs={12} className={ css(styles.formHeader) + ' princessSofia'}>
                { capitalize(user.guestName) }
              </Col>
            </Row>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>Are you able to attend the wedding?</p>
                <Field name="guestRSVP" component={ RadioButtonGroup }>
                  <RadioButton value="YES" label="Yes" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  <RadioButton value="NO" label="No" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
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
                    <RadioButton value="WINE_SWEET" label="Wine (Sweet)" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
										<RadioButton value="WINE_DRY" label="Wine (Dry)" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="NONALC" label="Non alcoholic beverages" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  </Field>
                </Col>
              </Row>
            :''}
          </div>
        </Col>


        <Col xs={11} sm={5} md={4} lg={4}>
          <div className={ css(styles.formSection) }>
            <Row>
              <Col xs={12} className={ css(styles.formHeader) + ' princessSofia'}>
                { (user.plusOneName && user.plusOneName.length > 0) ? capitalize(user.plusOneName) : 'Plus One' }
              </Col>
            </Row>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>Are you able to attend the wedding?</p>
                <Field name="plusOneRSVP" component={ RadioButtonGroup }>
                  <RadioButton value="YES" label="Yes" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  <RadioButton value="NO" label="No" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
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
                    <RadioButton value="WINE_SWEET" label="Wine (Sweet)" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
										<RadioButton value="WINE_DRY" label="Wine (Dry)" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                    <RadioButton value="NONALC" label="Non alcoholic beverages" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
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
          <Col xs={11} sm={10} md={7} lg={7}>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>Will you be staying on the property overnight after the wedding? (See our FAQ page for more details.)</p>
                <Field name="overnightSelection" component={ RadioButtonGroup }>
                  <RadioButton value="YES" label="Yes, and I know I need to bring my own tent to stay in." checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                  <RadioButton value="NO" label="No, I am leaving after the reception and staying elsewhere." checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                </Field>
              </Col>
            </Row>
          </Col>

          <Col xs={11} sm={10} md={7} lg={7}>
            <Row start="xs,sm,md,lg">
              <Col xs={12}>
                <p className={ css(styles.radioQuestion) }>What flavors of ice cream do you like?</p>
                <Field name="iceCreamSelections.STRAWBERRY" label="strawberry" component={ Checkbox } />
                <Field name="iceCreamSelections.MINTCHOCCHIP" label="mint chocolate chip" component={ Checkbox } />
                <Field name="iceCreamSelections.COOKIES" label="cookies 'n cream" component={ Checkbox } />
                <Field name="iceCreamSelections.VANILLA" label="vanilla" component={ Checkbox } />
                <Field name="iceCreamSelections.GROSS" label="eww, ice cream is gross!" component={ Checkbox } />
              </Col>
            </Row>
          </Col>

        </Row>
      :''}

      <Row center="xs,sm,md,lg">
				<span className={ buttonWrapperClassName }><button className={ buttonClassName } label="Save changes" type="submit">SUBMIT RESPONSE</button></span>
      </Row>
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
