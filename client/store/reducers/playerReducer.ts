import { PlayerAction, PlayerActionTypes, PlayerState } from "../../types/player"

const initialState: PlayerState = {
    currentTime: 0,
    duration: 0, 
    active: null,
    volume: 50,
    pause: true
}

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
    switch (action.type) {
        case PlayerActionTypes.PAUSE:
            return {...state, pause: true}
            break;
        case PlayerActionTypes.PLAY:
            return {...state, pause: false}
            break;
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
            break;
        case PlayerActionTypes.SET_VOLUME:
            return {...state, volume: action.payload}
            break;
        case PlayerActionTypes.SET_DURATION:
            return {...state, duration: action.payload}
            break;
        case PlayerActionTypes.SET_ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}
            break;
    
        default:
            return state;
            break;
    }
}
