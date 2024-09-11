function first() {
    console.log(1)
  }
  
  function second(callback) {
      setTimeout(() => {
          console.log(2)
          callback()
        }, 0)
  }
  
  function third() {
    console.log(3)
  }


first()
second(third)
  

const promise1 = new promise((resolve, reject)=>{
    
})


