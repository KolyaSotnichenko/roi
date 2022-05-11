import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

type Props = {
    title: String
    text: String
}

const PromotionCard = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                position: 'relative',
                width: '361px',
                height: '166px',
                '@media screen and (max-width: 768px)': {
                    width: '300px',
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'absolute',
                    width: '350px',
                    height: '155px',
                    bgcolor: '#ffffff',
                    borderRadius: '20px',
                    zIndex: 2,
                    '@media screen and (max-width: 768px)': {
                        width: '300px',
                    }
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        '@media screen and (max-width: 768px)': {
                            width: '280px',
                        }
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Inter-ExtraBold',
                            fontSize: '24px',
                            fontWeight: 800,
                            '@media screen and (max-width: 768px)': {
                                fontSize: '18px',
                            }
                        }}
                    >
                        {props.title}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Inter-ExtraBold',
                            fontSize: '18px',
                            fontWeight: 600,
                            '@media screen and (max-width: 768px)': {
                                fontSize: '16px',
                            }
                        }}
                    >
                        {props.text}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '13px',
                    left: '13px',
                    width: '350px',
                    height: '155px',
                    border: '4px solid #10B981',
                    borderRadius: '20px',
                    filter: 'drop-shadow(0px 0px 30px #10B981)',
                    '@media screen and (max-width: 768px)': {
                        width: '300px',
                    }
                    
                }}
            >

            </Box>
        </Box>
    </>
  )
}

export default PromotionCard