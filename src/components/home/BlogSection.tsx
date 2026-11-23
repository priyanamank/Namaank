import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import SectionHeading from "./SectionHeading";

// Prefer articles about our services (names, baby names, numerology); fill the rest with latest posts.
const PREFERRED = ["Name Correction", "Baby Names", "Numerology"];

const BlogSection = () => {
  const byDate = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const preferred = byDate.filter((p) => PREFERRED.includes(p.category));
  const rest = byDate.filter((p) => !PREFERRED.includes(p.category));
  const latest = [...preferred, ...rest].slice(0, 3);

  return (
    <section id="blog" className="pb-12 scroll-mt-24" aria-labelledby="blog-heading">
      <div className="section-container">
        <SectionHeading title="From Our Blog" subtitle="Simple, practical reading on names, numbers and numerology." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="relative h-44 overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">{post.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-accent text-primary text-sm font-semibold hover:bg-accent/10 transition-colors">
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
