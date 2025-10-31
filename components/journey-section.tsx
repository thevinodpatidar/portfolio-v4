export default function JourneySection() {
  return (
    <section
      id="journey"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight">
            the journey
          </h2>
          <p className="text-muted-foreground lowercase">
            from curious student to passionate builder
          </p>
        </div>

        <div className="space-y-16 animate-on-scroll">
          {/* The Beginning */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h3 className="text-3xl font-medium lowercase">the beginning</h3>
            <p className="text-lg leading-relaxed lowercase text-muted-foreground">
              it all started with a simple question: &ldquo;how do websites
              work?&rdquo; as a curious student, i spent countless nights
              learning html, css, and javascript. what began as a hobby
              quickly became an obsession with creating digital experiences
              that could connect people and solve real problems.
            </p>
          </div>

          {/* The Evolution */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h3 className="text-3xl font-medium lowercase">the evolution</h3>
            <p className="text-lg leading-relaxed lowercase text-muted-foreground">
              during the pandemic, i took the plunge into deeper concept of software development. building my first startup taught me more about product
              development, user experience, and the realities of bringing
              ideas to life than any course ever could.
            </p>
          </div>

          {/* The Present */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h3 className="text-3xl font-medium lowercase">the present</h3>
            <p className="text-lg leading-relaxed lowercase text-muted-foreground">
              today, i focus on the intersection of artificial intelligence
              and user experience. building scalable systems and creating
              products that make technology more accessible and
              human-centered.
            </p>
          </div>
        </div>

        {/* Values and focus */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <div className="bg-muted/50 p-8 rounded-lg space-y-6 lowercase">
            <h4 className="text-xl font-medium">what drives me</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-medium">problem-solving</h5>
                  <p className="text-sm text-muted-foreground">
                    turning complex challenges into elegant solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-medium">impact</h5>
                  <p className="text-sm text-muted-foreground">
                    creating products that make a real difference
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-medium">continuous learning</h5>
                  <p className="text-sm text-muted-foreground">
                    embracing new technologies and methodologies
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-medium">community</h5>
                  <p className="text-sm text-muted-foreground">
                    building and supporting developer communities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-8 rounded-lg space-y-6 lowercase">
            <h4 className="text-xl font-medium">current explorations</h4>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded border-l-4 border-primary">
                <h5 className="font-medium">ai-powered ux design</h5>
                <p className="text-sm text-muted-foreground mt-1">
                  integrating artificial intelligence into user experience
                  workflows to create more intuitive and personalized
                  experiences.
                </p>
              </div>
              <div className="p-4 bg-background rounded border-l-4 border-primary">
                <h5 className="font-medium">scalable architectures</h5>
                <p className="text-sm text-muted-foreground mt-1">
                  building systems that grow with user needs while maintaining
                  performance and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
