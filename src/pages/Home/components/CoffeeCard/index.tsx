import { NavLink, useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import {
  ProductContainer,
  Tags,
  BaseProduto,
  TagsContainer,
  Title3,
  Price,
  Description,
  LinkBuy,
  PanelDialog,
  TitleDialog,
  ButtonDialog,
  InputQnt,
  ButtonChangeAmount,
  Amount,
} from './styles'

import { ProductCoffee } from '../../../../utils/coffee-list'
import { useContext, useState } from 'react'
import { CoffeesContext } from '../../../../context/CoffeesContext'
import { Dialog } from '@headlessui/react'
import { formatAsDecimal } from '../../../../utils/formarNumber'

interface Coffees {
  coffee: ProductCoffee
}

export function CoffeeCard({ coffee }: Coffees) {
  const { addCoffeeToCheckout } = useContext(CoffeesContext)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const [amount, setAmount] = useState(1)

  function handleSendCoffeeToCart() {
    const coffeeToCheckout = {
      id: uuidv4(),
      name: coffee.name,
      urlImage: coffee.urlImage,
      price: coffee.price,
      amount,
    }
    addCoffeeToCheckout(coffeeToCheckout)
    setIsOpen(true)
  }

  function handleIncreaseQuantityOfProducts() {
    if (amount < 10) {
      setAmount((state) => state + 1)
    }
  }

  function handleDecreaseQuantityOfProducts() {
    if (amount >= 2) {
      setAmount((state) => state - 1)
    }
  }

  return (
    <ProductContainer>
      <img src={coffee.urlImage} alt="" />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tags key={tag}>{tag}</Tags>
        ))}
      </TagsContainer>
      <Title3>{coffee.name}</Title3>
      <Description>{coffee.description}</Description>
      <BaseProduto>
        <Price>{formatAsDecimal(coffee.price)}</Price>
        <InputQnt>
          <ButtonChangeAmount
            onClick={handleDecreaseQuantityOfProducts}
            title="Diminuir quantidade"
          >
            <Minus />
          </ButtonChangeAmount>
          <Amount
            type="number"
            id=""
            value={amount}
            min="1"
            max="10"
            readOnly
          />
          <ButtonChangeAmount
            onClick={handleIncreaseQuantityOfProducts}
            title="Aumentar quantidade"
          >
            <Plus />
          </ButtonChangeAmount>
        </InputQnt>
        <LinkBuy type="button" onClick={handleSendCoffeeToCart}>
          <ShoppingCart weight="fill" size={22} />
        </LinkBuy>
      </BaseProduto>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <PanelDialog>
          <TitleDialog>Deactivate account</TitleDialog>

          <ButtonDialog onClick={() => setIsOpen(false)}>
            Continuar comprando
          </ButtonDialog>
          <ButtonDialog onClick={() => navigate('/checkout')}>
            Ir para o carrinho
          </ButtonDialog>
        </PanelDialog>
      </Dialog>
    </ProductContainer>
  )
}