import cloneState from './cloneState'

export const timeMachine = (preloadedState) => {
  
  let tree = {
    master: {
      index: 0,
      state: preloadedState ? [preloadedState] : []
    }
  }
  let currentBranchKey = 'master'
  
  /*
   *  getState() - Returns the curent state of the Time Machine
   *
   *  @params - branchKey (string) - Specific branch to get current state
   *          - branchIndex (int) - Specific index to get from branch state
   *
   *  @returns - State object
   */
  
  const getState = (branchKey = currentBranchKey, branchIndex) => {
    
    branchIndex = ! isNaN(branchKey) ? branchKey : branchIndex
    branchKey = ! isNaN(branchKey) ? currentBranchKey : branchKey
    
    const branch = getBranch(branchKey)
    
    return branch.state.length ? cloneState(branch.state[branch.index]) : 'No state.'
    
  }
  
  /*
   *  getBranch - Get a branch by branchKey or current branch if no branchKey is supplied
   *
   *  @params - branchKey (string) - key of the branch you would like to retrieve
   *
   *  @returns - Branch object
   */
  
  const getBranch = (branchKey = currentBranchKey) => {
    
    return tree.hasOwnProperty(branchKey) ? tree[branchKey] : 'No Branch.'
    
  }
  
  /*
   *  next - Either get the next state of the current branch or define the next step of state in the branch
   *
   *  @params - val (any) - The next value of the current branch
   */
  
  const next = val => {
    
    return val ? updateBranch({state: val}) : updateBranch({index: getBranch().index + 1})
    
  }
  
  /*
   *  previous - Get the previous state of current branch
   */
  
  const previous = () => {

    return updateBranch({index: (getBranch().index - 1)})
    
  }
  
  /*
   *  updateBranch - Updates the current branch with the given values
   *
   *  @params - branch (branch object) - The next step of the branch
   */
  
  const updateBranch = ({index, state}) => {
    
    let currentBranch = getBranch()
    
    currentBranch.index = state ? (currentBranch.state.push(state) - 1) : index > (currentBranch.state.length - 1) ? (currentBranch.state.length - 1) : index < 0 ? 0 : index
    
    tree[currentBranchKey] = currentBranch
    
    return getState()
    
  }
  
  /*
  *  checkout - Change currentBranchKey to whatever branch is selected
  *
  *  @params - branch (string) - The branch to select (or create if non-existent)
  *
  *  @returns - If no branch string is passed, a list of available branches
  *           - If branch string is passed, the current state of that branch
  */
  
  const checkout = (branch, preloadedState) => {
    
    if (branch) {
      
      if (! tree.hasOwnProperty(branch)) {
        
        tree[branch] = {
          index: 0,
          state: preloadedState ? [preloadedState] : []
        }
        
      }
      
      currentBranchKey = branch
      
      return getState()
      
    } else {
      
      return Object.keys(tree)
      
    }
    
  }
  
  const map = callback => {
    
    const branch = getBranch()
    
    return branch.state.map(callback)
    
  }
  
  const filter = callback => {
    
    const branch = getBranch()
    
    return branch.state.filter(callback)
    
  }
  
  const reduce = (callback, initial) => {
    
    const branch = getBranch()
    
    return branch.state.reduce(callback, initial)
    
  }

  return {getState, next, previous, checkout, map, filter, reduce}
  
}