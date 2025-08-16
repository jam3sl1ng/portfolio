import { AppWindowIcon, AppWindowMacIcon, Briefcase, Code, NotebookIcon, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Developer & Student
            </h3>

            <p className="text-muted-foreground">
              With a drive for programming and development, I specialize
              in creating responsive, accessible, and performant projects
              using modern technologies and frameworks.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant mobile applications and
              unqiue gaming experiences. I'm always keen to learn new frameworks
              and programming concepts to stay at the forefront of the ever-evolving
              technology landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <AppWindowMacIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> App Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, engaging android applications,
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Game Development</h4>
                  <p className="text-muted-foreground">
                    Designing and developing games in many different engines
                    and frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <NotebookIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Student</h4>
                  <p className="text-muted-foreground">
                    Currently studying GCSE OCR Computer Science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};