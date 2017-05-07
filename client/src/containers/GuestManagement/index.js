import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadGuests, deleteGuest, addGuest } from '../../actions/admin';
import { Grid, Col, Row } from 'react-flexbox-grid-aphrodite';
import { 
	getGuests, 
	getDinnerSelectionData, 
	getBeverageSelectionData,
	getIceCreamSelectionData
} from '../../reducers/admin/guests/selectors'
import AddGuestForm from './addGuestForm';
import MyPieChart from '../../components/MyPieChart';

// material elements
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import './GuestManagement.css';

const propTypes = {
  token: PropTypes.string.isRequired,
  guests: PropTypes.array.isRequired,
  addGuest: PropTypes.func.isRequired,
  loadGuests: PropTypes.func.isRequired,
  deleteGuest: PropTypes.func.isRequired
};

export class GuestManagement extends Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.loadGuests(this.props.token);
  }

  handleDelete (id) {
    this.props.deleteGuest(id, this.props.token);
  }

  render() {
    const { guests } = this.props;
    const guestList = guests.map((guest, i) => {
      return (
        <TableRow key={i}>
          <TableRowColumn>{ guest.username }</TableRowColumn> 
          <TableRowColumn>{ guest.password }</TableRowColumn>
          <TableRowColumn>{ guest.guestName }</TableRowColumn>
          <TableRowColumn>{ guest.guestRSVP }</TableRowColumn>
          <TableRowColumn>{ guest.plusOneName }</TableRowColumn>
          <TableRowColumn>{ guest.plusOneRSVP }</TableRowColumn>
          <TableRowColumn>{ guest.affiliation }</TableRowColumn>
          <TableRowColumn>{ guest.overnightSelection }</TableRowColumn>
          <TableRowColumn>
            <button className="delete" onClick={ this.handleDelete.bind(null, guest._id) }>x</button>
          </TableRowColumn>
        </TableRow>
        );
    });
    return (
			<div>
      <Paper className="guestManagement" zDepth={1}>
        <h2>Here you can manage your guest list</h2>
				<AddGuestForm />
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>User Name</TableHeaderColumn>
              <TableHeaderColumn>Password</TableHeaderColumn>
              <TableHeaderColumn>Primary Guest Name</TableHeaderColumn>
              <TableHeaderColumn>Primary Guest RSVP'd</TableHeaderColumn>
              <TableHeaderColumn>Plus One Name</TableHeaderColumn>
              <TableHeaderColumn>Plus One RSVP'd</TableHeaderColumn>
              <TableHeaderColumn>Affiliation</TableHeaderColumn>
              <TableHeaderColumn>Overnight</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody className="listBody" displayRowCheckbox={false}>
            { guestList }
          </TableBody>
				</Table>
			</Paper>
			<Grid>
				<Row>
					<Col xs={12} sm={6} md={6} lg={6}>
						<Paper className='guestManagement' zDepth={1}>
							<MyPieChart 
								name="Beverage Selections"
								data={ this.props.beverageData }
							/>
						</Paper>
					</Col>
					<Col xs={12} sm={6} md={6} lg={6}>
						<Paper className='guestManagement' zDepth={1}>
							<MyPieChart 
								name="Dinner Selections"
								data={ this.props.dinnerData }
							/>
						</Paper>
					</Col>
					<Col xs={12} sm={6} md={6} lg={6}>
						<Paper className='guestManagement' zDepth={1}>
							<MyPieChart 
								name="Ice Cream Selections"
								data={ this.props.iceCreamData }
							/>
						</Paper>
					</Col>
				</Row>
		</Grid>
		</div>

    );
  }
};

GuestManagement.propTypes = propTypes;

const mapStateToProps = state => ({
	guests: getGuests(state),
	beverageData: getBeverageSelectionData(state),
	dinnerData: getDinnerSelectionData(state),
	iceCreamData: getIceCreamSelectionData(state)
});

const mapDispatchToProps = {
  loadGuests,
  deleteGuest,
  addGuest,
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestManagement);
