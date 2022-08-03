import { MapPinLine } from 'phosphor-react'
import {
  PostalCode,
  Street,
  Address,
  Number,
  AddressSupplement,
  District,
  City,
  State,
  FormContainer,
} from './styles'

export function FormAddress() {
  return (
    <FormContainer>
      <header>
        <MapPinLine size={22} />
        <span>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </header>
      <Address action="">
        <PostalCode type="text" placeholder="CEP" />
        <Street type="text" placeholder="Rua" />
        <Number type="text" placeholder="Número" />
        <AddressSupplement type="text" placeholder="Complemento Opcional" />
        <District type="text" placeholder="Bairro" />
        <City type="text" placeholder="Cidade" />
        <State type="text" placeholder="UF" />
      </Address>
    </FormContainer>
  )
}
