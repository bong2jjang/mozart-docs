import React, { useEffect, useState } from "react";
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
  const {i18n} = context;
  const locale = i18n.currentLocale;

  const content = {
    ko: {
      title: "MOZART",
      subtitle1: "클라우드 기반 SCP 솔루션",
      subtitle2: "향상된 사용자 경험으로",
      subtitle3: "제조 운영의 디지털 혁신 실현",
      getStarted: "시작하기",
      requestDemo: "데모 요청",
      coreServices: "핵심 서비스",
      service1Title: "제조 생산 계획 최적화",
      service1Desc: "시나리오 기반 최적 계획 적용, 최적화된 의사결정 지원, 검증된 계획 엔진 및 표준화 기반 확장성을 제공합니다.",
      service2Title: "통합 사용자 환경 지원",
      service2Desc: "준비부터 비교 분석까지 포괄적인 지원, 운영 실행 전반의 지속적인 시스템 개선을 제공합니다.",
      service3Title: "AI 기반 의사결정",
      service3Desc: "다양한 계획 옵션을 위한 파라미터 튜닝 최적화, 정기 실행 및 업데이트를 위한 검증된 기술 프레임워크를 제공합니다.",
      apsTitle: "생산계획 및 스케줄링 (APS)",
      apsDesc: "MOZART APS는 생산 효율성과 자원 활용도를 최적화하는 지능형 제조 계획 및 스케줄링 솔루션을 제공합니다.",
      apsFeature1: "✓ 실시간 생산 스케줄링 최적화",
      apsFeature2: "✓ 자원 용량 계획 및 할당",
      apsFeature3: "✓ 제약 기반 계획 엔진",
      apsFeature4: "✓ What-if 시나리오 분석",
      learnMore: "자세히 보기 →",
      dpTitle: "데이터 플랫폼 (DP)",
      dpDesc: "제조 인텔리전스를 위한 통합 데이터 플랫폼으로 더 나은 의사결정을 위한 실시간 인사이트와 분석을 제공합니다.",
      dpFeature1: "✓ 실시간 데이터 수집 및 처리",
      dpFeature2: "✓ 고급 분석 및 시각화",
      dpFeature3: "✓ 머신러닝 모델 통합",
      dpFeature4: "✓ 예측 유지보수 기능",
      advantages: "경쟁 우위",
      adv1Number: "20+",
      adv1Title: "년의 경험",
      adv1Desc: "제조 최적화 분야의 글로벌 경험을 활용한 전문가 팀 지원",
      adv2Number: "☁️",
      adv2Title: "클라우드 기반 SCM",
      adv2Desc: "클라우드 네이티브 아키텍처로 구현 시간 단축",
      adv3Number: "✓",
      adv3Title: "검증된 엔진",
      adv3Desc: "주요 하이테크 기업이 채택한 시뮬레이션 기반 계획 엔진",
      adv4Number: "🧠",
      adv4Title: "ML 최적화",
      adv4Desc: "지속적인 개선 및 파라미터 튜닝을 위한 머신러닝 기술",
      ctaTitle: "제조 운영의 혁신을 시작할 준비가 되셨나요?",
      ctaDesc: "지금 MOZART Cloud를 시작하고 생산 계획의 미래를 경험하세요.",
      contactUs: "문의하기",
      footerDesc: "제조 우수성을 위한 클라우드 기반 SCP 솔루션",
      products: "제품",
      contact: "연락처",
      address: "경기도 용인시",
      allRights: "모든 권리 보유."
    },
    en: {
      title: "MOZART",
      subtitle1: "Cloud-Based SCP Solution",
      subtitle2: "Enabling Digital Transformation of Manufacturing Operations",
      subtitle3: "with Enhanced User Experience",
      getStarted: "Get Started",
      requestDemo: "Request Demo",
      coreServices: "Core Services",
      service1Title: "Manufacturing Production Planning Optimization",
      service1Desc: "Scenario-based optimal plan application with optimized decision support, validated planning engine, and standardization-based scalability.",
      service2Title: "Integrated User Environment Support",
      service2Desc: "Comprehensive coverage from preparation through comparative analysis, including continuous system improvement throughout operational execution.",
      service3Title: "AI-Based Decision Making",
      service3Desc: "Parameter tuning optimization for various planning options with verified technology framework for regular execution and updates.",
      apsTitle: "Advanced Planning & Scheduling (APS)",
      apsDesc: "MOZART APS provides intelligent manufacturing planning and scheduling solutions that optimize production efficiency and resource utilization.",
      apsFeature1: "✓ Real-time production scheduling optimization",
      apsFeature2: "✓ Resource capacity planning and allocation",
      apsFeature3: "✓ Constraint-based planning engine",
      apsFeature4: "✓ What-if scenario analysis",
      learnMore: "Learn More →",
      dpTitle: "Data Platform (DP)",
      dpDesc: "Unified data platform for manufacturing intelligence, providing real-time insights and analytics for better decision making.",
      dpFeature1: "✓ Real-time data collection and processing",
      dpFeature2: "✓ Advanced analytics and visualization",
      dpFeature3: "✓ Machine learning model integration",
      dpFeature4: "✓ Predictive maintenance capabilities",
      advantages: "Competitive Advantages",
      adv1Number: "20+",
      adv1Title: "Years of Experience",
      adv1Desc: "Expert team support leveraging global experience in manufacturing optimization",
      adv2Number: "☁️",
      adv2Title: "Cloud-Based SCM",
      adv2Desc: "Reduced implementation time with cloud-native architecture",
      adv3Number: "✓",
      adv3Title: "Validated Engine",
      adv3Desc: "Simulation-based planning engine adopted by leading high-tech firms",
      adv4Number: "🧠",
      adv4Title: "ML Optimization",
      adv4Desc: "Machine learning technology for continuous improvement and parameter tuning",
      ctaTitle: "Ready to Transform Your Manufacturing Operations?",
      ctaDesc: "Get started with MOZART Cloud today and experience the future of production planning.",
      contactUs: "Contact Us",
      footerDesc: "Cloud-based SCP solution for manufacturing excellence",
      products: "Products",
      contact: "Contact",
      address: "Yongin-si, Gyeonggi Province, South Korea",
      allRights: "All rights reserved."
    },
    'zh-Hans': {
      title: "MOZART",
      subtitle1: "基于云的SCP解决方案",
      subtitle2: "通过增强的用户体验",
      subtitle3: "实现制造运营的数字化转型",
      getStarted: "开始使用",
      requestDemo: "申请演示",
      coreServices: "核心服务",
      service1Title: "制造生产计划优化",
      service1Desc: "基于场景的最优计划应用，优化决策支持，经过验证的计划引擎和基于标准化的可扩展性。",
      service2Title: "集成用户环境支持",
      service2Desc: "从准备到比较分析的全面覆盖，包括整个运营执行过程中的持续系统改进。",
      service3Title: "基于AI的决策",
      service3Desc: "针对各种计划选项的参数调优优化，具有定期执行和更新的验证技术框架。",
      apsTitle: "高级计划与排程 (APS)",
      apsDesc: "MOZART APS提供智能制造计划和排程解决方案，优化生产效率和资源利用率。",
      apsFeature1: "✓ 实时生产排程优化",
      apsFeature2: "✓ 资源容量计划和分配",
      apsFeature3: "✓ 基于约束的计划引擎",
      apsFeature4: "✓ What-if场景分析",
      learnMore: "了解更多 →",
      dpTitle: "数据平台 (DP)",
      dpDesc: "用于制造智能的统一数据平台，为更好的决策提供实时洞察和分析。",
      dpFeature1: "✓ 实时数据收集和处理",
      dpFeature2: "✓ 高级分析和可视化",
      dpFeature3: "✓ 机器学习模型集成",
      dpFeature4: "✓ 预测性维护能力",
      advantages: "竞争优势",
      adv1Number: "20+",
      adv1Title: "年经验",
      adv1Desc: "利用制造优化领域的全球经验提供专家团队支持",
      adv2Number: "☁️",
      adv2Title: "基于云的SCM",
      adv2Desc: "通过云原生架构缩短实施时间",
      adv3Number: "✓",
      adv3Title: "经过验证的引擎",
      adv3Desc: "领先高科技公司采用的基于仿真的计划引擎",
      adv4Number: "🧠",
      adv4Title: "ML优化",
      adv4Desc: "用于持续改进和参数调优的机器学习技术",
      ctaTitle: "准备好转型您的制造运营了吗？",
      ctaDesc: "立即开始使用MOZART Cloud，体验生产计划的未来。",
      contactUs: "联系我们",
      footerDesc: "用于制造卓越的基于云的SCP解决方案",
      products: "产品",
      contact: "联系方式",
      address: "韩国京畿道龙仁市",
      allRights: "保留所有权利。"
    }
  };

  const t = content[locale] || content.en;

  return (
    <Layout description="Cloud-based SCP solution enabling digital transformation of manufacturing operations">
      <header className={styles.masthead}>
        <div className={styles.content}>
          <h1>{t.title}</h1>
          <h2>{t.subtitle1}</h2>
          <p className={styles.subtitle}>
            {t.subtitle2}
            <br />
            {t.subtitle3}
          </p>
          <div className={styles.btnGroup}>
            <Link className={styles.btn} to={useBaseUrl("docs/aps")}>
              {t.getStarted}
            </Link>
            <Link
              className={`${styles.btn} ${styles.btnSecondary}`}
              to="mailto:support@vms-solutions.com"
            >
              {t.requestDemo}
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.coreServices}</h2>
          <div className={styles.featuresGrid}>
            <FeatureCard
              icon="📊"
              title={t.service1Title}
              description={t.service1Desc}
            />
            <FeatureCard
              icon="🎯"
              title={t.service2Title}
              description={t.service2Desc}
            />
            <FeatureCard
              icon="🤖"
              title={t.service3Title}
              description={t.service3Desc}
            />
          </div>
        </div>
      </section>

      <section className={styles.platformSection}>
        <div className={styles.container}>
          <div className={styles.platformContent}>
            <div className={styles.platformText}>
              <h2>{t.apsTitle}</h2>
              <p>{t.apsDesc}</p>
              <ul className={styles.featureList}>
                <li>{t.apsFeature1}</li>
                <li>{t.apsFeature2}</li>
                <li>{t.apsFeature3}</li>
                <li>{t.apsFeature4}</li>
              </ul>
              <Link className={styles.learnMore} to={useBaseUrl("docs/aps")}>
                {t.learnMore}
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
              <h2>{t.dpTitle}</h2>
              <p>{t.dpDesc}</p>
              <ul className={styles.featureList}>
                <li>{t.dpFeature1}</li>
                <li>{t.dpFeature2}</li>
                <li>{t.dpFeature3}</li>
                <li>{t.dpFeature4}</li>
              </ul>
              <Link className={styles.learnMore} to={useBaseUrl("docs/dp")}>
                {t.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.advantagesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.advantages}</h2>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <div className={styles.advantageNumber}>{t.adv1Number}</div>
              <h3>{t.adv1Title}</h3>
              <p>{t.adv1Desc}</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advantageNumber}>{t.adv2Number}</div>
              <h3>{t.adv2Title}</h3>
              <p>{t.adv2Desc}</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advantageNumber}>{t.adv3Number}</div>
              <h3>{t.adv3Title}</h3>
              <p>{t.adv3Desc}</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advantageNumber}>{t.adv4Number}</div>
              <h3>{t.adv4Title}</h3>
              <p>{t.adv4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaDesc}</p>
          <div className={styles.btnGroup}>
            <Link className={styles.btn} to={useBaseUrl("docs/aps")}>
              {t.getStarted}
            </Link>
            <Link
              className={`${styles.btn} ${styles.btnSecondary}`}
              to="mailto:support@vms-solutions.com"
            >
              {t.contactUs}
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>MOZART</h3>
              <p>{t.footerDesc}</p>
            </div>
            <div className={styles.footerSection}>
              <h4>{t.products}</h4>
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
              <h4>{t.contact}</h4>
              <p>
                {t.address}
                <br />
                16827
              </p>
              <p>Email: support@vms-solutions.com</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>
              &copy; {new Date().getFullYear()} VMS Solutions. {t.allRights}
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
