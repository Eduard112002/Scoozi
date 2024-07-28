export const exitFormBooking = () => ({type: 'EXIT_FROM_BOOKING'});

export const openFormBooking = () => ({type: 'OPEN_FROM_BOOKING'});

export const numberPeople = (payload) => ({type: 'NUMBER_PEOPLE', people: payload});

export const sendForm = (payload) => ({type: 'SEND_FORM', infoUserObj: payload});
