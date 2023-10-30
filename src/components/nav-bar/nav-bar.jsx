import { useState } from 'react';
import './nav-bar.styles.scss';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const navItems = [
    { name: 'Projetos', link: '/projetos' },
    { name: 'Sobre mim', link:'/sobremim'},
    { name: 'Contato', link:'/contato'}
]



const NavigationBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={toggleMenu} sx={{ textAlign: 'center'}}>

            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component='nav' enableColorOnDark sx={{ backgroundColor: '#000' }}>

                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={toggleMenu}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}>
                        José Machado
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.name}  sx={{ color: '#fff' }} onClick={() => {
                                console.log(item.link); // TODO: FAZER O LINK PARA A PÁGINA COM INFORMAÇÕES
                            }}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>

                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={toggleMenu}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
               
            </nav>
        </Box>
    )
}

export default NavigationBar;