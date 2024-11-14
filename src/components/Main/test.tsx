import { render, screen } from '@testing-library/react'
import Main from './Main'

describe('Main', () => {
  it('should render correctly', () => {
    // renderiza o componente
    render(
      <Main
        title="React Avançado"
        description="TypeScript, ReactJS, NextJS e Scss"
      />
    )

    // verifica se o elemento existe h1 heading existe
    expect(
      screen.getByRole('heading', { name: 'React Avançado' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: 'TypeScript, ReactJS, NextJS e Scss'
      })
    ).toBeInTheDocument()
  })
})
