import validate from './validate';

it('should should be invalid by default', () => {
    const state = validate({});
    expect(state._error).toBeTruthy();
});

it('at minimum it should require a "NO" response from both guest and plusOne', () => {
    const state1 = validate({ guestRSVP: 'NO' });
    expect(state1._error).toBe(true);

    const state2 = validate({ plusOneRSVP: 'NO' });
    expect(state2._error).toBe(true);

    const state3 = validate({ guestRSVP: 'NO', plusOneRSVP: 'NO'});
    expect(state3._error).toBe(undefined);
});

it('should require more stuff if a "YES" is selected for the guest', () => {
    const state = validate({ guestRSVP: 'YES', plusOneRSVP: 'NO' });
    expect(state._error).toBe(true);
});

it('should require more stuff if a "YES" is selected for the plusOne', () => {
    const state = validate({ guestRSVP: 'NO', plusOneRSVP: 'YES' });
    expect(state._error).toBe(true);
});

it('should at minimum require a drink/bev/overnight for guest selection if just guest is coming', () => {
    const RSVP = {
        guestRSVP: 'YES',
        plusOneRSVP: 'NO',
        guestDinnerSelection: 'something',
        guestBeverageSelection: 'something',
        overnightSelection: 'something'
    };
    const state1 = validate({
        ...RSVP
    });
    expect(state1._error).toBe(undefined);

    const state2 = validate({
        ...RSVP,
        guestBeverageSelection: null
    });
    expect(state2._error).toBe(true);

    const state3 = validate({
        ...RSVP,
        guestDinnerSelection: null
    });
    expect(state3._error).toBe(true);

    const state4 = validate({
        ...RSVP,
        overnightSelection: null
    });
    expect(state4._error).toBe(true);
});

it('should at minimum require a drink/bev/overnight for plusOne if just plusOne is coming', () => {
    const RSVP = {
        guestRSVP: 'NO',
        plusOneRSVP: 'YES',
        plusOneDinnerSelection: 'something',
        plusOneBeverageSelection: 'something',
        overnightSelection: 'something'
    };
    const state1 = validate({
        ...RSVP
    });
    expect(state1._error).toBe(undefined);

    const state2 = validate({
        ...RSVP,
        plusOneBeverageSelection: null
    });
    expect(state2._error).toBe(true);

    const state3 = validate({
        ...RSVP,
        plusOneDinnerSelection: null
    });
    expect(state3._error).toBe(true);

    const state4 = validate({
        ...RSVP,
        overnightSelection: null
    });
    expect(state4._error).toBe(true);
});

it('should require drink/bev/overnight for both guests if both are coming', () => {
    const RSVP = {
        guestRSVP: 'YES',
        plusOneRSVP: 'YES',
        plusOneDinnerSelection: 'something',
        plusOneBeverageSelection: 'something',
        guestDinnerSelection: 'something',
        guestBeverageSelection: 'something',
        overnightSelection: 'something'
    };
    const state1 = validate({
        ...RSVP
    });
    expect(state1._error).toBe(undefined);

    const state2 = validate({
        ...RSVP,
        guestBeverageSelection: null
    });
    expect(state2._error).toBe(true);

    const state3 = validate({
        ...RSVP,
        guestDinnerSelection: null
    });
    expect(state3._error).toBe(true);

    const state4 = validate({
        ...RSVP,
        plusOneBeverageSelection: null
    });
    expect(state2._error).toBe(true);

    const state5 = validate({
        ...RSVP,
        plusOneDinnerSelection: null
    });
    expect(state3._error).toBe(true);

    const state6 = validate({
        ...RSVP,
        overnightSelection: null
    });
    expect(state4._error).toBe(true);
});

it('should not invalidate the form if an RSVP selection changes from "YES" to "NO"', () => {
    const RSVP = {
        guestRSVP: 'YES',
        plusOneRSVP: 'YES',
        plusOneDinnerSelection: 'something',
        plusOneBeverageSelection: 'something',
        guestDinnerSelection: 'something',
        guestBeverageSelection: 'something',
        overnightSelection: 'something'
    };
    const state1 = validate(RSVP);
    expect(state1._error).toBe(undefined);

    const state2 = validate({ ...RSVP, plusOneRSVP: 'NO' });
    expect(state2._error).toBe(undefined);

    const state3 = validate({ ...RSVP, guestRSVP: 'NO' });
    expect(state3._error).toBe(undefined);
});
