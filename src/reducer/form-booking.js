const defaultStateArticles= {
    displayForm: false,
    numberPeople: 0,
}

const formBookingReducer = (state = defaultStateArticles, action) => {
    switch(action.type) {
        case 'EXIT_FROM_BOOKING':
            return {...state, displayForm: false};
        case 'OPEN_FROM_BOOKING':
            return {...state, displayForm: true};
        case 'NUMBER_PEOPLE':
            return {...state, numberPeople: action.people};
        default:
            return state;
    }
};

export default formBookingReducer;