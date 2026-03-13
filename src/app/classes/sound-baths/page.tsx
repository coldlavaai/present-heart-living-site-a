import type { Metadata } from "next";
import ClassDetailLayout from "@/components/sections/ClassDetailLayout";

export const metadata: Metadata = {
  title: "Sound Bath Sessions Highlands | Present Heart Living",
  description:
    "Sound bath sessions supporting deep relaxation and sensory calm in the Highlands.",
};

export default function SoundBathsPage() {
  return (
    <ClassDetailLayout
      title="Sound Bath Sessions"
      heroImage="https://images.unsplash.com/photo-1591228127121-c36534347f84?w=1600&h=900&fit=crop"
      heroAlt="Sound bath with singing bowls"
      ctaLabel="Join a Sound Bath"
      relatedClasses={[
        {
          title: "Restorative Yoga",
          description: "A deeply calming practice for relaxation and recovery.",
          href: "/classes/restorative-yoga",
          imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
          imageAlt: "Restorative yoga",
        },
        {
          title: "Breathwork",
          description: "Breathwork practices supporting relaxation and awareness.",
          href: "/classes/breathwork",
          imageSrc: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600&h=400&fit=crop",
          imageAlt: "Breathwork",
        },
        {
          title: "Yin Yoga",
          description: "A slower practice encouraging mindfulness and joint mobility.",
          href: "/classes/yin-yoga",
          imageSrc: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop",
          imageAlt: "Yin yoga",
        },
      ]}
    >
      <p>
        Sound baths are immersive relaxation experiences that use sound and vibration to encourage deep rest
        and calm.
      </p>
      <p>
        During a session, instruments such as singing bowls, chimes or other resonant tools are played to
        create gentle layers of sound. Participants usually lie comfortably while the sound fills the space,
        allowing the mind and body to settle into stillness.
      </p>
      <p>
        The vibrations produced by these instruments can help shift attention away from busy thoughts and into
        a more relaxed state of awareness. Many people describe the experience as deeply calming and
        restorative.
      </p>
      <p>
        Sound baths are often combined with relaxation practices or meditation, creating an environment where
        the nervous system can slow down and release tension.
      </p>
      <p>
        The sessions are suitable for anyone seeking a quiet and supportive space to relax. No previous
        experience with meditation or yoga is required.
      </p>
      <p>
        For many participants, sound baths provide a rare opportunity to rest fully and step away from the
        constant stimulation of modern life.
      </p>
    </ClassDetailLayout>
  );
}
