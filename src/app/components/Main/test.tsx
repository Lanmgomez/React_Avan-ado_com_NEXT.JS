import { render, screen } from '@testing-library/react'
import Main from './Main'

describe('Main', () => {
  it('should render correctly', () => {
    // renderiza o componente
    render(<Main />)

    // verifica se o elemento existe
    expect(
      screen.getByRole('heading', { name: 'React Avançado' })
    ).toBeInTheDocument()
  })
})
