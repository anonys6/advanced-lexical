import Link from "next/link";

const resources = [
  {
    title: "Playground CSS",
    link: "/resources/PlaygroundEditorTheme.css",
    desc: "(CSS for Editor theme)",
  },
  {
    title: "KaTeX CSS",
    link: "/resources/katex.min.css",
    desc: "(CSS for KaTeX)",
  },
  {
    title: "KaTeX JS",
    link: "/resources/katex.min.js",
    desc: "(JS for KaTeX)",
  },
  {
    title: "Excalidraw JS",
    link: "/resources/excalidraw.production.min.js",
    desc: "(JS for Excalidraw)",
  }
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Advanced Text Editor
            </h3>
            <p className="text-gray-400">
              Edit Your Plain Text Online for FREE
            </p>

            <div className="mt-4 flex flex-col gap-1">

              {
                resources.map((resource, index) => (
                  <div key={index}>
                    <p className="flex justify-between">{resource.title}:
                      <span>

                        <Link href={resource.link} className="text-blue-500 hover:underline ml-2" target="_blank">
                          View&nbsp;&nbsp;
                        </Link>
                        |
                        <a href={resource.link} className="text-blue-500 hover:underline ml-2" download>
                          Download
                        </a>
                      </span>
                    </p>
                    <p className="text-gray-400 text-sm">{resource.desc}</p>
                  </div>
                ))
              }

            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="hover:text-white transition"
                >
                  Term of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-white transition"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/desclaimer"
                  className="hover:text-white transition"
                >
                  Desclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/user-rights"
                  className="hover:text-white transition"
                >
                  User Rights
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <li>
                <Link href="/feedback" className="hover:text-white transition">
                  Feedback Form
                </Link>
              </li>
            </ul>

            <div className="bg-white py-2 px-3 rounded-md">

              <p className="text-gray-900">
                Email: <Link href="mailto:hello@advancedtexteditor.com">hello@advancedtexteditor.com</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Advanced Text Editor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
