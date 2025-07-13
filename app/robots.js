export default async function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api','/post-ajira-job', '/'],
      },
    ],
    sitemap: 'https://jobske.com/sitemap.xml',
    host: 'https://jobske.com',
  };
}