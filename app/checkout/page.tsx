"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  PlaneIcon,
  CreditCardIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  HeartIcon,
  ExternalLinkIcon,
  DropletIcon,
  UsersIcon,
  ShieldCheckIcon,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useDonation } from "@/contexts/donation-context"
import Image from "next/image"

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
    stops: "Direct", // translated to English
    date: "15 Mar 2024",
  },
  {
    id: 2,
    airline: "BlockchainAir",
    from: "Buenos Aires (EZE)",
    to: "Córdoba (COR)",
    departure: "14:20",
    arrival: "16:05",
    duration: "1h 45m",
    price: 48000,
    stops: "Direct", // translated to English
    date: "15 Mar 2024",
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
    stops: "Direct", // translated to English
    date: "15 Mar 2024",
  },
]

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { addDonation } = useDonation()
  const flightId = searchParams.get("flight")
  const [selectedFlight, setSelectedFlight] = useState<any>(null)
  const [donationOption, setDonationOption] = useState("yes")
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [passengerInfo, setPassengerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const arsToXlm = (arsAmount: number) => {
    // Conversion rate: 1 XLM ≈ 2500 ARS (fictional rate for demo)
    const xlmAmount = arsAmount / 2500
    return xlmAmount.toFixed(2)
  }

  useEffect(() => {
    if (flightId) {
      const flight = flights.find((f) => f.id === Number.parseInt(flightId))
      setSelectedFlight(flight)
    }
  }, [flightId])

  const handleDonationChange = (value: string) => {
    if (value === "no" && donationOption === "yes") {
      setShowDonationModal(true)
    } else {
      setDonationOption(value)
    }
  }

  const confirmNoDonation = () => {
    setDonationOption("no")
    setShowDonationModal(false)
  }

  const keepDonation = () => {
    setDonationOption("yes")
    setShowDonationModal(false)
  }

  const handlePayment = () => {
    alert("Confirm and pay button clicked!")

    if (donationOption === "yes" && selectedFlight) {
      addDonation({
        amount: donationAmount,
        service: `${selectedFlight.airline} - Flight ${selectedFlight.from} → ${selectedFlight.to}`, // translated service name
        cause: "Clean Water Foundation", // translated cause name
      })
    }
    // Simulate payment success
    alert(
      "Payment processed successfully with XLM! Thank you for your purchase" + // translated success message
        (donationOption === "yes" ? " and your donation" : "") +
        ".",
    )
    router.push("/")
  }

  if (!selectedFlight) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation variant="aerobooking" />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <PlaneIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Flight not found</h2>{" "}
            {/* translated error message */}
            <p className="text-gray-600 mb-4">The selected flight is not available.</p>{" "}
            {/* translated error description */}
            <Link href="/">
              <Button>Back to home</Button> {/* translated button text */}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const donationAmount = Math.round(selectedFlight.price * 0.03)
  const subtotal = selectedFlight.price
  const taxes = Math.round(selectedFlight.price * 0.21)
  const total = subtotal + taxes + (donationOption === "yes" ? donationAmount : 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation variant="aerobooking" />

      <Dialog open={showDonationModal} onOpenChange={setShowDonationModal}>
        <DialogContent className="max-w-sm sm:max-w-md mx-4 sm:mx-auto">
          <DialogHeader className="text-center pb-2">
            <div className="mx-auto w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <DropletIcon className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
            </div>
            <DialogTitle className="text-lg sm:text-xl font-bold text-gray-900">
              Wait! Your small donation can save lives
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 sm:p-4 rounded-lg mb-4">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                  ARS ${donationAmount.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">= 30 days of clean water for 1 child</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
              <div className="bg-white p-2 sm:p-3 rounded-lg border">
                <UsersIcon className="h-4 sm:h-5 w-4 sm:w-5 text-green-600 mx-auto mb-1" />
                <div className="text-base sm:text-lg font-bold text-gray-900">2,847</div>
                <div className="text-xs text-gray-600">people helped today</div>
              </div>
              <div className="bg-white p-2 sm:p-3 rounded-lg border">
                <ShieldCheckIcon className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mx-auto mb-1" />
                <div className="text-base sm:text-lg font-bold text-gray-900">100%</div>
                <div className="text-xs text-gray-600">blockchain verified</div>
              </div>
            </div>

            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800 text-center">
                <strong>🏆 Join 12,000+ donors</strong> who've made a difference with complete transparency on Stellar
                blockchain
              </p>
            </div>

            <div className="flex space-x-2">
              <Button onClick={keepDonation} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                <HeartIcon className="h-4 w-4 mr-2" />
                Yes, I'll help!
              </Button>
              <Button
                onClick={confirmNoDonation}
                variant="outline"
                className="flex-1 text-gray-600 hover:text-gray-700 bg-transparent"
              >
                Skip this time
              </Button>
            </div>

            <div className="text-center">
              <Link
                href="/donar-facil"
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 underline"
                onClick={() => setShowDonationModal(false)}
              >
                Learn more about DonaFacil →
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Passenger Information */}
          <div className="xl:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <UserIcon className="h-5 w-5" />
                  <span>Passenger Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={passengerInfo.firstName}
                      onChange={(e) => setPassengerInfo({ ...passengerInfo, firstName: e.target.value })}
                      placeholder="First Name"
                      className="h-11 sm:h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={passengerInfo.lastName}
                      onChange={(e) => setPassengerInfo({ ...passengerInfo, lastName: e.target.value })}
                      placeholder="Last Name"
                      className="h-11 sm:h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-3.5 sm:top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={passengerInfo.email}
                      onChange={(e) => setPassengerInfo({ ...passengerInfo, email: e.target.value })}
                      className="pl-10 h-11 sm:h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-3.5 sm:top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      value={passengerInfo.phone}
                      onChange={(e) => setPassengerInfo({ ...passengerInfo, phone: e.target.value })}
                      className="pl-10 h-11 sm:h-12"
                      placeholder="+54 11 0000 0000"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <CreditCardIcon className="h-5 w-5" />
                  <span>Payment with XLM (Stellar)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 mb-2">
                    <strong>Secure payment with Stellar blockchain</strong>
                  </p>
                  <p className="text-xs text-blue-600">
                    Your transaction will be processed on the Stellar network (XLM) ensuring complete transparency and
                    traceability.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="walletAddress">Stellar wallet address</Label>
                  <Input
                    id="walletAddress"
                    placeholder="GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                    className="h-11 sm:h-12 text-xs sm:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memo">Memo (optional)</Label>
                  <Input id="memo" placeholder="Transaction memo" className="h-11 sm:h-12" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Flight Summary & Price Summary */}
          <div className="space-y-6">
            {/* Flight Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Flight Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">{selectedFlight.airline}</h3>
                    <p className="text-sm text-gray-600">{selectedFlight.date}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {selectedFlight.stops}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold">{selectedFlight.departure}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{selectedFlight.from}</div>
                  </div>
                  <div className="flex-1 text-center px-2">
                    <div className="text-xs sm:text-sm text-gray-500">{selectedFlight.duration}</div>
                    <div className="h-px bg-gray-300 my-2"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold">{selectedFlight.arrival}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{selectedFlight.to}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Summary with Integrated Donation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Price Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm sm:text-base">Subtotal</span>
                  <div className="text-right">
                    <span className="text-sm sm:text-base">ARS ${subtotal.toLocaleString()}</span>
                    <div className="text-xs text-gray-500">{arsToXlm(subtotal)} XLM</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm sm:text-base">Taxes and fees</span>
                  <div className="text-right">
                    <span className="text-sm sm:text-base">ARS ${taxes.toLocaleString()}</span>
                    <div className="text-xs text-gray-500">{arsToXlm(taxes)} XLM</div>
                  </div>
                </div>

                <div className="py-3 px-3 bg-green-50/50 rounded-lg border border-green-100">
                  <div className="flex items-start space-x-2 mb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Image
                        src="/donafacil-logo.png"
                        alt="DonaFacil"
                        width={16}
                        height={16}
                        className="flex-shrink-0 sm:w-5 sm:h-5"
                      />
                      <HeartIcon className="h-3 sm:h-4 w-3 sm:w-4 text-green-600 flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 mb-2">Help with your purchase</p>
                      <RadioGroup value={donationOption} onValueChange={handleDonationChange} className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="yes" id="donate-yes" className="mt-0.5" />
                          <Label htmlFor="donate-yes" className="text-xs sm:text-sm cursor-pointer leading-relaxed">
                            Yes, donate ARS ${donationAmount.toLocaleString()} to a good cause
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="no" id="donate-no" className="mt-0.5" />
                          <Label htmlFor="donate-no" className="text-xs sm:text-sm cursor-pointer leading-relaxed">
                            Don't donate this time
                          </Label>
                        </div>
                      </RadioGroup>
                      {donationOption === "yes" && (
                        <div className="mt-2 text-xs text-gray-600">
                          <p className="mb-1 leading-relaxed">
                            Your donation will help <strong>Clean Water Foundation</strong> provide access to clean
                            water. 100% transparent traceability on Stellar blockchain.
                          </p>
                          <Link
                            href="/donar-facil"
                            className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 font-medium"
                          >
                            <span>Learn more about this cause</span>
                            <ExternalLinkIcon className="h-3 w-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {donationOption === "yes" && (
                  <div className="flex justify-between text-green-600">
                    <span className="text-sm sm:text-base">Donation</span>
                    <div className="text-right">
                      <span className="text-sm sm:text-base">ARS ${donationAmount.toLocaleString()}</span>
                      <div className="text-xs text-green-500">{arsToXlm(donationAmount)} XLM</div>
                    </div>
                  </div>
                )}

                <Separator />
                <div className="flex justify-between text-base sm:text-lg font-bold">
                  <span>Total</span>
                  <div className="text-right">
                    <span>ARS ${total.toLocaleString()}</span>
                    <div className="text-xs sm:text-sm text-gray-600 font-normal">{arsToXlm(total)} XLM</div>
                  </div>
                </div>
                <Button
                  onClick={handlePayment}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mt-4 text-sm sm:text-base"
                >
                  Confirm and pay ARS ${total.toLocaleString()}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2 leading-relaxed">
                  By confirming, you accept our terms and conditions. Transaction processed on Stellar network (XLM).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
