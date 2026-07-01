import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services — Murals, Fine Art & Art Consulting',
  description: 'Custom murals, fine art commissions, commercial artwork, and art consulting for businesses and private clients in Edmonton, AB.',
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory border-b border-taupe">
        <div className="container-max">
          <p className="label text-umber mb-4">What We Do</p>
          <h1 className="font-serif text-display-sm text-brown-deep max-w-2xl mb-6">
            Every service, built around your vision.
          </h1>
          <p className="text-brown-mid font-light text-lg max-w-xl leading-relaxed">
            Rose Vale Studio offers a range of services for businesses, private clients, and commercial developers — each managed with the same professional care and artistic attention.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-ivory">
        <div className="container-max space-y-0">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-start py-16 md:py-20 ${
                i < services.length - 1 ? 'border-b border-taupe' : ''
              }`}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <p className="label text-umber mb-3">0{i + 1}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-brown-deep mb-4">{svc.title}</h2>
                <p className="text-sm text-rose-dust font-light mb-6 italic">For: {svc.for}</p>
                <p className="text-brown-mid font-light leading-relaxed mb-8">{svc.description}</p>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="label text-umber">Investment</span>
                  <span className="font-serif text-xl text-brown-deep">{svc.starting}</span>
                </div>
                <Link href="/contact" className="btn-primary">Inquire About This Service</Link>
              </div>

              {/* Includes */}
              <div className={`bg-taupe p-8 md:p-10 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="label text-umber mb-6">What's Included</p>
                <ul className="space-y-4">
                  {svc.includes.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="shrink-0 mt-1 text-rose-dust" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-brown-mid font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Nudge */}
      <section className="py-16 bg-taupe">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { q: 'How far in advance should I book?', a: 'For commercial murals, 4–8 weeks lead time is ideal. Fine art commissions can often be accommodated in 2–4 weeks depending on scope.' },
              { q: 'Do you work outside Edmonton?', a: 'Yes — travel to Calgary, Canmore, Red Deer, and other Alberta locations is available. Travel costs are discussed as part of the project quote.' },
              { q: 'Can I see the design before painting begins?', a: 'Always. A full design proposal with mockups is included for every mural project, with revisions before any paint hits the wall.' },
            ].map(({ q, a }) => (
              <div key={q}>
                <p className="font-serif text-lg text-brown-deep mb-2">{q}</p>
                <p className="text-sm text-brown-mid font-light leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brown-deep text-center">
        <div className="container-max max-w-xl">
          <h2 className="font-serif text-3xl text-ivory mb-4">Not sure which service fits?</h2>
          <p className="text-ivory/60 font-light mb-8">Reach out with a brief description of your project. We'll figure it out together.</p>
          <Link href="/contact" className="btn-outline-light">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
