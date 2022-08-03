import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  min-height: calc(100vh - 10rem);
  margin: 8rem auto 0;

  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    padding: 1rem;
  }
`
