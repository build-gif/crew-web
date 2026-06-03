export const metadata = {
  title: "Terms of Service | Crew of Builders",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A18] font-sans px-6 py-20 selection:bg-[#FF5A1F] selection:text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4">Terms of Service</h1>
        <p className="text-[#6B6B65] mb-12">Last updated: June 2026</p>

        <div className="space-y-8 text-[16px] leading-relaxed text-[#1A1A18]/80">
          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Crew of Builders ("Platform"), operated by WE Heart, you agree to be bound by these Terms of Service. 
              If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">2. Platform Access & Eligibility</h2>
            <p>
              Crew of Builders is a private, curated network. Access is granted exclusively at our discretion based on your application and professional context. 
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>You must provide accurate, current, and complete information during onboarding.</li>
              <li>Your account is strictly personal and non-transferable.</li>
              <li>We reserve the right to revoke access, ban, or suspend any account at any time, with or without cause, to protect the integrity of the community.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">3. Community Guidelines & Code of Conduct</h2>
            <p>To maintain a high-signal environment, you agree to the following rules:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>No Spam or Hard Selling:</strong> You will not scrape member data or use the platform directory to send unsolicited sales pitches.</li>
              <li><strong>Confidentiality:</strong> Insights, pitch decks, and internal discussions shared within the Crew (e.g., during Demo Days) must remain confidential unless explicitly stated otherwise by the author.</li>
              <li><strong>Respect:</strong> Harassment, discriminatory behavior, or unprofessional conduct will result in an immediate ban.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">4. Intellectual Property</h2>
            <p>
              The content you share (e.g., your pitch decks, project links) remains yours. However, by participating in Demo Days or uploading content to the platform, you grant us a non-exclusive license to display it to other approved members within the platform ecosystem.
              <br/><br/>
              The platform's design, code, logos, and frameworks (including the WE Heart methodologies) are our exclusive intellectual property and may not be copied or reproduced.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">5. Disclaimer of Warranties & Limitation of Liability</h2>
            <p>
              The platform and all community interactions are provided "as is" without warranties of any kind. WE Heart is not responsible for any business outcomes, investments, or losses resulting from connections made within the Crew of Builders. You are solely responsible for your own diligence before engaging in business or sharing sensitive information with other members.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1A1A18] mb-3">6. Modifications</h2>
            <p>
              We may revise these Terms of Service at any time. We will notify members of significant changes via email or platform announcements. Continued use of the platform after changes implies acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
