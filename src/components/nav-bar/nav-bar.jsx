import { Fragment, useState } from 'react';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
    /* { name: 'Projetos', link: '/projetos' },
    { name: 'Sobre mim', link:'/sobremim'}, */
    { name: 'Contato', link: '/contact' }
]



const NavigationBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMenu = () => {
        setMobileOpen(!mobileOpen);
    };



    const drawer = (
        <Box onClick={toggleMenu} sx={{ textAlign: 'center' }}>

            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link to={item.link} >
                                <ListItemText primary={item.name} />
                            </Link>

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;


    return (
        <Fragment >
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
                             <ListItem key={item.name} disablePadding>
                             <ListItemButton sx={{ textAlign: 'center' }}>
                               {/* Use o componente Link do react-router-dom para redirecionar para a rota desejada */}
                               <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                 <ListItemText primary={item.name} />
                               </Link>
                             </ListItemButton>
                           </ListItem>
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
        <Outlet />
        </Fragment>
    )
}

export default NavigationBar;