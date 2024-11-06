import { render, screen } from '@testing-library/react'
import Main from './index'

describe('Main', () => {
  it('should render correctly', () => {
    // renderiza o componente
    render(<Main />)

    // verifica se o elemento existe
    expect(screen.getByRole('React Avançado')).toBeInTheDocument()
  })
})
