import { Intro } from './components/Intro'
import { CoffeeCard } from './components/CoffeeCard'

import { HomeContainer, CoffeesContainer } from './styles'
import { useState } from 'react'
import { coffeeList, ProductCoffee } from '../../utils/coffee-list'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <main>
        <h2>Nossos cafés</h2>
        <CoffeesContainer>
          {coffeeList.map(
            (coffee) =>
              coffee.isStocked && (
                <CoffeeCard key={coffee.id} coffee={coffee} />
              ),
          )}
        </CoffeesContainer>
      </main>
    </HomeContainer>
  )
}
