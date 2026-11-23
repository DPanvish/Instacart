import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowUpRightIcon,
  BikeIcon,
  ChevronDownIcon,
  LogOutIcon,
  MapPinIcon,
  MenuIcon,
  PackageIcon,
  SearchIcon,
  ShieldIcon,
  ShoppingCartIcon,
  SparklesIcon,
  UserIcon,
  XIcon,
} from "lucide-react";

const Navbar = () => {
  const user: any = { name: "John Doe", email: "john@example.com", isAdmin: true };
  const { cartCount, setIsCartOpen } = {
    cartCount: 5,
    setIsCartOpen: (_date: any) => {},
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    setUserMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#e8e3d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-3 sm:gap-6">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl sm:text-2xl font-extrabold tracking-tight text-[#0f3822] shrink-0 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0f3822] to-[#16a34a] flex-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <BikeIcon className="w-5 h-5" />
          </div>
          <span>
            Instacart<span className="text-[#f97316]">.</span>
          </span>
        </Link>

        {/* Right Section / Desktop Links + Search + Actions */}
        <div className="w-full flex items-center justify-end gap-3 sm:gap-6 lg:gap-8">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link
              to="/deals"
              className="nav-link text-[#ea580c] hover:text-[#c2410c] hover:bg-[#fff4ed]"
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Deals</span>
              <span className="badge-carrot text-[10px] py-0.5 px-1.5 ml-0.5 font-bold">
                HOT
              </span>
            </Link>
          </div>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex flex-1 max-w-sm lg:max-w-md relative"
          >
            <div className="relative w-full">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7b8e83] pointer-events-none" />
              <input
                type="text"
                placeholder="Search fresh groceries, dairy, snacks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="nav-search-input"
              />
            </div>
          </form>

          {/* Action Buttons: Cart & User Account */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Trigger Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="View shopping cart"
              className="relative p-2.5 rounded-xl text-[#0e1e15] hover:bg-[#ebf7ee] hover:text-[#0f3822] transition-colors focus:outline-none"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-[#f97316] text-white text-[10px] font-bold rounded-full flex-center px-1 border-2 border-white shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account / Dropdown */}
            <div className="relative">
              {user ? (
                <button
                  type="button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-1 sm:pr-2.5 rounded-full hover:bg-[#fbf9f5] border border-transparent hover:border-[#e8e3d8] transition-all focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0f3822] to-[#16a34a] text-white font-bold text-xs flex-center shadow-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline text-xs font-semibold text-[#0e1e15] max-w-[90px] truncate">
                    {user.name.split(" ")[0]}
                  </span>
                  <ChevronDownIcon
                    className={`w-3.5 h-3.5 text-[#6e7f75] transition-transform duration-200 ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    className="hidden md:inline-flex btn-primary !py-2 !px-4 text-xs font-semibold"
                  >
                    <UserIcon className="w-3.5 h-3.5" />
                    <span>Sign In</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    aria-label="Toggle mobile menu"
                    className="md:hidden p-2 rounded-xl text-[#0e1e15] hover:bg-[#fbf9f5] transition-colors focus:outline-none"
                  >
                    {userMenuOpen ? (
                      <XIcon className="w-5 h-5" />
                    ) : (
                      <MenuIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              )}

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <>
                  {/* Backdrop overlay */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setUserMenuOpen(false)}
                  />

                  {/* Dropdown Container */}
                  <div className="dropdown-menu absolute right-0 mt-2.5 w-60 z-50 animate-fade-in">
                    {/* User Profile Header */}
                    {user && (
                      <div className="px-4 py-3 bg-[#fbf9f5] border-b border-[#e8e3d8]">
                        <p className="text-sm font-bold text-[#0e1e15] truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-[#6e7f75] truncate">
                          {user.email}
                        </p>
                      </div>
                    )}

                    {/* Navigation Links inside Dropdown */}
                    <div className="py-1" onClick={() => setUserMenuOpen(false)}>
                      {!user && (
                        <Link to="/login" className="dropdown-link">
                          <UserIcon className="w-4 h-4 text-[#108942]" />
                          <span>Sign In</span>
                        </Link>
                      )}

                      {user && (
                        <Link to="/orders" className="dropdown-link">
                          <PackageIcon className="w-4 h-4 text-[#108942]" />
                          <span>My Orders</span>
                        </Link>
                      )}

                      {user && (
                        <Link to="/addresses" className="dropdown-link">
                          <MapPinIcon className="w-4 h-4 text-[#108942]" />
                          <span>Saved Addresses</span>
                        </Link>
                      )}

                      {/* Mobile-only section navigation */}
                      <div className="md:hidden border-t border-[#e8e3d8] my-1 pt-1">
                        <Link to="/" className="dropdown-link">
                          <ArrowUpRightIcon className="w-4 h-4" />
                          <span>Home</span>
                        </Link>
                        <Link to="/products" className="dropdown-link">
                          <ArrowUpRightIcon className="w-4 h-4" />
                          <span>Products</span>
                        </Link>
                        <Link to="/deals" className="dropdown-link text-[#ea580c]">
                          <SparklesIcon className="w-4 h-4 text-[#ea580c]" />
                          <span>Deals</span>
                          <span className="badge-carrot text-[10px] py-0.5 px-1.5 ml-auto font-bold">
                            HOT
                          </span>
                        </Link>
                      </div>

                      {/* Admin Panel Link */}
                      {user?.isAdmin && (
                        <div className="border-t border-[#e8e3d8] my-1 pt-1">
                          <Link
                            to="/admin/products"
                            className="dropdown-link hover:bg-[#fff4ed]"
                          >
                            <ShieldIcon className="w-4 h-4 text-[#ea580c]" />
                            <span className="font-semibold text-[#ea580c]">
                              Admin Panel
                            </span>
                            <span className="badge-carrot text-[10px] py-0.5 px-1.5 ml-auto">
                              ADMIN
                            </span>
                          </Link>
                        </div>
                      )}

                      {/* Logout Action */}
                      {user && (
                        <div className="border-t border-[#e8e3d8] my-1 pt-1">
                          <button
                            type="button"
                            onClick={handleLogout}
                            className="dropdown-link-danger"
                          >
                            <LogOutIcon className="w-4 h-4" />
                            <span>Logout</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
