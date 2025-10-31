export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "building in public: lessons from my journey",
    excerpt:
      "reflecting on the challenges and triumphs of building products while sharing the process transparently with the community.",
    date: "2024-01-15",
    category: "philosophy",
    slug: "building-in-public-lessons-from-my-journey",
    content: `building in public isn't just about sharing your progress—it's about creating authentic connections with people who care about your journey.

when I started my first startup, I was hesitant to share the struggles. I thought vulnerability would be perceived as weakness. But the opposite happened. By documenting the real challenges—the late nights, the failed experiments, the moments of doubt—I found a community of builders who resonated with the journey.

the feedback loop became invaluable. People shared their own experiences, suggested solutions, and became early users who genuinely cared about the product's success. This transparency created a sense of ownership and partnership that you can't buy with marketing dollars.

of course, there's a balance. Not everything needs to be shared publicly. But the core lesson remains: authenticity builds trust, and trust builds sustainable relationships with your audience and customers.

building in public taught me that the best products aren't built in isolation—they're co-created with a community that believes in your vision.`,
  },
  {
    title: "the intersection of ai and human-centered design",
    excerpt:
      "exploring how artificial intelligence can enhance user experience without losing the human touch that makes interactions meaningful.",
    date: "2024-01-10",
    category: "tech",
    slug: "the-intersection-of-ai-and-human-centered-design",
    content: `artificial intelligence has the potential to revolutionize user experience, but only if we approach it with human-centered principles at the forefront.

too often, I see AI implementations that prioritize technological capability over user needs. The result? Interfaces that feel cold, confusing, or overly automated. The magic happens when AI enhances human intuition rather than replacing it.

take personalization, for example. AI can analyze user behavior patterns to create tailored experiences. But the best implementations don't just show what the algorithm thinks users want—they provide context, explain why recommendations were made, and give users control to refine their preferences.

the key is transparency. When AI makes a decision, users should understand the reasoning. When AI gets something wrong, there should be a clear path to correction. This builds trust and creates a sense of partnership between the user and the system.

human-centered AI design means starting with the human experience and asking: "How can AI make this better?" Not "What cool AI features can we add?" The distinction matters, and it's what separates products that genuinely help people from those that just showcase technology.

as we integrate more AI into our products, let's remember that the goal isn't to replace human interaction—it's to augment it, making our tools more intuitive, more helpful, and more aligned with how humans actually think and work.`,
  },
  {
    title: "why minimalism in design matters more than ever",
    excerpt:
      "in an age of information overload, simplicity becomes a superpower. thoughts on creating interfaces that respect the user's attention.",
    date: "2024-01-05",
    category: "design",
    slug: "why-minimalism-in-design-matters-more-than-ever",
    content: `we live in an age of constant distraction. Every app competes for attention. Every notification demands immediate response. In this environment, minimalism isn't just an aesthetic choice—it's an act of respect for the user's time and mental bandwidth.

minimalist design forces us to answer a fundamental question: "What truly matters here?" When you can't hide behind decorative elements or busy layouts, you're forced to prioritize clarity and purpose.

I've found that the most effective interfaces are often the simplest ones. They load faster. They're easier to understand. They reduce cognitive load, allowing users to focus on their actual goals rather than navigating complex systems.

but minimalism doesn't mean boring. It means intentional. Every element serves a purpose. Every color, every spacing, every interaction is carefully considered. This creates a sense of calm and focus that users desperately need in our chaotic digital landscape.

the challenge is knowing what to include and what to leave out. Feature creep is tempting—the desire to add "just one more thing" that might be useful. But restraint is what separates great products from good ones.

when I design, I start with the core user journey and remove everything that doesn't serve it. If I can't explain why an element exists, it doesn't belong. This discipline creates interfaces that feel effortless to use, even if they required significant thought to create.

in a world full of noise, simplicity is the signal. And in product design, that signal is everything.`,
  },
  {
    title: "embracing uncertainty in product development",
    excerpt:
      "the journey from idea to product is rarely linear. learning to navigate ambiguity and make decisions with incomplete information.",
    date: "2024-01-01",
    category: "philosophy",
    slug: "embracing-uncertainty-in-product-development",
    content: `one of the hardest lessons in building products is accepting that you'll never have perfect information. The market is uncertain. User needs evolve. Technology changes. Yet we're expected to make decisions that will shape the product's future.

early in my journey, I tried to eliminate uncertainty through extensive research and planning. I'd spend weeks analyzing competitors, conducting surveys, and creating detailed roadmaps. But I learned that no amount of planning can predict how users will actually interact with your product.

the real skill isn't eliminating uncertainty—it's learning to make good decisions despite it. This means:

- building in small increments and learning from each one
- staying close to users and observing real behavior, not just listening to what they say
- being willing to pivot when evidence contradicts your assumptions
- accepting that some experiments will fail, and that's valuable data too

I've found that the most successful products aren't built from perfect plans. They're built from a series of informed guesses, tested quickly, and adjusted based on real feedback.

uncertainty isn't a bug in product development—it's a feature. It keeps us humble, forces us to stay connected to users, and ensures we're building what people actually need, not what we assume they want.

embracing uncertainty means being comfortable with "I don't know" as a starting point. It means being excited by the opportunity to learn rather than frustrated by the lack of clear answers. And it means building products that can evolve as we learn more.

this flexibility, this willingness to adapt, is often what separates products that succeed from those that fail. Not because they had better initial ideas, but because they learned faster.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

