"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PlaneIcon, HeartIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDonation } from "@/contexts/donation-context";

interface NavigationProps {
  variant?: "aerobooking" | "donar-facil";
}

export function Navigation({ variant = "aerobooking" }: NavigationProps) {
  const pathname = usePathname();
  const { user, isLoggedIn, logout, login } = useDonation();

  const handleGoogleLogin = () => {
    login({
      name: "María González",
      email: "maria.gonzalez@gmail.com",
      avatar: "/woman-profile.png",
    });
  };

  const handleConnectWallet = () => {
    alert("Connect Wallet clicked!");
  };

  if (variant === "donar-facil") {
    return (
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/donar-facil" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl">
                <HeartIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  DonaFacil {/* kept brand name as is */}
                </span>
                <p className="text-xs text-gray-600">Blockchain transparency</p>{" "}
                {/* translated tagline */}
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleConnectWallet}
                variant="outline"
                className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 bg-transparent"
              >
                Connect Wallet
              </Button>
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user?.avatar || "/placeholder.svg"}
                      alt={user?.name}
                    />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name}
                  </span>
                  <Button variant="ghost" size="sm" onClick={logout}>
                    <LogOutIcon className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleGoogleLogin}
                  className="bg-white text-gray-700 border hover:bg-gray-50"
                >
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign in with Google {/* translated login button */}
                </Button>
              )}
              <Link href="/">
                <Button variant="outline" size="sm">
                  Back to AeroBooking {/* translated back button */}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="flex items-center space-x-2">
            <PlaneIcon className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              AeroBooking
            </span>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-8">
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <Link
                href="/"
                className={`font-medium text-sm lg:text-base ${
                  pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Flights
              </Link>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
              >
                Hotels
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
              >
                Cars
              </a>
            </nav>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                onClick={handleConnectWallet}
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent text-xs sm:text-sm px-2 sm:px-3"
              >
                <span className="hidden sm:inline">Connect Wallet</span>
                <span className="sm:hidden">Connect</span>
              </Button>
              <Link href="/donar-facil" className="hidden sm:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  <HeartIcon className="h-4 w-4 mr-1" />
                  DonaFacil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
