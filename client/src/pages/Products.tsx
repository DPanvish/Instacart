import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { Product } from "../types";
import { categoriesData, dummyProducts } from "../assets/assets";
import {
  ChevronDown,
  Home,
  PackageSearch,
  SlidersHorizontal,
  XIcon,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import FilterPanel from "../components/FilterPanel";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const category = searchParams.get("category") || "";
  const organic = searchParams.get("organic") || "";
  const sort = searchParams.get("sort") || "";
  const page = Number(searchParams.get("page")) || 1;
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("minPrice") || "";

  const fetchProducts = async () => {
    setLoading(true);
    setProducts(
      dummyProducts.filter((p) => p.category === category || category === "")
    );
    setLoading(false);
  };

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    if (key !== "page") {
      newParams.delete("page");
    }

    setSearchParams(newParams);
  };

  const clearFilters = () => setSearchParams({});
  const activeCategory = categoriesData.find((c) => c.slug === category);
  const hasFilters = category || organic || minPrice || maxPrice;

  useEffect(() => {
    fetchProducts();
  }, [category, organic, sort, page, minPrice, maxPrice]);

  return (
    <div className="min-h-screen bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav">
          <Link to="/" className="breadcrumb-link" aria-label="Home">
            <Home className="size-4" />
          </Link>
          <span className="text-[#cbd5cf]">/</span>
          <span className="text-[#0f3822] font-semibold">
            {activeCategory ? activeCategory.name : "All Products"}
          </span>
        </nav>

        <div className="flex gap-8 xl:gap-10">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="filter-panel-card">
              <FilterPanel
                categories={categoriesData}
                category={category}
                organic={organic}
                minPrice={minPrice}
                maxPrice={maxPrice}
                updateFilter={updateFilter}
                clearFilters={clearFilters}
                hasFilters={hasFilters}
              />
            </div>
          </aside>

          {/* Main Product Listing */}
          <main className="flex-1 min-w-0">
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#e8e3d8]">
              <div>
                <h1 className="section-title">
                  {activeCategory ? activeCategory.name : "All Products"}
                </h1>
                <p className="text-xs sm:text-sm text-[#6e7f75] mt-1">
                  Showing{" "}
                  <span className="font-semibold text-[#0f3822]">
                    {products.length}
                  </span>{" "}
                  fresh products
                </p>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden btn-outline !py-2 !px-3.5 text-xs sm:text-sm"
                >
                  <SlidersHorizontal className="size-4 text-[#108942]" />
                  <span>Filters</span>
                </button>

                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => updateFilter("sort", e.target.value)}
                    aria-label="Sort products"
                    className="sort-select"
                  >
                    <option value="">Newest</option>
                    <option value="price_asc">Price: Low → High</option>
                    <option value="price_desc">Price: High → Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="name">A → Z</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#6e7f75] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product Grid / States */}
            {loading ? (
              <Loading />
            ) : products.length === 0 ? (
              <div className="grocery-card text-center py-16 my-4">
                <div className="size-16 rounded-2xl bg-gradient-to-tr from-[#ebf7ee] to-[#d8f3e0] border border-[#bbf0cd] text-[#108942] flex-center mx-auto mb-4">
                  <PackageSearch className="size-8" />
                </div>
                <h3 className="text-lg font-bold text-[#0e1e15] mb-1.5">
                  No products found
                </h3>
                <p className="text-sm text-[#6e7f75] mb-6 max-w-sm mx-auto">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-primary !py-2.5 !px-6 text-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map(
                  (product) =>
                    product.stock > 0 && (
                      <ProductCard key={product._id} product={product} />
                    )
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex-center gap-2 mt-12">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => {
                      updateFilter("page", String(i + 1));
                      scrollTo(0, 0);
                    }}
                    className={`pagination-btn ${
                      page === i + 1
                        ? "bg-[#0f3822] text-white shadow-xs"
                        : "bg-white border border-[#e8e3d8] text-[#6e7f75] hover:bg-[#ebf7ee] hover:text-[#0f3822]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Bottom Sheet */}
      {mobileFiltersOpen && (
        <>
          <div
            className="cart-backdrop"
            onClick={() => setMobileFiltersOpen(false)}
          />

          <div className="mobile-filter-sheet animate-slide-in-up">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e8e3d8] sticky top-0 bg-white z-10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-[#108942]" />
                <h3 className="text-lg font-extrabold text-[#0e1e15]">Filters</h3>
              </div>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="p-2 text-[#6e7f75] hover:text-[#0e1e15] hover:bg-[#f3efe6] rounded-xl transition-colors"
              >
                <XIcon className="size-5" />
              </button>
            </div>

            <div className="p-5">
              <FilterPanel
                categories={categoriesData}
                category={category}
                organic={organic}
                minPrice={minPrice}
                maxPrice={maxPrice}
                updateFilter={updateFilter}
                clearFilters={clearFilters}
                hasFilters={hasFilters}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
