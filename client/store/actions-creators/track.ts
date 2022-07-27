import { Dispatch } from "react"
import axios from "../../node_modules/axios/index"
import { TrackAction, TrackActionTypes } from "../../types/track"


export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get(`http://localhost:5000/tracks`) 
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERRORS,
                payload: 'Произошла ошибка при загрузке треков',
            })
        }
    }
}

export const searchTracks = (query: string) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get(`http://localhost:5000/tracks/search?query=`+query) 
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERRORS,
                payload: 'Произошла ошибка при загрузке треков',
            })
        }
    }
}

export const removeTrack = (id: number | string) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            let response = await axios.delete(`http://localhost:5000/tracks/`+id) 
            response = await axios.get(`http://localhost:5000/tracks`)
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERRORS,
                payload: 'Произошла ошибка при загрузке треков',
            })
        }
    }
}