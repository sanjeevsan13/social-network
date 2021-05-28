import React from 'react'
import {Formik,Form} from 'formik'
import {makeStyles,Grid,Typography,Container} from '@material-ui/core'
import * as Yup from 'yup';
import TextField from './../../../UI/Forms/TextField'
import BrandName from '../../BrandName'
import Button from './../../../UI/Forms/Button'
import {Link} from 'react-router-dom'

const INTIAL_VALUES = {
    email:'',
    password:''
}

const validation =Yup.object().shape({
    email:Yup.string().email('enter valid email').required('Required'),
    password:Yup.string().required('Required')
})

 const useStyles = makeStyles(theme =>({
     container:{
        margin:"5rem auto",
        [theme.breakpoints.up('lg')]: {
            width:"50%"
          },
          [theme.breakpoints.only('md')]: {
            width:"60%"
          },
          [theme.breakpoints.down('sm')]: {
            width:"80%"
          },
          
     },
     mainContainer:{
        height:"100vh",
        background:theme.palette.primary.main,
        border:"2px solid grey"
    },
    subContainer:{
        backgroundColor:"white"
    },
    gridContainer:{
        paddingBottom:"2rem"
    },
    lightText:{
        color:"grey"
    }
 }))

 
const LogIn = (props)=>{
    const classes = useStyles()
    console.log(INTIAL_VALUES.email,"In Sign IN")
    return(
    <>
    <div className={classes.mainContainer}>
    <Container className={classes.container} disableGutters >
            <Formik
            initialValues={INTIAL_VALUES}
            validationSchema = {validation}
            onSubmit={values => console.log(values)}
            >
                <Form>
                <Container className={`${classes.container} ${classes.subContainer}`} >
                    <Grid container  spacing={2} className={classes.gridContainer}>
                    <Grid item xs={12} >
                            <BrandName align="center"/>  
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant="h6"  align="center">
                                Welcome  
                                </Typography>  
                        </Grid>
                        <Grid item xs={12}>
                                <TextField name ="email" label="Email"/>
                        </Grid>
                        <Grid item xs={12}>
                                <TextField name ="password" type="password" label="Password"/>
                        </Grid>
                        <Grid item xs={12}>
                                <Button variant = "contained" color="secondary">Login</Button>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant="subtitle1" className={classes.lightText}  align="center">
                                Don't have an account ?  
                                </Typography>  
                        </Grid>
                        <Grid item xs={12}>
                                <Link to="/register"> 
                                    <Button variant = "contained" color="primary" submit={false}>Register</Button>
                                </Link>
                        </Grid>
                    
                    </Grid>
                    </Container>
                </Form>
            </Formik>
            
    </Container>
    </div>
    </>
)
}
export default LogIn;