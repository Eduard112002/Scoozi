const defaultStateArticles= {
    displayForm: false,
    numberPeople: 0,
    infoUser:{
        nameUser: '',
        tel: 0,
        email: '',
        numberPeople: 0,
        comments: '',
        dateTime: ''
    },
}

const formBookingReducer = (state = defaultStateArticles, action) => {
    switch(action.type) {
        case 'EXIT_FROM_BOOKING':
            return {...state, displayForm: false};
        case 'OPEN_FROM_BOOKING':
            return {...state, displayForm: true};
        case 'NUMBER_PEOPLE':
            return {...state, numberPeople: action.people};
        case 'SEND_FORM':
            return {...state, infoUser: action.infoUserObj};
        default:
            return state;
    }
};

export default formBookingReducer;