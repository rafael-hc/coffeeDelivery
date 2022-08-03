import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
  Warning,
} from 'phosphor-react'
import {
  ChangeEvent,
  MouseEvent,
  MouseEventHandler,
  useContext,
  useState,
} from 'react'
import { NavLink } from 'react-router-dom'
import {
  Address,
  CoffeeAsCheckout,
  CoffeesContext,
  Order,
} from '../../context/CoffeesContext'
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
} from './styles'

interface Payment {
  credCard: boolean
  debitCard: boolean
  money: boolean
}

export function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState('')
  const [address, setAddress] = useState<Address>({} as Address)

  const {
    coffeeCheckout,
    updateAmountCoffee,
    removeCoffeeFromCheckout,
    sendOrder,
  } = useContext(CoffeesContext)

  function handleSelectedPayment(event: MouseEvent<HTMLButtonElement>) {
    const method = event.currentTarget.name
    setSelectedPayment(method)
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

  const total = coffeeCheckout.reduce(
    (total: number, item: CoffeeAsCheckout) => {
      return (total += item.price * item.amount)
    },
    0,
  )

  const taxDelivery = 3.5
  const totalFinally = total + taxDelivery

  function handleInputTyping(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    const newAddress = {
      ...address,
      [name]: value,
    }

    setAddress(newAddress)
  }

  function mountOrder() {
    const mountedOrder: Order = {
      coffees: coffeeCheckout,
      address,
      paymentMethod: selectedPayment,
      sendDate: new Date(),
    }
    sendOrder(mountedOrder)
    alert('pedido enviado')
  }

  console.log(`Método de pagamento: ${selectedPayment}`)

  return (
    <CheckoutContainer>
      {coffeeCheckout.length ? (
        <>
          <AddressContainer>
            <h3>Complete seu pedido</h3>
            <FormAddress handleInputTyping={handleInputTyping} />
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
                  disabled={selectedPayment === 'credCard'}
                  name="credCard"
                  onClick={handleSelectedPayment}
                  type="button"
                >
                  <CreditCard size={16} />
                  <p>Cartão de crédito</p>
                </ButtonPayment>
                <ButtonPayment
                  disabled={selectedPayment === 'debitCard'}
                  name="debitCard"
                  onClick={handleSelectedPayment}
                  type="button"
                >
                  <Bank size={16} />
                  <p>Cartão de débito</p>
                </ButtonPayment>
                <ButtonPayment
                  disabled={selectedPayment === 'money'}
                  name="money"
                  onClick={handleSelectedPayment}
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
                {coffeeCheckout.map((coffee) => (
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
              <NavLink role="button" to="/success" onClick={mountOrder}>
                Confirmar pedido
              </NavLink>
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
