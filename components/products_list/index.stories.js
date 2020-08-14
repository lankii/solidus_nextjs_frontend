import ProductList from '.'
import withApollo from '../../utils/with_apollo'
import withTheme from '../../utils/with_theme'

import { products } from './__mocks__/products'

export default {
  title: 'Product list',
  component: ProductList
}

const Template = (args) => withApollo(withTheme(<ProductList {...args} />), products)

export const ProductListComponent = Template.bind({})
ProductListComponent.args = {}
