import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
import { CoffeesContext } from '../../../../context/CoffeesContext'
import { useNavigate } from 'react-router-dom'

const addressFormValidateSchema = zod.object({
  city: zod.string().min(1, 'Informe a cidade'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  numberOf: zod.string().min(1, 'Informe o Número'),
  state: zod.string().min(1, 'Inform o estado').max(2, 'Use a sigla'),
  street: zod.string().min(1, 'Informe a rua'),
  zipCode: zod
    .string()
    .min(8, 'Informe um cep válido')
    .max(10, 'Informe um cep válido'),
})

type addressFormData = zod.infer<typeof addressFormValidateSchema>

export function FormAddress() {
  const { addAddressToOrder, sendOrder } = useContext(CoffeesContext)
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidateSchema),
  })

  function handleNewAddress(data: addressFormData) {
    addAddressToOrder(data)
    sendOrder()
    navigate('/success')
  }

  return (
    <FormContainer>
      <header>
        <MapPinLine size={22} />
        <span>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </header>
      <Address id="address" onSubmit={handleSubmit(handleNewAddress)}>
        <PostalCode
          id="zipCode"
          type="text"
          placeholder="CEP"
          maxLength={10}
          minLength={8}
          required
          {...register('zipCode')}
        />
        <Street
          type="text"
          required
          placeholder="Rua"
          {...register('street')}
        />
        <Number
          type="text"
          required
          placeholder="Número"
          {...register('numberOf')}
        />
        <AddressSupplement
          type="text"
          placeholder="Complemento Opcional"
          {...register('complement')}
        />
        <District
          type="text"
          required
          placeholder="Bairro"
          {...register('district')}
        />
        <City type="text" required placeholder="Cidade" {...register('city')} />
        <State
          type="text"
          required
          placeholder="UF"
          maxLength={2}
          {...register('state')}
        />
      </Address>
    </FormContainer>
  )
}
