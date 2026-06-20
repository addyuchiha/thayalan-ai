import { ArrowUpRight, Layers } from "lucide-react";
import { LuSparkles } from "react-icons/lu";
import { RiHandHeartFill } from "react-icons/ri";

interface EngagementModel {
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  ctaLink: string;
  bgImage: string;
}

const models: EngagementModel[] = [
  {
    title: "Fixed-Scope Projects",
    badge: "Milestone-Driven",
    description:
      "Launch an MVP, execute a complete design-to-code migration, or build a custom standalone marketing engine with clear parameters.",
    deliverables: [
      "Frontend UI engineering",
      "TypeScript API endpoints",
      "Deployment pipeline setup",
      "30-day post-launch support",
    ],
    ctaText: "Inquire About Projects",
    ctaLink: "#contact",
    bgImage: "/images/abstract/engagement1.png",
  },
  {
    title: "Dedicated Partner",
    badge: "Fractional Retainer",
    description:
      "Integrate specialized Next.js & React expertise into your workflow. Agile sprints to ship features and resolve technical debt continuously.",
    deliverables: [
      "Weekly sprint planning",
      "Slack & GitHub integration",
      "Performance optimization",
      "Priority bug-fixing",
    ],
    ctaText: "Secure Support",
    ctaLink: "#contact",
    bgImage: "/images/abstract/engagement1.png",
  },
  {
    title: "Technical Consult",
    badge: "Targeted Audit",
    description:
      "A deep architectural and performance diagnostic. We audit code, locate rendering bottlenecks, and construct a migration blueprint.",
    deliverables: [
      "Core Web Vitals report",
      "Bundle size analysis",
      "Next.js migration blueprint",
      "2-hour interactive handoff",
    ],
    ctaText: "Book Technical Audit",
    ctaLink: "#contact",
    bgImage: "/images/abstract/engagement1.png",
  },
];

export default function WaysToEngage() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Subheading matching Testimonials layout */}
        <div className="text-center mx-auto mb-16 px-4 sm:px-6 md:px-8 flex flex-col items-center">
          <div className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black border border-neutral-200 shadow-sm hover:bg-neutral-50 text-xs font-bold tracking-wider uppercase mb-6 transition-all duration-300 hover:scale-105 cursor-pointer select-none">
            <RiHandHeartFill className="w-3.5 h-3.5 text-black group-hover:rotate-12 transition-transform duration-300" />
            <span>Ways to Partner</span>
          </div>

          <h2 className="text-4xl md:text-6xl tracking-tight mb-6 text-white font-normal">
            How we work together
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-3xl">
            Choose the collaboration model that best fits your immediate team
            bandwidth, technical scope, and product timeline.
          </p>
        </div>

        {/* Simplified Engagement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative rounded-[2.25rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden bg-cover bg-center transition-all duration-300 min-h-[520px] bg-zinc-900"
              // style={{ backgroundImage: `url(${model.bgImage})` }}
            >
              <div>
                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-8">
                  {model.description}
                </p>

                {/* Included Checklist */}
                <div className="mb-8">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-4">
                    What's Included:
                  </p>
                  <ul className="space-y-3">
                    {model.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-center gap-2.5 text-sm text-zinc-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Simplified CTA Button matching requested style */}
              <div className="pt-4">
                <a
                  href={model.ctaLink}
                  className="group/btn inline-flex items-center justify-between pl-6 pr-2 py-2 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors duration-200 w-full"
                >
                  <span className="text-sm">{model.ctaText}</span>
                  <span className="flex items-center justify-center p-2 bg-zinc-950 text-white rounded-full transition-transform duration-300 group-hover/btn:rotate-45">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
