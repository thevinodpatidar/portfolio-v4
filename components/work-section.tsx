export default function WorkSection() {
  return (
    <section id="work" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight mb-4">
            recent work
          </h2>
          <p className="text-muted-foreground lowercase">
            projects that showcase my journey and passion for building
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          <a
            href="https://startuplist.ing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted p-8 rounded-lg space-y-4 lowercase cursor-pointer group block hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                startup listing
              </h3>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <p className="text-muted-foreground">
              a curated platform that showcases the best startups, saas tools,
              and products. serves as a discovery hub for innovative solutions
              built by indie hackers and teams with exclusive deals.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                next.js
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                react
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                typescript
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                postgresql
              </span>
            </div>
          </a>
          <a
            href="https://joyform.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted p-8 rounded-lg space-y-4 lowercase cursor-pointer group block hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                joyform
              </h3>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <p className="text-muted-foreground">
              an intuitive online form builder designed for modern teams.
              enables users to create, share, and automate forms without any
              coding skills. features drag-and-drop interface and professional
              integrations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                react
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                next.js
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                typescript
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                tailwind css
              </span>
            </div>
          </a>

          <a
            href="https://graftek.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted p-8 rounded-lg space-y-4 lowercase cursor-pointer group block hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                graftek
              </h3>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <p className="text-muted-foreground">
              build beautiful real estate websites with ease using a powerful
              platform. use templates or build custom solutions with lead
              generation, analytics, and seo optimization features.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                react
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                node.js
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                postgresql
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                aws
              </span>
            </div>
          </a>

          <a
            href="https://vaanix.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted p-8 rounded-lg space-y-4 lowercase cursor-pointer group block hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                vaanix
              </h3>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <p className="text-muted-foreground">
              a platform dedicated to ai voice agents, allowing users to search,
              share, and explore the best ai voice agents along with their
              system prompts and settings. supports multiple platforms like vapi
              and retell.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                next.js
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                react
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                typescript
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                ai/ml
              </span>
            </div>
          </a>

          <a
            href="https://shadcn-font-picker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted p-8 rounded-lg space-y-4 lowercase cursor-pointer group block hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                shadcn font picker
              </h3>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <p className="text-muted-foreground">
              a react-based font selection component built on shadcn ui&apos;s
              input component and the google fonts api. allows users to browse
              and select fonts seamlessly within their applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                react
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                typescript
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                shadcn ui
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                google fonts api
              </span>
            </div>
          </a>

          <a
            href="#home"
            className="bg-muted p-8 rounded-lg space-y-4 lowercase cursor-pointer group block hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                portfolio website
              </h3>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <p className="text-muted-foreground">
              a storytelling portfolio built with next.js, featuring smooth
              animations, interactive elements, and responsive design. the very
              site you&apos;re on right now.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                next.js
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                typescript
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                tailwind css
              </span>
              <span className="px-3 py-1 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                react
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
