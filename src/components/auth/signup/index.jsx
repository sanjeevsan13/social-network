import React from 'react';
import * as Yup from 'yup'
import {Container,Grid,makeStyles,Typography} from '@material-ui/core'
import TextField from './../../../UI/Forms/TextField'
import {Formik,Form} from 'formik'
import BrandName from '../../BrandName'
import Button from './../../../UI/Forms/Button'
import Radio from '../../../UI/Forms/Radio'

const INTIAL_VALUES = {
    firstName:'',
    lastName:'',
    email:'',
    gender:'female',
    password:'',
    confrimPassword:''
}

const validationSchema = Yup.object().shape({
    firstName:Yup.string().required('required'),
    lastName:Yup.string().required('required'),
    email:Yup.string().email('enter valid email').required('required'),
    password:Yup.string().required('required'),
    confrimPassword:Yup.string().required('required'),
    gender:Yup.string().required('required')

})

const useStyles = makeStyles(theme =>({
    container:{
       //minHeight:"45vh",
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
const Signup = ()=>{
    const classes = useStyles()
    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container} disableGutters >
            <Formik
            initialValues={INTIAL_VALUES}
            validationSchema = {validationSchema}
            onSubmit ={(values)=>console.log(values)
            }
            >
                <Form>
                <Container className={`${classes.container} ${classes.subContainer}`} >
                    <Grid container spacing={2} className={classes.gridContainer}>
                        <Grid item xs={12}>
                            <BrandName align="center"/>
                        </Grid>
                        <Grid item xs={12}> 
                           <Typography variant="subtitle1" align="center">
                            Please fill details to register   
                            </Typography> 
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField name="firstName" label="First Name"/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField name="lastName" label="Last Name"/>
                        </Grid>
                        <Grid item  xs={12}>
                          <Typography variant="subtitle1" > 
                            Gender
                          </Typography>
                          <Radio type="radio" value="male" name="gender"  label="Male"/>
                          <Radio type="radio" value= "female"name="gender" label="Female"/>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField name="email" label="Email"/>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField name="password" label="Password"/>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField name="confrimPassword" label="Confirm Password"/>
                        </Grid>
                        <Grid item xs={12}>
                          <Button color="secondary" variant="contained">Submit</Button>
                        </Grid>
                        
                    </Grid>
                </Container>
                </Form>

            </Formik>
            </Container>
        </div>
    )
}

export default Signup