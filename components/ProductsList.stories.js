import ProductList from './ProductsList'
import withApollo from '../utils/with_apollo'

import { getProducts } from './__mocks__/ProductList'

export default {
  title: 'Product list',
  component: ProductList
}

const Template = (args) => withApollo(<ProductList {...args} />, getProducts)

export const ProductListComponent = Template.bind({})
ProductListComponent.args = {}
