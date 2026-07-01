import type { Metadata } from 'next';
import Link from 'next/link';
import { portfolioItems, processSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Rose Vale Studio — Nature-Inspired Murals & Fine Art · Edmonton',
  description:
    'Rose Vale Studio creates warm, story-rich murals and fine art for Edmonton businesses, cafés, homes, and community spaces.',
};

// Placeholder image block
function PlaceholderImage({ color, className, label }: { color: string; className?: string; label?: string }) {
  return (
    <div
      className={`relative flex items-end justify-start p-4 ${className}`}
      style={{ backgroundColor: color }}
    >
      {/* TODO: Replace with <Image> from next/image pointing to your actual photo */}
      {label && <span className="label text-white/60">{label}</span>}
    </div>
  );
}

// Botanical divider SVG
function BotanicalDivider() {
  return (
    <div className="flex items-center justify-center py-8 overflow-hidden">
      <svg width="480" height="24" viewBox="0 0 480 24" fill="none" className="opacity-25 text-umber">
        <line x1="0" y1="12" x2="195" y2="12" stroke="currentColor" strokeWidth="0.75" />
        <ellipse cx="208" cy="8" rx="8" ry="4" transform="rotate(-20 208 8)" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <ellipse cx="224" cy="16" rx="7" ry="3.5" transform="rotate(15 224 16)" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <circle cx="240" cy="12" r="2" fill="currentColor" />
        <ellipse cx="256" cy="8" rx="7" ry="3.5" transform="rotate(-15 256 8)" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <ellipse cx="272" cy="16" rx="8" ry="4" transform="rotate(20 272 16)" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <line x1="285" y1="12" x2="480" y2="12" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    </div>
  );
}

