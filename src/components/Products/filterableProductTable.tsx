import { useState } from "react";
import ProductTable from "./productTable";
import SearchBar from "./searchBar";
import { Product } from "./types";

export function FilterableProductTable({ products }: {
  products: Product[]
}) {
  const [filterText, setFilterText] = useState('fruit');
  const [inStockOnly, setInStockOnly] = useState(false);


  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={(setFilterText)}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}