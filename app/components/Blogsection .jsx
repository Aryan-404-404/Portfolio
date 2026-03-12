"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Clock, ArrowUpRight } from "lucide-react";

const DEV_TO_USERNAME = "aryan404404";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

function BlogCard({ article, index }) {
  const coverImage = article.cover_image || article.social_image;
  const date = new Date(article.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-violet-500/50 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] transition-all duration-300 no-underline"
    >
      {/* Cover Image */}
      <div className="relative w-full h-48 overflow-hidden bg-linear-to-br from-violet-950 to-zinc-900 shrink-0">
        {coverImage ? (
          <img
            src={coverImage}
            alt={article.title}
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-20">✍️</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        {article.tag_list?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {article.tag_list.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold tracking-wide text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-base font-bold text-white/90 group-hover:text-white leading-snug mb-2 transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/40 leading-relaxed line-clamp-2 mb-4 flex-1">
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3.5 border-t border-white/10">
          <div className="flex items-center gap-3 text-xs text-white/30">
            <span>{date}</span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {article.reading_time_minutes}m
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/30">
            <span className="flex items-center gap-1">
              <Heart size={11} className="text-rose-400/60" />
              {article.positive_reactions_count}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={11} className="text-sky-400/60" />
              {article.comments_count}
            </span>
          </div>
        </div>
      </div>

      {/* Read more — slides in on hover */}
      <div className="px-5 pb-4 flex items-center gap-1.5 text-violet-400 text-xs font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Read on dev.to <ArrowUpRight size={13} />
      </div>
    </motion.a>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 animate-pulse">
      <div className="w-full h-48 bg-white/5" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-1/3 bg-white/5 rounded-full" />
        <div className="h-4 w-full bg-white/5 rounded" />
        <div className="h-4 w-4/5 bg-white/5 rounded" />
        <div className="h-3 w-2/3 bg-white/5 rounded mt-2" />
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${DEV_TO_USERNAME}&per_page=9`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blogs" className="relative py-24 px-[5%] bg-black overflow-hidden">
      {/* Subtle glow — matches your hero style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-purple-700/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-violet-400 font-mono bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full mb-5">
            // writings
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            My Blog Posts
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto leading-relaxed">
            Thoughts and tutorials I share on{" "}
            <a
              href={`https://dev.to/${DEV_TO_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors duration-200"
            >
              dev.to
            </a>
          </p>
        </motion.div>

        {/* Error state */}
        {error && (
          <div className="text-center py-16 text-white/30">
            <span className="text-4xl block mb-3">📡</span>
            <p className="text-sm">
              Couldn't load articles.{" "}
              <a
                href={`https://dev.to/${DEV_TO_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 underline"
              >
                Visit dev.to
              </a>
            </p>
          </div>
        )}

        {/* Grid */}
        {!error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : articles.map((article, i) => (
                  <BlogCard key={article.id} article={article} index={i} />
                ))}
          </div>
        )}

        {/* CTA */}
        {!loading && !error && articles.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href={`https://dev.to/${DEV_TO_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-semibold hover:bg-violet-500/20 hover:border-violet-500/60 transition-all duration-300"
            >
              View all on dev.to <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}