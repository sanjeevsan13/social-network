import React from 'react'
import {useFormikContext} from 'formik'
import Button from '@material-ui/core/Button'

const ButtonWrapper = ({children,submit=true,...otherProps})=>{
    const {submitForm} = useFormikContext()

    const onClickHandler = ()=>{
        submitForm();
    }
    const config = {
        ...otherProps,
        fullWidth:true
    }
    if(submit){
        config.onClick = onClickHandler
    }

    return (
        <Button {...config} >{children}</Button>
    )

}

export default ButtonWrapper;