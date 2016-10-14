const timeMachine = (preloadedState) => {
  
  let state = preloadedState ? [preloadedState] : []
  let index = 0
  
  const updateIndex = (val = index) => {
    
    if (isNaN(val)) {
      
      val = index
      
    }
    
    val = val > (state.length - 1) ? (state.length - 1) : val < 0 ? 0 : val
    
    index = val
    
    return getState()
    
  }
  
  const getState = () => state[index]
  
  const next = val => {
    
    state = [...state.slice(0, index + 1), val]
    
    return updateIndex(val ? (state.length - 1) : index + 1)
    
  }
  
  const previous = () => updateIndex(index - 1)
  
  const current = () => getState(state.length - 1)
  
  return {getState, next, previous, current}
  
}

const test = timeMachine()


console.log(test.next({test: 1}))
console.log(test.next({test: 2}))
console.log(test.next({test: 3}))
console.log(test.previous())
console.log(test.previous())
console.log(test.next({test: 4}))