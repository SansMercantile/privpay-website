import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { staggerContainer, itemVariants } from '@/lib/animations';
import { BUSINESS_CTA, CONSUMER_CTA, OG_IMAGE, PRIV_HUB, SITE_URL } from '@/lib/site';

const seo = {
  title: 'PrivPay — B2B Payment Platform: APIs, White-Label Branding & Apps | Sans Mercantile',
  description:
    'PrivPay is a B2B payment platform — web app, payments APIs, white-label branding, team logins and native apps per platform — plus consumer mobile apps that split one purchase across linked cards with an automatic backup reserve.',
  canonical: `${SITE_URL}/`,
  ogImage: OG_IMAGE,
  schema: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PrivPay',
    applicationCategory: 'FinanceApplication',
    operatingSystem: ['Web', 'iOS', 'Android'],
    url: `${SITE_URL}/`,
    description:
      'B2B payment platform with web app, payments APIs, white-label branding, team logins and native iOS and Android apps; consumer apps split purchases across linked cards with an automatic backup reserve.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
    },
  },
};

interface StackItem {
  title: string;
  description: string;
}

const BUSINESS_STACK: StackItem[] = [
  {
    title: 'Web App',
    description:
      'A browser console for your team — run and monitor every payment, split and linked card from one place, on any machine.',
  },
  {
    title: 'Payments APIs',
    description:
      'Integrate PrivPay into your own checkout with payments APIs and webhooks — split logic and the backup reserve travel with every call.',
  },
  {
    title: 'Branding Options',
    description:
      'White-label PrivPay under your brand: your logo, your colours, your domain. Your customers never leave your name.',
  },
  {
    title: 'Logins',
    description:
      'Team logins for the people who run payments, and sign-in for your customers — access shaped around how your business operates.',
  },
  {
    title: 'Mobile App per Platform',
    description:
      'Native iOS and Android apps for your business team, sharing one account with the web console — ship on every platform you sell through.',
  },
];

const MECHANICS: StackItem[] = [
  {
    title: 'Real-Time Splitting',
    description: 'One purchase, spread across multiple linked cards the moment the payment is made.',
  },
  {
    title: 'Automatic Backup Reserve',
    description:
      'If a card declines mid-transaction, the reserve covers the gap instead of failing the payment.',
  },
  {
    title: 'Built on Priv',
    description: 'The same Priv financial rails that power Priv Core and Priv Philanthropy.',
  },
];

