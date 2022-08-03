import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessContent = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 6.375rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 760px) {
    flex-direction: column;

    img {
      order: 1;
      width: 100%;
    }
  }
`
export const SuccessInfo = styled.div`
  width: 100%;
  max-width: 33rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  position: relative;

  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['base-title']};

  @media screen and (max-width: 760px) {
    order: 2;
  }
`

export const InfoItem = styled.article`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const InfoText = styled.span`
  display: flex;
  flex-direction: column;
`
const InfoImage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  border-radius: 9999px;

  color: ${(props) => props.theme.white};
`

export const IconAddress = styled(InfoImage)`
  background-color: ${(props) => props.theme.purple};
`

export const TimerDelivery = styled(InfoImage)`
  background-color: ${(props) => props.theme.yellow};
`

export const MethodPayment = styled(InfoImage)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
