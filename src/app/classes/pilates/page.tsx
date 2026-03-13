import type { Metadata } from "next";
import ClassDetailLayout from "@/components/sections/ClassDetailLayout";

export const metadata: Metadata = {
  title: "Pilates Classes Highlands | Present Heart Living",
  description:
    "Pilates classes in the Scottish Highlands. Present Heart Living offers Pilates designed to improve posture, strength and body awareness in a calm supportive environment.",
};

export default function PilatesClassPage() {
  return (
    <ClassDetailLayout
      title="Pilates Classes"
      heroImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=900&fit=crop"
      heroAlt="Pilates mat practice"
      ctaLabel="Book a Pilates Class"
      relatedClasses={[
        {
          title: "Seasonal Flow Yoga",
          description: "A flowing practice combining breath and movement to build strength, flexibility and body awareness.",
          href: "/classes/seasonal-flow-yoga",
          imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
          imageAlt: "Seasonal flow yoga",
        },
        {
          title: "Restorative Yoga",
          description: "A deeply calming practice designed to support relaxation and nervous system recovery.",
          href: "/classes/restorative-yoga",
          imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
          imageAlt: "Restorative yoga",
        },
        {
          title: "Breathwork",
          description: "Breathwork practices supporting relaxation, awareness and emotional balance.",
          href: "/classes/breathwork",
          imageSrc: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600&h=400&fit=crop",
          imageAlt: "Breathwork session",
        },
      ]}
    >
      <p>
        Pilates is a practice designed to strengthen the body, improve posture and develop greater awareness
        of movement.
      </p>
      <p>
        At Present Heart Living, Pilates classes are taught with a mindful approach that complements yoga
        practices. The focus is on controlled movement, alignment and building strength that supports long
        term physical wellbeing.
      </p>
      <p>
        Classes are suitable for beginners and those looking to develop a stronger foundation for healthy
        movement.
      </p>
      <p>
        Pilates focuses on controlled movement, alignment and core strength. The practice supports healthy
        posture and improves the stability of the muscles that support the spine.
      </p>
      <p>
        Pilates and yoga complement one another by developing both strength and flexibility. While yoga often
        focuses on breath and mobility, Pilates strengthens the muscles that stabilise the body and support
        healthy posture. Together they create a balanced approach to movement and wellbeing.
      </p>
    </ClassDetailLayout>
  );
}
