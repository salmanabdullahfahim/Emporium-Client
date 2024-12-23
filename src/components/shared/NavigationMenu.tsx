"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import {
  House,
  Store,
  Zap,
  ShoppingCart,
  CircleUserRound,
  LogIn,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useLogoutMutation } from "@/redux/api/authApi";
import { RootState } from "@/redux/store";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [logoutApi] = useLogoutMutation();
  const user = useSelector((state: RootState) => state.auth.user);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const getDashboardPath = () => {
    switch (user?.role) {
      case "ADMIN":
        return "/dashboard/admin";
      case "VENDOR":
        return "/dashboard/vendor";
      case "CUSTOMER":
        return "/dashboard/customer";
      default:
        return "/";
    }
  };

  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: <House />,
    },
    {
      name: "Shop",
      href: "/shop",
      icon: <Store />,
    },
    {
      name: "Flash Sale",
      href: "/flash-sale",
      icon: <Zap />,
    },
    {
      name: "Cart",
      href: "/cart",
      icon: (
        <div className="relative">
          <ShoppingCart size={20} />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
              {cartItemCount}
            </span>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white flex items-center justify-between h-[65px] p-8 md:px-12 w-full shadow-md sticky top-0 z-20">
      {/* Company logo or name */}
      <Logo />

      {/* Desktop menu */}
      <div className="hidden lg:block">
        <ul className="flex gap-8 z-10 bg-transparent font-medium text-md items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-darkText flex items-center gap-1"
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}

          {user ? (
            <li className="relative">
              <CircleUserRound
                size={24}
                className="cursor-pointer"
                onClick={toggleUserMenu}
              />
              {isUserMenuOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden">
                  <li>
                    <Link
                      href={getDashboardPath()}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <LayoutDashboard /> Dashboard
                    </Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <LogOut /> Logout
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <Link href="/sign-in" className="flex items-center gap-1">
                <LogIn /> Login
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      {item.icon}
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}

                  {user ? (
                    <>
                      <Link
                        href={getDashboardPath()}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        onClick={toggleMenu}
                      >
                        <LayoutDashboard />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Dashboard
                        </span>
                      </Link>
                      <div
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50 cursor-pointer"
                        onClick={() => {
                          handleLogout();
                          toggleMenu();
                        }}
                      >
                        <LogOut />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Logout
                        </span>
                      </div>
                    </>
                  ) : (
                    <Link
                      href="/sign-in"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <LogIn />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Login
                      </span>
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
