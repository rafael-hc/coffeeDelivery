import { useReducer, createContext, ReactNode } from 'react'
import {
  addAddressToOrderAction,
  addCoffeeToCheckoutAction,
  addPaymentMethodToOrderAction,
  removeCoffeeFromCheckoutAction,
  sendOrderAction,
  updateAmountCoffeeAction,
} from '../reducers/orderCheckout/actions'
import {
  Address,
  CoffeeAsCheckout,
  Order,
  orderCheckoutReducer,
} from '../reducers/orderCheckout/reducer'

interface CoffeesContextType {
  orderCoffees: CoffeeAsCheckout[]
  orderCheckout: Order
  isSent?: Date
  addCoffeeToCheckout: (coffee: CoffeeAsCheckout) => void
  updateAmountCoffee: (amount: number, id: string) => void
  removeCoffeeFromCheckout: (id: string) => void
  sendOrder: () => void
  addAddressToOrder: (address: Address) => void
  addPaymentMethodToOrder: (methodPayment: string) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [orderCheckout, dispatch] = useReducer(
    orderCheckoutReducer,
    {
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
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffees-checkout-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return {
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
      }
    },
  )
  const { orderCoffees, isSent } = orderCheckout

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

  function addAddressToOrder(address: Address) {
    dispatch(addAddressToOrderAction(address))
  }

  function addPaymentMethodToOrder(methodPayment: string) {
    dispatch(addPaymentMethodToOrderAction(methodPayment))
  }

  return (
    <CoffeesContext.Provider
      value={{
        orderCoffees,
        orderCheckout,
        isSent,
        addCoffeeToCheckout,
        updateAmountCoffee,
        removeCoffeeFromCheckout,
        sendOrder,
        addAddressToOrder,
        addPaymentMethodToOrder,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
