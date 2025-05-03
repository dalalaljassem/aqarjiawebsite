export default function ContactCards() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left section with heading */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Have a question or want to learn more about how Brick and Key can
            simplify your property management?
          </p>
        </div>

        {/* Contact cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Partner up",
              email: "info@brickandkey.com",
              phone: "+965 994-32134",
            },
            {
              title: "You complain, we listen",
              email: "pls@dontcomplain.com",
              phone: "+965 994-32134",
            },
          ].map((contact) => (
            <div key={contact.title} className="rounded-2xl bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-900">
                {contact.title}
              </h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-sm text-blue-600 hover:underline"
              >
                {contact.email}
              </a>
              <p className="mt-1 text-sm text-gray-700">{contact.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
