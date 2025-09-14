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
    expect(screen.getByText(/Rocío Miranda Díaz/i)).toBeInTheDocument()
    expect(screen.getByText(/Plan en Casa y Clínica/i)).toBeInTheDocument()
    expect(screen.getByText(/\$99/i)).toBeInTheDocument()
  })

  it('calls onBack when back button is clicked', () => {
    const handleBack = vi.fn()
    render(<Summary user={mockUser} selectedPlan={mockPlan} onBack={handleBack} />)
    fireEvent.click(screen.getByText(/Volver/i))
    expect(handleBack).toHaveBeenCalled()
  })
})
