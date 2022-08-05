import { ADD_REMINDER, CLEAR_ALLREMINDERS, DELETE_REMINDER } from "./constant";

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action in reminder', action);
    console.log(action.dueDate)
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('delete in actions', action);
    return action;
}

export const clearReminders = () =>{
    return{
        type: CLEAR_ALLREMINDERS
    }
}