import type { Metadata } from "next";
import ClassDetailLayout from "@/components/sections/ClassDetailLayout";

export const metadata: Metadata = {
  title: "Breathwork Classes Highlands | Present Heart Living",
  description:
    "Breathwork sessions supporting relaxation, awareness and emotional balance.",
};

export default function BreathworkPage() {
  return (
    <ClassDetailLayout
      title="Breathwork"
      heroImage="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1600&h=900&fit=crop"
      heroAlt="Breathwork and meditation practice"
      ctaLabel="Book a Session"
      relatedClasses={[
        {
          title: "Sound Baths",
          description: "Immersive relaxation experiences using sound and vibration.",
          href: "/classes/sound-baths",
          imageSrc: "https://images.unsplash.com/photo-1591228127121-c36534347f84?w=600&h=400&fit=crop",
          imageAlt: "Sound bath",
        },
        {
          title: "Restorative Yoga",
          description: "A deeply calming practice for relaxation.",
          href: "/classes/restorative-yoga",
          imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
          imageAlt: "Restorative yoga",
        },
        {
          title: "Yin Yoga",
          description: "A slower practice supporting joint mobility and mindfulness.",
          href: "/classes/yin-yoga",
          imageSrc: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop",
          imageAlt: "Yin yoga",
        },
      ]}
    >
      <p>
        Breathwork practices explore the relationship between breathing and overall wellbeing. Although
        breathing is something we do automatically, learning to work with the breath consciously can have a
        powerful effect on both the body and mind.
      </p>
      <p>
        During breathwork sessions, students are guided through a variety of breathing techniques designed to
        support relaxation, focus and emotional balance. These practices can help regulate the nervous system
        and encourage a deeper sense of calm.
      </p>
      <p>
        Breathwork is often integrated into yoga and meditation traditions as a way to support awareness and
        concentration. By paying attention to the rhythm of the breath, students learn how breathing
        influences energy levels, emotional responses and physical tension.
      </p>
      <p>
        Sessions may include gentle breathing exercises, periods of stillness and time for reflection.
        Students are encouraged to approach the practice with curiosity and patience, allowing breathing
        patterns to develop naturally.
      </p>
      <p>
        Over time, breathwork can provide practical tools that support everyday wellbeing. Many students find
        that breathing techniques help them manage stress, improve focus and reconnect with a calmer rhythm
        of living.
      </p>
    </ClassDetailLayout>
  );
}
