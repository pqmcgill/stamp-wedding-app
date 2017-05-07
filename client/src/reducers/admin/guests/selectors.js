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

export const getBeverageSelectionData = createSelector(
	state => {
		return state.admin.guests
	},
	guests => {
		const buckets = guests.all.reduce((acc, guestId) => {
			const guest = guests.byId[guestId];
			const guestSelection = guest.guestBeverageSelection;
			const plusOneSelection = guest.plusOneBeverageSelection;
			
			if (guestSelection && acc[guestSelection]) {
				acc[guest.guestBeverageSelection].value += 1;
			}

			if (plusOneSelection && acc[plusOneSelection]) {
				acc[guest.plusOneBeverageSelection].value += 1;
			}

			return acc;
		}, {
			BEER: { name: 'Beer', value: 0 },
			WINE_SWEET: { name: 'wine (sweet)', value: 0 },
			WINE_DRY: { name: 'wine (dry)', value: 0 },
			NONALC: { name: 'nonalcoholic', value: 0 } 
		});

		return Object.keys(buckets).map(key => {
			return buckets[key];
		});
	}
);

export const getDinnerSelectionData = createSelector(
	state => {
		return state.admin.guests
	},
	guests => {
		const buckets = guests.all.reduce((acc, guestId) => {
			const guest = guests.byId[guestId];
			const guestSelection = guest.guestDinnerSelection;
			const plusOneSelection = guest.plusOneDinnerSelection;
			
			if (guestSelection && acc[guestSelection]) {
				acc[guest.guestDinnerSelection].value += 1;
			}

			if (plusOneSelection && acc[plusOneSelection]) {
				acc[guest.plusOneDinnerSelection].value += 1;
			}

			return acc;
		}, {
			BRISKET: { name: 'Brisket', value: 0 },
			PULLED_PORT: { name: 'Pulled Pork', value: 0 },
			VEGETARIAN: { name: 'Vegetarian', value: 0 },
			VEGAN: { name: 'Vegan', value: 0 } 
		});

		return Object.keys(buckets).map(key => {
			return buckets[key];
		});
	}
);
