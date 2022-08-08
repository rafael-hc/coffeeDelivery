import { MapPinLine } from 'phosphor-react'
import { ChangeEvent } from 'react'
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
import { Address as iAddress } from '../../../../reducers/orderCheckout/reducer'

interface FormAddressProps {
  handleInputTyping: (event: ChangeEvent<HTMLInputElement>) => void
}

const addressFormValidateSchema = zod.object({
  city: zod.string().min(1, 'Informe a cidade'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  numberOf: zod
    .number({
      required_error: 'Informe o Número',
      invalid_type_error: 'Formato inválido',
    })
    .positive(),
  state: zod.string().min(1, 'Inform o estado').max(2, 'Use a sigla'),
  street: zod.string().min(1, 'Informe a rua'),
  zipCode: zod
    .string()
    .min(8, 'Informe um cep válido')
    .max(10, 'Informe um cep válido'),
})

type addressFormData = zod.infer<typeof addressFormValidateSchema>

export function FormAddress({ handleInputTyping }: FormAddressProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidateSchema),
  })

  function handleNewAddress(data: addressFormData) {}

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
          // name="zipCode"
          placeholder="CEP"
          maxLength={10}
          minLength={8}
          required
          // onChange={handleInputTyping}
          {...register('zipCode', { required: true, maxLength: 9 })}
        />
        <Street
          type="text"
          required
          placeholder="Rua"
          // onChange={handleInputTyping}
          {...register('street', { required: true })}
        />
        <Number
          type="number"
          required
          placeholder="Número"
          // required
          // onChange={handleInputTyping}
          {...register('numberOf', { required: true, valueAsNumber: true })}
        />
        <AddressSupplement
          type="text"
          placeholder="Complemento Opcional"
          // onChange={handleInputTyping}
          {...register('complement')}
        />
        <District
          type="text"
          required
          placeholder="Bairro"
          // required
          // onChange={handleInputTyping}
          {...register('district')}
        />
        <City
          type="text"
          required
          placeholder="Cidade"
          // required
          // onChange={handleInputTyping}
          {...register('city')}
        />
        <State
          type="text"
          required
          placeholder="UF"
          maxLength={2}
          // onChange={handleInputTyping}
          {...register('state')}
        />
      </Address>
    </FormContainer>
  )
}
