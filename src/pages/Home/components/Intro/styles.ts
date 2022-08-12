import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 0;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    padding: 1rem 0;

    div {
      order: 2;
    }

    img {
      order: 1;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 761px) and (max-width: 950px) {
    img {
      object-fit: contain;
    }
  }
`

export const Title = styled.div`
  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Itens = styled.div`
  max-width: 35.4375rem;
  margin-top: 4.125rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`
export const Item = styled.div`
  min-width: 14.4375rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
`

const IconItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  color: ${(props) => props.theme.background};
`

export const IconCart = styled(IconItem)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
export const IconPackage = styled(IconItem)`
  background-color: ${(props) => props.theme['base-text']};
`
export const IconTimer = styled(IconItem)`
  background-color: ${(props) => props.theme.yellow};
`
export const IconCoffee = styled(IconItem)`
  background-color: ${(props) => props.theme.purple};
`
