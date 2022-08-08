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
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'

export function Success() {
  const { orderCheckout } = useContext(CoffeesContext)

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
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </InfoText>
          </InfoItem>
        </SuccessInfo>
        <img src="/assets/successimg.png" alt="" />
      </SuccessContent>
      {JSON.stringify(orderCheckout)}
    </SuccessContainer>
  )
}
