import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            Privacy Policy for Advanced Text Editor
          </h1>

          <div className="prose lg:prose-lg">
            <p className="text-gray-600">Effective Date: October 15, 2024</p>

            <h2>1. Information We Collect</h2>
            <p>
              Advanced Text Editor is designed to prioritize your privacy. We do
              not collect or store any personal information, text, or data
              entered by users on our servers. All content created using
              Advanced Text Editor is stored locally on your device.
            </p>

            <h3>Local Storage</h3>
            <p>
              Your data, text, and files created with Advanced Text Editor are
              saved directly to your local storage. We do not have access to
              your local files, and they are not transmitted or saved to any
              cloud storage or our servers.
            </p>

            <h3>Automatic Data Collection</h3>
            <p>
              While we do not collect personal data, we use third-party services
              like Google Analytics and Microsoft Clarity to gather anonymous
              data on website usage. This includes information such as:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on each page</li>
              <li>
                Device type, operating system, and geographic region based on IP
                address
              </li>
            </ul>

            <h2>2. Third-Party Analytics Services</h2>
            <p>
              We use third-party analytics services to improve our Website,
              understand user behavior, and enhance the overall experience.
              These services may collect information as described below:
            </p>

            <h3>Google Analytics</h3>
            <p>
              We use Google Analytics to help us analyze how visitors use our
              Website. Google Analytics collects information such as the pages
              you visit, the time you spend on those pages, and the website from
              which you arrived. This information helps us make informed
              decisions to improve the Website.
            </p>

            <h3>Microsoft Clarity</h3>
            <p>
              Microsoft Clarity is used to provide insights into user behavior,
              such as page views, clicks, and scrolling activities. This
              information is anonymous and is used to help us understand user
              engagement on our Website.
            </p>

            <h2>3. Cookies</h2>
            <p>
              Our Website uses cookies to provide a more personalized experience
              and to gather statistical information. Cookies are small text
              files that are stored on your device to remember your preferences
              and enable certain features on our Website.
            </p>

            <h3>Types of Cookies We Use</h3>
            <ul>
              <li>
                Essential Cookies: These are necessary for the Website to
                function correctly.
              </li>
              <li>
                Analytics Cookies: We use cookies for tracking and analyzing
                user behavior with the help of third-party analytics tools.
              </li>
            </ul>
            <p>
              You can control or delete cookies through your browser settings.
              Please note that disabling certain cookies may impact the
              functionality and performance of the Website.
            </p>

            <h2>4. Data Security</h2>
            <p>
              While we do not collect or store personal data, we take the
              security of our users seriously. We have implemented reasonable
              security measures to protect the information gathered by
              third-party analytics services. However, please remember that no
              system is completely secure, and we cannot guarantee the absolute
              security of data transmitted online.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those
              websites. If you click on a third-party link, you will be directed
              to their site. We recommend that you review the Privacy Policy of
              each website you visit.
            </p>

            <h2>6. Children’s Privacy</h2>
            <p>
              Our Website is not intended for use by children under the age of
              13. We do not knowingly collect any information from children. If
              we learn that we have inadvertently received information from a
              child under the age of 13, we will delete such information
              promptly. If you believe a child has provided us with information,
              please contact us at hello@advancedtexteditor.com.
            </p>

            <h2>7. Your Rights and Choices</h2>
            <p>
              Since we do not collect personal information, there is no data to
              modify, delete, or opt-out from. However, you are free to control
              cookies through your browser settings, and you can also delete any
              local storage data you have saved on your device through Advanced
              Text Editor.
            </p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for legal reasons. Any updates will be posted
              on this page with an updated "Effective Date." We encourage you to
              review this Privacy Policy regularly to stay informed about how we
              protect your information.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our practices, please feel free to contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p>
                Email:{" "}
                <Link href="mailto:hello@advancedtexteditor.com">
                  hello@advancedtexteditor.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
