export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}: {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (isInStockOnly: boolean) => void;
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={e => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={e => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
