/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://digitalacubens.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/services'),
    await config.transform(config, '/portfolio'),
    await config.transform(config, '/packages'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/faq'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://digitalacubens.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    const customFields = [
      {
        loc: path,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: path === '/' ? 1.0 : 0.8,
      },
    ]

    return customFields
  },
}
