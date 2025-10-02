import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="w-full flex items-center justify-center bg-gray-100 p-8">
      <div className="flex h-[80vh] w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-black text-white">
        {/* Left Image (3/5th) */}
        <div className="w-2/5 p-6 rounded-lg">
          <img
            src="/assets/images/ContactMe.jpg"
            alt="Contact"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Content (2/5th) */}
        <div className="w-3/5 p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
          <p className="mb-6 text-white">
            I’d love to hear from you! Whether it’s a question, suggestion, or
            collaboration, feel free to reach out.
          </p>

          <p className="mb-2">Or reach out to me at:</p>
          <div className="flex flex-col gap-4 text-gray-500">
            {/* Email */}
            <a
              href="mailto:aayushfabwani2@zohomail.in"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <FaEnvelope /> aayushfabwani2@zohomail.in
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
