import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadGuests, deleteGuest, addGuest } from '../../actions/admin';
import { logout } from '../../actions/user';
import { getGuests } from '../../reducers/admin/guests/selectors'
import AddGuestForm from './addGuestForm';

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
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.props.loadGuests(this.props.token);
  }

  handleDelete (id) {
    this.props.deleteGuest(id, this.props.token);
  }

  logout () {
    this.props.logout();
  }

  render() {
    const { guests } = this.props;
    const guestList = guests.map((guest, i) => {
      return (
        <TableRow key={i}>
          <TableRowColumn>{ guest.username }</TableRowColumn> 
          <TableRowColumn>{ guest.password }</TableRowColumn>
          <TableRowColumn>{ guest.guestName }</TableRowColumn>
          <TableRowColumn>{ guest.guestConfirmation ? 'yes' : 'no' }</TableRowColumn>
          <TableRowColumn>{ guest.plusOneName }</TableRowColumn>
          <TableRowColumn>{ guest.plusOneConfirmation ? 'yes': 'no' }</TableRowColumn>
          <TableRowColumn>{ guest.affiliation }</TableRowColumn>
          <TableRowColumn>
            <button className="delete" onClick={ this.handleDelete.bind(null, guest._id) }>x</button>
          </TableRowColumn>
        </TableRow>
        );
    });
    return (
      <Paper className="guestManagement" zDepth={1}>
        <h2>Here you can manage your guest list <span><button onClick={ this.logout }>Logout</button></span></h2>
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
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody className="listBody" displayRowCheckbox={false}>
            { guestList }
          </TableBody>
        </Table>
      </Paper>
    );
  }
};

GuestManagement.propTypes = propTypes;

const mapStateToProps = state => ({
  guests: getGuests(state)
});

const mapDispatchToProps = {
  loadGuests,
  deleteGuest,
  addGuest,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestManagement);
