"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropletIcon,
  UsersIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  ExternalLinkIcon,
  MapPinIcon,
  CheckCircleIcon,
  TruckIcon,
  PackageIcon,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { useDonation } from "@/contexts/donation-context";

// Company logos for donation history
const companyLogos = {
  Netflix: "https://logo.clearbit.com/netflix.com",
  Spotify: "https://logo.clearbit.com/spotify.com",
  "CryptoWings Flight": "https://logo.clearbit.com/united.com",
  "BlockchainAir Flight": "https://logo.clearbit.com/delta.com",
  "StellarJet Flight": "https://logo.clearbit.com/jetblue.com",
  "Amazon Prime": "https://logo.clearbit.com/amazon.com",
  Uber: "https://logo.clearbit.com/uber.com",
};

export default function EasyGivePage() {
  const { isLoggedIn, totalDonated, login } = useDonation();

  const handleGoogleLogin = () => {
    login({
      name: "María González",
      email: "maria.gonzalez@gmail.com",
      avatar: "/woman-profile.png",
    });
  };

  const impactMetrics = {
    peopleHelped: Math.floor(totalDonated * 12),
    waterLiters: Math.floor(totalDonated * 500),
    communities: Math.floor(totalDonated / 10),
  };

  // Enhanced donation history with recurring donations and traceability
  const enhancedDonations = [
    {
      id: "0x7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
      company: "Netflix",
      service: "Netflix Subscription",
      amount: 15.99,
      cause: "Clean Water Foundation",
      date: "2024-01-15",
      status: "Delivered",
      recurring: true,
      monthsActive: 7,
      totalDonated: 111.93,
      blockHash:
        "0x4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6",
      traceability: [
        {
          step: "Donation Initiated",
          date: "2024-01-15",
          status: "completed",
          location: "Buenos Aires, AR",
        },
        {
          step: "Funds Collected",
          date: "2024-01-16",
          status: "completed",
          location: "DonaFacil HQ",
        },
        {
          step: "Partner Transfer",
          date: "2024-01-18",
          status: "completed",
          location: "Clean Water Foundation",
        },
        {
          step: "Project Allocation",
          date: "2024-01-20",
          status: "completed",
          location: "Salta Province, AR",
        },
        {
          step: "Equipment Purchase",
          date: "2024-01-25",
          status: "completed",
          location: "Local Supplier",
        },
        {
          step: "Installation",
          date: "2024-02-01",
          status: "in-progress",
          location: "Rural Community #47",
        },
        {
          step: "Impact Verification",
          date: "2024-02-15",
          status: "pending",
          location: "Field Team",
        },
      ],
    },
    {
      id: "0x8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1",
      company: "CryptoWings Flight",
      service: "CryptoWings Flight",
      amount: 1.35,
      cause: "Clean Water Foundation",
      date: "2024-03-10",
      status: "Processing",
      recurring: false,
      blockHash:
        "0x5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7",
      traceability: [
        {
          step: "Donation Initiated",
          date: "2024-03-10",
          status: "completed",
          location: "Buenos Aires, AR",
        },
        {
          step: "Funds Collected",
          date: "2024-03-11",
          status: "completed",
          location: "DonaFacil HQ",
        },
        {
          step: "Partner Transfer",
          date: "2024-03-12",
          status: "in-progress",
          location: "Clean Water Foundation",
        },
        {
          step: "Project Allocation",
          date: "",
          status: "pending",
          location: "TBD",
        },
      ],
    },
    {
      id: "0x9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2",
      company: "Spotify",
      service: "Spotify Premium",
      amount: 9.99,
      cause: "Education for All",
      date: "2024-02-01",
      status: "Delivered",
      recurring: true,
      monthsActive: 5,
      totalDonated: 49.95,
      blockHash:
        "0x6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8",
      traceability: [
        {
          step: "Donation Initiated",
          date: "2024-02-01",
          status: "completed",
          location: "Buenos Aires, AR",
        },
        {
          step: "Funds Collected",
          date: "2024-02-02",
          status: "completed",
          location: "DonaFacil HQ",
        },
        {
          step: "Partner Transfer",
          date: "2024-02-05",
          status: "completed",
          location: "Education for All",
        },
        {
          step: "School Selection",
          date: "2024-02-10",
          status: "completed",
          location: "Mendoza Province, AR",
        },
        {
          step: "Materials Purchase",
          date: "2024-02-15",
          status: "completed",
          location: "Educational Supplies Co.",
        },
        {
          step: "Delivery",
          date: "2024-02-20",
          status: "completed",
          location: "Rural School #23",
        },
        {
          step: "Impact Report",
          date: "2024-02-28",
          status: "completed",
          location: "Field Team",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Navigation variant="donar-facil" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isLoggedIn ? (
          // Landing page for non-logged users
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                <ShieldCheckIcon className="h-4 w-4" />
                <span>100% Transparent with Blockchain</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Every purchase can
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block">
                  change a life
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Turn your daily purchases into automatic donations. Every sense
                counts, every transaction is transparent, every donation has
                real and verifiable impact.
              </p>
            </div>

            {/* Current Cause */}
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="relative">
                <img
                  src="/african-children-clean-water.png"
                  alt="Children drinking clean water"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-emerald-500 text-white mb-2">
                    Active Cause
                  </Badge>
                  <h2 className="text-2xl font-bold">Clean Water Foundation</h2>
                  <p className="text-emerald-100">
                    Access to clean water in rural communities
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-2">
                      <DropletIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">2.1M</div>
                    <div className="text-sm text-gray-600">
                      Liters of clean water
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-emerald-100 p-3 rounded-full w-fit mx-auto mb-2">
                      <UsersIcon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      4,200
                    </div>
                    <div className="text-sm text-gray-600">
                      People benefited
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-teal-100 p-3 rounded-full w-fit mx-auto mb-2">
                      <MapPinIcon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">23</div>
                    <div className="text-sm text-gray-600">
                      Communities reached
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Project progress</span>
                    <span className="font-medium">78% completed</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-sm text-gray-600">
                    $12,450 USD needed to complete purification system
                    installation in 5 more communities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How it works */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center p-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Normal Purchase</h3>
                <p className="text-gray-600">
                  Make your usual purchases on any platform integrated with our
                  system.
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Automatic Donation
                </h3>
                <p className="text-gray-600">
                  A small percentage automatically goes to the active cause (you
                  can opt out).
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Verifiable Impact
                </h3>
                <p className="text-gray-600">
                  Every donation is recorded on blockchain for maximum
                  transparency and traceability.
                </p>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                onClick={handleGoogleLogin}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                View My Personal Impact
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                Sign in to see all your donations and their blockchain
                traceability
              </p>
            </div>
          </div>
        ) : (
          // Dashboard for logged users
          <div className="space-y-8">
            {/* Personal Impact Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-xs sm:text-sm">
                        Total Donated
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold">
                        ${totalDonated.toFixed(2)}
                      </p>
                    </div>
                    <TrendingUpIcon className="h-6 sm:h-8 w-6 sm:w-8 text-emerald-200" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        People Helped
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                        {impactMetrics.peopleHelped}
                      </p>
                    </div>
                    <UsersIcon className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Liters of Water
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-cyan-600">
                        {impactMetrics.waterLiters.toLocaleString()}
                      </p>
                    </div>
                    <DropletIcon className="h-6 sm:h-8 w-6 sm:w-8 text-cyan-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Communities
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-teal-600">
                        {impactMetrics.communities}
                      </p>
                    </div>
                    <MapPinIcon className="h-6 sm:h-8 w-6 sm:w-8 text-teal-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Donation History with Traceability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                  <span>Donation History - Blockchain Traceability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {enhancedDonations.map((donation) => (
                    <div
                      key={donation.id}
                      className="border rounded-lg p-6 hover:bg-gray-50 transition-colors"
                    >
                      {/* Company Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={
                              companyLogos[donation.company] ||
                              "/placeholder.svg?height=40&width=40"
                            }
                            alt={donation.company}
                            className="w-10 h-10 rounded-lg object-contain bg-white border"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {donation.company}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {donation.service}
                            </p>
                            {donation.recurring && (
                              <p className="text-xs text-blue-600">
                                Monthly • Active for {donation.monthsActive}{" "}
                                months
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-emerald-600">
                            $
                            {donation.recurring
                              ? donation.totalDonated.toFixed(2)
                              : donation.amount.toFixed(2)}
                          </div>
                          {donation.recurring && (
                            <div className="text-sm text-gray-500">
                              ${donation.amount.toFixed(2)}/month
                            </div>
                          )}
                          <Badge
                            variant="secondary"
                            className={`mt-1 ${
                              donation.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : donation.status === "Processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {donation.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Donation Details */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">
                              Cause:
                            </span>
                            <span className="ml-2 text-gray-600">
                              {donation.cause}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">
                              Date:
                            </span>
                            <span className="ml-2 text-gray-600">
                              {donation.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Blockchain Traceability */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                          <TruckIcon className="h-4 w-4 text-blue-600" />
                          <span>Impact Traceability</span>
                        </h4>

                        <div className="space-y-2">
                          {donation.traceability.map((step, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                  step.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : step.status === "in-progress"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {step.status === "completed" ? (
                                  <CheckCircleIcon className="h-4 w-4" />
                                ) : step.status === "in-progress" ? (
                                  <PackageIcon className="h-4 w-4" />
                                ) : (
                                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-900">
                                    {step.step}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {step.date}
                                  </span>
                                </div>
                                <div className="text-xs text-gray-600">
                                  {step.location}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Blockchain Details */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>TX ID: {donation.id.slice(0, 20)}...</span>
                            <span>
                              Block: {donation.blockHash.slice(0, 20)}...
                            </span>
                          </div>
                          <button className="text-emerald-600 hover:text-emerald-700 flex items-center space-x-1">
                            <span>View on Stellar</span>
                            <ExternalLinkIcon className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Unlocked Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                    <div className="text-2xl sm:text-3xl mb-2">🌟</div>
                    <p className="font-medium text-xs sm:text-sm">
                      First Donation
                    </p>
                    <p className="text-xs text-gray-600">Unlocked</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <div className="text-2xl sm:text-3xl mb-2">💧</div>
                    <p className="font-medium text-xs sm:text-sm">
                      Water Guardian
                    </p>
                    <p className="text-xs text-gray-600">1000+ liters</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-b from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
                    <div className="text-2xl sm:text-3xl mb-2">🤝</div>
                    <p className="font-medium text-xs sm:text-sm">
                      Consistent Donor
                    </p>
                    <p className="text-xs text-gray-600">4 donations</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                    <div className="text-2xl sm:text-3xl mb-2">🏆</div>
                    <p className="font-medium text-xs sm:text-sm">
                      Community Hero
                    </p>
                    <p className="text-xs text-gray-600">$50 to unlock</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
