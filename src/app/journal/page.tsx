import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Wellbeing Journal | Yoga, Breathwork & Mindfulness Insights",
  description:
    "Explore articles on yoga, breathwork, mindfulness and wellbeing from Present Heart Living. Insights designed to support balance and mindful living.",
};

const posts = [
  {
    title: "The Benefits of Seasonal Yoga Practice",
    excerpt:
      "Exploring how aligning your yoga practice with the natural rhythm of the seasons can support energy, balance and wellbeing throughout the year.",
    date: "Coming Soon",
    category: "Yoga",
  },
  {
    title: "An Introduction to Breathwork",
    excerpt:
      "Understanding how conscious breathing techniques can support relaxation, focus and emotional balance in everyday life.",
    date: "Coming Soon",
    category: "Breathwork",
  },
  {
    title: "Why Restorative Yoga Matters",
    excerpt:
      "In a world that values productivity and pace, restorative yoga offers an essential counterbalance — creating space to rest, recover and reconnect.",
    date: "Coming Soon",
    category: "Yoga",
  },
  {
    title: "Mindfulness Beyond the Mat",
    excerpt:
      "How the awareness developed during yoga practice can extend into everyday life, supporting greater calm and clarity.",
    date: "Coming Soon",
    category: "Mindfulness",
  },
  {
    title: "Pilates for Posture and Wellbeing",
    excerpt:
      "How Pilates strengthens the body, improves alignment and supports healthy movement patterns that benefit daily life.",
    date: "Coming Soon",
    category: "Pilates",
  },
  {
    title: "The Power of Slowing Down",
    excerpt:
      "Reflections on why taking time to pause, breathe and move mindfully can have a profound impact on overall wellbeing.",
    date: "Coming Soon",
    category: "Wellbeing",
  },
];

export default function JournalPage() {
  return (
    <>
      <Hero
        title="Wellbeing Journal"
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop"
        imageAlt="Scottish Highlands landscape for reflection"
        variant="narrow"
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Insights for Mindful Living</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6 mx-auto">
            <p>
              The Journal is a space where ideas, insights and reflections on yoga, movement and wellbeing
              are shared.
            </p>
            <p>
              Through articles and short guides, the journal explores practices that support a more balanced
              and mindful way of living. Topics may include yoga philosophy, breathing techniques, movement
              practices, relaxation methods and reflections on how these practices can support everyday life.
            </p>
            <p>
              Whether you are new to yoga or have been practising for many years, the journal offers ideas
              and insights that may support your personal wellbeing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 bg-mist/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sage">
                      {post.category}
                    </span>
                    <span className="text-xs text-peat/50">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-heading mb-3">{post.title}</h3>
                  <p className="text-peat/70 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
