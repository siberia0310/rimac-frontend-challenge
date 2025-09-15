import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import Summary from '../components/Summary'

describe('Summary Component', () => {
  const mockUser = {
    name: 'Rocío',
    lastName: 'Miranda Díaz',
    birthDay: '1990-05-15',
    dni: '444888888',
    phone: '513021647',
  }

  const mockPlan = {
    name: 'Plan en Casa y Clínica',
    price: 99,
  }

  it('renders summary with user and plan info', () => {
    render(<Summary user={mockUser} selectedPlan={mockPlan} onBack={() => {}} />)

    expect(screen.getByText(/Resumen del seguro/i)).toBeInTheDocument()

    const nameMatches = screen.getAllByText((_, node) =>
      node?.textContent?.includes('Rocío') &&
      node?.textContent?.includes('Miranda Díaz')
    )
    expect(nameMatches.length).toBeGreaterThan(0)

    const planMatches = screen.getAllByText((_, node) =>
      node?.textContent?.includes('Plan en Casa y Clínica')
    )
    expect(planMatches.length).toBeGreaterThan(0)

    const priceMatches = screen.getAllByText((_, node) =>
      node?.textContent?.includes('99')
    )
    expect(priceMatches.length).toBeGreaterThan(0)
  })

  it('calls onBack when back button is clicked', () => {
    const handleBack = vi.fn()
    render(<Summary user={mockUser} selectedPlan={mockPlan} onBack={handleBack} />)
    fireEvent.click(screen.getByText(/Volver/i))
    expect(handleBack).toHaveBeenCalled()
  })
})
