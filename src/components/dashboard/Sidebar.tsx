"use client";

import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"; // Adjust based on your setup
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { sidebarItems } from "@/constants";
import { NavItem } from "@/types";
import { LogOut, Menu } from "lucide-react";
import CustomButton from "../shared/CustomButton";

import { useLogoutMutation } from "@/redux/api/authApi";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import Logo from "../shared/Logo";

const Sidebar = ({
  setActiveComponent,
}: {
  setActiveComponent: (component: React.ReactNode) => void;
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const user = useSelector((state: RootState) => state.auth.user);
  const role = user?.role as "ADMIN" | "VENDOR" | "CUSTOMER";
  const dispatch = useDispatch();
  const [logoutApi] = useLogoutMutation();
  const router = useRouter();

  const navItems: NavItem[] = sidebarItems[role];

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      {/* Sidebar for Large Screens */}
      <div className="hidden lg:block  h-full w-[300px] shadow-lg bg-gradient-to-t from-blue-500 to-blue-200 dark:from-blue-500 dark:to-blue-600">
        <div className="flex justify-start items-center rounded-lg">
          <Logo />
        </div>
        <div className="p-4 ">
          <h2 className="text-xl font-bold pb-5">Welcome {user?.name}</h2>
          {navItems.map((navItem: NavItem, index: number) => {
            return (
              <CustomButton
                key={index}
                className={`w-full text-left py-3 px-4 mb-2 rounded-md ${
                  activeItem === navItem.label
                    ? "bg-blue-500  text-white "
                    : "bg-muted text-muted-foreground hover:bg-blue-900 hover:text-white"
                }`}
                onClick={() => {
                  setActiveItem(navItem.label); // Set active item
                  setActiveComponent(<navItem.component />);
                }}
              >
                {navItem.label}
              </CustomButton>
            );
          })}
          <CustomButton
            className="w-full text-left py-3 px-4 mb-2 rounded-md bg-muted text-muted-foreground hover:bg-primary-foreground hover:text-white dark:hover:bg-primary dark:hover:text-black"
            onClick={handleLogout}
          >
            <LogOut className="mr-2" />
            Logout
          </CustomButton>
        </div>
      </div>

      {/* Trigger for Mobile Screens */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsSheetOpen(true)}
        aria-label="Toggle sidebar"
        className="lg:hidden fixed top-4 right-14 z-50 bg-accent  "
      >
        {" "}
        <Menu className="text-primary font-bold text-2xl" />
      </Button>

      {/* Sheet for Mobile Screens */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button className="hidden">Open Menu</Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[80%] max-w-[300px] bg-gradient-to-r from-primary to-accent dark:from-blue-500 dark:to-blue-600"
        >
          <SheetHeader>
            <div className="flex justify-start items-center rounded-lg">
              <Logo />
            </div>
            <SheetTitle>Welcome {user?.name}</SheetTitle>
            <SheetDescription>
              {navItems.map((navItem: NavItem, index: number) => (
                <CustomButton
                  key={index}
                  className={`w-full text-left py-3 px-4 mb-2 rounded-md ${
                    activeItem === navItem.label
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-primary-foreground hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveItem(navItem.label); // Set active item
                    setActiveComponent(<navItem.component />);
                  }}
                >
                  {navItem.label}
                </CustomButton>
              ))}
            </SheetDescription>
          </SheetHeader>

          <SheetClose asChild>
            <CustomButton
              className="w-full text-left py-3 px-4 mb-2 rounded-md bg-muted text-muted-foreground hover:bg-blue-900 hover:text-white"
              onClick={handleLogout}
            >
              <LogOut className="mr-2" />
              Logout
            </CustomButton>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
