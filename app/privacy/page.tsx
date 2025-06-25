import { DateTime } from 'luxon';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      <div className="space-y-4">
        <p>
          Last updated: {DateTime.fromFormat('2025-06-25', 'yyyy-MM-dd').toFormat('dd.MM.yyyy')}
        </p>

        <h2 className="mt-6 mb-3 font-semibold">Introduction</h2>
        <p>
          Welcome to my portfolio website. I respect your privacy and am committed to protecting any
          personal data you may provide through this website.
        </p>

        <h2 className="mt-6 mb-3 font-semibold">Information We Collect</h2>
        <p>This portfolio website may collect the following information:</p>
        <ul className="ml-4 list-inside list-disc">
          <li>Anonymous usage data through tracking technologies</li>
        </ul>

        <h2 className="mt-6 mb-3 font-semibold">Cookies and Tracking Technologies</h2>
        <p>
          This website uses cookies and similar tracking technologies (such as Umami and Vercel
          Analytics) to analyze how visitors interact with the website and to improve the user
          experience. These technologies collect anonymous information about your browsing activity.
        </p>
        <p>
          The use of these tracking cookies is optional and requires your explicit consent, which
          you can provide or withdraw through the cookie banner displayed on your first visit.
          Strictly necessary cookies for the website&apos;s functionality do not require consent.
        </p>

        <h2 className="mt-6 mb-3 font-semibold">How We Use Your Information</h2>
        <p>
          Data collected through tracking cookies (if accepted) is used for traffic analysis and
          website optimization. We will not use this information for other purposes and will not
          share it with third parties, except for the analytics service providers mentioned above.
        </p>

        <h2 className="mt-6 mb-3 font-semibold">Data Protection</h2>
        <p>
          We take appropriate security measures to protect your information against unauthorized
          access, modification, disclosure, or destruction.
        </p>

        <h2 className="mt-6 mb-3 font-semibold">Your Rights</h2>
        <p>
          You have the right to request access, correction, or deletion of your personal
          information. For any questions or requests related to your data, please contact us.
        </p>

        <h2 className="mt-6 mb-3 font-semibold">Changes to Privacy Policy</h2>
        <p>
          We reserve the right to modify this privacy policy at any time. Any changes will be
          published on this page.
        </p>

        <h2 className="mt-6 mb-3 font-semibold">Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us at{' '}
          <a href="mailto:contact@paulgeorge.dev">contact@paulgeorge.dev</a>.
        </p>
      </div>
    </div>
  );
}
