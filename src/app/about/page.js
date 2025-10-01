export default function AboutPage() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div
        className="h-[450px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/AboutUsBg.jpg')" }}
      ></div>

      {/* White Container */}
      <div className="relative bg-white w-full mx-auto shadow-lg p-8 text-center">
        {/* Profile Image */}
        <div className="absolute -top-60 left-1/2 transform -translate-x-1/2">
          <img
            src="/assets/images/AboutMe.jpg"
            alt="My Photo"
            className="w-80 h-72 rounded-lg border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="mt-28">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            I’m a passionate developer sharing insights about web development
            and more.
          </p>
        </div>
      </div>
    </section>
  );
}
