import { Box, Typography } from '@mui/material'
import React from 'react'
import PromotionCard from './PromotionCard'
import PromotionTextBlock from './PromotionTextBlock'
import PromotionTextBlock2 from './PromotionTextBlock2'
import prom1 from '../../public/promotion1.svg'

type Props = {}

const Promotion = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '102px'
            }}
        >
            <Box
                sx={{
                    width: '771px',
                    textAlign: 'center'
                }}
            >
                <Typography
                    color="#ffffff"
                    variant="h2"
                    sx={{
                        fontFamily: 'Inter-Bold',
                        fontSize: '48px',
                        fontWeight: 700,
                        '@media screen and (max-width: 480px)': {
                            fontSize: '36px'
                        } 
                    }}
                >
                    Продвижение любых тематик в любых сетях
                </Typography>
            </Box>
        </Box>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '72px',
                '@media screen and (max-width: 980px)': {
                    display: 'grid',
                    gridTemplateColumns: 'auto auto',
                    rowGap: '40px',
                },
                '@media screen and (max-width: 768px)': {
                    display: 'grid',
                    gridTemplateColumns: 'auto auto',
                    rowGap: '40px',

                },
                '@media screen and (max-width: 480px)': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                } 
            }}
        >
            <PromotionCard title="Увеличение эффективности" text="Повышение retention (удержание пользователей) и ROI" />
            <PromotionCard title="Уже готовые приложения" text="Не нужно платить за аренду или покупку - только за фактические инсталлы" />
            <PromotionCard title="Запуск за 30 минут" text="Обратились - получили решение в тот же день" />
        </Box>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '131px',
                height: '334px',
                '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                    justifyContent: 'space-around',
                },
                '@media screen and (max-width: 980px)': {
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '500px'
                },
                '@media screen and (max-width: 768px)': {
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '600px'
                },
                '@media screen and (min-width: 1400px) and (max-width: 1920px)': {
                    height: '440px'
                },
            }}
        >
            <Box
                sx={{
                    alignSelf: 'end',
                    '@media screen and (max-width: 980px)': {
                        alignSelf: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        alignSelf: 'center'
                    },
                }}
            >
                <PromotionTextBlock text="Предлагаем автоматизированную платформу по продвижению различных офферов и вертикалей на Facebook, Google и любых иных источниках." />
            </Box>
            <Box
                sx={{
                    '@media screen and (max-width: 980px)': {
                        alignSelf: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        alignSelf: 'center',
                    }
                }}
            >
                <PromotionTextBlock text="Наш сервис предназначен для тех, кто хочет увеличить свою прибыль, при этом уменьшив проблемы с прохождением модерации для любых traffic driven типов бизнеса." />
            </Box>
            <Box
                sx={{
                    alignSelf: 'end',
                    '@media screen and (max-width: 980px)': {
                        alignSelf: 'center'
                    },
                    '@media screen and (max-width: 768px)': {
                        alignSelf: 'center',
                    }
                }}
            >
                <PromotionTextBlock2 text="Возможен индвивидуальный подход для решения ваших задач - с возможностью кастомизации и адаптации под ваши продукты или офферы." />
            </Box>
        </Box>
    </>
  )
}

export default Promotion