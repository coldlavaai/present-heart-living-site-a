import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Present Heart Living",
  description:
    "Cookie policy for Present Heart Living. Learn how cookies are used on this website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-forest py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight">
            Cookie Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-8">
            <div>
              <h2 className="mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small files stored on your device when you visit a website. They help websites
                function properly and provide information about how visitors use the site.
              </p>
            </div>

            <div>
              <h2 className="mb-4">How We Use Cookies</h2>
              <p>Present Heart Living may use cookies to:</p>
              <ul className="space-y-2 mt-4">
                {[
                  "Improve website performance",
                  "Understand how visitors interact with the website",
                  "Provide a better user experience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sage mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                These cookies do not collect personal information that identifies you directly.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Types of Cookies Used</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-peat mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function correctly.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-peat mb-2">Analytics Cookies</h3>
                  <p>
                    Analytics cookies help us understand how visitors use the website so that we can improve its
                    design and content.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4">Managing Cookies</h2>
              <p>
                Most web browsers allow you to control or disable cookies through browser settings. You can
                choose to block cookies, although this may affect how the website functions.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Third Party Cookies</h2>
              <p>
                Some services used on the website, such as embedded maps or booking systems, may set their own
                cookies.
              </p>
              <p>These are controlled by the third party provider.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
