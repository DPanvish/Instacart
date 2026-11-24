import { Link } from "react-router-dom";
import { categoriesData } from "../../assets/assets";

const HomeCategories = () => {
  return (
    <section className="py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <span className="badge-fresh text-xs mb-2">
          Organized For You
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e1e15] tracking-tight">
          Browse Categories
        </h2>
        <p className="text-sm text-[#6e7f75] mt-1">
          Find exactly what you need from our farm-fresh, organic selections.
        </p>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1">
        {categoriesData.map((category) => (
          <Link
            key={category.slug}
            to={`/products?category=${category.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="group flex flex-col items-center gap-3 min-w-[95px] sm:min-w-[120px] transition-transform"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl p-3 sm:p-4 bg-white border border-[#e8e3d8] flex-center overflow-hidden shadow-xs group-hover:border-[#108942] group-hover:bg-[#ebf7ee] group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#3c4c42] group-hover:text-[#108942] text-center leading-snug transition-colors line-clamp-2">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