export default function Home() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-28 bg-brown-deep overflow-hidden">
        {/* TODO: Replace the gradient with a full-bleed hero image using next/image with objectFit cover */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #2C2420 0%, #5C4A42 40%, #8C7A72 70%, #C9A99A 100%)',
          opacity: 0.9,
        }} />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />

        <div className="relative container-max w-full">
          <div className="max-w-3xl">
            <p className="label text-ivory/50 mb-6">Rose Vale Studio · Edmonton, Alberta</p>
            <h1 className="font-serif text-display text-ivory mb-6 leading-[1.05]">
              Nature-inspired murals and fine art for meaningful spaces.
            </h1>
            <p className="text-lg text-ivory/70 font-light leading-relaxed max-w-xl mb-10">
              Rose Vale Studio creates warm, elevated, story-rich artwork for cafés, businesses, homes, and community spaces in Edmonton and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Start a Project</Link>
              <Link href="/portfolio" className="btn-outline-light">View Portfolio</Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-10 md:right-16 flex flex-col items-center gap-2 text-ivory/30">
          <span className="label text-ivory/30 text-xs" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-px h-12 bg-ivory/20" />
        </div>
      </section>

      {/* ── INTRO STATEMENT ── */}
      <section className="section-pad bg-ivory">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="label text-umber mb-4">The Studio</p>
              <h2 className="font-serif text-display-sm text-brown-deep mb-6">
                Art that gives a space its soul.
              </h2>
              <p className="text-brown-mid font-light leading-relaxed text-lg mb-6">
                Every wall has potential. Every room tells a story — or it doesn't. Rose Vale Studio works with businesses and private clients to create original artwork that makes a space feel like itself.
              </p>
              <p className="text-brown-mid font-light leading-relaxed">
                From a single fine art commission to a full commercial mural program, the process is collaborative, considered, and built around your vision.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* TODO: Replace with real images */}
              <PlaceholderImage color="#D4C5B8" className="aspect-[3/4]" label="Mural detail" />
              <PlaceholderImage color="#B8C9B0" className="aspect-[3/4] mt-8" label="Fine art" />
            </div>
          </div>
        </div>
      </section>

      <BotanicalDivider />

      {/* ── FEATURED PORTFOLIO ── */}
      <section className="section-pad bg-ivory">
        <div className="container-max">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="label text-umber mb-3">Selected Work</p>
              <h2 className="font-serif text-display-sm text-brown-deep">Recent projects</h2>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex btn-outline text-xs py-2.5 px-6">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {featured.map((item, i) => (
              <Link
                key={item.id}
                href={`/portfolio`}
                className={`group relative overflow-hidden ${
                  i === 0 ? 'md:col-span-7 aspect-[4/3]' :
                  i === 1 ? 'md:col-span-5 aspect-[3/4]' :
                  'md:col-span-12 aspect-[21/9]'
                }`}
              >
                <PlaceholderImage
                  color={item.coverColor}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-brown-deep/0 group-hover:bg-brown-deep/50 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="label text-ivory/70 mb-1">{item.category}</p>
                    <p className="font-serif text-xl text-ivory">{item.title}</p>
                    <p className="text-sm text-ivory/70">{item.client} · {item.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/portfolio" className="btn-outline w-full text-center">View All Work</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad bg-taupe">
        <div className="container-max">
          <div className="max-w-xl mb-14">
            <p className="label text-umber mb-3">What We Offer</p>
            <h2 className="font-serif text-display-sm text-brown-deep">Every project, handled with care.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Custom Murals',
                body: 'Original hand-painted murals for commercial and residential spaces. Designed around your brand, your space, and your story.',
                href: '/services#murals',
              },
              {
                title: 'Fine Art Commissions',
                body: 'Original paintings on canvas or linen — florals, landscapes, botanicals — made to your brief and to last a lifetime.',
                href: '/services#fine-art',
              },
              {
                title: 'Art Consulting',
                body: 'Not sure what you need? Rose Vale Studio helps you develop an art direction for your space, from concept to installation.',
                href: '/services#consulting',
              },
            ].map(svc => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group bg-ivory p-8 hover:bg-brown-deep transition-colors duration-400"
              >
                <h3 className="font-serif text-xl text-brown-deep group-hover:text-ivory mb-4 transition-colors">{svc.title}</h3>
                <p className="text-sm text-brown-mid group-hover:text-ivory/70 font-light leading-relaxed mb-6 transition-colors">{svc.body}</p>
                <span className="label text-umber group-hover:text-ivory/50 transition-colors">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ROSE VALE ── */}
      <section className="section-pad bg-ivory">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <PlaceholderImage color="#D9C99A" className="aspect-[4/5]" label="Artist at work" />
              {/* TODO: Replace with photo of Kaitlyn painting */}
            </div>
            <div>
              <p className="label text-umber mb-4">Why Rose Vale Studio</p>
              <h2 className="font-serif text-display-sm text-brown-deep mb-10">
                Thoughtful from first conversation to final brushstroke.
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Tailored design', body: 'No templates. Every concept is developed specifically for your space, your brand, and the feeling you want to create.' },
                  { title: 'Professional process', body: 'Clear timelines, written contracts, and proactive communication — so working with an artist feels easy.' },
                  { title: 'Original artwork', body: 'All work is hand-painted and original. You\'re investing in something that will never exist anywhere else.' },
                  { title: 'Atmosphere-driven', body: 'The goal is never just a pretty wall. It\'s a space that feels complete — and makes people want to stay.' },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-5">
                    <div className="mt-1 w-1 shrink-0 h-12 bg-rose-dust" />
                    <div>
                      <p className="font-serif text-lg text-brown-deep mb-1">{title}</p>
                      <p className="text-sm text-brown-mid font-light leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BotanicalDivider />

      {/* ── PROCESS PREVIEW ── */}
      <section className="section-pad bg-ivory">
        <div className="container-max">
          <div className="max-w-xl mb-14">
            <p className="label text-umber mb-3">How It Works</p>
            <h2 className="font-serif text-display-sm text-brown-deep">A clear path from idea to reveal.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {processSteps.map(step => (
              <div key={step.number} className="flex gap-5">
                <span className="font-serif text-4xl text-rose-dust/50 leading-none mt-0.5 shrink-0">{step.number}</span>
                <div>
                  <p className="font-serif text-lg text-brown-deep mb-2">{step.title}</p>
                  <p className="text-sm text-brown-mid font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/process" className="btn-outline">See the Full Process</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL PLACEHOLDER ── */}
      <section className="section-pad bg-brown-deep">
        <div className="container-max text-center max-w-3xl">
          <p className="font-serif text-3xl md:text-4xl text-ivory leading-relaxed mb-8 italic">
            {/* TODO: Replace with a real client testimonial */}
            &ldquo;The mural completely transformed the feel of our space. Clients notice it immediately — and it tells our story better than anything else we've tried.&rdquo;
          </p>
          <p className="label text-ivory/40">— Client Name, Business Name · Edmonton, AB</p>
          <p className="text-xs text-ivory/25 mt-2">(Placeholder — replace with a real testimonial)</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-pad bg-taupe">
        <div className="container-max text-center max-w-2xl">
          <p className="label text-umber mb-4">Ready to Begin?</p>
          <h2 className="font-serif text-display-sm text-brown-deep mb-6">
            Let's make your space unforgettable.
          </h2>
          <p className="text-brown-mid font-light leading-relaxed mb-10">
            Whether you have a clear vision or just a feeling, reach out. Every great mural starts with a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/portfolio" className="btn-outline">View Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
