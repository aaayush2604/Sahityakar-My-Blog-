import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="w-full flex items-center justify-center bg-gray-100 p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:h-[80vh] w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-black text-white">
        {/* Left Image */}
        <div className="w-full md:w-2/5 p-6">
          <img
            src="/assets/images/ContactMe.jpg"
            alt="Contact"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
          <p className="mb-6 text-white text-sm md:text-[20px]">
            I’d love to hear from you! Whether it’s a question, suggestion, or
            collaboration, feel free to reach out.
          </p>

          <p className="mb-2">Or reach out to me at:</p>
          <div className="flex flex-col gap-4 text-gray-500 text-[16px] md:text-[20px]">
            {/* Email */}
            <a
              href="mailto:aayushfabwani2@zohomail.in"
              className="flex items-start gap-2 hover:text-blue-500 transition w-full"
            >
              <FaEnvelope className="w-6 flex-shrink-0 mt-1" />
              <span className="break-all w-0 flex-1">
                aayushfabwani2@zohomail.in
              </span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aayush-kumar-fabwani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/thenerdinsideme/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
