import profileReducer from "./redusers/profileReducer";
import sidebarReducer from "./redusers/sidebarReducer";
import dialogsReducer from "./redusers/dialogsReducer";

let store = {
    _state: {
        profilePage: {
            postsData : [
                { id:1, message:'First post', likeCount: 12},
                { id:1, message:'Hey hey hey', likeCount: 9},
                { id:1, message:'Yo', likeCount: 34}
            ],
            textareaValue: 'default'
        },
        dialogsPage: {
            dialogsData : [
                { id:1, name:'Dimych'},
                { id:2, name:'Maks'},
                { id:3, name:'Taras'}
            ],
            messagesData : [
                { id:1, message:'Hello'},
                { id:2, message:'How is you name ?'},
                { id:3, message:'Yo'}
            ],
            textareaValue: ''
        },
        sidebar:{
            friends:[
                {id:1, name: "Andry"},
                {id:2, name: "Maks"},
                {id:3, name: "Alex"}
            ]
        }
    },
    _callSubscriber () {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }
};

export default store