import React , { useId } from 'react'

function Select({
    options,
    label,
    className = '' , 
    ...props
},ref) {
    const id = useId()
  return (
    <div>Select</div>
  )
}

export default Select