import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import {Button, Card, Grid, Box} from '@mui/material'
import { useRouter } from '../../node_modules/next/router'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { NextThunkDispach, wrapper } from '../../store/index'
import { fetchTracks, searchTracks } from '../../store/actions-creators/track'
import { TextField } from '../../node_modules/@mui/material/index'
import { useDispatch } from 'react-redux'

const index = () => {
    const router = useRouter()
    const {tracks, error} = useTypedSelector(state => state.track)
    const [query, setQuery] = useState<string>('')
    const dispatch = useDispatch() as NextThunkDispach;
    const [timer, setTimer] = useState(null)

    const search  = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if(timer) {
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value))
            }, 500)
        )
    }

    if(error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }
    return (
        <MainLayout title={'Список треков - музыкальная платформа'}>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TextField
                        fullWidth
                        value={query}
                        onChange={search}
                    />
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default index

/* export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispach
    await dispatch(await fetchTracks())
}) */
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispach
    await dispatch(await fetchTracks())
})