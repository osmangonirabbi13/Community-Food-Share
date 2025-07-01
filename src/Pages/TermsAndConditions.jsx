import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 md:px-12 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms & <span className="text-emerald-500">Conditions</span>
        </h1>

        <p className="mb-6 text-justify">
          Welcome to{" "}
          <span className="font-semibold text-emerald-400">Food Share</span>. By
          using our website and services, you agree to the following terms and
          conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4 text-justify">
          By accessing or using Food Share, you agree to be bound by these Terms
          and Conditions and our Privacy Policy. If you do not agree, please do
          not use our services.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          2. User Responsibilities
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Provide accurate and up-to-date information when registering.</li>
          <li>Do not misuse or abuse the platform in any way.</li>
          <li>Respect other users and the community guidelines.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          3. Food Safety Disclaimer
        </h2>
        <p className="mb-4 text-justify">
          While we strive to maintain food safety, Food Share does not take
          responsibility for the quality or safety of donated food. Users must
          exercise their own discretion.
        </p>

        <h2 className="text-2xl font-semibold mb-2">4. Account Termination</h2>
        <p className="mb-4 text-justify">
          We reserve the right to suspend or terminate accounts that violate our
          terms, engage in fraudulent behavior, or endanger the community.
        </p>

        <h2 className="text-2xl font-semibold mb-2">5. Modifications</h2>
        <p className="mb-4 text-justify">
          We may revise these terms at any time. Continued use of the platform
          after changes implies acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold mb-2">6. Contact Information</h2>
        <p className="text-justify">
          If you have any questions or concerns about our Terms and Conditions,
          please email us at{" "}
          <a
            href="mailto:support@foodshare.com"
            className="text-emerald-400 underline"
          >
            support@foodshare.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
