import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '116px',
                    height: '313px',
                    width: '985px',
                    '@media screen and (max-width: 980px)': {
                        width: '800px',
                    },
                    '@media screen and (max-width: 768px)': {
                        width: '650px',
                    },
                    '@media screen and (max-width: 480px)': {
                        width: '390px',
                        mt: '126px'
                    },
                    '@media screen and (min-width: 1200px) and (max-width: 1366px)': {
                        mt: '50px'
                    } 
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{
                            fontFamily: 'GothamPro-Medium',
                            fontSize: '36px',
                            fontWeight: 'bold',
                            '@media screen and (max-width: 768px)': {
                                fontSize: '24px',
                            },
                            '@media screen and (max-width: 480px)': {
                                color: '#ffffff'
                            }
                        }}
                    >
                        ???????????????????? ???????????? ?? ???????????????? ROI
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            // fontSize: '54px',
                            fontFamily: 'GothamPro-Medium',
                            fontWeight: 'bold',
                            '@media screen and (max-width: 980px)': {
                                fontSize: '48px',
                            },
                            '@media screen and (max-width: 768px)': {
                                fontSize: '36px',
                            },
                            '@media screen and (max-width: 480px)': {
                                color: '#ffffff'
                            }
                        }}
                    >
                        ?????????????????? ?????????? 
                        ?????????????????????? ??????????????????????????
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'GothamPro-Medium',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            '@media screen and (max-width: 768px)': {
                                fontSize: '18px',
                            },
                            '@media screen and (max-width: 480px)': {
                                color: '#ffffff'
                            }
                        }}
                    >
                        ???????????? ???????????????????????????????????? ?????????????????? ?????? ???????????? ?? ???????????????????? ????????????????????????
                    </Typography>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Header