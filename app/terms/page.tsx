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
        {/* Table of Contents */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 16,
            padding: "24px 32px",
            marginBottom: 40,
          }}
        >
          <p style={{ color: "var(--muted2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Contents
          </p>
          
          {/* ADB Unlocking Service Section */}
          <div style={{ marginBottom: 24 }}>
            <p style={{ color: "var(--text)", fontSize: 14, fontWeight: 600, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ background: "rgba(255, 255, 255, 0.08)", borderRadius: 6, padding: "2px 8px", fontSize: 11, color: "var(--muted2)" }}>I</span>
              ADB Unlocking Service
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8, paddingLeft: 32 }}>
              {["Service Description", "Eligibility", "Service Process", "Payment & Pricing", "Your Responsibilities", "Limitation of Liability", "Indemnification", "Intellectual Property", "Privacy", "Governing Law", "Changes to Terms", "Severability", "Entire Agreement", "Contact", "Acceptance"].map((item, i) => (
                <a
                  key={item}
                  href={`#section-${i + 1}`}
                  style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", padding: "6px 0", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {i + 1}. {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Physical Products Section */}
          <div>
            <p style={{ color: "var(--text)", fontSize: 14, fontWeight: 600, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ background: "rgba(255, 255, 255, 0.08)", borderRadius: 6, padding: "2px 8px", fontSize: 11, color: "var(--muted2)" }}>II</span>
              Physical Products
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8, paddingLeft: 32 }}>
              {["Product Information", "Pricing & Payment", "Shipping & Delivery", "Returns & Refunds", "Warranty", "Installation", "Product Liability", "Product Compatibility", "Acceptance"].map((item, i) => (
                <a
                  key={item}
                  href={`#section-${i + 15}`}
                  style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", padding: "6px 0", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {i + 15}. {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* ═══════════════════════════════════════
              ADB UNLOCKING SERVICE SECTION
          ═══════════════════════════════════════ */}
          
          <div style={{ marginBottom: 20 }}>
            <p style={{ color: "var(--muted2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              ADB Unlocking Service
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
              Terms & Conditions — ADB Unlocking Service
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              This section applies to the ADB Unlocking Service provided by BaoLab for BYD and Denza vehicles.
            </p>
          </div>

          <Section id="section-1" number="1" title="Service Description">
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
          </Section>

          <Section id="section-2" number="2" title="Eligibility">
            <p>To use our service, you must:</p>
            <ul>
              <li>Own or have authorized access to a BYD or Denza vehicle</li>
              <li>Have a vehicle running DiLink 5.0 or newer</li>
              <li>Be able to access the QR code page on your infotainment system</li>
              <li>Have a stable internet connection during the service</li>
              <li>Be at least 18 years old or have parental consent</li>
            </ul>
          </Section>

          <Section id="section-3" number="3" title="Service Process">
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
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 12,
                padding: "16px 20px",
                marginTop: 16,
              }}
            >
              <p style={{ color: "var(--muted2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                Important Notes
              </p>
              <ul style={{ margin: 0 }}>
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
            </div>
          </Section>

          <Section id="section-4" number="4" title="Payment & Pricing">
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
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 12,
                padding: "16px 20px",
                marginTop: 16,
              }}
            >
              <p style={{ color: "var(--muted2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                Refund Policy
              </p>
              <ul style={{ margin: 0 }}>
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
            </div>
          </Section>

          <Section id="section-5" number="5" title="Your Responsibilities">
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
          </Section>

          <Section id="section-6" number="6" title="Limitation of Liability">
            <p>
              <strong>To the maximum extent permitted by law:</strong>
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
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 12,
                padding: "16px 20px",
                marginTop: 16,
              }}
            >
              <p style={{ fontSize: 13, color: "var(--muted)" }}>
                <strong>Note:</strong> Based on our experience, OTA updates generally
                do not affect ADB access, and ADB access remains enabled until a
                factory reset is performed. However, we cannot guarantee this for all
                vehicles and situations.
              </p>
            </div>

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
          </Section>

          <Section id="section-7" number="7" title="Indemnification">
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
          </Section>

          <Section id="section-8" number="8" title="Intellectual Property">
            <ul>
              <li>
                The BaoLab name, logo, and website are our intellectual property
              </li>
              <li>You may not use our trademarks without written permission</li>
              <li>The service methodology and processes are proprietary</li>
              <li>You may not reverse-engineer or replicate our service</li>
            </ul>
          </Section>

          <Section id="section-9" number="9" title="Privacy">
            <ul>
              <li>We collect only necessary information to provide the service</li>
              <li>Your personal information is stored securely</li>
              <li>We do not sell or share your information with third parties</li>
              <li>We may use anonymized data for service improvement</li>
            </ul>
          </Section>

          <Section id="section-10" number="10" title="Governing Law & Disputes">
            <ul>
              <li>These terms are governed by the laws of Victoria, Australia</li>
              <li>
                Any disputes shall be resolved in the courts of Victoria, Australia
              </li>
              <li>You agree to attempt mediation before pursuing legal action</li>
            </ul>
          </Section>

          <Section id="section-11" number="11" title="Changes to Terms">
            <ul>
              <li>We may update these terms at any time</li>
              <li>Changes will be posted on our website</li>
              <li>
                Continued use of the service constitutes acceptance of updated terms
              </li>
              <li>We will notify you of material changes via email</li>
            </ul>
          </Section>

          <Section id="section-12" number="12" title="Severability">
            <p>
              If any provision of these terms is found to be unenforceable, the
              remaining provisions will remain in full force and effect.
            </p>
          </Section>

          <Section id="section-13" number="13" title="Entire Agreement">
            <p>
              These terms constitute the entire agreement between you and BaoLab
              regarding the ADB Unlocking Service, superseding any prior agreements
              or understandings.
            </p>
          </Section>

          <Section id="section-14" number="14" title="Contact Information">
            <p>
              <strong>BaoLab</strong>
            </p>
            <p>
              Website:{" "}
              <a href="https://baolab.au" style={{ color: "var(--text)" }}>
                baolab.au
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:hello@baolab.au" style={{ color: "var(--text)" }}>
                hello@baolab.au
              </a>
            </p>
          </Section>

          <Section id="section-14" number="14" title="Acceptance">
            <p>
              By purchasing and using our ADB Unlocking Service, you acknowledge
              that you have read, understood, and agree to be bound by these Terms
              &amp; Conditions.
            </p>
            <p style={{ marginTop: 16, color: "var(--muted2)", fontSize: 13 }}>
              These terms are effective as of June 16, 2026.
            </p>
          </Section>

          {/* ═══════════════════════════════════════
              PHYSICAL PRODUCTS SECTION
          ═══════════════════════════════════════ */}
          
          <div style={{ marginTop: 40, marginBottom: 20 }}>
            <p style={{ color: "var(--muted2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              Physical Products
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
              Terms & Conditions — Physical Products
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              This section applies to all physical products sold on shop.baolab.au, including but not limited to vehicle accessories, floor mats, boot mats, and other automotive accessories.
            </p>
          </div>

          <Section id="section-15" number="15" title="Product Information">
            <p>
              We endeavour to ensure that all product descriptions, images, and specifications on our website are as accurate as possible. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
            <p>
              <strong>Colour Disclaimer:</strong> Product colours may vary slightly from images shown on our website due to differences in display settings, lighting conditions, and manufacturing batches.
            </p>
          </Section>

          <Section id="section-16" number="16" title="Pricing & Payment">
            <ul>
              <li>
                <strong>Price:</strong> All prices are displayed in AUD (Australian Dollars)
              </li>
              <li>
                <strong>Taxes:</strong> Prices include GST where applicable
              </li>
              <li>
                <strong>Payment:</strong> Required at time of purchase
              </li>
              <li>
                <strong>Currency:</strong> All transactions are processed in AUD
              </li>
            </ul>
          </Section>

          <Section id="section-17" number="17" title="Shipping & Delivery">
            <ul>
              <li>
                <strong>Processing time:</strong> 1-2 business days
              </li>
              <li>
                <strong>Estimated delivery:</strong> 5-7 business days (international shipping from China)
              </li>
              <li>
                <strong>Ships to:</strong> Australia-wide
              </li>
              <li>
                <strong>Free shipping:</strong> On orders over $99 AUD
              </li>
            </ul>
            <p>
              <strong>Note:</strong> Delivery times are estimates and may vary due to customs processing, carrier delays, or other factors beyond our control. We are not responsible for delays caused by shipping carriers or customs.
            </p>
          </Section>

          <Section id="section-18" number="18" title="Returns & Refunds">
            <p>
              We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
            </p>
            <p>
              <strong>Eligibility:</strong> To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You&apos;ll also need the receipt or proof of purchase.
            </p>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 12,
                padding: "16px 20px",
                marginTop: 16,
              }}
            >
              <p style={{ color: "var(--muted2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                Exceptions / Non-Returnable Items
              </p>
              <ul style={{ margin: 0 }}>
                <li>Digital services (once completed)</li>
                <li>Custom products or special orders</li>
                <li>Personalised items</li>
                <li>Gift cards</li>
                <li>Sale items (unless defective)</li>
              </ul>
            </div>
            <p>
              <strong>Refund processing:</strong> Once we receive and inspect your return, we will notify you if the refund was approved. If approved, you&apos;ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
            </p>
            <p>
              <strong>Exchanges:</strong> The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
            </p>
          </Section>

          <Section id="section-19" number="19" title="Warranty">
            <p>
              All BaoLab products come with a minimum 12-month warranty against manufacturing defects, in accordance with Australian Consumer Law.
            </p>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 12,
                padding: "16px 20px",
                marginTop: 16,
              }}
            >
              <p style={{ color: "var(--muted2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                What&apos;s Covered
              </p>
              <ul style={{ margin: 0 }}>
                <li>Manufacturing defects</li>
                <li>Material faults</li>
                <li>Functionality issues under normal use</li>
              </ul>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 12,
                padding: "16px 20px",
                marginTop: 16,
              }}
            >
              <p style={{ color: "var(--muted2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                What&apos;s NOT Covered
              </p>
              <ul style={{ margin: 0 }}>
                <li>Normal wear and tear</li>
                <li>Damage from misuse or accidents</li>
                <li>Modifications or unauthorized repairs</li>
                <li>Water damage (unless specified)</li>
                <li>Installation damage</li>
              </ul>
            </div>
            <p>
              <strong>Australian Consumer Law:</strong> Our products come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage.
            </p>
          </Section>

          <Section id="section-20" number="20" title="Installation">
            <p>
              Some products may require professional installation. We recommend having products installed by a qualified automotive technician.
            </p>
            <p>
              <strong>Disclaimer:</strong> We are not responsible for any damage caused during installation, including but not limited to damage to your vehicle, the product, or third-party property. Installation is at your own risk.
            </p>
          </Section>

          <Section id="section-21" number="21" title="Limitation of Liability — Physical Products">
            <p>
              <strong>To the maximum extent permitted by law:</strong>
            </p>
            <ul>
              <li>
                Our total liability shall not exceed the purchase price of the product
              </li>
              <li>
                We are not liable for indirect, incidental, or consequential damages
              </li>
              <li>
                We are not liable for damage caused by improper installation or misuse
              </li>
              <li>
                We are not liable for vehicle modifications made using our products
              </li>
            </ul>
          </Section>

          <Section id="section-22" number="22" title="Product Compatibility">
            <p>
              While we strive to ensure our products are compatible with the vehicles listed on our website, we cannot guarantee compatibility with all vehicle configurations, modifications, or aftermarket accessories.
            </p>
            <p>
              <strong>Vehicle Compatibility:</strong> It is your responsibility to verify that the product is compatible with your specific vehicle model, year, and configuration before purchasing.
            </p>
          </Section>

          <Section id="section-23" number="23" title="Acceptance — Physical Products">
            <p>
              By purchasing physical products from BaoLab, you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions.
            </p>
            <p style={{ marginTop: 16, color: "var(--muted2)", fontSize: 13 }}>
              These terms are effective as of June 16, 2026.
            </p>
          </Section>


        </div>
      </section>
    </>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: 16,
        padding: "32px",
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "var(--text)",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            borderRadius: 8,
            padding: "4px 10px",
            fontSize: 13,
            color: "var(--muted2)",
          }}
        >
          {number}
        </span>
        {title}
      </h2>
      <div
        style={{
          color: "var(--muted)",
          fontSize: 14,
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {children}
      </div>
    </div>
  );
}
