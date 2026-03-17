import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Present Heart Living",
  description:
    "Website terms and conditions for Present Heart Living. Please read before using this website.",
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-forest py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight" style={{ color: '#FFFFFF' }}>
            Website Terms and Conditions
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
                These terms and conditions govern the use of the Present Heart Living website. By accessing or
                using this website you agree to comply with these terms.
              </p>
              <p>If you do not agree with these terms, please do not use this website.</p>
            </div>

            <div>
              <h2 className="mb-4">Website Content</h2>
              <p>
                All content on this website including text, images and design elements is the property of
                Present Heart Living unless otherwise stated.
              </p>
              <p>Content may not be copied, reproduced or distributed without prior written permission.</p>
            </div>

            <div>
              <h2 className="mb-4">Use of the Website</h2>
              <p>
                You agree to use this website only for lawful purposes. You must not use this website in any
                way that could damage the website or interfere with other users.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Information Provided</h2>
              <p>
                The information on this website is intended for general information about yoga classes, retreats
                and wellbeing practices.
              </p>
              <p>
                While we aim to keep information accurate and up to date, Present Heart Living cannot guarantee
                that all content will always be complete or current.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Health Disclaimer</h2>
              <p>
                Yoga, Pilates and movement practices involve physical activity. By participating in classes or
                activities, you acknowledge that you are responsible for your own health and wellbeing.
              </p>
              <p>
                If you have any medical conditions or injuries, you should consult a qualified healthcare
                professional before participating.
              </p>
              <p>
                Present Heart Living accepts no liability for injuries resulting from participation in
                activities where medical advice has not been sought.
              </p>
            </div>

            <div>
              <h2 className="mb-4">External Links</h2>
              <p>
                This website may include links to external websites. Present Heart Living is not responsible for
                the content or policies of these websites.
              </p>
            </div>

            <div>
              <h2 className="mb-4">Changes to Terms</h2>
              <p>
                These terms may be updated from time to time. Continued use of the website indicates acceptance
                of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
