import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function addNewCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      newCoffee,
    },
  }
}
