export const metadata = {
  title: "Privacy Policy | Crew of Builders",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A18] font-sans px-6 py-20 selection:bg-[#FF5A1F] selection:text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4">Privacy Policy</h1>
        <p className="text-[#6B6B65] mb-12">Last updated: June 2026</p>

        <div className="space-y-8 text-[16px] leading-relaxed text-[#1A1A18]/80">
          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">1. Introduction</h2>
            <p>
              Crew of Builders ("we", "us", or "our"), operated by WE Heart, respects your privacy. 
              We are a private networking platform for founders, builders, and investors. This policy explains 
              how we collect, use, and safeguard your information when you use our platform (app.crewofbuilders.com).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">2. Data We Collect</h2>
            <p>We collect information you provide directly to us during the onboarding and authentication process:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Identity Data:</strong> Full name, email address, and LinkedIn URL.</li>
              <li><strong>Professional Data:</strong> Your project URL, current stage, sector, and motivation to join.</li>
              <li><strong>Technical Data:</strong> Authentication logs, last sign-in timestamps, and device analytics to improve our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">3. How We Use Your Data</h2>
            <p>Your data is used strictly to operate the community and facilitate connections:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To create and manage your secure access to the platform.</li>
              <li>To display your professional profile to other verified members in the Directory.</li>
              <li>To send transactional emails (login links, event reminders, community updates).</li>
              <li>To review applications and curate the network density.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">4. Third-Party Services</h2>
            <p>
              We do not sell your personal data. We share data only with essential infrastructure partners needed to run the platform:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Supabase:</strong> For secure database hosting and authentication.</li>
              <li><strong>Resend:</strong> For transactional email delivery.</li>
              <li><strong>Notion:</strong> For internal CRM and application review processes.</li>
              <li><strong>Vercel & PostHog:</strong> For hosting and product analytics (strictly anonymized where possible).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">5. Data Retention & Deletion</h2>
            <p>
              We store your data as long as your account is active. You have the right to request the deletion of your account and all associated data at any time by contacting us directly. Once an account is deleted, your profile is permanently removed from the directory.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at: <strong>hello@weheartimpact.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
