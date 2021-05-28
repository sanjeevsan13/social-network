import {useField} from 'formik'
import {RadioGroup,FormControlLabel} from "@material-ui/core"
import Radio from '@material-ui/core/Radio'

const RadioWrapper =(props)=>{
    const [field,meta] = useField(props)
    const config ={
        ...field,
        ...props,
        type:"radio"
    }
    return (
        <FormControlLabel {...config} control={<Radio />} />
        
    )
}

export default RadioWrapper;