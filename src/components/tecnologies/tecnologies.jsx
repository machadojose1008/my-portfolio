import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './tecnologies.styles.scss';
import HtmlIcon from '../icons/html5-icon';
import JavascriptIcon from '../icons/javascript-icon';
import GitIcon from '../icons/git-icon';
import CssIcon from '../icons/css-icon';
import ReactIcon from '../icons/react-icon';
import SassIcon from '../icons/sass-icon';
import FigmaIcon from '../icons/figma-icon';
import { Box, Typography } from '@mui/material';
import { css } from '@emotion/react';



const Tecnologies = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4, // Número de ícones visíveis ao mesmo tempo
        slidesToScroll: 2, // Número de ícones para rolar de cada vez
        speed: 1000, // Velocidade da animação (em milissegundos)
        autoplay: true, // Ativar a reprodução automática
        autoplaySpeed: 2000, // Intervalo entre animações (em milissegundos)
        arrows: false, // Ocultar setas de navegação
        centerMode: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerPadding: '2px',
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 0.7,
                    slidesToScroll: 1
                }
            }
        ]
    };

    /** Defina estilos condicionais com Emotion */
    const centeredTypography = css`
        text-align: center;
        font-size: 2rem; /* Tamanho de fonte padrão */
            @media (max-width: 400px) {
                padding-bottom: 30px;
                 font-size: 1.5rem; /* Tamanho de fonte menor para telas menores que 400px */
            } 
`;

    return (
        <div className='tecnologies-container'>
            <Typography

                variant='h4'
                component='div'
                gutterBottom
                sx={{ ...centeredTypography, flexGrow: 1, paddingBottom: '50px' }}
            >
                Principais Tecnologias:
            </Typography>
            <Slider {...settings} className='icons'>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <HtmlIcon />
                    </Box>
                    <Typography variant='h7' component='div' align='center' >HTML 5</Typography>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <JavascriptIcon />
                    </Box>
                    <Typography variant='h7' component='div' align='center'>JavaScript</Typography>
                </Box>
                <Box >
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <GitIcon />
                    </Box>
                    <Typography variant='h7' component='div' align='center'>Git</Typography>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CssIcon />
                    </Box>
                    <Typography variant='h7' component='div' align='center'>Css 3</Typography>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <ReactIcon />
                    </Box>
                    <Typography variant='h7' component='div' align='center'>React.js</Typography>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <SassIcon />
                    </Box>
                    <Typography variant='h7' component='div' align='center' >Sass</Typography>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <FigmaIcon />
                    </Box>
                    <Typography variant='h7' component='div' align='center'>Figma</Typography>
                </Box>
            </Slider>
        </div>
    );
}

export default Tecnologies;
