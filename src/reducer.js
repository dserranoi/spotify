export const initialState = {
    user:null, 
    playlists:[],
    playing: false, 
    item:null,
    discover_weekly:null,
    // token:'BQBBhmUrK8kQZxX-sMS0WlNqFs5MX34Qnl9ft0N3fLa6Sw52JNNpKmrtI50jO9CC8Ns_Ahbr1iT9ofINQiz23g9B2fVrqvMEw2i9Rz0kdb1bX0eUcuFJjciDzEzDzmKnGZr8XmA7fJ0Ej-l5'
}

const reducer = (state, action) => {
    
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }
        case 'SET_DISCOVERWEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;