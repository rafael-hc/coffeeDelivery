import styled from 'styled-components'

// Layout da página
export const CheckoutContainer = styled.main`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 40%;
  align-items: flex-start;

  @media screen and (max-width: 760px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 1fr);
  }
`

export const BaseInfoContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

// Contêiner do endereço e métodos de pagamento
export const AddressContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MethodsPayment = styled(BaseInfoContainer)`
  header {
    display: flex;
    gap: 0.5rem;
    align-items: initial;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['purple-dark']};
    span {
      p {
        color: ${(props) => props.theme['base-subtitle']};
      }

      p:last-of-type {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
      }
    }
  }
`

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  align-items: center;
`
export const ButtonPayment = styled.button`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  height: 3.1875rem;
  border-radius: 6px;
  padding: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;

  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['base-button']};
  cursor: pointer;

  p {
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  &:disabled {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
`

// Contêiner das informações do pedido
export const OrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const OrderList = styled(BaseInfoContainer)`
  border-radius: 6px 44px;

  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0;
    margin-top: 1.5rem;

    border-radius: 6px;
    cursor: pointer;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

// export const ButtonOrder = styled.a``

export const TotalDetail = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
`

export const TotalItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
  p:last-of-type {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Total = styled(TotalItens)`
  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CartEmpty = styled.main`
  grid-column-start: 1;
  grid-column-end: 3;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerCoffeeSelected = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const InfoCoffeeSelected = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
  }
`

export const HeaderCoffeeSelected = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const FooterCoffeeSelected = styled.footer`
  height: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const ButtonRemove = styled.button`
  display: flex;
  padding: 0.40625rem;
  gap: 0.25rem;
  cursor: pointer;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme.purple};

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

// InputAmount

export const InputQnt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 2.375rem;
  width: 4.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};
`

export const Amount = styled.input`
  max-width: 1.375rem;
  border: none;
  text-align: center;

  background-color: transparent;
`

export const ButtonChangeAmount = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
