import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Coffee {
  id: string
  name: string
  tags: string[]
  description: string
  price: string
  src: string
}

export interface CoffeeState {
  coffees: Coffee[]
}

export function coffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const currentCoffee = state.coffees.findIndex(
        (item) => item.id === action.payload.newCoffee.id,
      )
      if (currentCoffee < 0) {
        return produce(state, (draft) => {
          draft.coffees.push(action.payload.newCoffee)
        })
      } else {
        return state
      }
    }
    case ActionTypes.REMOVE_COFFEE: {
      console.log('REMOVE_COFFEE')
      return state
    }
    default:
      console.log('DEFAULT')
      return state
  }
}
