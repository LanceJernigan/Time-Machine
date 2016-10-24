import {timeMachine} from './timeMachine'

/*
 *  Set up initial variable to use as our timeMachine.  Any data passed to the timeMachine upon initialization
 *  becomes the initial state the internal pointer references.
 */

const test = timeMachine({
  test: 1
})

/*
 *  Just to make sure our initial state got set.
 */

console.log(test.getState())

/*
 *  Give our test variable some data for us to use by passing data to our next method
 */

test.next({
  test:2
})

/*
 *  Get the current state of our variable
 */

console.log(test.getState())

/*
 *  We can also grab the previous state of our variable and set the internal pointer to that value
 */

console.log(test.previous())

/*
 *  Which means, getState will return the same thing as we returned last time
 */
 
 console.log(test.getState())
 
 /*
  *  And we can reset our pointer to the next state using next() without passing any data
  */
  