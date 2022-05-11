import Box from '@mui/material/Box'
import React from 'react'
import BenefitsCard from './BenefitsCard'
import b1 from '../../public/benefit1.png'
import b2 from '../../public/benefit2.png'
import b3 from '../../public/benefit3.png'
import b4 from '../../public/benefit4.png'
import b5 from '../../public/benefit5.png'

type Props = {}

const Benefits = (props: Props) => {
  return (
    <>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '400px',
                '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
                  justifyContent: 'space-around',
                  mt: '150px'
                },
                '@media screen and (max-width: 980px)': {
                  display: 'grid',
                  gridTemplateColumns: 'auto auto auto',
                  rowGap: '40px',
                  mt: '150px'
                },
                '@media screen and (max-width: 768px)': {
                  mt: '100px',
                  display: 'grid',
                  gridTemplateColumns: 'auto auto',
                  rowGap: '30px',
                },
                '@media screen and (max-width: 480px)': {
                  mt: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                },
                
            }}
        >
            <BenefitsCard image={b1} text="Полная поддержка с заменой приложения при блокировке" />
            <BenefitsCard image={b2} text="Команда с 10-летним опытом работы"/>
            <BenefitsCard image={b3} text="Гибкая настройка пушей"/>
            <BenefitsCard image={b4} text="Модель оплаты CPI (cost per install)"/>
            <BenefitsCard image={b5} text="Настройка любых необходимых событий"/>
        </Box>
    </>
  )
}

export default Benefits