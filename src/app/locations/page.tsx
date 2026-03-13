import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import ClassCard from "@/components/cards/ClassCard";

export const metadata: Metadata = {
  title: "Yoga & Pilates Classes in the Highlands | Present Heart Living",
  description:
    "Discover yoga and Pilates classes across the Scottish Highlands with Present Heart Living. Welcoming practices designed to support strength, flexibility and wellbeing.",
};

export default function LocationsPage() {
  return (
    <>
      <Hero
        title="Yoga and Pilates Classes in the Scottish Highlands"
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop"
        imageAlt="Scottish Highlands landscape"
        variant="narrow"
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Mindful Movement in the Highlands</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Present Heart Living offers yoga, Pilates and mindful movement practices for people living across
              the Scottish Highlands.
            </p>
            <p>
              Classes are designed to provide a calm and welcoming environment where students can explore
              movement, breathing and relaxation practices that support physical and emotional wellbeing.
            </p>
            <p>
              Many people are drawn to yoga because they are seeking balance within busy lives. Others arrive
              looking for ways to improve flexibility, reduce stress or reconnect with their bodies through
              movement. Whatever brings you to practice, Present Heart Living aims to provide a supportive
              space where individuals can explore yoga and Pilates at their own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Accessible Across Region */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Classes Accessible Across the Region</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Present Heart Living welcomes students from communities across the Highlands, including those
              living in Inverness, the Black Isle and surrounding areas.
            </p>
            <p>
              The location allows people from a wide range of nearby towns and villages to attend classes while
              enjoying a peaceful environment that supports mindful practice.
            </p>
          </div>
          <p className="text-peat/80 mt-6 mb-4">Students often travel from areas such as:</p>
          <ul className="space-y-2 text-peat/80">
            {["Inverness", "Dingwall", "Muir of Ord", "Beauly", "The Black Isle", "Conon Bridge", "Fortrose and Rosemarkie"].map((place) => (
              <li key={place} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {place}
              </li>
            ))}
          </ul>
          <p className="text-peat/80 mt-6">
            For many students, the journey to class becomes part of the transition from a busy day into a
            calmer and more reflective space.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Find Classes Near You</h2>
          <p className="text-peat/80 text-center mb-10 max-w-2xl mx-auto">
            To help you explore classes more easily, we have created location pages that provide more
            information about yoga and Pilates practices available to students across the region.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ClassCard
              title="Yoga Classes Inverness"
              description="Discover yoga classes within easy reach of Inverness designed for beginners and experienced practitioners alike."
              href="/yoga-classes-inverness"
              imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
              imageAlt="Yoga classes near Inverness"
            />
            <ClassCard
              title="Yoga Classes Black Isle"
              description="Explore yoga practices for those living across the Black Isle and surrounding communities."
              href="/yoga-classes-black-isle"
              imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
              imageAlt="Yoga classes Black Isle"
            />
            <ClassCard
              title="Pilates Classes Highlands"
              description="Learn more about Pilates classes designed to support posture, strength and body awareness."
              href="/pilates-classes-highlands"
              imageSrc="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop"
              imageAlt="Pilates classes Highlands"
            />
            <ClassCard
              title="Beginner Yoga Classes"
              description="A welcoming introduction to yoga for those attending their first class."
              href="/beginner-yoga-classes-highlands"
              imageSrc="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop"
              imageAlt="Beginner yoga classes"
            />
          </div>
        </div>
      </section>

      {/* Begin */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Begin Your Practice</h2>
          <p className="text-peat/80 max-w-2xl mx-auto">
            Whether you are new to yoga or returning after time away, Present Heart Living offers a supportive
            environment where you can begin or deepen your practice. Through mindful movement and breath
            awareness, students can develop strength, flexibility and a greater sense of balance in everyday
            life.
          </p>
        </div>
      </section>

      <CTABanner
        title="Start Your Journey"
        primaryCTA={{ label: "Explore Classes", href: "/classes" }}
        secondaryCTA={{ label: "Book a Class", href: "/contact" }}
      />
    </>
  );
}
