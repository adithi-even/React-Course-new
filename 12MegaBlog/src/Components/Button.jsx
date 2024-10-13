import React from 'react'

function Button({
    childern,
    type= 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {


  return (
    <button className={`p-2 ${className} ${bgColor} ${textColor} `} {...props}>
        {childern}
    </button>
  )
}

export default Button 