import {ActionsTypes, DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.newMessageBody;
            return state;
        case "SEND-MESSAGE":
            const messageBody = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: 7, message: messageBody});
            return state;
        default:
            return state;

    }

    /*if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.newMessageBody = action.newMessageBody
    } else if (action.type === "SEND-MESSAGE") {
        //const messageBody = {id: 1, message: action.newMessage}
        const messageBody = state.newMessageBody
        state.newMessageBody = ""
        state.messagesData.push({id: 7, message: messageBody})
    }
    return state*/
}

export const updateNewMessageBodyAC = (newMessageBody: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessageBody: newMessageBody
    } as const
}

export const sendMessageAC = (newMessage: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessage: newMessage
    } as const
}