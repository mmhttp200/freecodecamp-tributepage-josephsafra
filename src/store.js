import {createStore} from 'redux';

const initialState = {
    journey: {
        events: [
            {title: "1938", description: "Joseph was born in Beirute, Lebanon, to a Sephardic Jewish family"},
            {title: "1952", description: "The Safra family moved to Brazil"},
            {title: "1955", description: "Joseph Safra founded Banco Safra"},
            {title: "2020", description: "Joseph Safra dies"}
        ]
    }
};

function journeyEventsReducer(state, action){
    switch(action.type){
        case 'get':
            return state.journey.events;
        default:
            return state;
    }
}


const store = createStore(journeyEventsReducer, initialState);

export default store;