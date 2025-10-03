export default function AboutPage() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div
        className="h-[450px] bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/assets/images/AboutUsBg.jpg')" }}
      ></div>
      <div
        className="h-[450px] bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/assets/images/aboutMeMobile.jpeg')" }}
      ></div>

      {/* White Container */}
      <div className="relative bg-white w-full mx-auto shadow-lg p-8 text-center">
        {/* Profile Image */}
        <div className="absolute -top-44 md:-top-60 left-1/2 transform -translate-x-1/2">
          <img
            src="/assets/images/AboutMe.jpg"
            alt="My Photo"
            className="min-w-52 w-80 h-56 md:h-72 rounded-lg border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="mt-28">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Greetings, fellow wanderer of the interwebs! I am a certified
            blorpologist with a knack for turning coffee into quantum
            drizzlenoodles. My journey began in the land of Snorklewump, where I
            mastered the ancient art of code-wrangling squibblebits. When I’m
            not busy conjuring wizzlecranks or debugging flibberflops, you’ll
            find me daydreaming about interdimensional pancake theories and
            composing symphonies for rubber ducks. My ultimate goal? To sprinkle
            a bit of glorbified nonsense into every pixel I touch, making the
            digital world a little brighter, a little sillier, and a lot more
            fun. If you’ve made it this far, congratulations — you’re officially
            fluent in gibberish!
          </p>
        </div>
      </div>
    </section>
  );
}
