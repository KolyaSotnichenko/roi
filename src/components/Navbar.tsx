import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '../../public/Logo.svg'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: '13px',
                zIndex: 2,
                '@media screen and (max-width: 480px)': {
                    mb: '70px'
                },
                
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 2 
                }}
            >
                <Box
                    sx={{
                        width: '129px',
                        height: '103px',
                        '@media screen and (max-width: 480px)': {
                            width: '73px',
                            height: '70px',
                            ml: '40px'
                        },
                        '@media screen and (min-width: 980px)': {
                            width: '73px',
                            height: '70px',
                            ml: '90px'
                        }, 
                        '@media screen and (min-width: 1366px)': {
                            width: '73px',
                            height: '70px',
                            ml: '120px'
                        },
                        '@media screen and (min-width: 1400px)': {
                            width: '73px',
                            height: '70px',
                            ml: '50px'
                        },  
                    }}
                >
                    <Image src={Logo}/>
                </Box>
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: "24px",
                        fontWeight: 400,
                        pl: '43px',
                        // '@media screen and (max-width: 979px)': {
                        //     color: '#ffffff'
                        // },
                        '@media screen and (max-width: 480px)': {
                            fontSize: '18px'
                        }
                    }}
                >
                    Home
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 2,
                    '@media screen and (max-width: 480px)': {
                        flexDirection: 'column',
                        rowGap: '20px'
                    } 
                }}
            >
                <Link
                    href="/"
                >
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: '24px',
                            fontWeight: 400,
                            // '@media screen and (max-width: 979px)': {
                            //     color: '#ffffff'
                            // },
                            '@media screen and (max-width: 480px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Log In
                    </Typography>
                </Link>
                <Link
                    href="/"
                >
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: '24px',
                            fontWeight: 400,
                            pl: '55px',
                            // '@media screen and (max-width: 979px)': {
                            //     color: '#ffffff'
                            // },
                            '@media screen and (max-width: 480px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Registration
                    </Typography> 
                </Link>
            </Box>
        </Box>
    </>
  )
}

export default Navbar