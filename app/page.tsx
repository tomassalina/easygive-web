"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  PlaneIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

const flights = [
  {
    id: 1,
    airline: "CryptoWings",
    from: "Buenos Aires (EZE)",
    to: "Córdoba (COR)",
    departure: "08:30",
    arrival: "10:15",
    duration: "1h 45m",
    price: 45000,
    stops: "Direct",
  },
  {
    id: 2,
    airline: "BlockchainAir",
    from: "Buenos Aires (EZE)",
    to: "Córdoba (COR)",
    departure: "14:20",
    arrival: "16:05",
    duration: "1h 45m",
    price: 48500,
    stops: "Direct",
  },
  {
    id: 3,
    airline: "StellarJet",
    from: "Buenos Aires (EZE)",
    to: "Córdoba (COR)",
    departure: "19:10",
    arrival: "20:55",
    duration: "1h 45m",
    price: 42000,
    stops: "Direct",
  },
]

export default function HomePage() {
  const [selectedFlight, setSelectedFlight] = useState<number | null>(null)
  const [searchParams, setSearchParams] = useState({
    from: "Buenos Aires",
    to: "Córdoba",
    departure: "2024-03-15",
    passengers: "1",
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      <Navigation variant="aerobooking" />

      {/* Hero Section with Aviation Theme */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Aviation Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 transform rotate-12">
            <PlaneIcon className="h-16 sm:h-24 lg:h-32 w-16 sm:w-24 lg:w-32 text-blue-600" />
          </div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 transform -rotate-45">
            <PlaneIcon className="h-12 sm:h-16 lg:h-24 w-12 sm:w-16 lg:w-24 text-indigo-600" />
          </div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 transform rotate-45">
            <PlaneIcon className="h-10 sm:h-16 lg:h-20 w-10 sm:w-16 lg:w-20 text-sky-600" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <ShieldCheckIcon className="h-3 sm:h-4 w-3 sm:w-4" />
              <span className="hidden sm:inline">Web3 Aviation • Powered by Stellar Network</span>
              <span className="sm:hidden">Web3 • Stellar Network</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
              Fly the Future with
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Blockchain Aviation
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Experience next-generation flight booking with transparent pricing, instant settlements via XLM tokens,
              and automatic charitable giving that creates real-world impact.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-blue-100">
                <PlaneIcon className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base text-gray-900">Smart Contracts</h3>
                <p className="text-xs sm:text-sm text-gray-600">Automated booking & payments</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-indigo-100">
                <TrendingUpIcon className="h-6 sm:h-8 w-6 sm:w-8 text-indigo-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base text-gray-900">XLM Rewards</h3>
                <p className="text-xs sm:text-sm text-gray-600">Earn tokens with every flight</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-sky-100 sm:col-span-2 lg:col-span-1">
                <ShieldCheckIcon className="h-6 sm:h-8 w-6 sm:w-8 text-sky-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base text-gray-900">Impact Tracking</h3>
                <p className="text-xs sm:text-sm text-gray-600">Transparent donation traceability</p>
              </div>
            </div>
          </div>

          {/* Enhanced Search Form */}
          <Card className="max-w-5xl mx-auto mb-8 sm:mb-12 shadow-xl border-0 bg-white/95 backdrop-blur-sm mx-4">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="space-y-2">
                  <Label htmlFor="from" className="text-sm font-semibold text-gray-700">
                    From
                  </Label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <Input
                      id="from"
                      value={searchParams.from}
                      onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                      className="pl-11 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Origin city"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to" className="text-sm font-semibold text-gray-700">
                    To
                  </Label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
                    <Input
                      id="to"
                      value={searchParams.to}
                      onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                      className="pl-11 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Destination city"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="departure" className="text-sm font-semibold text-gray-700">
                    Departure
                  </Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-sky-500" />
                    <Input
                      id="departure"
                      type="date"
                      value={searchParams.departure}
                      onChange={(e) => setSearchParams({ ...searchParams, departure: e.target.value })}
                      className="pl-11 h-12 border-gray-200 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passengers" className="text-sm font-semibold text-gray-700">
                    Passengers
                  </Label>
                  <Select
                    value={searchParams.passengers}
                    onValueChange={(value) => setSearchParams({ ...searchParams, passengers: value })}
                  >
                    <SelectTrigger className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500">
                      <div className="flex items-center">
                        <UsersIcon className="h-5 w-5 text-purple-500 mr-2" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Passenger</SelectItem>
                      <SelectItem value="2">2 Passengers</SelectItem>
                      <SelectItem value="3">3 Passengers</SelectItem>
                      <SelectItem value="4">4+ Passengers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg shadow-lg">
                <PlaneIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                Search Flights
              </Button>
            </CardContent>
          </Card>

          {/* Flight Results */}
          <div className="space-y-4 sm:space-y-6 px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Available Flights</h2>
              <div className="text-xs sm:text-sm text-gray-600 bg-white/80 px-3 py-1 rounded-full w-fit">
                Prices in ARS • Powered by XLM
              </div>
            </div>
            {flights.map((flight) => (
              <Card
                key={flight.id}
                className={`transition-all duration-300 hover:shadow-xl border-0 bg-white/95 backdrop-blur-sm ${
                  selectedFlight === flight.id ? "ring-2 ring-blue-500 shadow-xl" : ""
                }`}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                          <PlaneIcon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                        </div>
                        <div>
                          <span className="font-bold text-lg sm:text-xl text-gray-900">{flight.airline}</span>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs sm:text-sm text-emerald-600 font-medium">{flight.stops}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">Web3 Airline</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-center sm:space-x-8 lg:space-x-12">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                            {flight.departure}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">{flight.from}</div>
                        </div>
                        <div className="flex-1 text-center relative px-4">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
                            <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full">
                              <ClockIcon className="h-3 sm:h-4 w-3 sm:w-4 text-blue-600" />
                            </div>
                            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
                          </div>
                          <div className="text-xs sm:text-sm text-blue-600 font-medium mt-2">{flight.duration}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                            {flight.arrival}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">{flight.to}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center lg:text-right lg:ml-12">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                        ${flight.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 mb-4">ARS • ~{Math.round(flight.price * 0.001)} XLM</div>
                      <Link href={`/checkout?flight=${flight.id}`}>
                        <Button
                          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow-lg"
                          onClick={() => setSelectedFlight(flight.id)}
                        >
                          Select Flight
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
