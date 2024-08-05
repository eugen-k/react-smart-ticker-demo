import { render, screen } from '@testing-library/react'

import Sider from './OptionRow'

describe('Slider', () => {
  test('should render', () => {
    render(<Sider>Test</Sider>)
    const el = screen.getByText('Test')
    expect(el).toBeInTheDocument()
  })
})
