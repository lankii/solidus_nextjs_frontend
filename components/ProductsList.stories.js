import ProductList from './ProductsList'
import withApollo from '../utils/with_apollo'
import withTheme from '../utils/with_theme'

import { getProducts } from './__mocks__/ProductList'

export default {
  title: 'Product list',
  component: ProductList
}

const Template = (args) => withApollo(withTheme(<ProductList {...args} />), getProducts)

export const ProductListComponent = Template.bind({})
ProductListComponent.args = {}
