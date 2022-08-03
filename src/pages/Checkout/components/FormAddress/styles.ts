import styled from 'styled-components'
import { BaseInfoContainer } from '../../styles'

export const FormContainer = styled(BaseInfoContainer)`
  header {
    display: flex;
    gap: 0.5rem;
    align-items: initial;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['yellow-dark']};

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
export const Address = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 0.75rem;
`
const BaseInput = styled.input`
  display: flex;
  align-items: center;
  border: none;
  height: 2.625rem;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;
  background-color: ${(props) => props.theme['base-button']};
`

export const PostalCode = styled(BaseInput)`
  width: 12.5rem;
`
export const Street = styled(BaseInput)`
  width: 100%;
`
export const Number = styled(BaseInput)`
  width: 12.5rem;

  @media screen and (max-width: 760px) {
    width: 5rem;
  }
`
export const AddressSupplement = styled(BaseInput)`
  flex: 1;
  text-align: justify;
`
export const District = styled(BaseInput)`
  width: 12.5rem;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`
export const City = styled(BaseInput)`
  flex: 1;
`
export const State = styled(BaseInput)`
  width: 3.75rem;
`
