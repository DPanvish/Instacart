const FilterPanel = ({
  categories,
  category,
  minPrice,
  maxPrice,
  updateFilter,
  clearFilters,
  hasFilters,
}: any) => {
  const categoriesWithAll = [{ slug: "", name: "All Categories" }, ...categories];

  return (
    <div className="space-y-6">
      {/* Categories Filter */}
      <div>
        <h3 className="filter-section-title">Categories</h3>
        <div className="space-y-1">
          {categoriesWithAll.map((cat: any) => (
            <button
              type="button"
              key={cat.slug}
              onClick={() => updateFilter("category", cat.slug)}
              className={`filter-category-btn ${
                category === cat.slug ? "active" : "inactive"
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="pt-4 border-t border-[#f0ece3]">
        <h3 className="filter-section-title">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => updateFilter("minPrice", e.target.value)}
            className="filter-price-input"
          />

          <span className="text-[#9aaba1] font-medium">-</span>

          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => updateFilter("maxPrice", e.target.value)}
            className="filter-price-input"
          />
        </div>
      </div>

      {/* Clear Filters */}
      {hasFilters && (
        <div className="pt-2">
          <button
            type="button"
            onClick={clearFilters}
            className="w-full py-2.5 text-xs font-semibold text-red-600 bg-red-50/70 hover:bg-red-50 border border-red-200/70 rounded-xl transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
