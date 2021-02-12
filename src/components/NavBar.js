import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

function NavBar(props) {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                    React & Material-UI Sample Application
                    </Typography>
                    <Box ml="auto">
                        <IconButton color="inherit" onClick={props.onClick}>
                            <InvertColorsIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;