import { createContext, ReactNode, useEffect, useState } from 'react'

export interface Address {
  zipCode: string
  street: string
  numberOf: string
  complement: string
  district: string
  city: string
  state: string
}

export interface CoffeeAsCheckout {
  id: string
  name: string
  urlImage: string
  price: number
  amount: number
}

export interface Order {
  coffees: CoffeeAsCheckout[]
  address: Address
  paymentMethod: string
  sendDate: Date
}

interface CoffeesContextType {
  coffeeCheckout: CoffeeAsCheckout[]
  addCoffeeToCheckout: (coffee: CoffeeAsCheckout) => void
  updateAmountCoffee: (amount: number, id: string) => void
  removeCoffeeFromCheckout: (id: string) => void
  sendOrder: (order: Order) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeeCheckout, setCoffeeCheckout] = useState<CoffeeAsCheckout[]>([])
  const [order, setOrder] = useState<Order[]>([])

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:coffees-checkout-1.0.0',
    )
    if (storedStateAsJSON) {
      setCoffeeCheckout(JSON.parse(storedStateAsJSON))
    } else {
      setCoffeeCheckout([])
    }
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeCheckout)

    if (coffeeCheckout.length) {
      localStorage.setItem('@coffee-delivery:coffees-checkout-1.0.0', stateJSON)
    }
  }, [coffeeCheckout])

  function addCoffeeToCheckout(coffee: CoffeeAsCheckout) {
    setCoffeeCheckout((state) => [...state, coffee])
  }

  function removeCoffeeFromCheckout(id: string) {
    setCoffeeCheckout(coffeeCheckout.filter((coffee) => coffee.id !== id))
  }

  function updateAmountCoffee(amount: number, id: string) {
    setCoffeeCheckout(
      coffeeCheckout.map((coffee) => {
        if (coffee.id === id) {
          coffee.amount = amount
        }
        return coffee
      }),
    )
  }

  function sendOrder(order: Order) {
    setOrder((state) => [...state, order])
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeeCheckout,
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
