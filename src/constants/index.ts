import Category from "@/components/dashboard/admin/Category";
import Transactions from "@/components/dashboard/admin/Transactions";
import User from "@/components/dashboard/admin/User";
import AdminShops from "@/components/dashboard/admin/AdminShops";
import VendorOrders from "@/components/dashboard/vendor/VendorOrders";
import VendorProducts from "@/components/dashboard/vendor/VendorProducts";
import VendorReviews from "@/components/dashboard/vendor/VendorReviews";
import VendorShop from "@/components/dashboard/vendor/VendorShop";
import VendorFlashSale from "@/components/dashboard/vendor/VendorFlashSale";
import Cart from "@/components/dashboard/customer/Cart";
import CustomerOrders from "@/components/dashboard/customer/CustomerOrders";
import RecentProducts from "@/components/dashboard/customer/RecentProducts";
import { SidebarItems } from "@/types";
import { Truck, Package, Shield } from "lucide-react";
import ChangePassword from "@/components/dashboard/ChangePassword";

export const allowedRoles = {
  admin: ["ADMIN"],
  vendor: ["VENDOR"],
  customer: ["CUSTOMER"],
};

export const sidebarItems: SidebarItems = {
  VENDOR: [
    { label: "Shop", component: VendorShop },
    { label: "Products", component: VendorProducts },
    { label: "Orders", component: VendorOrders },
    { label: "Review", component: VendorReviews },
    { label: "Flash Sale", component: VendorFlashSale },
    { label: "Change Password", component: ChangePassword },
  ],
  CUSTOMER: [
    { label: "Orders", component: CustomerOrders },
    { label: "Recent Products", component: RecentProducts },
    { label: "Cart", component: Cart },

    { label: "Change Password", component: ChangePassword },
  ],
  ADMIN: [
    { label: "Users", component: User },
    { label: "Category", component: Category },
    { label: "Shops", component: AdminShops },
    { label: "Transactions", component: Transactions },
    { label: "Change Password", component: ChangePassword },
  ],
};

export const selectButtonCategories = [
  { id: "d1027005-3c3b-41ab-9b0c-c4588555613a", name: "Phone" },
  { id: "8a3e68b5-38a1-4815-a402-725ac9393b3a", name: "Fashion" },
  { id: "edfb1493-0919-4eca-b209-ba983810da61", name: "Home Appliance" },
  { id: "d3c33622-da2c-4c01-86d8-2ac5617ab973", name: "Beauty Care" },
  { id: "7afb6d31-6f92-48e5-82ef-9e5d0aa56f90", name: "Sports" },
];

export const cardCategories = [
  { id: 1, title: "Driftwood Table Decor", count: 20, icon: "🪑" },
  { id: 2, title: "Floor Driftwood Sculpture", count: 12, icon: "🎨" },
  { id: 3, title: "Tree", count: 3, icon: "🎄" },
  { id: 4, title: "Wooden Bluetooth Speaker", count: 9, icon: "🔊" },
  { id: 5, title: "Receivers Amplifiers", count: 10, icon: "🕯️" },
  { id: 6, title: "Appetizer Plate Set", count: 5, icon: "🍽️" },
];

export const features = [
  {
    Icon: Truck,
    text: "Free Shipping on orders over $100",
  },
  {
    Icon: Package,
    text: "10 Days Returns if you change your mind",
  },
  {
    Icon: Shield,
    text: "Guaranteed 100% Original Product",
  },
];
