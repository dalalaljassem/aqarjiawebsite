import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Corporate",
    id: "tier-corp",
    href: "#",
    priceMonthly: "$99",
    description:
      "For small property managers who need essential tools to get started.",
    features: [
      "Unlimited properties",
      "Tenant & owner portals",
      "Online rent collection",
      "Automated lease renewal",
      "Advanced reporting & analytics",
      "Priority customer support",
      "Custom property and user limits",
      "Dedicated account manager",
      "White-label solution",
      "API access & custom integrations",
    ],
    featured: false,
  },
  {
    name: "Personal",
    id: "tier-personal",
    href: "#",
    priceMonthly: "$29",
    description:
      "For small property managers who need essential tools to get started.",
    features: [
      "Up to 10 properties",
      "Tenant management dashboard",
      "Payment tracking & reminders",
      "Basic financial reports",
      "Email support",
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingSection() {
  return (
    <div
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="Services"
    >
      {/* background blur shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-[#335ABD] to-[#96B9FF] opacity-30"
        />
      </div>

      {/* heading */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-blue-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-800 sm:text-xl">
          Choose a plan that gives you the tools to manage properties, track
          payments, and support tenants — all in one place.
        </p>
      </div>

      {/* pricing cards */}
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              "rounded-3xl p-8 border shadow-sm",
              tier.featured
                ? "bg-white/10 backdrop-blur-xl border-white/20"
                : "bg-white border-gray-200"
            )}
          >
            <h3 id={tier.id} className="text-blue-600 text-sm font-semibold">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline text-gray-900 text-5xl font-bold">
              {tier.priceMonthly}
              <span className="ml-2 text-base font-medium text-gray-500">
                /month
              </span>
            </p>
            <p className="mt-4 text-gray-700 text-sm">{tier.description}</p>

            <ul className="mt-6 space-y-3 text-sm text-gray-800">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-x-2">
                  <CheckIcon
                    className="h-5 w-5 text-blue-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              className={classNames(
                "mt-8 block rounded-md px-4 py-2.5 text-center text-sm font-semibold transition",
                tier.featured
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "text-blue-600 ring-1 ring-inset ring-blue-300 hover:ring-blue-400"
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
