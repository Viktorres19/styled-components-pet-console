import React from 'react'
import styled from 'styled-components'
import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console'
import Button from './components/Button';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

const App = () => {

  return (
    <AppWrapper>
      {/*і передаємо пропс, який хочемо, щоб він був за замовчуванням*/}
      <Flex justify="center">
        <Title color={"white"}>Returned</Title>
      </Flex>
      <Flex direction="column" margin={"10px 0"}>
        <Console color="green" />
        {/*передаємо, що primary це тру і колір також*/}
        <Button color="green" align="flex-end">Відправити</Button>
      </Flex>
    </AppWrapper>
  )
}

export default App
