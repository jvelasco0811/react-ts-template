// App.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'

describe('App component', () => {
    it('renders correctly', () => {
        render(<App />)
        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /count is/i })).toBeInTheDocument()
    })

    it('increments count on button click', () => {
        render(<App />)
        const button = screen.getByRole('button', { name: /count is/i })
        expect(button.textContent).toBe('count is 0')
        fireEvent.click(button)
        expect(button.textContent).toBe('count is 1')
    })
})
