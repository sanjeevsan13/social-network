import React from 'react'
import {Typography,makeStyles,Grid} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles =makeStyles({
    icon:{
        margin:"0.2rem"
    }
})

const BrandName = ({align,...otherProps})=>{
    const classes = useStyles()
    return(
    <>
    <Grid container justify={ align === "center" ? align : ''}>
        <Grid item>
    <Typography variant="h6" color="inherit" {...otherProps}>
        ReachMe
      </Typography>
      </Grid>
      <Grid item>
      <FavoriteIcon className = {classes.icon} color='secondary'/>
      </Grid>
      </Grid>
    </>
    )}

export default BrandName