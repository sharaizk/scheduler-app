import React from 'react'
import './LoginForm.css'
const InputField = ({name, label,type, value, setFormValues}) => {
    const changeText = (e)=>{
        const name = e.target.name;
        const value = e.target.value
        setFormValues((preVal)=>({
                ...preVal,
                [name]:value
        }))
    }
    return (
        <>
          <h4 className="fieldLabel">{label}</h4>
          <input className="field" type={type} name={name} value={value} onChange={(e)=>changeText(e)}/>
        </>
    )
}

export default InputField
