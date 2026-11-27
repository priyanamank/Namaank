// Generates public/sitemap.xml and public/robots.txt before every build.
// Domain comes from VITE_SITE_URL (default https://namaank.in).
// Never fails the build: on any problem it just keeps the existing files.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

try {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const site = (process.env.VITE_SITE_URL || "https://namaank.in").replace(/\/$/, "");
  const today = new Date().toISOString().slice(0, 10);

  const pages = [
    ["/", "weekly", "1.0"],
    ["/services", "monthly", "0.9"],
    ["/services/name-correction", "monthly", "0.9"],
    ["/services/baby-name", "monthly", "0.9"],
    ["/services/csection-dates", "monthly", "0.8"],
    ["/about", "monthly", "0.6"],
    ["/blog", "weekly", "0.7"],
    ["/contact", "yearly", "0.5"],
    ["/privacy", "yearly", "0.2"],
    ["/terms", "yearly", "0.2"],
    ["/refund", "yearly", "0.2"],
    ["/disclaimer", "yearly", "0.2"],
  ];

  const urls = pages.map(([p, f, pr]) => ({ loc: site + p, lastmod: today, f, pr }));

  // Blog posts: read id + date from src/data/blogPosts.ts
  const src = readFileSync(join(root, "src/data/blogPosts.ts"), "utf8");
  const re = /id:\s*"([a-z0-9-]+)"[\s\S]*?date:\s*"(\d{4}-\d{2}-\d{2})"/g;
  let m;
  while ((m = re.exec(src))) urls.push({ loc: `${site}/blog/${m[1]}`, lastmod: m[2], f: "monthly", pr: "0.6" });

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.f}</changefreq><priority>${u.pr}</priority></url>`).join("\n") +
    `\n</urlset>\n`;
  writeFileSync(join(root, "public/sitemap.xml"), xml);

  const robots =
    `User-agent: *\nAllow: /\n` +
    ["/admin", "/api/", "/payment", "/thank-you", "/dashboard", "/auth", "/reset-password"].map((p) => `Disallow: ${p}`).join("\n") +
    `\n\nSitemap: ${site}/sitemap.xml\n`;
  writeFileSync(join(root, "public/robots.txt"), robots);

  console.log(`[seo] sitemap.xml (${urls.length} urls) + robots.txt written for ${site}`);
} catch (e) {
  console.warn("[seo] sitemap generation skipped:", e?.message || e);
}
