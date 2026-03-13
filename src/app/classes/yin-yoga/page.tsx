import type { Metadata } from "next";
import ClassDetailLayout from "@/components/sections/ClassDetailLayout";

export const metadata: Metadata = {
  title: "Yin Yoga Highlands | Present Heart Living",
  description:
    "Yin yoga classes supporting flexibility, joint mobility and mindfulness in the Highlands.",
};

export default function YinYogaPage() {
  return (
    <ClassDetailLayout
      title="Yin Yoga"
      heroImage="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1600&h=900&fit=crop"
      heroAlt="Yin yoga practice"
      relatedClasses={[
        {
          title: "Restorative Yoga",
          description: "A deeply calming practice designed for relaxation.",
          href: "/classes/restorative-yoga",
          imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
          imageAlt: "Restorative yoga",
        },
        {
          title: "Seasonal Flow Yoga",
          description: "A flowing practice combining movement and breath.",
          href: "/classes/seasonal-flow-yoga",
          imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
          imageAlt: "Flow yoga",
        },
        {
          title: "Pilates",
          description: "Strengthens the body and supports healthy movement patterns.",
          href: "/pilates-classes-highlands",
          imageSrc: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
          imageAlt: "Pilates",
        },
      ]}
    >
      <p>
        Yin Yoga offers a slower and more reflective approach to yoga practice. Instead of flowing between
        movements, postures are held for several minutes, allowing gentle stress to be applied to connective
        tissues such as fascia, ligaments and joints.
      </p>
      <p>
        This slower pace allows the body to gradually release tension while encouraging stillness and
        awareness. Students are invited to remain present with sensations that arise within the body while
        observing their breath and mental responses.
      </p>
      <p>
        The practice complements more active forms of yoga by creating space for quiet observation and
        relaxation. While dynamic styles often work with muscle strength and movement, Yin Yoga focuses on
        deeper structural tissues that support mobility and joint health.
      </p>
      <p>
        A typical class includes a series of seated or reclining postures held for extended periods. Between
        postures, students are encouraged to rest and observe how their bodies feel.
      </p>
      <p>
        Yin Yoga is suitable for beginners as well as experienced practitioners. The slower pace allows
        students to explore the practice with patience and curiosity.
      </p>
      <p>
        Over time, regular practice can support improved flexibility, greater joint mobility and a deeper
        sense of calm.
      </p>
    </ClassDetailLayout>
  );
}
