import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Disclaimer() {
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
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Disclaimer</h1>

          <div className="prose lg:prose-lg">
            <p>
              Welcome to Advanced Text Editor, a free tool designed to provide
              users with a simple and efficient way to format text. This tool is
              open to anyone, offering a range of text formatting features with
              no charges or hidden costs. It will remain completely free for all
              users, and we plan to continually improve its functionality.
            </p>

            <p>
              While using Advanced Text Editor, all data entered by users is
              stored locally on their own devices. We do not have access to or
              store any personal data or content generated within the tool.
              Users are free to save their formatted text locally or copy and
              paste it to other platforms as needed.
            </p>

            <p>
              We use third-party analytics services to track anonymous data
              usage, such as device types and interactions, to help improve user
              experience. However, no personal information is collected or
              shared through this process.
            </p>

            <p>
              Advertisements may be displayed on the website to support the
              development and maintenance of the tool. Despite the presence of
              ads, your data remains secure, and we maintain strict privacy
              standards.
            </p>

            <p>
              By using Advanced Text Editor, you acknowledge that it is provided
              “as is” without any guarantees or warranties. We make continuous
              efforts to ensure the tool works efficiently across different
              devices, but we are not responsible for any issues arising from
              its use.
            </p>

            <p>
              For any feedback or suggestions, feel free to reach out. We value
              your input as we strive to make Advanced Text Editor the best free
              text formatting tool available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
