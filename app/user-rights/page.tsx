import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function UserRights() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">User Rights</h1>

          <div className="prose lg:prose-lg">
            <p>
              At Advanced Text Editor, we respect your rights as a user of our
              service. Below are the rights you have regarding your interaction
              with our platform:
            </p>

            <h2>1. Right to Access</h2>
            <p>
              You have the right to use Advanced Text Editor without the need to
              provide personal information. The tool is available for free, and
              you can access it at any time without creating an account or
              providing credentials.
            </p>

            <h2>2. Right to Control Your Data</h2>
            <p>
              All data that you create or modify using Advanced Text Editor is
              stored locally on your device. We do not have access to or control
              over your text or any information entered into the editor. You
              maintain full control over the data you generate and can delete it
              at any time.
            </p>

            <h2>3. Right to Anonymity</h2>
            <p>
              You have the right to use Advanced Text Editor anonymously. We do
              not collect or require any personal identification or sensitive
              information from you during your use of the tool.
            </p>

            <h2>4. Right to Opt-Out of Analytics</h2>
            <p>
              While we collect anonymous usage data to improve user experience,
              you have the right to opt-out of any tracking by adjusting your
              browser settings to block cookies or analytics scripts. This will
              not affect your ability to use the core features of Advanced Text
              Editor.
            </p>

            <h2>5. Right to Transparency</h2>
            <p>
              We believe in transparency about how our service works. You can
              find detailed information about the data we collect and how it is
              used in our Privacy Policy and Terms of Use. We are committed to
              ensuring that your rights as a user are upheld.
            </p>

            <h2>6. Right to Contact Us</h2>
            <p>
              If you have any questions or concerns regarding your rights as a
              user, feel free to contact us at hello@advancedtexteditor.com. We
              are here to assist you with any issues or inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
