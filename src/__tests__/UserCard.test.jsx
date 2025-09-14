import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import UserCard from '../components/UserCard'

describe('UserCard Component', () => {
  const mockUser = {
    name: 'Rocío',
    lastName: 'Miranda Díaz',
    birthDay: '1990-05-15',
  }

  it('renders user name and last name', () => {
    render(<UserCard user={mockUser} />)
    expect(screen.getByText(/Bienvenido, Rocío Miranda Díaz/i)).toBeInTheDocument()
  })

  it('renders user birthday', () => {
    render(<UserCard user={mockUser} />)
    expect(screen.getByText(/Fecha de nacimiento: 1990-05-15/i)).toBeInTheDocument()
  })

  it('renders nothing if user is null', () => {
    const { container } = render(<UserCard user={null} />)
    expect(container).toBeEmptyDOMElement()
  })
})
