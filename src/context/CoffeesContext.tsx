import {
  useReducer,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import {
  ActionTypes,
  addCoffeeToCheckoutAction,
  removeCoffeeFromCheckoutAction,
  sendOrderAction,
  updateAmountCoffeeAction,
} from '../reducers/orderCheckout/actions'
import {
  CoffeeAsCheckout,
  Order,
  orderCheckoutReducer,
} from '../reducers/orderCheckout/reducer'

interface CoffeesContextType {
  orderCoffees: CoffeeAsCheckout[]
  orderCheckout: Order
  addCoffeeToCheckout: (coffee: CoffeeAsCheckout) => void
  updateAmountCoffee: (amount: number, id: string) => void
  removeCoffeeFromCheckout: (id: string) => void
  sendOrder: () => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [orderCheckout, dispatch] = useReducer(orderCheckoutReducer, {
    orderCoffees: [],
    address: {
      zipCode: '',
      street: '',
      numberOf: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
    paymentMethod: '',
  })
  const { orderCoffees } = orderCheckout
  const [order, setOrder] = useState({} as Order)

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:coffees-checkout-1.0.0',
    )
    // if (storedStateAsJSON) {
    //   setCoffeeCheckout(JSON.parse(storedStateAsJSON))
    // } else {
    //   setCoffeeCheckout([])
    // }
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(orderCoffees)

    if (orderCoffees.length) {
      localStorage.setItem('@coffee-delivery:coffees-checkout-1.0.0', stateJSON)
    }
  }, [orderCoffees])

  function addCoffeeToCheckout(coffee: CoffeeAsCheckout) {
    dispatch(addCoffeeToCheckoutAction(coffee))
  }

  function removeCoffeeFromCheckout(id: string) {
    dispatch(removeCoffeeFromCheckoutAction(id))
  }

  function updateAmountCoffee(amount: number, id: string) {
    dispatch(updateAmountCoffeeAction(amount, id))
  }

  function sendOrder() {
    dispatch(sendOrderAction())
  }

  return (
    <CoffeesContext.Provider
      value={{
        orderCoffees,
        orderCheckout,
        addCoffeeToCheckout,
        updateAmountCoffee,
        removeCoffeeFromCheckout,
        sendOrder,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
