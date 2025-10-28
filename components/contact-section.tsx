export default function ContactSection() {
  return (
    <section
      id="connect"
      className="min-h-screen flex items-center px-6 py-20 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight">
            let&apos;s connect
          </h2>
          <p className="text-muted-foreground lowercase text-lg">
            interested in collaborating or just want to chat? i&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://twitter.com/thevinodpatidar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors lowercase"
            >
              @thevinodpatidar
            </a>
            <a
              href="https://linkedin.com/in/thevinodpatidar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors lowercase"
            >
              linkedin
            </a>
            <a
              href="https://github.com/thevinodpatidar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors lowercase"
            >
              github
            </a>
          </div>

          <div className="space-y-4 lowercase">
            <p className="text-muted-foreground">
              currently open to new opportunities and collaborations
            </p>
            <p className="text-sm text-muted-foreground">
              based in india • available for remote work worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
