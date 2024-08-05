import { render, screen } from '@testing-library/react'

import MenuIcon from './MenuIcon'

describe('MenuIcon', () => {
  test('should render', () => {
    render(<MenuIcon />)
    const el = screen.getByText('Test')
    expect(el).toBeInTheDocument()
  })
})
