import { TrackAction, TrackActionTypes, TrackState } from "../../types/track"

const initialState: TrackState = {
    tracks: [],
    error: ''
}

export const trackReducer = (state = initialState, action: TrackAction): TrackState => {
    switch(action.type) {
        case TrackActionTypes.FETCH_TRACKS:
            return {...state, tracks: action.payload}
            break;
        case TrackActionTypes.FETCH_TRACKS_ERRORS:
            return {...state, error: action.payload}
            break;
        default:
            return state;
            break;
    }
}