export default function PrivPayPage() {
  return (
    <Layout>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} key="description" />
        <meta
          name="keywords"
          content="PrivPay, Priv Pay, B2B payments South Africa, payment API, white-label payments, payment platform, split payments, merchant payments, fintech API"
          key="keywords"
        />
        <link rel="canonical" href={seo.canonical} />

        <meta property="og:title" content={seo.title} key="og:title" />
        <meta property="og:description" content={seo.description} key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={seo.canonical} key="og:url" />
        <meta property="og:image" content={seo.ogImage} key="og:image" />
        <meta property="og:site_name" content="Sans Mercantile" key="og:site_name" />

        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={seo.title} key="twitter:title" />
        <meta name="twitter:description" content={seo.description} key="twitter:description" />
        <meta name="twitter:image" content={seo.ogImage} key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }}
        />
      </Head>

      {/* Hero */}
      <section className="pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm uppercase tracking-[0.4em] text-nexus-gold mb-4 inline-block">
              Priv Product · Business Payment Platform
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
              Your brand’s payments — from web console to API to app store.
            </h1>
            <p className="text-xl text-nexus-gray-300 max-w-3xl mb-8">
              PrivPay is the B2B payment platform businesses run under their own name: a web app, payments
              APIs, white-label branding, team logins and a native mobile app per platform. Consumers get
              the same rails through the PrivPay mobile apps only.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS_CTA}
                className="px-8 py-3 rounded-xl bg-nexus-gold text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Talk to us about PrivPay
              </a>
              <a
                href={CONSUMER_CTA}
                className="px-8 py-3 rounded-xl border border-nexus-gold text-nexus-gold font-semibold hover:bg-nexus-gold/10 transition-colors"
              >
                Join the consumer waitlist
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two audiences */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-nexus-gold/40 bg-[#0b1125] p-8"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-nexus-gold mb-3 inline-block">
                For Business · B2B
              </span>
              <h2 className="text-2xl font-bold text-white mb-3">Run payments as your own product</h2>
              <p className="text-nexus-gray-300 leading-relaxed">
                The full stack — web app, APIs, branding, logins and mobile apps for your team. Launch
                split payments under your brand, integrated into the systems you already run.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-nexus-gold/20 bg-[#0b1125] p-8"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-nexus-gold mb-3 inline-block">
                For People · B2C
              </span>
              <h2 className="text-2xl font-bold text-white mb-3">The apps, and nothing else</h2>
              <p className="text-nexus-gray-300 leading-relaxed">
                Consumers use PrivPay through the mobile apps only — iOS and Android. Download, link your
                cards, and pay with splitting and the backup reserve built in.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2B stack */}
      <section className="py-16 border-t border-nexus-accent/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-3"
          >
            Built for business first
          </motion.h2>
          <p className="text-nexus-gray-400 mb-10 max-w-3xl">
            Everything a company needs to take payments on its own terms — the parts fit together, and each
            one works on its own.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {BUSINESS_STACK.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="rounded-3xl border border-nexus-gold/20 bg-[#0b1125] p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-nexus-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="rounded-3xl border border-nexus-gold/40 bg-nexus-gold/10 p-8">
              <h3 className="text-xl font-semibold text-nexus-gold mb-3">One account, end to end</h3>
              <p className="text-nexus-gray-300 leading-relaxed">
                Console, API keys and mobile apps share the same business account — invite your team once
                and they are set everywhere.
              </p>
              <a
                href={BUSINESS_CTA}
                className="inline-block mt-4 text-nexus-gold font-semibold hover:text-nexus-accent transition-colors"
              >
                Request a business demo →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform matrix */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-nexus-gold/20 bg-[#0b1125] p-10">
            <h2 className="text-2xl font-bold text-white mb-8">One platform, two audiences</h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="w-40 shrink-0 text-sm uppercase tracking-widest text-nexus-gold">
                  Business (B2B)
                </span>
                <div className="flex flex-wrap gap-3">
                  {['Web App', 'API', 'iOS', 'Android'].map((platform) => (
                    <span
                      key={platform}
                      className="px-4 py-2 rounded-full border border-nexus-gold/40 text-nexus-gold text-sm font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="w-40 shrink-0 text-sm uppercase tracking-widest text-nexus-gray-400">
                  People (B2C)
                </span>
                <div className="flex flex-wrap gap-3">
                  {['iOS', 'Android'].map((platform) => (
                    <span
                      key={platform}
                      className="px-4 py-2 rounded-full border border-nexus-gray-500/50 text-nexus-gray-300 text-sm font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                  <span className="px-4 py-2 rounded-full border border-nexus-gray-500/50 text-nexus-gray-400 text-sm">
                    Mobile apps only — by design
                  </span>
                </div>
              </div>
            </div>
            <p className="text-nexus-gray-400 text-sm mt-8">
              PrivPay is part of the{' '}
              <a href={PRIV_HUB} className="text-nexus-gold hover:text-nexus-accent transition-colors">
                Priv
              </a>{' '}
              system by Sans Mercantile.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-t border-nexus-accent/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-10"
          >
            How PrivPay keeps payments alive
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {MECHANICS.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="rounded-3xl border border-nexus-gold/20 bg-[#0b1125] p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-nexus-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-nexus-accent/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Take PrivPay to your customers</h2>
          <p className="text-nexus-gray-300 mb-8">{seo.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS_CTA}
              className="px-8 py-3 rounded-xl bg-nexus-gold text-black font-semibold hover:opacity-90 transition-opacity"
            >
              Talk to us about PrivPay
            </a>
            <a
              href={CONSUMER_CTA}
              className="px-8 py-3 rounded-xl border border-nexus-gold text-nexus-gold font-semibold hover:bg-nexus-gold/10 transition-colors"
            >
              Join the consumer waitlist
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
