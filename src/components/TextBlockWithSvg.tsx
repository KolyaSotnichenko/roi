import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    title: String;
    text: String;
    image: HTMLImageElement;
}

const TextBlockWithSvg = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                position: 'relative',
                width: '620px',
                height: '190px',
                '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                    width: '400px',
                    height: '250px'
                },
                '@media screen and (max-width: 480px)': {
                    width: '350px',
                    ml: '25px'
                },
                '@media screen and (min-width: 1400px) and (max-width: 1920px)': {
                    width: '500px',
                    height: '200px'
                }, 
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '-88px',
                    left: '-69px',
                    '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                        width: '100px',
                        height: '101px'
                    },
                    '@media screen and (max-width: 768px)': {
                        left: '-29px'
                    },
                    '@media screen and (max-width: 480px)': {
                        width: '60px',
                        height: '61px',
                        top: '-48px'
                    } 
                }}
            >
                <Image src={props.image} width={111} height={112} alt="Icon" />
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    borderLeft: '4px solid #FFFFFF',
                    borderBottom: '4px solid #FFFFFF',
                    borderBottomLeftRadius: '20px',
                    width: '149px',
                    height: '64px',
                    bottom: 0,
                    left: '-30px',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45))',
                }}
            ></Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    width: '600px',
                    height: '130px',
                    '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                        width: '400px',
                        textAlign: 'start'
                    },
                    '@media screen and (max-width: 480px)': {
                        width: '330px'
                    },
                    '@media screen and (min-width: 1400px) and (max-width: 1920px)': {
                        width: '480px',
                    }, 
                }}
            >
                <Typography
                    color="#ffffff"
                    sx={{
                        fontFamily: 'Inter-ExtraBold',
                        fontSize: '24px',
                        fontWeight: 800,
                        '@media screen and (max-width: 980px)': {
                            fontSize: '18px'
                        }
                    }}
                >
                    {props.title}
                </Typography>
                <Typography
                    color='#ffffff'
                    sx={{
                        fontFamily: 'Inter-SemiBold',
                        fontSize: '24px',
                        fontWeight: 600,
                        '@media screen and (max-width: 980px)': {
                            fontSize: '18px'
                        },
                        '@media screen and (max-width: 480px)': {
                            fontSize: '16px'
                        } 
                    }}
                >
                    {props.text}
                </Typography>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    borderRight: '4px solid #FFFFFF',
                    borderTop: '4px solid #FFFFFF',
                    borderTopRightRadius: '20px',
                    width: '149px',
                    height: '64px',
                    top: '-30px',
                    right: 0,
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45))',
                }}
            ></Box>
        </Box>
    </>
  )
}

export default TextBlockWithSvg