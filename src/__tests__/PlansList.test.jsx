import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import PlansList from '../components/PlansList'

describe('PlansList Component', () => {
  const mockPlans = [
    { name: 'Plan A', description: ['Cobertura básica'], price: 10 },
    { name: 'Plan B', description: ['Cobertura completa'], price: 20 },
  ]

  it('renders list of plans', () => {
    render(<PlansList plans={mockPlans} onSelect={() => {}} />)
    expect(screen.getByText(/Plan A/i)).toBeInTheDocument()
    expect(screen.getByText(/Plan B/i)).toBeInTheDocument()
  })

  it('calls onSelect when a plan is selected', () => {
    const handleSelect = vi.fn()
    render(<PlansList plans={mockPlans} onSelect={handleSelect} />)

    const buttons = screen.getAllByRole('button', { name: /Seleccionar plan/i })
    fireEvent.click(buttons[0])

    expect(handleSelect).toHaveBeenCalledWith(mockPlans[0])
  })
})
