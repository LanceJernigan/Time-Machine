const cloneState = val => {
  
  const type = typeof val
  
  const lookup = {
    
    object: v => ({...v}),
    
    array: v => ([...v]),
    
    default: v => v.copy()
    
  }
  
  return lookup.hasOwnProperty(type) ? lookup[type](val) : lookup.default()
  
}

export default cloneState