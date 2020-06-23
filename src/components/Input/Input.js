import React from 'react'

import classes from './Input.module.css'
export default (props) => {
    let inputElement = null
    const inputClasses = [classes.InputElement]
    if (props.touched && !props.isValid && props.shouldValidate) {
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = 
                <input 
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.update}/>
            break;
        case ('select'):
            inputElement = ( 
                <select 
                    className={inputClasses.join(' ')} 
                    name={props.elementConfig.name}
                    value={props.value} 
                    onChange={props.update}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))}
                </select>
            )
            break;
        case ('textarea'):
            inputElement = 
                <textarea 
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig}
                    value={props.value} 
                    onChange={props.update} />
            break;
        default:
            inputElement = 
                <input 
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.update} />
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
