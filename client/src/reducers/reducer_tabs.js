import { CHANGE_SELECTED_TAB } from "../actions";

const initialState = {
    tabs1: null
};

export default function tabsReducer(state = initialState, action) {
    switch (action.type) {
    case CHANGE_SELECTED_TAB:
        return action.tab;
    default:
        return state;
    }
}
