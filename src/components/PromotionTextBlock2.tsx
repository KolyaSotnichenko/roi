import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

type Props = {
    text: string;
}

const PromotionTextBlock = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                position: 'relative',
                width: '469px',
                height: '127px',
                '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                    width: '320px',
                    height: '200px'
                },
                '@media screen and (max-width: 768px)': {
                    width: '600px',
                },
                '@media screen and (max-width: 480px)': {
                    width: '350px',
                    height: '150px',
                    ml: '25px'
                },
                '@media screen and (min-width: 1400px) and (max-width: 1920px)': {
                    width: '430px',
                    height: '170px'
                }, 
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    borderLeft: '4px solid #FFFFFF',
                    borderTop: '4px solid #FFFFFF',
                    borderTopLeftRadius: '20px',
                    width: '149px',
                    height: '64px',
                    top: '-30px',
                    left: '-30px',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45))',
                }}
            ></Box>
            <Box
                sx={{
                    textAlign: 'center',
                    width: '420px',
                    height: '88px',
                    '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                        width: '300px',
                        textAlign: 'start'
                    },
                    '@media screen and (max-width: 768px)': {
                        width: '550px',
                    },
                    '@media screen and (max-width: 480px)': {
                        width: '330px',
                    } 
                }}
            >
                <Typography
                    color='#ffffff'
                    sx={{
                        fontFamily: 'Inter-Bold',
                        fontSize: '18px',
                        fontWeight: 700
                    }}
                >
                    {props.text}
                </Typography>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    borderRight: '4px solid #FFFFFF',
                    borderBottom: '4px solid #FFFFFF',
                    borderBottomRightRadius: '20px',
                    width: '149px',
                    height: '64px',
                    bottom: 0,
                    right: 0,
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45))',
                }}
            ></Box>
        </Box>
    </>
  )
}

export default PromotionTextBlock