import type { Metadata } from 'next';
import Link from 'next/link';
import { processSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'The Process — How Rose Vale Studio Works',
  description: 'From first inquiry to final reveal — a clear, professional process for every mural and fine art commission.',
};

export default function Process() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory border-b border-taupe">
        <div className="container-max grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="label text-umber mb-4">How It Works</p>
            <h1 className="font-serif text-display-sm text-brown-deep mb-6">
              A process that makes hiring an artist easy.
            </h1>
          </div>
          <p className="text-brown-mid font-light leading-relaxed text-lg">
            From your first message to the final brushstroke, every step is guided, communicated, and designed to feel straightforward — even for clients who've never commissioned artwork before.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-pad bg-ivory">
        <div className="container-max">
          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <div key={step.number} className={`grid md:grid-cols-12 gap-8 md:gap-12 items-start py-14 md:py-16 ${i < processSteps.length - 1 ? 'border-b border-taupe' : ''}`}>
                {/* Step number */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <span className="font-serif text-6xl md:text-8xl text-rose-dust/30 leading-none">{step.number}</span>
                </div>
                {/* Content */}
                <div className="md:col-span-5">
                  <h2 className="font-serif text-2xl md:text-3xl text-brown-deep mb-4">{step.title}</h2>
                  <p className="text-brown-mid font-light leading-relaxed">{step.description}</p>
                </div>
                {/* What to expect */}
                <div className="md:col-span-5 bg-taupe p-6">
                  <p className="label text-umber mb-3">What to expect</p>
                  <p className="text-sm text-brown-mid font-light leading-relaxed">
                    {[
                      'A simple inquiry form or email — no pressure, no commitment. Just tell me what you\'re imagining.',
                      'A 20–30 minute call to talk through your space, goals, and any existing design direction you\'re working with.',
                      'A written concept brief outlining style, palette, composition approach, and next steps — for your review before any design work begins.',
                      'Detailed digital mockups showing the artwork in your actual space. Revisions are included until you\'re fully confident.',
                      'Regular progress photos or in-person check-ins during the painting phase. Your space will be left clean and protected throughout.',
                      'A final site visit together to review the completed work. Touch-ups are done on the spot, and professional photos are taken for the project record.',
                    ][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-16 bg-brown-deep">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { title: 'Written contracts', body: 'Every project starts with a clear, written agreement — scope, timeline, payment terms, and what happens if anything changes.' },
              { title: 'No surprises on cost', body: 'Your quote is your price. Any scope changes are discussed and agreed to in writing before work continues.' },
              { title: 'Professional site care', body: 'Drop cloths, clean edges, and a clean exit. Your space is treated with the same care as the artwork itself.' },
            ].map(({ title, body }) => (
              <div key={title} className="p-6">
                <p className="font-serif text-xl text-ivory mb-3">{title}</p>
                <p className="text-sm text-ivory/60 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-taupe text-center">
        <div className="container-max max-w-xl">
          <h2 className="font-serif text-3xl text-brown-deep mb-4">Ready to start step one?</h2>
          <p className="text-brown-mid font-light mb-8">Fill out the inquiry form — it takes about 3 minutes and tells me everything I need to put together a proper quote.</p>
          <Link href="/contact" className="btn-primary">Start Your Inquiry</Link>
        </div>
      </section>
    </>
  );
}
