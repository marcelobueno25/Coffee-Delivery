import { ReactNode, createContext, useReducer } from 'react'
import {
  addNewCoffeeAction,
  removeCoffeeAction,
} from '../reducers/coffee/actions'
import { Coffee, coffeeReducer } from '../reducers/coffee/reducer'
// import { data } from '../data'

interface CoffeeContextType {
  coffees: Coffee[]
  addCoffeeCart: (coffee: Coffee) => void
  removeCoffeeCart: (coffee: Coffee) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContextProvider = ({
  children,
}: CoffeeContextProviderProps) => {
  const [coffeesState, dispatch] = useReducer(coffeeReducer, {
    coffees: [],
  })

  const { coffees } = coffeesState

  function addCoffeeCart(coffee: Coffee) {
    dispatch(addNewCoffeeAction(coffee))
  }

  function removeCoffeeCart(coffee: Coffee) {
    dispatch(removeCoffeeAction(coffee))
  }

  return (
    <CoffeeContext.Provider
      value={{ coffees, addCoffeeCart, removeCoffeeCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
