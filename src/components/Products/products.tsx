import { FilterableProductTable } from "./filterableProductTable";

import products from './products.json';

export default function Products() {
  return (
    <>
      <FilterableProductTable products={products} /> 
    </>
  )
}