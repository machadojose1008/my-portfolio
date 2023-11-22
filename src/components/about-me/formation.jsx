import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';



const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#000000',
  width: 300,
  height: 300,
  margin: theme.spacing(1),
  border: '2px solid #020202',
  borderRadius: theme.spacing(4),
  transition: 'transform 0.3s',
  boxShadow: '0 0 10px black',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));


const HighlightedCardWrapper = styled(CardWrapper)(({ theme }) => ({
  backgroundColor: '#fff', // Fundo branco
  border: '2px solid #000', // Borda preta
  boxShadow: '0 0 10px #000',
  '&:hover': {
    transform: 'scale(1.05)',
   
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
}));

const courses = [
  {
    title: 'Bacharelado em Engenharia de Software',
    summary: 'Graduação em engenharia de software finalizada no primeiro semestre de 2023.',
    hours: 'Unigran Dourados™',
    formation: true
  },
  {
    title: 'Complete React Developer',
    summary: 'Nele aprendi a trabalhar com React, Redux, Css e Js com Styled Components, Hooks, Context Api, Suspense.',
    hours: '42 horas  Zero To Mastery Udemy™',
  },
  {
    title: 'CC50 - Introdução Ciência da computação',
    summary: 'Conhecimentos desenvolvidos em lógica de programação com C, Python, Sql e noções de HTML5 e CSS3',
    hours: '60 horas Harvard™',
  },
  // Adicione mais cursos conforme necessário
];

const Formation = () => {
  return (
    <Container  >
      <Title paddingBottom='40px' variant="h4" paddingLeft='40px' align="center">
        Formação
      </Title>
      <Grid paddingLeft='40px' display='flex' justifyContent="center" flexWrap='wrap' spacing={7}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display='flex' justifyContent="center" alignItems='center'>
            {index === 0 ? (
              <HighlightedCardWrapper>
                <CardContent>
                  <Typography variant="h6" paddingBottom='20px'>{course.title}</Typography>
                  <Typography paddingBottom='20px'>{course.summary}</Typography>
                  <Typography>{course.hours}</Typography>
                </CardContent>
              </HighlightedCardWrapper>
            ) : (<CardWrapper >
              <CardContent  >
                <Typography variant="h6" paddingBottom='20px'>{course.title}</Typography>
                <Typography paddingBottom='20px'>{course.summary}</Typography>
                <Typography>{course.hours}</Typography>
              </CardContent>
            </CardWrapper>

            )}

          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Formation;
