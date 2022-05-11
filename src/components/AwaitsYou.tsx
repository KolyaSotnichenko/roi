import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import google from '../../public/google-play.png'

type Props = {}

const AwaitsYou = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '190px',
                '@media screen and (max-width: 980px)': {
                    mt: '150px',
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    width: '915px',
                    height: '270px',
                    '@media screen and (max-width: 980px)': {
                        width: '815px',
                        height: '230px',
                    }
                }}
            >
                <Typography
                    color="#ffffff"
                    sx={{
                        fontFamily: 'Inter-Bold',
                        fontSize: '48px',
                        fontWeight: 700,
                        '@media screen and (max-width: 480px)': {
                            fontSize: '36px'
                        } 
                    }}
                >
                    Что вас ждет после регистрации
                </Typography>
                <Typography
                    color="#ffffff"
                    sx={{
                        fontFamily: 'Inter-SemiBold',
                        fontSize: '36px',
                        fontWeight: 600,
                        '@media screen and (max-width: 980px)': {
                            fontSize: '24px'
                        },
                    }}
                >
                    Вы получаете готовое решение, полностью закрывающее вопрос размещения в <span style={{display: 'inline-flex', alignItems: 'center', paddingLeft: '14px', paddingRight: '14px', border: '3px solid #10B981', borderRadius: '80px',}}><Image src={google} width={43} height={43} />Google Play</span> Процесс предельно прост и понятен.
                </Typography>
            </Box>
        </Box>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '83px',
                '@media screen and (max-width: 768px)': {
                    mt: 25,
                },
                '@media screen and (max-width: 480px)': {
                    mt: 20
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
                        pt: '8px',
                        pb: '7px',
                        pl: '24px',
                        pr: '24px'
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
                            fontWeight: 400,
                        }}
                        >
                        Регистрация
                    </Typography>
                </Link>
            </Box>
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                mt: '300px',
                '@media screen and (max-width: 980px)': {
                    mt: '150px',
                },
                '@media screen and (max-width: 768px)': {
                    mt: '100px',
                },
                '@media screen and (max-width: 480px)': {
                    flexDirection: 'column',
                } 
            }}
        >
            <Typography
                color="#ffffff"
                sx={{
                    fontFamily: 'Inter',
                    fontSize: '36px',
                    '@media screen and (max-width: 980px)': {
                        fontSize: '24px'
                    },
                    '@media screen and (max-width: 480px)': {
                        fontSize: '24px'
                    } 
                }}
            >
                Регистрируетесь.
            </Typography>
            <Box
                sx={{
                    width: '489px',
                    textAlign: 'center',
                    '@media screen and (max-width: 480px)': {
                        width: '350px',
                        alignSelf: 'start'
                    } 
                }}
            >
                <Typography
                    color="#ffffff"
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '36px',
                        '@media screen and (max-width: 980px)': {
                            fontSize: '24px'
                        },
                        '@media screen and (max-width: 480px)': {
                            fontSize: '24px '
                        } 
                    }}
                >
                    Ожидаете модерацию вашего профиля в системе.
                </Typography>
            </Box>
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                mt: '140px',
                '@media screen and (max-width: 980px)': {
                    mt: '70px',
                },
                '@media screen and (max-width: 480px)': {
                    flexDirection: 'column',
                    mt: '35px'
                }, 
            }}
        >
            <Box
                sx={{
                    width: '576px',
                    textAlign: 'center',
                    '@media screen and (max-width: 480px)': {
                        width: '350px'
                    } 
                }}
            >
                <Typography
                    color="#ffffff"
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '36px',
                        '@media screen and (max-width: 980px)': {
                            fontSize: '24px'
                        },
                        '@media screen and (max-width: 480px)': {
                            fontSize: '24px'
                        } 
                    }}
                >
                    Апрувим вас в системы и отправляем доступы на почту.
                </Typography>
            </Box>
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                mt: '172px',
                '@media screen and (max-width: 980px)': {
                    mt: '86px',
                },
                '@media screen and (max-width: 480px)': {
                    mt: '43px'
                } 
            }}
        >
            <Box
                sx={{
                    width: '930px',
                    textAlign: 'center',
                    '@media screen and (max-width: 480px)': {
                        width: '350px'
                    } 
                }}
            >
                <Typography
                    color="#ffffff"
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '36px',
                        '@media screen and (max-width: 980px)': {
                            fontSize: '24px'
                        },
                        '@media screen and (max-width: 480px)': {
                            fontSize: '24px'
                        } 
                    }}
                >
                    Работает по принципу pre-pay.
                    Кладете депозит и разблокируете весь функционал.
                    Деньги со счета списываются за инсталлы.
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '489px',
                    textAlign: 'center',
                    '@media screen and (max-width: 480px)': {
                        width: '350px'
                    } 
                }}
            >
                <Typography
                    color="#ffffff"
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '36px',
                        '@media screen and (max-width: 980px)': {
                            fontSize: '24px'
                        },
                        '@media screen and (max-width: 480px)': {
                            fontSize: '24px'
                        } 
                    }}
                >
                    Ожидаете модерацию вашего профиля в системе.
                </Typography>
            </Box>
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                mt: '187px',
                mb: '100%',
                '@media screen and (max-width: 980px)': {
                    mt: '93px',
                },
                '@media screen and (max-width: 480px)': {
                    mt: '45px'
                } 
            }}
        >
            <Box
                sx={{
                    width: '570px',
                    textAlign: 'center',
                    '@media screen and (max-width: 480px)': {
                        width: '350px'
                    } 
                }}
            >
                <Typography
                    color="#ffffff"
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '36px',
                        '@media screen and (max-width: 980px)': {
                            fontSize: '24px'
                        },
                        '@media screen and (max-width: 480px)': {
                            fontSize: '24px'
                        } 
                    }}
                >
                    Настраиваете все необходимое внутри платформы для работы.
                </Typography>
            </Box>
        </Box>
    </>
  )
}

export default AwaitsYou