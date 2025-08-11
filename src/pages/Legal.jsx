const Legal = () => (
  <div className="space-y-6">
    {/* Header / Intro */}
    <div className="border border-black dark:border-white bg-white dark:bg-offblack p-6 lg:p-8">
      <h1 className="font-sans text-2xl lg:text-3xl mb-2">PRNTSCRN — Legal</h1>
      <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-3">Last updated: 11 August 2025</p>
      <p className="font-mono text-sm text-gray-700 dark:text-gray-300 max-w-3xl">
        This page contains the key legal terms governing the use of PRNTSCRN Pty Ltd (“PRNTSCRN”, “we”, “our”) products and services. We operate at the
        intersection of design, automation, and code, delivering local-first, brand-critical automation solutions for creative and compliance-driven teams.
      </p>
    </div>

    {/* Summary notice */}
    <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <div className="font-mono text-sm">
        <p><span className="font-semibold">Summary.</span> This page summarises our terms. Detailed agreements (Master Services Agreement, Privacy Policy, Data Processing Addendum, etc.) form part of our contractual relationship with clients.</p>
      </div>
    </section>

    {/* 1. MSA */}
    <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <h2 className="font-sans text-xl mb-2">1. Master Services Agreement (MSA)</h2>
      <div className="font-mono text-sm space-y-3 text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="font-sans text-base mb-1">Scope</h3>
          <p>We deliver consulting, design systems, and automation modules (“Modules”). Statements of Work (SOWs) define deliverables, milestones, and acceptance criteria.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Local-First & Security</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Default operation is <strong>local-first</strong>.</li>
            <li>Cloud services are used only when agreed in writing, with agreed residency and tenancy.</li>
            <li>Access is least-privilege; artifacts are cryptographically signed where applicable.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Confidentiality</h3>
          <p>Each party protects Confidential Information with no less than reasonable care. Open-source components are excluded from confidentiality obligations.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Intellectual Property & Licensing</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Client content remains <strong>Client IP</strong>.</li>
            <li>We grant Clients a perpetual, non-exclusive licence to use deliverables internally.</li>
            <li>Reusable PRNTSCRN platform components remain <strong>PRNTSCRN IP</strong>; clients receive the necessary licence to operate them.</li>
            <li>Designers and creators engaged by PRNTSCRN will provide moral rights consents where legally possible.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Compliance</h3>
          <p>Our workflows may include validation rules. Clients remain responsible for regulatory compliance and content accuracy.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Data Processing</h3>
          <p>If we process personal data for a client, the <strong>Data Processing Addendum (DPA)</strong> applies. We process only per written client instructions.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Fees & Payment</h3>
          <p>Fixed-fee discovery; time & materials or fixed-price implementation per SOW. Invoices are net 14 days unless otherwise agreed.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Warranties</h3>
          <p>Deliverables will materially conform to the SOW for 30 days after acceptance. Exclusive remedy: re-performance or refund of fees for the non-conforming portion.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Indemnities</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>We indemnify against claims that our proprietary components infringe third-party IP.</li>
            <li>Clients indemnify us for content provided by them.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Limitation of Liability</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>No liability for indirect or consequential damages to the maximum extent permitted by law.</li>
            <li>Aggregate liability capped at fees paid in the preceding 12 months.</li>
            <li><strong>Consumer Guarantees</strong> under Australian Consumer Law are not excluded for consumer transactions.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Termination</h3>
          <p>Either party may terminate for uncured material breach (30 days’ written notice). On termination: non-cancellable commitments remain payable; Confidential Information is returned or destroyed.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Open Source</h3>
          <p>Modules may incorporate open-source software (OSS) under permissive licences. Notices and attributions are provided; OSS remains under its original licences.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Export & Sanctions</h3>
          <p>Each party complies with applicable export controls and sanctions regimes.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Governing Law</h3>
          <p>New South Wales, Australia. Courts of NSW have exclusive jurisdiction.</p>
        </div>
      </div>
    </section>

    {/* 2. AUP */}
    <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <h2 className="font-sans text-xl mb-2">2. Acceptable Use Policy (AUP)</h2>
      <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
        <p className="mb-2">You must not:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Use our services to generate unlawful, harassing, defamatory, discriminatory, or harmful content.</li>
          <li>Attempt to bypass security, licensing, or usage caps.</li>
          <li>Reverse engineer our agents or signed artifacts except where permitted by law.</li>
          <li>Upload or process special categories of personal data without prior written agreement.</li>
          <li>Use our services to train third-party models without explicit consent.</li>
          <li>Interfere with the operation of our services or other customers’ use.</li>
        </ul>
        <p>We may suspend or terminate accounts that violate this policy. A takedown and appeal process is available on request.</p>
      </div>
    </section>

    {/* 3. Privacy Policy */}
    <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <h2 className="font-sans text-xl mb-2">3. Privacy Policy</h2>
      <div className="font-mono text-sm space-y-3 text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="font-sans text-base mb-1">Overview</h3>
          <p>PRNTSCRN complies with the Australian Privacy Principles (APPs) and, where applicable, the EU General Data Protection Regulation (GDPR). We minimise the collection of personal data. Local-first agents process content on-device where feasible. Telemetry is optional and de-identified.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Data Controller & Contact</h3>
          <p><strong>Controller:</strong> PRNTSCRN Pty Ltd (ACN 000 000 000)</p>
          <p><strong>Privacy Contact:</strong> <a className="underline" href="mailto:privacy@prntscrn.studio">privacy@prntscrn.studio</a></p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">What We Collect</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account information (name, email, organisation)</li>
            <li>Project metadata and configuration</li>
            <li>Files/content you upload</li>
            <li>Telemetry (optional, de-identified)</li>
            <li>Support communications</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">How We Use Data</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide and improve our services</li>
            <li>Deliver contracted work</li>
            <li>Troubleshoot and support</li>
            <li>Maintain security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Legal Bases (GDPR)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contract performance</li>
            <li>Consent</li>
            <li>Legitimate interests</li>
            <li>Legal compliance</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Data Sharing</h3>
          <p>We share personal data only:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>With your consent</li>
            <li>With approved subprocessors (see <a className="underline" href="/legal/subprocessors">Subprocessor List</a>)</li>
            <li>Where required by law</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Cross-Border Transfers</h3>
          <p>Where personal data is transferred overseas, we take reasonable steps to ensure equivalent protections (APP 8 / GDPR Ch. V).</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Data Retention</h3>
          <p>We retain personal data only as long as necessary for the purposes described or as required by law.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Your Rights</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access, correction, deletion</li>
            <li>Restriction and objection (GDPR)</li>
            <li>Data portability (GDPR)</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>Requests: <a className="underline" href="mailto:privacy@prntscrn.studio">privacy@prntscrn.studio</a></p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Children’s Data</h3>
          <p>For <strong>ZinePlayground for Schools</strong>, parental/guardian consent is required before processing personal data of children under 18.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Data Breaches</h3>
          <p>We will notify affected clients and the Office of the Australian Information Commissioner (OAIC) where a breach is likely to cause serious harm, as soon as practicable.</p>
        </div>
      </div>
    </section>

    {/* 4. DPA */}
    <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <h2 className="font-sans text-xl mb-2">4. Data Processing Addendum (DPA)</h2>
      <div className="font-mono text-sm space-y-3 text-gray-700 dark:text-gray-300">
        <p>This DPA applies when PRNTSCRN processes personal data on behalf of a client.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Roles:</strong> Client = Data Controller; PRNTSCRN = Data Processor</li>
          <li><strong>Scope & Purpose:</strong> Processing personal data solely to deliver contracted services.</li>
          <li><strong>Categories of Data:</strong> As described in the SOW or Privacy Policy.</li>
          <li><strong>Security:</strong> Encryption in transit and at rest; access control and key rotation; secure coding and regular patching.</li>
          <li><strong>Subprocessors:</strong> We may use approved subprocessors. Clients are notified of changes and may object.</li>
          <li><strong>International Transfers:</strong> Handled under APP 8 / GDPR with safeguards (e.g., Standard Contractual Clauses).</li>
          <li><strong>Breach Notification:</strong> We notify clients without undue delay of any personal data breach.</li>
          <li><strong>Deletion or Return:</strong> Upon contract end, personal data is deleted or returned within 30 days, unless law requires retention.</li>
          <li><strong>Audit Rights:</strong> Clients may audit PRNTSCRN’s processing activities with reasonable notice.</li>
        </ul>
      </div>
    </section>

    {/* 5. VDP */}
    <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <h2 className="font-sans text-xl mb-2">5. Vulnerability Disclosure Policy (VDP)</h2>
      <div className="font-mono text-sm space-y-3 text-gray-700 dark:text-gray-300">
        <p>We welcome security research.</p>
        <div>
          <h3 className="font-sans text-base mb-1">Guidelines</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Do not access, modify, or delete data you do not own.</li>
            <li>Avoid actions that degrade service.</li>
            <li>Comply with applicable laws.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Reporting</h3>
          <p>Send reports to <a className="underline" href="mailto:security@prntscrn.studio">security@prntscrn.studio</a> with a description, steps to reproduce, and potential impact. We acknowledge reports within 5 business days.</p>
        </div>
        <div>
          <h3 className="font-sans text-base mb-1">Recognition</h3>
          <p>We may publicly credit researchers (with consent).</p>
        </div>
      </div>
    </section>

    {/* 6. Service Levels */}
    <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <h2 className="font-sans text-xl mb-2">6. Service Levels</h2>
      <ul className="font-mono text-sm space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
        <li><strong>Discovery:</strong> 1–2 weeks fixed-fee</li>
        <li><strong>Pilot:</strong> 2–4 weeks with weekly reviews</li>
        <li><strong>Support:</strong> Email within 2 business days; critical fixes prioritised</li>
      </ul>
    </section>

    {/* 7. Contact */}
    <section className="border border-black dark:border-white bg-white dark:bg-offblack p-6">
      <h2 className="font-sans text-xl mb-2">7. Contact</h2>
      <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
        <p><a className="underline" href="mailto:hello@prntscrn.studio">hello@prntscrn.studio</a></p>
      </div>
    </section>
  </div>
)

export default Legal
