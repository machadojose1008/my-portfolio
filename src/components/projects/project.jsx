import { Box, Grid, Typography } from '@mui/material';
import './project.styles.scss';
import { Image } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';



const Project = ({ name, description, image, gitLink, viewLink, tecnologies }) => {



    return (
        <div className='project'>
            <Box >
                <h3 >
                    <a className='nome-projeto' href={viewLink}>{name}</a>
                </h3>
                <Grid container spacing={1}>
                    <Grid item md={7} xs={12}>
                        <Grid item xs={12}>
                            <Typography className='description-text' maxWidth={"80%"} variant='body1'>{description}</Typography>
                        </Grid>
                        <Grid item xs={8} display={'flex'} justifyContent='flex-end'  >
                            
                                {tecnologies.map((tecnologie) => (
                                    <Typography
                                        className='project-image'
                                        gutterBottom
                                        border={'1px solid black'}
                                        borderRadius={'20px'}
                                        margin={'5px'}
                                        noWrap
                                        padding={'5px 10px'}
                                        variant='h6' >
                                        {tecnologie}
                                    </Typography>
                                ))}
                            

                        </Grid>
                        <Grid item xs={10} display={'flex'} justifyContent={'flex-end'}>
                            <a href={gitLink} target='_blank' rel='noopener noreferrer'>
                                <GitHubIcon sx={{ fontSize: '40px', color: 'black' }} />
                            </a>
                        </Grid>

                    </Grid>
                    <Grid item md={5} xs={12}>
                        <a href={viewLink} target='_blank' rel='noopener noreferrer'>
                            <Image className='project-image' src={image} alt='finalnote' width={400} height={250} />
                        </a>
                    </Grid>
                </Grid>


            </Box>

        </div>
    )

}

export default Project;