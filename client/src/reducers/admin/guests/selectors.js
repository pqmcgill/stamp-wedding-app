import { createSelector } from 'reselect';

export const getGuests = createSelector(
  state => {
    return state.admin.guests;
  },
  guests => {
    return guests.all.map(guestId => {
      return guests.byId[guestId];
    });
  }
);
