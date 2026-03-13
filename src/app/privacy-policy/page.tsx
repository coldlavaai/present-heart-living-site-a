import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Present Heart Living",
  description:
    "Privacy policy for Present Heart Living. Learn how we collect, use and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-forest py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-8">
            <div>
              <h2 className="mb-4">Introduction</h2>
              <p>
                Present Heart Living respects your privacy and is committed to protecting your personal data.
                This privacy policy explains how we collect, use and protect any information you provide when
                using this website or when contacting us directly.
              </p>
              <p>
                Present Heart Living operates in accordance with the UK General Data Protection Regulation (UK
                GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Who We Are</h2>
              <p>Present Heart Living</p>
              <p>9 Breac An Ord</p>
              <p>Maryburgh</p>
              <p>Ross Shire</p>
              <p>IV7 8DH</p>
              <p className="mt-4">
                Email:{" "}
                <a href="mailto:presentheartyoga@gmail.com" className="text-sage hover:text-forest transition-colors">
                  presentheartyoga@gmail.com
                </a>
              </p>
              <p>
                If you have any questions about this privacy policy or your personal data, please contact us
                using the details above.
              </p>
            </div>

            <div>
              <h2 className="mb-4">What Information We Collect</h2>
              <p>We may collect the following information:</p>
              <ul className="space-y-2 mt-4">
                {[
                  "Name",
                  "Email address",
                  "Phone number",
                  "Information provided through contact forms",
                  "Booking information if you register for classes or events",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sage mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We may also collect anonymous data such as website usage statistics to help improve the
                website.
              </p>
            </div>

            <div>
              <h2 className="mb-4">How We Use Your Information</h2>
              <p>Your information may be used to:</p>
              <ul className="space-y-2 mt-4">
                {[
                  "Respond to enquiries",
                  "Manage class or event bookings",
                  "Provide information about services",
                  "Improve the website and user experience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sage mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-4">How Your Information Is Stored</h2>
              <p>
                Your personal data is stored securely and only retained for as long as necessary to fulfil the
                purpose for which it was collected.
              </p>
              <p>
                Reasonable technical and organisational measures are used to protect your data.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Your Rights</h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul className="space-y-2 mt-4">
                {[
                  "Request access to your personal data",
                  "Request correction of inaccurate data",
                  "Request deletion of your data",
                  "Withdraw consent to data processing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sage mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Requests can be made by contacting{" "}
                <a href="mailto:presentheartyoga@gmail.com" className="text-sage hover:text-forest transition-colors">
                  presentheartyoga@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-4">Third Party Services</h2>
              <p>
                This website may use third party services such as booking systems, analytics tools or embedded
                maps. These providers may collect limited information in accordance with their own privacy
                policies.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Changes to This Policy</h2>
              <p>
                This policy may be updated occasionally to reflect changes in legal requirements or website
                functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
