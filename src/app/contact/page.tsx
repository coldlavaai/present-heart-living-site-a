import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Contact Present Heart Living | Yoga & Pilates Classes Highlands",
  description:
    "Contact Present Heart Living to learn more about yoga, Pilates, breathwork and wellbeing classes in the Scottish Highlands.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Present Heart Living"
        imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop"
        imageAlt="Calm yoga studio environment"
        variant="narrow"
      />

      {/* Get in Touch */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Get in Touch</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              If you would like to learn more about classes, retreats or wellbeing sessions, please feel free
              to get in touch.
            </p>
            <p>
              Present Heart Living welcomes enquiries from individuals who are interested in exploring yoga,
              Pilates, breathwork or mindful movement practices. Whether you are completely new to yoga or
              returning to practice after time away, Audrey is happy to answer questions and help you find the
              class or experience that feels right for you.
            </p>
            <p>
              You are also welcome to enquire about upcoming retreats, workshops or corporate wellbeing
              sessions for organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Details */}
            <div>
              <h2 className="mb-6">Contact Details</h2>
              <div className="space-y-6 text-peat/80">
                <div>
                  <h3 className="text-lg font-semibold text-peat mb-2">Address</h3>
                  <p>9 Breac An Ord</p>
                  <p>Maryburgh</p>
                  <p>Ross Shire</p>
                  <p>IV7 8DH</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-peat mb-2">Email</h3>
                  <a
                    href="mailto:presentheartyoga@gmail.com"
                    className="text-sage hover:text-forest transition-colors"
                  >
                    presentheartyoga@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-peat mb-2">Phone</h3>
                  <a href="tel:07805899207" className="text-sage hover:text-forest transition-colors">
                    07805 899207
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="mb-6">Send a Message</h2>
              <p className="text-peat/80 mb-8">
                If you would prefer, you can use the contact form below to send a message. Audrey will respond
                as soon as possible.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-peat mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-peat/20 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-peat mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-peat/20 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-peat mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-peat/20 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-peat mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-peat/20 bg-white text-peat focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors resize-vertical"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors bg-sage text-white hover:bg-forest"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
