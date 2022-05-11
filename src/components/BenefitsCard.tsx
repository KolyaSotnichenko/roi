import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

import b1 from '../../public/benefit1.png'

type Props = {
    image: StaticImageData;
    text: String;
}

const BenefitsCard = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                position: 'relative',
                width: '247px',
                height: '308px',
                '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                    width: '227px',
                },
                '@media screen and (max-width: 768px)': {
                    pl: '20px'
                },
                '@media screen and (max-width: 480px)': {
                    width: '247px'
                } 
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'absolute',
                    width: '215px',
                    height: '280px',
                    bgcolor: '#ffffff',
                    borderRadius: '20px',
                    zIndex: 2,
                    '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                        width: '198px',
                    }, 
                    '@media screen and (max-width: 480px)': {
                        width: '237px'
                    }, 
                }}
            >
                <Box
                    sx={{
                        pl: '49px',
                        '@media screen and (max-width: 480px)': {
                            pl: '25%'
                        }, 
                    }}
                >
                    <Image src={props.image} width={113} height={113} alt="Icon"/>
                </Box>
                <Box
                    sx={{
                        pl: '12px',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: '18px'
                        }}
                    >
                        {props.text}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '-4px',
                    left: '-4px',
                    width: '223px',
                    height: '296px',
                    border: '4px solid #10B981',
                    borderRadius: '20px',
                    filter: 'drop-shadow(0px 0px 30px #10B981)',
                    transform: 'rotate(-5deg)',
                    '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                        width: '200px',
                    },
                    '@media screen and (max-width: 768px)': {
                        left: '16px',
                    },
                    '@media screen and (max-width: 480px)': {
                        left: '6px',
                        width: '247px'
                    } 
                    
                }}
            >

            </Box>
        </Box>
    </>
  )
}

export default BenefitsCard