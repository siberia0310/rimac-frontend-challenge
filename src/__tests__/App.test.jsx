import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, vi, beforeEach } from 'vitest'
import App from '../App'
import * as api from '../services/api'

//Mock de las llamadas a la API
vi.mock('../services/api', () => ({
  getUser: vi.fn(),
  getPlans: vi.fn(),
}))

describe('App Integration Flow', () => {
  const mockUser = {
    name: 'Rocío',
    lastName: 'Miranda Díaz',
    birthDay: '1990-05-15',
  }

  const mockPlans = [
    { name: 'Plan A', description: ['Cobertura básica'], price: 10 },
    { name: 'Plan B', description: ['Cobertura completa'], price: 20 },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    api.getUser.mockResolvedValue(mockUser)
    api.getPlans.mockResolvedValue(mockPlans)
  })

  it('flow for "Para mí": select type → show plans → select plan → show summary', async () => {
    render(<App />)

    // Header y botones
    expect(screen.getByText(/RIMAC Seguros/i)).toBeInTheDocument()
    expect(screen.getByText(/¿Para quién será el seguro?/i)).toBeInTheDocument()

    // Clic en "Para mí"
    fireEvent.click(screen.getByRole('button', { name: /Para mí/i }))

    // Espera usuario y planes
    await waitFor(() => {
      expect(screen.getByText(/Bienvenido, Rocío Miranda Díaz/i)).toBeInTheDocument()
      expect(screen.getByText(/Plan A/i)).toBeInTheDocument()
      expect(screen.getByText(/Plan B/i)).toBeInTheDocument()
    })

    // Selecciona Plan A
    const buttons = screen.getAllByRole('button', { name: /Seleccionar plan/i })
    fireEvent.click(buttons[0])

    // Verifica resumen
    await waitFor(() => {
      expect(screen.getByText(/Resumen del seguro/i)).toBeInTheDocument()
      expect(screen.getByText(/Rocío Miranda Díaz/i)).toBeInTheDocument()
      expect(screen.getByText(/Plan A/i)).toBeInTheDocument()
      expect(screen.getByText(/\$10/i)).toBeInTheDocument()
    })
  })

  it('flow for "Para alguien más": select type → show plans → select plan → show summary', async () => {
    render(<App />)

    // Header y botones
    expect(screen.getByText(/RIMAC Seguros/i)).toBeInTheDocument()
    expect(screen.getByText(/¿Para quién será el seguro?/i)).toBeInTheDocument()

    // Clic en "Para alguien más"
    fireEvent.click(screen.getByRole('button', { name: /Para alguien más/i }))

    // Espera usuario y planes
    await waitFor(() => {
      expect(screen.getByText(/Bienvenido, Rocío Miranda Díaz/i)).toBeInTheDocument()
      expect(screen.getByText(/Plan A/i)).toBeInTheDocument()
      expect(screen.getByText(/Plan B/i)).toBeInTheDocument()
    })

    // Selecciona Plan B
    const buttons = screen.getAllByRole('button', { name: /Seleccionar plan/i })
    fireEvent.click(buttons[1])

    // Verifica resumen
    await waitFor(() => {
      expect(screen.getByText(/Resumen del seguro/i)).toBeInTheDocument()
      expect(screen.getByText(/Rocío Miranda Díaz/i)).toBeInTheDocument()
      expect(screen.getByText(/Plan B/i)).toBeInTheDocument()
      expect(screen.getByText(/\$20/i)).toBeInTheDocument()
    })
  })
})
