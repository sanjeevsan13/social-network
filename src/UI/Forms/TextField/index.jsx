import TextField from '@material-ui/core/TextField'
import {useField} from 'formik'

const TextFieldWrapper = ({name,...otherProps})=>{
  
    const [field,meta] = useField(name);
    const config = {
        variant:'outlined',
        ...field,
        ...otherProps,
        fullWidth:true,
    }
    if(meta && meta.touched && meta.error){
        config.error = true;
        config.helperText = meta.error;
    }
    return(
        <TextField {...config}/>
    )
}

export default TextFieldWrapper