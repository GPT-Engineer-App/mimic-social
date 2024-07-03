import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Bell, MessageSquare, Search, User } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="flex-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              <input
                type="text"
                placeholder="Search Facebook"
                className="bg-transparent border-none outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5" />
              <MessageSquare className="h-5 w-5" />
              <User className="h-5 w-5" />
            </div>
          </div>
        </header>
        <main className="flex-grow p-4 overflow-auto flex">
          <div className="flex-1">
            <Outlet />
          </div>
          <RightSidebar />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <img src="/facebook-logo.png" alt="Facebook Logo" className="h-6 w-6" />
          <span>Facebook</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <img src="/facebook-logo.png" alt="Facebook Logo" className="h-6 w-6" />
          <span>Facebook</span>
        </NavLink>
        {navItems.map((item) => (
          <SidebarNavLink key={item.to} to={item.to}>
            {item.title}
          </SidebarNavLink>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const RightSidebar = () => (
  <div className="hidden lg:block w-64 p-4 border-l bg-muted/40">
    <h2 className="text-lg font-semibold mb-4">Friend Requests</h2>
    {/* Add friend requests content here */}
    <h2 className="text-lg font-semibold mb-4">Birthdays</h2>
    {/* Add birthdays content here */}
    <h2 className="text-lg font-semibold mb-4">Sponsored</h2>
    {/* Add sponsored content here */}
  </div>
);

const Footer = () => (
  <footer className="border-t bg-muted/40 p-4 text-center">
    <nav className="flex justify-center gap-4 text-sm">
      <a href="/about" className="hover:underline">About</a>
      <a href="/help" className="hover:underline">Help</a>
      <a href="/terms" className="hover:underline">Terms</a>
      <a href="/privacy" className="hover:underline">Privacy</a>
    </nav>
  </footer>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <User className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;