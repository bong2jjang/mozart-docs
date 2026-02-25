import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.scss";

function FeatureCard({ icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  return (
    <Layout description="Cloud-based SCP solution enabling digital transformation of manufacturing operations">
      <header className={styles.masthead}>
        <div className={styles.content}>
          <h1>MOZART</h1>
          <h2>Cloud-Based SCP Solution</h2>
          <p className={styles.subtitle}>
            Enabling Digital Transformation of Manufacturing Operations
            <br />
            with Enhanced User Experience
          </p>
          <div className={styles.btnGroup}>
            <Link className={styles.btn} to={useBaseUrl("docs/aps")}>
              Get Started
            </Link>
            <Link
              className={`${styles.btn} ${styles.btnSecondary}`}
              to="mailto:support@vms-solutions.com"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Core Services</h2>
          <div className={styles.featuresGrid}>
            <FeatureCard
              icon="📊"
              title="Manufacturing Production Planning Optimization"
              description="Scenario-based optimal plan application with optimized decision support, validated planning engine, and standardization-based scalability."
            />
            <FeatureCard
              icon="🎯"
              title="Integrated User Environment Support"
              description="Comprehensive coverage from preparation through comparative analysis, including continuous system improvement throughout operational execution."
            />
            <FeatureCard
              icon="🤖"
              title="AI-Based Decision Making"
              description="Parameter tuning optimization for various planning options with verified technology framework for regular execution and updates."
            />
          </div>
        </div>
      </section>

      <section className={styles.platformSection}>
        <div className={styles.container}>
          <div className={styles.platformContent}>
            <div className={styles.platformText}>
              <h2>Advanced Planning & Scheduling (APS)</h2>
              <p>
                MOZART APS provides intelligent manufacturing planning and
                scheduling solutions that optimize production efficiency and
                resource utilization.
              </p>
              <ul className={styles.featureList}>
                <li>✓ Real-time production scheduling optimization</li>
                <li>✓ Resource capacity planning and allocation</li>
                <li>✓ Constraint-based planning engine</li>
                <li>✓ What-if scenario analysis</li>
              </ul>
              <Link className={styles.learnMore} to={useBaseUrl("docs/aps")}>
                Learn More →
              </Link>
            </div>
            <div className={styles.platformImage}>
              <div className={styles.imagePlaceholder}>APS Dashboard</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.platformSectionAlt}>
        <div className={styles.container}>
          <div className={styles.platformContent}>
            <div className={styles.platformImage}>
              <div className={styles.imagePlaceholder}>DP Analytics</div>
            </div>
            <div className={styles.platformText}>
              <h2>Data Platform (DP)</h2>
              <p>
                Unified data platform for manufacturing intelligence, providing
                real-time insights and analytics for better decision making.
              </p>
              <ul className={styles.featureList}>
                <li>✓ Real-time data collection and processing</li>
                <li>✓ Advanced analytics and visualization</li>
                <li>✓ Machine learning model integration</li>
                <li>✓ Predictive maintenance capabilities</li>
              </ul>
              <Link className={styles.learnMore} to={useBaseUrl("docs/dp")}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.advantagesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Competitive Advantages</h2>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <div className={styles.advantageNumber}>20+</div>
              <h3>Years of Experience</h3>
              <p>
                Expert team support leveraging global experience in
                manufacturing optimization
              </p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advantageNumber}>☁️</div>
              <h3>Cloud-Based SCM</h3>
              <p>Reduced implementation time with cloud-native architecture</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advantageNumber}>✓</div>
              <h3>Validated Engine</h3>
              <p>
                Simulation-based planning engine adopted by leading high-tech
                firms
              </p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advantageNumber}>🧠</div>
              <h3>ML Optimization</h3>
              <p>
                Machine learning technology for continuous improvement and
                parameter tuning
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Transform Your Manufacturing Operations?</h2>
          <p>
            Get started with MOZART Cloud today and experience the future of
            production planning.
          </p>
          <div className={styles.btnGroup}>
            <Link className={styles.btn} to={useBaseUrl("docs/aps")}>
              Get Started
            </Link>
            <Link
              className={`${styles.btn} ${styles.btnSecondary}`}
              to="mailto:support@vms-solutions.com"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>MOZART</h3>
              <p>Cloud-based SCP solution for manufacturing excellence</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Products</h4>
              <ul>
                <li>
                  <Link to={useBaseUrl("docs/aps")}>APS</Link>
                </li>
                <li>
                  <Link to={useBaseUrl("docs/dp")}>DP</Link>
                </li>
                <li>
                  <Link to={useBaseUrl("docs/platform")}>Platform</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact</h4>
              <p>
                Bundang-Suji Tower
                <br />
                Yongin-si, Gyeonggi Province
                <br />
                16827, South Korea
              </p>
              <p>Email: support@vms-solutions.com</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>
              &copy; {new Date().getFullYear()} VMS Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
