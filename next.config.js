'use client';
import { useState } from 'react';
import Link from 'next/link';
import { portfolioItems, type PortfolioCategory } from '@/lib/data';

const categories: ('All' | PortfolioCategory)[] = [
  'All', 'Commercial Murals', 'Cafés & Hospitality', 'Fine Art', 'Community Spaces', 'Concepts',
];

function PlaceholderImage({ color, className }: { color: string; className?: string }) {
  return (
    <div className={`w-full h-full ${className}`} style={{ backgroundColor: color }}>
      {/* TODO: Replace with <Image> from next/image */}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<'All' | PortfolioCategory>('All');

  const filtered = active === 'All'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container-max">
          <p className="label text-umber mb-4">Selected Work</p>
          <h1 className="font-serif text-display-sm text-brown-deep max-w-xl">
            Murals, paintings, and concepts.
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-40 bg-ivory/95 backdrop-blur-sm border-b border-taupe">
        <div className="container-max">
          <div className="flex gap-1 overflow-x-auto pb-0 -mb-px">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-4 label transition-colors border-b-2 ${
                  active === cat
                    ? 'border-brown-deep text-brown-deep'
                    : 'border-transparent text-umber hover:text-brown-mid'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-ivory">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden cursor-pointer ${
                  item.span === 'wide' ? 'md:col-span-8 aspect-[4/3]' :
                  item.span === 'tall' ? 'md:col-span-4 aspect-[3/4]' :
                  i % 5 === 0 ? 'md:col-span-7 aspect-[4/3]' :
                  i % 5 === 1 ? 'md:col-span-5 aspect-[4/3]' :
                  'md:col-span-4 aspect-square'
                }`}
              >
                <PlaceholderImage color={item.coverColor} className="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brown-deep/0 group-hover:bg-brown-deep/60 transition-all duration-400 flex flex-col justify-end p-6">
                  <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="label text-ivory/60 mb-1">{item.category}</p>
                    <p className="font-serif text-xl text-ivory mb-0.5">{item.title}</p>
                    <p className="text-sm text-ivory/70">{item.client} · {item.year}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.highlights.map(h => (
                        <span key={h} className="text-xs bg-ivory/10 text-ivory/70 px-2 py-0.5 rounded-sm">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-brown-mid mb-4">No projects in this category yet.</p>
              <p className="text-brown-light text-sm">Check back soon, or view all work.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-taupe">
        <div className="container-max text-center">
          <h2 className="font-serif text-3xl text-brown-deep mb-4">Ready to add your space to this list?</h2>
          <p className="text-brown-mid font-light mb-8">Every project starts with a conversation.</p>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </>
  );
}
