export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {' '}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Game Developer & Student Pilot
            </h3>

            <p className="text-muted-foreground">
              With over 2 years of experience in indie game development, I love creating
              engaging and entertaining games for a variety of platforms. Along with all
              things aviation.
            </p>

            <p className="text-muted-foreground">
              Currently I am studying Computer Science GCSE along with persuing my passion
              for aviaiton by working towards my NPPL (National Private Pilot License). I
              am always eager to learn new skills and technologies to enhance my projects
              and further develop my skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {' '}
                Get In Touch
              </a>
            </div>
          </div>
          
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}