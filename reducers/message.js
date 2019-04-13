import { SHOW_MESSAGE, CLOSE_MESSAGE } from '../actions/message';

export default function message (state = {}, action) {
    switch(action.type) {
        case SHOW_MESSAGE:
            return {
                message: action.message,
                messageType: action.messageType
            };
        case CLOSE_MESSAGE:
            return {};
        default:{
            return state;
        }
    }
}