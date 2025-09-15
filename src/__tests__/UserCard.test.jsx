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

    const nameMatches = screen.getAllByText((_, node) =>
      node?.textContent?.includes('Bienvenido') &&
      node?.textContent?.includes('Rocío') &&
      node?.textContent?.includes('Miranda Díaz')
    )
    expect(nameMatches.length).toBeGreaterThan(0)
  })

  it('renders user birthday', () => {
    render(<UserCard user={mockUser} />)

    const birthdayMatches = screen.getAllByText((_, node) =>
      node?.textContent?.includes('Fecha de nacimiento') &&
      node?.textContent?.includes('1990-05-15')
    )
    expect(birthdayMatches.length).toBeGreaterThan(0)
  })

  it('renders nothing if user is null', () => {
    const { container } = render(<UserCard user={null} />)
    expect(container).toBeEmptyDOMElement()
  })
})
