import React , { useId } from 'react'
import { forwardRef } from 'react'

function Select({
    options,
    label,
    className = '' , 
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''> </label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`p-4 ${className}`}>
            {options?.map()}

        </select>
    </div>
  )
}

export default Select