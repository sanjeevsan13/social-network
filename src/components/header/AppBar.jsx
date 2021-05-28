import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BrandName from '../BrandName'

const Header = ()=>{
    //const classes = useStyles()
    return (
    
    <AppBar position="static" color='primary'>
    <Toolbar variant="dense">
      <BrandName/>
    </Toolbar>
  </AppBar>
  
  );
}
export default Header
