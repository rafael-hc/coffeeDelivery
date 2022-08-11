import styled from 'styled-components'

export const ProductContainer = styled.div`
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 1.5rem 1rem;
  text-align: center;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  position: relative;

  @media screen and (max-width: 760px) {
    max-width: 20rem;
    gap: 1rem;
  }

  img {
    margin: -2.25rem 0 0.75rem;
  }
`

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2rem;
  margin-bottom: 2.0625rem;
`

export const Price = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;

  color: ${(props) => props.theme['base-text']};

  &::before {
    content: 'R$ ';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const Title3 = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin: 1rem 0 0.5rem 0;
`

export const Tags = styled.span`
  text-align: center;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  text-transform: uppercase;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const TagsContainer = styled.span`
  flex: 1;
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`

export const BaseProduto = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 2.375rem;
`

export const LinkBuy = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  margin-left: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme['purple-dark']};

  &:hover {
    background-color: ${(props) => props.theme.purple};
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
