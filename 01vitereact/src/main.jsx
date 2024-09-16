import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>hiiiiiiiii</a>
)



// const anotherUser = "chai aur react"

const reactElement = React.createElement( //this is NOT AN OBJECT , we are giving element like 1st 2nd 3rd similar to the (tags, id ,class inside the parenthesis of the queryselector)
    'a', //1st
    {href: 'https://google.com',target: '_blank' },//2nd
    'visit google heyyyyyyyy',//3rd
    anotherElement //after all the above we give variable
)

function Funct(){
    return reactElement
}

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // Funct()
    reactElement
  
)