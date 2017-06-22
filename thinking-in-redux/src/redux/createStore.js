// This is an simplified version of Redux, there is no initial state, middleware, etc.
// The idea is to show the basics of Redux

export const createStore = (reducer) => {
   let state = reducer(undefined, { type: '@INIT' })
   let listeners = []

   const getState = () =>  { return null }

   const dispatch = () => {
     state = reducer(state, action)
     listeners.forEach(listener => listener())
   }

   const subscribe = listener => {
     listeners.push(listener)
     return () => {
       listeners = listeners.filter(item => item !== listener)
     }
   }

   return { }
}
