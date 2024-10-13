import React , { useId ,forwardRef } from 'react'

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
            {  options?.map( (option)=>( //option? (here we are looping optionally) it is if the option has any value then we are going to loop or we could have also checked through if else .  
              <option key={option} value={option}>
                {option}
              </option>              
            ) )  }

        </select>
    </div>
  )
}

export default React.forwardRef(Select)