import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
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
            Terms of Use for Advanced Text Editor
          </h1>

          <div className="prose lg:prose-lg">
            <p>
              Welcome to AdvancedTextEditor.com. The following terms and
              conditions govern all use of the AdvancedTextEditor.com website
              and all content, services, and products available at or through
              the website. Our website is offered to your acceptance without
              modification of all of the terms and conditions contained herein
              and all other operating rules, policies (including, without
              limitation, AdvancedTextEditor.com&apos;s Privacy Policy), and
              procedures that may be published from time to time by
              AdvancedTextEditor.com (collectively, the &quot;Agreement&quot;).
            </p>

            <h2>1. Terms</h2>
            <p>
              By accessing or using any part of the website, you agree to become
              bound by the terms and conditions of this agreement. If you do not
              agree to all the terms and conditions of this agreement, then you
              may not access the website or use any services. If these terms and
              conditions are considered an offer by AdvancedTextEditor.com,
              acceptance is expressly limited to these terms.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on
              AdvancedTextEditor.com&apos;s website for personal, non-commercial
              transitory viewing only.
            </p>
            <p>You may not:</p>
            <ul>
              <li>Modify or copy the materials.</li>
              <li>
                Use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial).
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on AdvancedTextEditor.com&apos;s website.
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials.
              </li>
              <li>
                Transfer the materials to another person or &quot;mirror&quot;
                the materials on any other server.
              </li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by AdvancedTextEditor.com
              at any time.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on AdvancedTextEditor.com&apos;s website are
              provided &quot;as is&quot;. AdvancedTextEditor.com makes no
              warranties, expressed or implied, and hereby disclaims and negates
              all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall AdvancedTextEditor.com or its suppliers be
              liable for any damages (including, without limitation, damages for
              loss of data or profit, or due to business interruption) arising
              out of the use or inability to use the materials on
              AdvancedTextEditor.com&apos;s website, even if
              AdvancedTextEditor.com or an authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>

            <h2>5. Revisions and Errata</h2>
            <p>
              The materials appearing on AdvancedTextEditor.com&apos;s website
              could include technical, typographical, or photographic errors.
              AdvancedTextEditor.com does not warrant that any of the materials
              on its website are accurate, complete, or current.
              AdvancedTextEditor.com may make changes to the materials contained
              on its website at any time without notice. However,
              AdvancedTextEditor.com does not make any commitment to update the
              materials.
            </p>

            <h2>6. Links</h2>
            <p>
              AdvancedTextEditor.com has not reviewed all of the sites linked to
              its website and is not responsible for the contents of any such
              linked site. The inclusion of any link does not imply endorsement
              by AdvancedTextEditor.com of the site. Use of any such linked
              website is at the user&apos;s own risk.
            </p>

            <h2>7. Site Terms of Use Modifications</h2>
            <p>
              AdvancedTextEditor.com may revise these terms of use for its
              website at any time without notice. By using this website you are
              agreeing to be bound by the then current version of these Terms of
              Use.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              Any claim relating to AdvancedTextEditor.com&apos;s website shall
              be governed by the laws of the State without regard to its
              conflict of law provisions.
            </p>

            <p>
              By using AdvancedTextEditor.com, you are agreeing to these terms.
              Please review them carefully before using the site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
