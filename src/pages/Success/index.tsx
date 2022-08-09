import {
  IconAddress,
  InfoItem,
  InfoText,
  SuccessContainer,
  SuccessContent,
  SuccessInfo,
  TimerDelivery,
  MethodPayment,
} from './styles'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'

export function Success() {
  const { orderCheckout } = useContext(CoffeesContext)

  let method = ''

  switch (orderCheckout.paymentMethod) {
    case 'credCard':
      method = 'Cartão de Crédito'
      break

    case 'debitCard':
      method = 'Cartão de Débito'
      break

    case 'money':
      method = 'Dinheiro'
      break

    default:
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(orderCheckout)

    localStorage.setItem('@coffee-delivery:coffees-checkout-1.0.0', stateJSON)
  }, [orderCheckout])

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <SuccessContent>
        <SuccessInfo>
          <InfoItem>
            <IconAddress>
              <MapPin size={16} weight="fill" />
            </IconAddress>
            <InfoText>
              <p>
                {`Entrega em ${orderCheckout.address.street}, ${orderCheckout.address.numberOf}`}
              </p>
              <p>
                {`${orderCheckout.address.district} - ${orderCheckout.address.city}, ${orderCheckout.address.state}`}
              </p>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <TimerDelivery>
              <Timer size={16} weight="fill" />
            </TimerDelivery>
            <InfoText>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min </strong>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <MethodPayment>
              <CurrencyDollar size={16} />
            </MethodPayment>
            <InfoText>
              <p>Pagamento na entrega</p>
              <strong>{method}</strong>
            </InfoText>
          </InfoItem>
        </SuccessInfo>
        <img src="/assets/successimg.png" alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
