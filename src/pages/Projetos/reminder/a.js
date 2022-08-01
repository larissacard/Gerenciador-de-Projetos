import { ADD_REMINDER } from "./constant";

export const AddReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('action in reminder', action);
    return action;
}