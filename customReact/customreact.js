function customRender(reactElement , container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.childeren
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target' ,reactElement.props.target)

    // container.appendChild(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children')continue;
        domElement.setAttribute (prop , reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}
const reactElement = {
    type:'a',
    props: {  //also called as attributes
        href : ' https://www.google.com' ,
        target :'_blank '

    }, 
    children :' Click Me to visit google '
}
const mainContainer = document.querySelector('#root') // here we are getting the div with the id=root from html 
 
customRender(reactElement,mainContainer)


// step 1: const mainContainer , (even though its in the last line)

//step 2 : const reactElement  , since its a react build by me all the elements in my react will look like this only , if anybody wants to access this then they have to use it like this only 

//step 3: now we have to add the newly create element insiede the root  i.e., of a type:'a' which is an <a> tag into the div

//step 4:if we have to do that in the step 3 . we need a function which takes the 2 params they are (which element needs to get injected , which element will get injected by the previous param)

//step 5 :function customRender(reactElement ,  container)

//step 6: creating a dom element