import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import React from 'react'
import TextBlockWithSvg from './TextBlockWithSvg'

import icon from '../../public/promotion1.svg'
import icon2 from '../../public/promotion2.svg'

type Props = {}

const Convenience = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '161px'
            }}
        >
            <Box
                sx={{
                    width: '429px',
                    textAlign: 'center',
                }}
            >
                <Typography
                    color="#ffffff"
                    variant="h2"
                    sx={{
                        fontFamily: 'Inter-Bold',
                        fontSize: '48px',
                        fontWeight: 700,
                        '@media screen and (max-width: 980px)': {
                            fontSize: '36px'
                        },
                    }}
                >
                    Удобство работы
                </Typography>
            </Box>
        </Box>
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    mt: '99px',
                    '@media screen and (max-width: 768px)': {
                        flexDirection: 'column',
                        alignItems: 'center'
                    }, 
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '220px',
                        width: '520px',
                        textAlign: 'center',
                        borderRight: '4px solid #10B981',
                        borderBottom: '4px solid #10B981',
                        pb: '50px',
                        '@media screen and (max-width: 980px)': {
                            pb: '25px',
                            height: '170px',
                        },
                        '@media screen and (max-width: 768px)': {
                            borderRight: 'none',
                        },
                        '@media screen and (max-width: 480px)': {
                            width: '320px',
                            minHeight: '130px'
                        }
                    }}
                >
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Black',
                            fontSize: '24px',
                            fontWeight: 900,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Удобная модель оплаты CPI
                    </Typography>
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Bold',
                            fontSize: '24px',
                            fontWeight: 700,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Никаких лишних трат на разработку приложений — оплачиваете только установки
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '220px',
                        width: '520px',
                        textAlign: 'center',
                        borderBottom: '4px solid #10B981',
                        pb: '50px',
                        '@media screen and (max-width: 980px)': {
                            pb: '25px',
                            height: '170px',
                        },
                        '@media screen and (max-width: 480px)': {
                            width: '320px',
                            minHeight: '130px'
                        } 
                    }}
                >
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Black',
                            fontSize: '24px',
                            fontWeight: 900,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Опыт работы
                    </Typography>
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Bold',
                            fontSize: '24px',
                            fontWeight: 700,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                         Много лет разрабатываем приложения под Google Play, скоро планируем перейти на другие платформы
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '220px',
                        width: '520px',
                        textAlign: 'center',
                        borderBottom: '4px solid #10B981',
                        borderLeft: '4px solid #10B981',
                        pb: '50px',
                        '@media screen and (max-width: 980px)': {
                            pb: '25px',
                            height: '170px',
                        },
                        '@media screen and (max-width: 768px)': {
                            borderLeft: 'none',
                        },
                        '@media screen and (max-width: 480px)': {
                            width: '320px',
                            minHeight: '130px'
                        } 
                    }}
                >
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Black',
                            fontSize: '24px',
                            fontWeight: 900,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Упрощение продвижения
                    </Typography>
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Bold',
                            fontSize: '24px',
                            fontWeight: 700,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        С нашими приложениями легко проходить модерацию в рекламных системах
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    '@media screen and (max-width: 768px)': {
                        flexDirection: 'column',
                        alignItems: 'center'
                    } 
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '220px',
                        width: '520px',
                        textAlign: 'center',
                        borderRight: '4px solid #10B981',
                        pt: '62px',
                        '@media screen and (max-width: 980px)': {
                            pt: '31px',
                            height: '170px',
                        },
                        '@media screen and (max-width: 768px)': {
                            borderRight: 'none',
                            borderBottom: '4px solid #10B981'
                        },
                        '@media screen and (max-width: 480px)': {
                            width: '320px',
                            minHeight: '130px'
                        } 
                    }}
                >
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Black',
                            fontSize: '24px',
                            fontWeight: 900,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Премиум-дизайн
                    </Typography>
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Bold',
                            fontSize: '24px',
                            fontWeight: 700,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Качественное оформление — важный фактор для высокого CR
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '220px',
                        width: '520px',
                        textAlign: 'center',
                        // borderBottom: '4px solid #10B981'
                        pt: '62px',
                        '@media screen and (max-width: 980px)': {
                            pt: '31px',
                            height: '170px',
                        },
                        '@media screen and (max-width: 768px)': {
                            borderBottom: '4px solid #10B981'
                        },
                        '@media screen and (max-width: 480px)': {
                            width: '320px',
                            minHeight: '130px'
                        } 
                    }}
                >
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Black',
                            fontSize: '24px',
                            fontWeight: 900,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Гибкость сотрудничества
                    </Typography>
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Bold',
                            fontSize: '24px',
                            fontWeight: 700,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        При необходимости можем адаптировать систему под нужды клиента
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '220px',
                        width: '520px',
                        textAlign: 'center',
                        // borderBottom: '4px solid #10B981',
                        borderLeft: '4px solid #10B981',
                        pt: '62px',
                        '@media screen and (max-width: 980px)': {
                            pt: '31px',
                            height: '170px',
                        },
                        '@media screen and (max-width: 768px)': {
                            borderLeft: 'none'
                        },
                        '@media screen and (max-width: 480px)': {
                            width: '320px',
                            minHeight: '130px'
                        } 
                    }}
                >
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Black',
                            fontSize: '24px',
                            fontWeight: 900,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Профессиональный саппорт
                    </Typography>
                    <Typography
                        color="#ffffff"
                        sx={{
                            fontFamily: 'Inter-Bold',
                            fontSize: '24px',
                            fontWeight: 700,
                            '@media screen and (max-width: 980px)': {
                                fontSize: '18px'
                            }
                        }}
                    >
                        Задавайте вопросы и обращайтесь за помощью — мы на связи
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '118px'
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
                        Регистрация
                        </Typography>
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    mt: '154px',
                    '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                        justifyContent: 'space-around',
                    },
                    '@media screen and (max-width: 980px)': {
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '550px'
                    },
                }}
            >
                <TextBlockWithSvg title="Собственный планировщик пушей" text="Сегментируйте клиентов, настраивайте рассылки, анализируйте результаты, следите за статистикой" image={icon} />
                <TextBlockWithSvg title="Настройка событий" text="Оптимизируйте рекламную кампанию под конкретное событие или действия пользователя. (Интеграция с FB SDK, Firebase, Appsflyer)" image={icon2} />
            </Box>
        </Box>
    </>
  )
}

export default Convenience