import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import PlanCard from '../components/PlanCard'

describe('PlanCard Component', () => {
  const mockPlan = {
    name: 'Plan en Casa',
    description: ['Médico general a domicilio'],
    price: 39,
  }

  it('renders plan details', () => {
    render(<PlanCard plan={mockPlan} onSelect={() => {}} />)

    expect(screen.getByText(/Plan en Casa/i)).toBeInTheDocument()
    expect(screen.getByText(/Médico general a domicilio/i)).toBeInTheDocument()

    const priceElements = screen.getAllByText((_, node) =>
      node.textContent.includes('39')
    )
    expect(priceElements.length).toBeGreaterThan(0)
  })

  it('calls onSelect when button is clicked', () => {
    const handleSelect = vi.fn()
    render(<PlanCard plan={mockPlan} onSelect={handleSelect} />)

    fireEvent.click(screen.getByRole('button', { name: /Seleccionar Plan/i }))
    expect(handleSelect).toHaveBeenCalledWith(mockPlan)
  })
})
