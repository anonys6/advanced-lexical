import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>

          <div className="prose lg:prose-lg">
            <p>
              Advanced Text Editor uses cookies and similar technologies to
              enhance your experience on our website. This Cookie Policy
              explains what cookies are, how we use them, and your choices
              regarding their use.
            </p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small files that are placed on your device when you
              visit a website. They allow the website to recognize your device
              and store certain information about your preferences or past
              actions on the site. Cookies help improve website functionality
              and provide a better user experience.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              We use cookies to improve the functionality of Advanced Text
              Editor and provide a seamless user experience. Our use of cookies
              includes:
            </p>
            <ul>
              <li>
                Storing your preferences and settings to enhance usability.
              </li>
              <li>
                Monitoring website performance and usage through anonymous
                analytics.
              </li>
              <li>
                Helping us understand how users interact with the site so we can
                improve features and performance.
              </li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <p>We may use the following types of cookies on our website:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary
                for the basic functioning of the website. They allow you to use
                key features, such as saving your formatted text locally.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies help us
                understand how users interact with the website by collecting
                anonymous usage data. This allows us to optimize the site&apos;s
                performance and improve user experience.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies track visitor
                behavior to help us analyze how users use the site. We use this
                data to improve the site&apos;s functionality and user
                experience.
              </li>
            </ul>

            <h2>4. Third-Party Cookies</h2>
            <p>
              We may use third-party services that place cookies on your device
              to provide additional functionality, such as analytics or
              advertisements. We ensure that these third parties comply with
              relevant data protection regulations.
            </p>

            <h2>5. Your Choices</h2>
            <p>
              You have control over how cookies are used on our website. You can
              adjust your browser settings to block or delete cookies. However,
              please note that disabling cookies may affect the functionality of
              Advanced Text Editor and limit some features.
            </p>

            <h2>6. Changes to this Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for legal and regulatory reasons.
              Please review this page periodically to stay informed about our
              use of cookies.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns about our use of cookies,
              please contact us at hello@advancedtexteditor.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
