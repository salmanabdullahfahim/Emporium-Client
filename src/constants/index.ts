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
  { id: "876bebf5-1207-4f56-9909-cfba8dbaa5c6", name: "Phone" },
  { id: "0abd1454-db1e-4e9a-ba26-bf940f5fc46c", name: "Fashion" },
  { id: "78a85c36-349e-41c9-bcc0-1d80e3955621", name: "Home Applience" },
  { id: "ce25fcb8-2d28-4e00-aa70-16d9dfbf08d4", name: "Beauty Care" },
  { id: "531928ae-7f3f-4cc2-ad52-08cba97c552e", name: "Sports" },
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
    text: "1 Day Returns if you change your mind",
  },
  {
    Icon: Shield,
    text: "Guaranteed 100% Organic from natural farms",
  },
];

export const randomColors = ["blue", "pink", "red", "purple", "green"];
export const randomTags = [
  "fashion",
  "sale",
  "new arrival",
  "limited edition",
  "exclusive",
];
