import React from 'react'
import {Button} from '@mui/material'
import Navbar from "../components/Navbar"
import MainLayout from "../layouts/MainLayout.tsx"

const Index = () => {
  return (
    <MainLayout>
        <div className='center'>
            <h1>Добро пожаловать!</h1>
            <h3>Здесь собраны лучшие треки!</h3>
        </div>
        <Navbar/>

        <style jsx>
            {`
                .center{
                    margin-top: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            `}
        </style>
    </MainLayout>
  )
}

export default Index