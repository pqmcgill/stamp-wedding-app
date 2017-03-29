import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import Home from 'material-ui/svg-icons/action/home'
import styleObject from './style';

const styles = StyleSheet.create(styleObject);

const NavBar = (props) => {
	const stickyStyle = props.isSticky ?
		{
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			zIndex: 1,
			boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
		} :
		{
			position: 'static'
	};

	const MyNavLink = props => {
		return <NavLink
			activeClassName={ css(styles.activeLink) }
			{ ...props }
		/>
	};

	return (
		<div className={ css(styles.wrapper) }>
			<Grid
        className={ css(styles.navBar) + ' quicksandRegular' }
        style={ stickyStyle }
      >
        <Row className={ css(styles.nav) }
          center="xs" start="md,lg">
          <Col mdOffset={1} lgOffset={1} className={ css(styles.first) }>
            <MyNavLink className={ css(styles.link, styles.iconLink) } to='/welcome'>
              <Home className={ css(styles.home) }/>
            </MyNavLink>
          </Col>
          <Col>
            <MyNavLink className={ css(styles.link) } to='/location'>
              Location
            </MyNavLink>
          </Col>
          <Col>
            <MyNavLink className={ css(styles.link) } to='/faq'>
              FAQ
            </MyNavLink>
          </Col>
          <Col>
            <MyNavLink className={ css(styles.link) } to='/registry'>
              Registry
            </MyNavLink>
          </Col>
          <Col>
            <MyNavLink className={ css(styles.link) } to='/contact'>
              Contact
            </MyNavLink>
          </Col>
        </Row>
      </Grid>
    </div>
    );
}

export default NavBar;
