import { Link } from "react-router-dom";
import { categoriesData } from "../../assets/assets";

const HomeCategories = () => {
  return (
    <section className="py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <span className="badge-fresh mb-2">
          Organized For You
        </span>
        <h2 className="section-title">
          Browse Categories
        </h2>
        <p className="section-subtitle">
          Find exactly what you need from our farm-fresh, organic selections.
        </p>
      </div>

      <div className="category-scroll-row no-scrollbar">
        {categoriesData.map((category) => (
          <Link
            key={category.slug}
            to={`/products?category=${category.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="category-item group"
          >
            <div className="category-tile">
              <img
                src={category.image}
                alt={category.name}
                className="category-tile-img"
              />
            </div>
            <span className="category-title">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
