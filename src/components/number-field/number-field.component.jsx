import React from 'react'
import "./number-field.style.css"
export default function numberField({number,changeHandler}) {
    return (
        <div className="number-field">

            <input type="number" name="number" value={number} onChange={changeHandler}/>

        </div>
    )
}
