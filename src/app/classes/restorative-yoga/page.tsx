import type { Metadata } from "next";
import ClassDetailLayout from "@/components/sections/ClassDetailLayout";

export const metadata: Metadata = {
  title: "Restorative Yoga Highlands | Present Heart Living",
  description:
    "Restorative yoga classes designed to calm the nervous system and support deep relaxation.",
};

export default function RestorativeYogaPage() {
  return (
    <ClassDetailLayout
      title="Restorative Yoga"
      heroImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop"
      heroAlt="Restorative yoga practice with props"
      relatedClasses={[
        {
          title: "Yin Yoga",
          description: "A slower practice supporting joint mobility and mindful awareness.",
          href: "/classes/yin-yoga",
          imageSrc: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop",
          imageAlt: "Yin yoga",
        },
        {
          title: "Sound Baths",
          description: "Immersive relaxation experiences using sound and vibration.",
          href: "/classes/sound-baths",
          imageSrc: "https://images.unsplash.com/photo-1591228127121-c36534347f84?w=600&h=400&fit=crop",
          imageAlt: "Sound bath",
        },
        {
          title: "Seasonal Flow Yoga",
          description: "A flowing practice combining movement and breath.",
          href: "/classes/seasonal-flow-yoga",
          imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
          imageAlt: "Flow yoga",
        },
      ]}
    >
      <p>
        Restorative Yoga is a gentle and deeply calming practice designed to support relaxation and nervous
        system recovery. In contrast to more active styles of yoga, restorative sessions encourage stillness,
        allowing the body and mind to slow down and release accumulated tension.
      </p>
      <p>
        During a class, supportive props such as bolsters, blankets and cushions are used to help the body rest
        comfortably in a series of relaxed postures. These positions are held for longer periods, allowing the
        muscles to soften and the breath to become slow and steady.
      </p>
      <p>
        The intention of restorative yoga is to create a space where the body can rest fully without effort.
        This encourages the nervous system to shift away from the constant stimulation of daily life and enter
        a state of deep relaxation.
      </p>
      <p>
        For many people, restorative yoga provides an important opportunity to pause and reset. The practice
        can be particularly supportive for individuals experiencing stress, fatigue or difficulty switching off.
      </p>
      <p>
        Sessions may also incorporate elements such as breath awareness or gentle sound to further enhance
        relaxation and calm.
      </p>
      <p>
        Regular practice often helps students experience improved sleep, reduced tension and a greater sense
        of balance in both body and mind.
      </p>
    </ClassDetailLayout>
  );
}
