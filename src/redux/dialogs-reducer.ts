import {ActionsTypes, DialogsPageType} from "./store";

let initialState = {
    dialogsData: [
        {id: "1", name: "Maks"},
        {id: "2", name: "Nick"},
        {id: "3", name: "Helen"},
        {id: "4", name: "Kris"},
        {id: "5", name: "Mike"},
        {id: "6", name: "Greg"},
    ],
    messagesData: [
        {id: 1, message: "Hi."},
        {id: 2, message: "How have you been?"},
        {id: 3, message: "It was a perfect day!"},
        {id: 4, message: "Hm..."},
        {id: 5, message: "Nope!"},
        {id: 6, message: "So sorry."},
    ],
    newMessageBody: ''
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
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