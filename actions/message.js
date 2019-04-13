export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';

export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export function showMessage(message, messageType){
    return{
        type: SHOW_MESSAGE,
        message,
        messageType
    };
};

export function closeMessage(){
    return{
        type: CLOSE_MESSAGE,
    };
};