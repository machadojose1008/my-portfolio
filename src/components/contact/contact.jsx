import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import LinkedinIcon from '../icons/linkedin-icon';
import GitIcon from '../icons/git-icon';
const Contact = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:jgbm81@hotmail.com';
    };

    return (

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
            }}
        >

            <Box
                sx={{
                    maxWidth: 600,
                    width: '100%',
                    padding: 3,
                    border: '1px solid #ccc',
                    borderRadius: theme => theme.shape.borderRadius,
                    boxShadow: theme => theme.shadows[3],
                    backgroundColor: '#fff',
                }}
            >
                <Typography variant='h2'>CONTATO</Typography>
                <Typography variant='h7'>Entre em contato comigo pelo formulário abaixo ou pelas minhas redes</Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 6,
                        marginTop: 2,
                    }}
                >
                    <Button
                        startIcon={<GitIcon />}
                        variant="outlined"
                        href="https://github.com/machadojose1008"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                    <Button
                        startIcon={<LinkedinIcon />}
                        variant="outlined"
                        href="https://www.linkedin.com/in/jos%C3%A9-guilherme-benites-machado-a905b4170/"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>

                </Box>



                <TextField label="Nome" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Mensagem" multiline rows={4} fullWidth margin="normal" />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleEmailClick}>
                        Enviar Email
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default Contact;