import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AwaitsYou from '../components/AwaitsYou'
import Benefits from '../components/Benefits'
import Convenience from '../components/Convenience'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import styles from '../styles/Home.module.css'

import planets from '../../public/Planets.png'
import rocket from '../../public/Raket.png'
import headerBg from '../../public/bgheader.png'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <link rel="preload" href='/fonts/Inter/Inter-Regular.ttf' as="font" crossOrigin=""/>
      <link rel="preload" href='/fonts/GothamPro/GothamPro-Medium.ttf' as="font" crossOrigin=""/>
    </Head>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        width: '100%',
        textAlign: 'end',
        // '@media screen and (max-width: 979px)': {
        //   display: 'none'
        // }
      }}
    >
      <Image src={headerBg} />
    </Box>
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        top: '18%',
        left: '150px',
        '@media screen and (max-width: 979px)': {
          display: 'none'
        }
      }}
    >
      <Box>
        <Image src={planets} width={1259} height={896} />
      </Box>
      <Box>
        <Image src={rocket} width={610} height={725}/>
      </Box>
    </Box>
    <Container maxWidth={false} sx={{
        maxWidth: '1435px',
        '@media screen and (max-width: 1920px)': {
          maxWidth: '1300px'
      },
    }}>
      <Navbar />
      <Header />
      <main>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '251px',
            '@media screen and (max-width: 768px)': {
              mt: '150px',
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '655px',
              justifyContent: 'space-between',
              zIndex: 2,
              '@media screen and (max-width: 480px)': {
                    flexDirection: 'column',
                    alignItems: 'center'
              } 

            }}
          >
            <Box
              sx={{
                width: '300px',
                pt: '11px',
                pb: '10px',
                pl: '36px',
                pr: '36px',
                boxShadow: '5px 7px 12px rgba(43, 43, 43, 0.7)',
                borderRadius: '20px',
                textAlign: 'center',
                bgcolor: '#ffffff',
                '@media screen and (max-width: 480px)': {
                    mb: '50px'
                } 

              }}
            >
              <Link
                href="/"
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '36px',
                    fontWeight: 400
                  }}
                >
                  Регистрация
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                width: '300px',
                pt: '11px',
                pb: '10px',
                pl: '36px',
                pr: '36px',
                boxShadow: '5px 7px 12px rgba(43, 43, 43, 0.7)',
                border: '3px solid #10B981',
                borderRadius: '20px',
                textAlign: 'center',
                bgcolor: '#ffffff'

              }}
            >
              <Link
                href="/"
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '36px',
                    fontWeight: 400
                  }}
                >
                  Подробнее
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        <Benefits />
        <Promotion />
        <Convenience />
        <AwaitsYou />
      </main>
    </Container>
    </>
  )
}

export default Home
