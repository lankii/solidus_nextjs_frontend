import Button from '.'

export default {
  title: 'Buttons',
  component: Button
}

const Template = (args) => <Button {...args}>This is a button</Button>

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary'
}