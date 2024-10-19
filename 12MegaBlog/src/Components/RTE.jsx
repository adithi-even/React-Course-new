//Real Time Editor

import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {contrlller} from 'react-hook-form'

export default function RTE({name, control, label, defaultValue = ''}) {
  return (//here important is the control here we get it from react-hook-form and this control is responsible for taking all the states from this component to that form , and we are gonna use this control in that form when we use RTE in that form 
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>
            {label} </label>}

            
    </div>


)
}

//when ever this RTE is called what are the input we are giving is
