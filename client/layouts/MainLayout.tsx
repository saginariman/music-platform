import React from 'react'
import Navbar from '../components/Navbar'
import Player from '../components/Player';
import { Container } from '../node_modules/@mui/material/index';
import Head from '../node_modules/next/head';

type Props = {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
};
const MainLayout:React.FC<Props> = ({children, title, description, keywords}) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta name='description' content={`Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым. ` + description}/>
        <meta name='robots' content='index, follow'/>
        <meta name='keywords' content={keywords || "Музыка, Треки, артисты, песни, музыканты, хиты, мега, клубняк"}/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <Navbar/>
      <Container style={{margin: '90px 0'}}>
          {children}
      </Container>
      <Player/>
    </>
  )
}

export default MainLayout