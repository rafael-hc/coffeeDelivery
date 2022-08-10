import {
  Bank,
  CreditCard,
  CurrencyDollar,
  Minus,
  Money,
  Plus,
  Trash,
  Warning,
} from 'phosphor-react'
import { MouseEvent, useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'
import { CoffeeAsCheckout } from '../../reducers/orderCheckout/reducer'
import { formatAsDecimal } from '../../utils/formarNumber'
import { FormAddress } from './components/FormAddress'
import {
  CheckoutContainer,
  AddressContainer,
  OrderContainer,
  MethodsPayment,
  OrderList,
  ButtonContainer,
  ButtonPayment,
  TotalItens,
  Total,
  TotalDetail,
  CartEmpty,
  ContainerCoffeeSelected,
  InfoCoffeeSelected,
  FooterCoffeeSelected,
  HeaderCoffeeSelected,
  ButtonRemove,
  InputQnt,
  ButtonChangeAmount,
  Amount,
  ButtonOrder,
} from './styles'

export function Checkout() {
  const {
    orderCoffees,
    orderCheckout,
    updateAmountCoffee,
    removeCoffeeFromCheckout,
    addPaymentMethodToOrder,
  } = useContext(CoffeesContext)

  function handSelectPaymentMethod(event: MouseEvent<HTMLButtonElement>) {
    const method = event.currentTarget.name
    addPaymentMethodToOrder(method)
  }

  function handleIncreaseQuantityOfProducts(coffeeAmount: number, id: string) {
    if (coffeeAmount < 10) {
      coffeeAmount += 1
      updateAmountCoffee(coffeeAmount, id)
    }
  }

  function handleDecreaseQuantityOfProducts(coffeeAmount: number, id: string) {
    if (coffeeAmount > 1) {
      coffeeAmount -= 1
      updateAmountCoffee(coffeeAmount, id)
    }
  }

  const total = orderCoffees.reduce((total: number, item: CoffeeAsCheckout) => {
    return (total += item.price * item.amount)
  }, 0)

  const taxDelivery = 3.5
  const totalFinally = total + taxDelivery

  return (
    <CheckoutContainer>
      {orderCoffees.length ? (
        <>
          <AddressContainer>
            <h3>Complete seu pedido</h3>
            <FormAddress />
            <MethodsPayment>
              <header>
                <CurrencyDollar size={22} />
                <span>
                  <p>Pagamento</p>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </span>
              </header>
              <ButtonContainer>
                <ButtonPayment
                  disabled={orderCheckout.paymentMethod === 'credCard'}
                  name="credCard"
                  onClick={handSelectPaymentMethod}
                  type="button"
                >
                  <CreditCard size={16} />
                  <p>Cartão de crédito</p>
                </ButtonPayment>
                <ButtonPayment
                  disabled={orderCheckout.paymentMethod === 'debitCard'}
                  name="debitCard"
                  onClick={handSelectPaymentMethod}
                  type="button"
                >
                  <Bank size={16} />
                  <p>Cartão de débito</p>
                </ButtonPayment>
                <ButtonPayment
                  disabled={orderCheckout.paymentMethod === 'money'}
                  name="money"
                  onClick={handSelectPaymentMethod}
                  type="button"
                >
                  <Money size={16} />
                  <p>dinheiro</p>
                </ButtonPayment>
              </ButtonContainer>
            </MethodsPayment>
          </AddressContainer>
          <OrderContainer>
            <h3>Cafés selecionados</h3>
            <OrderList>
              <div>
                {orderCoffees.map((coffee) => (
                  <ContainerCoffeeSelected key={coffee.id}>
                    <img src={coffee.urlImage} alt="" />
                    <InfoCoffeeSelected>
                      <HeaderCoffeeSelected>
                        <h4>{coffee.name}</h4>
                        <strong>R$ {formatAsDecimal(coffee.price)}</strong>
                      </HeaderCoffeeSelected>
                      <FooterCoffeeSelected>
                        <InputQnt>
                          <ButtonChangeAmount
                            onClick={() => {
                              handleDecreaseQuantityOfProducts(
                                coffee.amount,
                                coffee.id,
                              )
                            }}
                            title="Diminuir quantidade"
                          >
                            <Minus />
                          </ButtonChangeAmount>
                          <Amount
                            type="number"
                            id=""
                            value={coffee.amount}
                            min="1"
                            max="10"
                            readOnly
                          />
                          <ButtonChangeAmount
                            onClick={() => {
                              handleIncreaseQuantityOfProducts(
                                coffee.amount,
                                coffee.id,
                              )
                            }}
                            title="Aumentar quantidade"
                          >
                            <Plus />
                          </ButtonChangeAmount>
                        </InputQnt>
                        <ButtonRemove
                          onClick={() => removeCoffeeFromCheckout(coffee.id)}
                        >
                          <Trash /> <p>remover</p>
                        </ButtonRemove>
                      </FooterCoffeeSelected>
                    </InfoCoffeeSelected>
                  </ContainerCoffeeSelected>
                ))}
              </div>
              <TotalDetail>
                <TotalItens>
                  <p>Total de itens</p>
                  <p>R$ {formatAsDecimal(total)}</p>
                </TotalItens>
                <TotalItens>
                  <p>Entrega</p>
                  <p>R$ {formatAsDecimal(taxDelivery)}</p>
                </TotalItens>
                <Total>
                  <strong>Total</strong>
                  <strong>R$ {formatAsDecimal(totalFinally)}</strong>
                </Total>
              </TotalDetail>
              <ButtonOrder form="address" type="submit">
                Confirmar pedido
              </ButtonOrder>
            </OrderList>
          </OrderContainer>
        </>
      ) : (
        <CartEmpty>
          <Warning size={50} />
          <h1>Carrinho vazio:</h1>
        </CartEmpty>
      )}
    </CheckoutContainer>
  )
}
