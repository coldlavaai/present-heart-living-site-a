import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Present Heart Living",
  description:
    "Accessibility statement for Present Heart Living. Learn about our commitment to making this website accessible to all.",
};

export default function AccessibilityPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-forest py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight">
            Accessibility Statement
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-8">
            <div>
              <h2 className="mb-4">Commitment to Accessibility</h2>
              <p>
                Present Heart Living is committed to ensuring that this website is accessible to as many people
                as possible, including individuals with disabilities.
              </p>
              <p>
                We aim to design the website so that it can be used easily by all visitors regardless of ability
                or technology.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Accessibility Features</h2>
              <p>Where possible, the website has been designed to include:</p>
              <ul className="space-y-2 mt-4">
                {[
                  "Clear navigation and page structure",
                  "Readable fonts and colour contrast",
                  "Alternative text for images",
                  "Responsive design for different devices",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sage mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4">Ongoing Improvements</h2>
              <p>
                We are continually working to improve the accessibility of this website and to ensure that it
                meets recognised accessibility standards.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Reporting Accessibility Issues</h2>
              <p>
                If you experience any difficulty accessing information on this website or require assistance,
                please contact us.
              </p>
              <p className="mt-4">
                Email:{" "}
                <a
                  href="mailto:presentheartyoga@gmail.com"
                  className="text-sage hover:text-forest transition-colors"
                >
                  presentheartyoga@gmail.com
                </a>
              </p>
              <p>We will do our best to provide the information you need in an accessible format.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
