import React from 'react'
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss'
import { PlayArrow, Pause, Delete } from '../node_modules/@mui/icons-material/index';
import {IconButton, Card, Grid} from '../node_modules/@mui/material'
import { useRouter } from '../node_modules/next/router';
import { useActions } from '../hooks/useActions';
import { useDispatch } from 'react-redux';
import { removeTrack } from '../store/actions-creators/track';
import { NextThunkDispach } from '../store/index';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const {playTrack, pauseTrack, setActiveTrack} = useActions()
    const dispatch = useDispatch() as NextThunkDispach;

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    const deleteTrack = async (e: React.MouseEvent<HTMLElement>, trackId: number | string)  => {
        e.stopPropagation();
        console.log('trackId: ' + trackId);
        
        await dispatch(await removeTrack(trackId))
    }
  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
        <IconButton onClick={play}>
            {!active
                ? <PlayArrow/>
                : <Pause/>
            }
        </IconButton>
        <img width={70} height={70} src={'http://localhost:5000/'+track.picture}/>
        <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
            <div>{track.name}</div>
            <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
        </Grid>
        {active && <div>02:42 / 03:22</div>}
        <IconButton onClick={(e) => deleteTrack(e, track._id)} style={{marginLeft: 'auto'}}>
            <Delete/>
        </IconButton>
    </Card>
  )
}

export default TrackItem