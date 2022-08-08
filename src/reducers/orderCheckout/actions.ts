import { CoffeeAsCheckout } from './reducer'

export enum ActionTypes {
  ADD_COFFEES = 'ADD_COFFEES',
  REMOVE_COFFEES = 'REMOVE_COFFEES',
  UPDATE_AMOUNT_COFFEES = 'UPDATE_AMOUNT_COFFEES',
  SEND_ORDER = 'SEND_ORDER',
}

export function addCoffeeToCheckoutAction(coffee: CoffeeAsCheckout) {
  return {
    type: ActionTypes.ADD_COFFEES,
    payload: {
      coffee,
    },
  }
}
export function removeCoffeeFromCheckoutAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEES,
    payload: {
      id,
    },
  }
}
export function updateAmountCoffeeAction(amount: number, id: string) {
  return {
    type: ActionTypes.UPDATE_AMOUNT_COFFEES,
    payload: {
      id,
      amount,
    },
  }
}
export function sendOrderAction() {
  return {
    type: ActionTypes.SEND_ORDER,
  }
}
