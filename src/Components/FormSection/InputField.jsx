import { TextField,InputAdornment } from '@mui/material'
import React from 'react'
import{styleForInput} from "../FormSection/Styel.jsx"



export default function InputField({ type,placeholder, sign, name, onChange, value, InputProps,helperText,id }) {
    return (
      <TextField style={{ ...styleForInput }}
        type={type}
            placeholder={placeholder}
            name={name}
            value={value}
        onChange={onChange}
        helperText={helperText}
        id={ id}
            InputProps={{
          endAdornment: <InputAdornment position="end">{sign}</InputAdornment>
        }} />
       
  )
  

}
