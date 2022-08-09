import { produce } from 'immer'

import { ActionTypes } from './actions'

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
  id?: string
  orderCoffees: CoffeeAsCheckout[]
  address: Address
  paymentMethod: string
  isSent?: Date
  isReceived?: Date
  startedPreparation?: Date
  isDispatched?: Date
}

export function orderCheckoutReducer(state: Order, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEES: {
      if (state.orderCoffees.length) {
        const indexCoffee = state.orderCoffees.findIndex((coffee) => {
          return coffee.id === action.payload.coffee.id
        })
        if (indexCoffee < 0) {
          return produce(state, (draft) => {
            draft.orderCoffees.push(action.payload.coffee)
          })
        }
        return produce(state, (draft) => {
          draft.orderCoffees[indexCoffee].amount += action.payload.coffee.amount
        })
      }
      return {
        ...state,
        orderCoffees: [...state.orderCoffees, action.payload.coffee],
      }
    }

    case ActionTypes.REMOVE_COFFEES:
      return {
        ...state,
        orderCoffees: state.orderCoffees.filter(
          (coffee) => coffee.id !== action.payload.id,
        ),
      }

    case ActionTypes.UPDATE_AMOUNT_COFFEES: {
      const indexCoffee = state.orderCoffees.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })
      if (indexCoffee >= 0) {
        return produce(state, (draft) => {
          draft.orderCoffees[indexCoffee].amount = action.payload.amount
        })
      }
      return state
    }

    case ActionTypes.SEND_ORDER:
      return produce(state, (draft) => {
        draft.isSent = new Date()
      })

    case ActionTypes.ADD_ADDRESS_TO_ORDER:
      return produce(state, (draft) => {
        draft.address.city = action.payload.address.city
        draft.address.complement = action.payload.address.complement
        draft.address.district = action.payload.address.district
        draft.address.numberOf = action.payload.address.numberOf
        draft.address.state = action.payload.address.state
        draft.address.street = action.payload.address.street
        draft.address.zipCode = action.payload.address.zipCode
      })

    case ActionTypes.ADD_PAYMENT_METHOD_TO_ORDER:
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.methodPayment
      })

    default:
      return state
  }
}
