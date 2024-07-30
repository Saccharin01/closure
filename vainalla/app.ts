const counter = (init? :number) => {
  let count = init || 0
  function setCount(){
    count += 1
    return count
  }
  return setCount
}



const closure = counter()
console.log(closure())
console.log(closure())
console.log(closure())
console.log(closure())
console.log(closure())
console.log(closure())
console.log(closure())