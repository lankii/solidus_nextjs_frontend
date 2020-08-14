import Button from '.'
import withTheme from '../../utils/with_theme'

export default {
  title: 'Buttons',
  component: Button
}

const Template = (args) => withTheme(<Button {...args} />)

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary'
}
