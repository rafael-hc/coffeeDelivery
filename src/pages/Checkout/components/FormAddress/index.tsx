import { MapPinLine } from 'phosphor-react'
import { ChangeEvent } from 'react'
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

interface FormAddressProps {
  handleInputTyping: (event: ChangeEvent<HTMLInputElement>) => void
}

export function FormAddress({ handleInputTyping }: FormAddressProps) {
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
        <PostalCode
          type="text"
          name="zipCode"
          placeholder="CEP"
          onChange={handleInputTyping}
        />
        <Street
          type="text"
          name="street"
          placeholder="Rua"
          onChange={handleInputTyping}
        />
        <Number
          type="text"
          name="numberOf"
          placeholder="Número"
          onChange={handleInputTyping}
        />
        <AddressSupplement
          type="text"
          name="complement"
          placeholder="Complemento Opcional"
          onChange={handleInputTyping}
        />
        <District
          type="text"
          name="district"
          placeholder="Bairro"
          onChange={handleInputTyping}
        />
        <City
          type="text"
          name="city"
          placeholder="Cidade"
          onChange={handleInputTyping}
        />
        <State
          type="text"
          name="state"
          placeholder="UF"
          onChange={handleInputTyping}
        />
      </Address>
    </FormContainer>
  )
}
