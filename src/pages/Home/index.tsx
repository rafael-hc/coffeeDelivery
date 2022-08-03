import { Intro } from './components/Intro'
import { CoffeeCard } from './components/CoffeeCard'

import { HomeContainer, CoffeesContainer } from './styles'
import { useState } from 'react'
import { coffeeList, ProductCoffee } from '../../utils/coffee-list'

export function Home() {
  const [coffees, setCoffees] = useState<ProductCoffee[]>(coffeeList)

  return (
    <HomeContainer>
      <Intro />
      <main>
        <h2>Nossos cafés</h2>
        <CoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesContainer>
      </main>
    </HomeContainer>
  )
}
