import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;

  @media screen and (max-width: 760px) {
    margin-bottom: 2rem;
  }

  main {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @media screen and (max-width: 760px) {
      margin-top: 2rem;
    }
  }
`

export const CoffeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  column-gap: 2rem;
  margin-top: 3.375rem;

  @media screen and (max-width: 760px) {
    justify-content: center;
  }
`
