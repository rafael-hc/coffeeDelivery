import {
  IconCart,
  IconCoffee,
  IconPackage,
  IconTimer,
  IntroContainer,
  Item,
  Itens,
  Title,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Itens>
          <Item>
            <IconCart>
              <ShoppingCart weight="fill" size={16} />
            </IconCart>
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <IconPackage>
              <Package weight="fill" size={16} />
            </IconPackage>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item>
            <IconTimer>
              <Timer weight="fill" size={16} />
            </IconTimer>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item>
            <IconCoffee>
              <Coffee weight="fill" size={16} />
            </IconCoffee>
            <p>O café chega fresquinho até você</p>
          </Item>
        </Itens>
      </div>
      <img src="/assets/imagem.png" alt="" />
    </IntroContainer>
  )
}
