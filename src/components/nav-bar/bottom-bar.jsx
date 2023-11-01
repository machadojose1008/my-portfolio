import { Box, Grid, Typography } from "@mui/material"

const BottomBar = () => {

    return (
        <Box sx={{
            backgroundColor:'black',
            width: '100%',
            height: '100px',
            display: 'flex'
        }}>

            <Grid container spacing={2} sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
            }}>
                <Grid  item md={12} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Typography variant="body1" sx={{color: '#d6d6d6'}} align="center">
                    © 2023 - Design and Code by José Machado.
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    )
}

export default BottomBar;