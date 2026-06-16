"use client";

export default function TermsPage() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 140, maxWidth: 800 }}>
        <div className="section-head">
          <p
            style={{
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontSize: 12,
              color: "var(--muted2)",
              marginBottom: 8,
            }}
          >
            Legal
          </p>
          <h1 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.2 }}>
            Terms & Conditions
          </h1>
          <p
            style={{
              marginTop: 16,
              color: "var(--muted)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            ADB Unlocking Service — BaoLab
          </p>
          <p style={{ marginTop: 8, color: "var(--muted2)", fontSize: 13 }}>
            Last updated: June 16, 2026
          </p>
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 0, maxWidth: 800 }}>
        <div className="rte" style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8 }}>
          <h2>1. Service Description</h2>
          <p>
            BaoLab (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides an ADB (Android Debug Bridge)
            unlocking service for BYD and Denza vehicles running DiLink 5.0 or
            newer. The service involves:
          </p>
          <ul>
            <li>Remote QR code scanning to enable factory-level ADB access</li>
            <li>Enabling wireless ADB debugging and USB debugging modes</li>
            <li>Approximately 10-15 minutes of remote technical support</li>
          </ul>
          <p>
            <strong>What we provide:</strong> ADB access activation on your
            vehicle&apos;s infotainment system, guidance on installing third-party
            applications, post-unlock technical support via email.
          </p>
          <p>
            <strong>What we do NOT provide:</strong> Installation of specific
            applications, ongoing technical support for third-party applications,
            vehicle modifications beyond ADB access, any physical modifications to
            your vehicle.
          </p>

          <h2>2. Eligibility</h2>
          <p>To use our service, you must:</p>
          <ul>
            <li>Own or have authorized access to a BYD or Denza vehicle</li>
            <li>Have a vehicle running DiLink 5.0 or newer</li>
            <li>Be able to access the QR code page on your infotainment system</li>
            <li>Have a stable internet connection during the service</li>
            <li>Be at least 18 years old or have parental consent</li>
          </ul>

          <h2>3. Service Process</h2>
          <ol>
            <li>
              <strong>Order Placement:</strong> Purchase the ADB Unlocking Service
              through our website
            </li>
            <li>
              <strong>Scheduling:</strong> We will contact you to schedule a
              convenient time
            </li>
            <li>
              <strong>QR Code Access:</strong> You will access the QR code page on
              your vehicle
            </li>
            <li>
              <strong>Remote Unlock:</strong> We scan the QR code and enable ADB
              access
            </li>
            <li>
              <strong>Completion:</strong> ADB is enabled on your vehicle
            </li>
          </ol>
          <p>
            <strong>Important Notes:</strong>
          </p>
          <ul>
            <li>
              The QR code expires every 2 minutes. If it expires, do NOT click
              refresh — stay on the page and wait for it to regenerate
            </li>
            <li>You must be online during the scheduled time</li>
            <li>
              We are not responsible for connectivity issues on your end
            </li>
            <li>
              ADB access will be lost if you perform a factory reset on your
              infotainment system
            </li>
          </ul>

          <h2>4. Payment &amp; Pricing</h2>
          <ul>
            <li>
              <strong>Price:</strong> $99 AUD (Australian Dollars) per vehicle
            </li>
            <li>
              <strong>Payment:</strong> Required before service commencement
            </li>
            <li>
              <strong>Currency:</strong> All prices are in AUD
            </li>
            <li>
              <strong>Taxes:</strong> Prices include GST where applicable
            </li>
          </ul>
          <p>
            <strong>Refund Policy:</strong>
          </p>
          <ul>
            <li>
              Before service: Full refund if cancelled 24 hours before scheduled
              time
            </li>
            <li>
              During service: No refund if QR code has been scanned
            </li>
            <li>
              After service: No refund once ADB access has been enabled
            </li>
            <li>
              Technical issues: If we cannot complete the service due to our
              error, full refund will be provided
            </li>
          </ul>

          <h2>5. Your Responsibilities</h2>
          <p>You acknowledge and agree that:</p>
          <ul>
            <li>You are the authorized owner/user of the vehicle</li>
            <li>
              You understand that ADB access may affect your infotainment
              system&apos;s warranty
            </li>
            <li>
              You are solely responsible for any applications you install after
              the unlock
            </li>
            <li>You will not use the service for illegal purposes</li>
            <li>
              You will follow all applicable laws and regulations in your
              jurisdiction
            </li>
          </ul>

          <h2>6. Our Liability — LIMITATION OF LIABILITY</h2>
          <p>
            <strong>
              To the maximum extent permitted by law:
            </strong>
          </p>

          <h3>6.1 No Warranty for Third-Party Applications</h3>
          <p>
            We are not responsible for any third-party applications you install on
            your vehicle&apos;s infotainment system after the ADB unlock. This
            includes but is not limited to:
          </p>
          <ul>
            <li>Application functionality, reliability, or compatibility</li>
            <li>Data loss or corruption caused by applications</li>
            <li>Security vulnerabilities introduced by applications</li>
            <li>Performance issues caused by applications</li>
            <li>Any damage to your vehicle&apos;s infotainment system</li>
          </ul>

          <h3>6.2 Infotainment System Warranty</h3>
          <p>
            ADB access may void or affect your infotainment system&apos;s
            manufacturer warranty. We are not responsible for any warranty
            implications. You should consult your vehicle manufacturer or dealer
            before proceeding.
          </p>

          <h3>6.3 Service Limitations</h3>
          <p>
            Our service is limited to enabling ADB access. We do not guarantee:
          </p>
          <ul>
            <li>Compatibility with all third-party applications</li>
            <li>
              Continued functionality after vehicle software updates (OTA updates
              generally do not affect ADB, but we cannot guarantee this)
            </li>
            <li>
              That ADB access will remain enabled permanently (factory reset will
              remove ADB access)
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Based on our experience, OTA updates generally
            do not affect ADB access, and ADB access remains enabled until a
            factory reset is performed. However, we cannot guarantee this for all
            vehicles and situations.
          </p>

          <h3>6.4 Maximum Liability</h3>
          <p>
            Our total liability to you for any claims arising from or related to
            this service shall not exceed the amount you paid for the service ($99
            AUD).
          </p>

          <h3>6.5 Exclusion of Damages</h3>
          <p>
            To the maximum extent permitted by law, we shall not be liable for
            any:
          </p>
          <ul>
            <li>Indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
            <li>Damages arising from your use of third-party applications</li>
            <li>Damages arising from infotainment system warranty issues</li>
            <li>Damages arising from vehicle software updates</li>
          </ul>

          <h2>7. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless BaoLab, its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses (including
            reasonable attorneys&apos; fees) arising from or related to:
          </p>
          <ul>
            <li>Your use of the service</li>
            <li>Your installation of third-party applications</li>
            <li>Your violation of these terms</li>
            <li>Your violation of any law or regulation</li>
            <li>Any damage to your vehicle or third-party property</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <ul>
            <li>
              The BaoLab name, logo, and website are our intellectual property
            </li>
            <li>You may not use our trademarks without written permission</li>
            <li>The service methodology and processes are proprietary</li>
            <li>You may not reverse-engineer or replicate our service</li>
          </ul>

          <h2>9. Privacy</h2>
          <ul>
            <li>We collect only necessary information to provide the service</li>
            <li>Your personal information is stored securely</li>
            <li>We do not sell or share your information with third parties</li>
            <li>We may use anonymized data for service improvement</li>
          </ul>

          <h2>10. Governing Law &amp; Disputes</h2>
          <ul>
            <li>These terms are governed by the laws of Victoria, Australia</li>
            <li>
              Any disputes shall be resolved in the courts of Victoria, Australia
            </li>
            <li>You agree to attempt mediation before pursuing legal action</li>
          </ul>

          <h2>11. Changes to Terms</h2>
          <ul>
            <li>We may update these terms at any time</li>
            <li>Changes will be posted on our website</li>
            <li>
              Continued use of the service constitutes acceptance of updated terms
            </li>
            <li>We will notify you of material changes via email</li>
          </ul>

          <h2>12. Severability</h2>
          <p>
            If any provision of these terms is found to be unenforceable, the
            remaining provisions will remain in full force and effect.
          </p>

          <h2>13. Entire Agreement</h2>
          <p>
            These terms constitute the entire agreement between you and BaoLab
            regarding the ADB Unlocking Service, superseding any prior agreements
            or understandings.
          </p>

          <h2>14. Contact Information</h2>
          <p>
            <strong>BaoLab</strong>
            <br />
            Website:{" "}
            <a href="https://baolab.au" style={{ color: "var(--text)" }}>
              baolab.au
            </a>
            <br />
            Email:{" "}
            <a href="mailto:hello@baolab.au" style={{ color: "var(--text)" }}>
              hello@baolab.au
            </a>
          </p>

          <h2>15. Acceptance</h2>
          <p>
            By purchasing and using our ADB Unlocking Service, you acknowledge
            that you have read, understood, and agree to be bound by these Terms
            &amp; Conditions.
          </p>

          <p
            style={{
              marginTop: 40,
              color: "var(--muted2)",
              fontSize: 12,
            }}
          >
            These terms are effective as of June 16, 2026.
          </p>
        </div>
      </section>
    </>
  );
}
