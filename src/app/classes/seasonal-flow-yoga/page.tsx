import type { Metadata } from "next";
import ClassDetailLayout from "@/components/sections/ClassDetailLayout";

export const metadata: Metadata = {
  title: "Seasonal Flow Yoga Highlands | Present Heart Living",
  description:
    "Seasonal Flow Yoga classes in the Highlands combining breath and movement to build strength, flexibility and body awareness.",
};

export default function SeasonalFlowYogaPage() {
  return (
    <ClassDetailLayout
      title="Seasonal Flow Yoga"
      heroImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop"
      heroAlt="Seasonal flow yoga class"
      relatedClasses={[
        {
          title: "Restorative Yoga",
          description: "A deeply calming practice designed to support relaxation and nervous system recovery.",
          href: "/classes/restorative-yoga",
          imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
          imageAlt: "Restorative yoga",
        },
        {
          title: "Yin Yoga",
          description: "A slower practice supporting joint mobility and mindful awareness.",
          href: "/classes/yin-yoga",
          imageSrc: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop",
          imageAlt: "Yin yoga",
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
        Seasonal Flow Yoga is a dynamic practice that combines breath and movement through a sequence of
        flowing postures. Inspired by both Hatha and Vinyasa traditions, the class encourages students to move
        with rhythm and awareness while developing strength and flexibility.
      </p>
      <p>
        The practice often reflects the natural rhythm of the seasons. Movements may feel more energising and
        expansive during lighter months, while practices during quieter seasons may emphasise grounding and
        stability. This approach encourages students to practise in harmony with natural cycles, helping them
        remain attentive to how their bodies and energy change throughout the year.
      </p>
      <p>
        Classes typically begin with gentle movements that prepare the body for deeper practice. Flowing
        sequences then develop mobility, balance and coordination while linking movement with breath. The
        practice gradually builds warmth in the body while encouraging concentration and awareness.
      </p>
      <p>
        Seasonal Flow Yoga is suitable for both beginners and experienced practitioners who enjoy a more
        dynamic style of yoga. Movements can be modified to suit individual needs, allowing students to explore
        the practice at their own pace.
      </p>
      <p>
        Regular practice can support improved flexibility, greater strength and enhanced focus while helping
        students cultivate a steady and mindful approach to movement.
      </p>
    </ClassDetailLayout>
  );
}
