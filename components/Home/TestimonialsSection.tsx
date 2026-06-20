import { ArrowUpRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  // Row 1 Testimonials
  {
    quote: "Thayalan.ai transformed our web presence. The Next.js integration is blazing fast, and our core web vitals have never looked better.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "VeloFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    quote: "The level of customization and responsiveness of the Tailwind components they built for us is unmatched. Highly recommended.",
    author: "Alex Rivera",
    role: "Lead Developer",
    company: "ApexLabs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    quote: "An absolute game-changer for our SaaS startup. We migrated our entire application stack over to Next.js and Vercel with their guidance, resulting in a 40% drop in page load times. The TypeScript architecture they set up is incredibly clean and scalable.",
    author: "David Chen",
    role: "Founder & CEO",
    company: "Synthetix",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  
  // Row 2 Testimonials
  {
    quote: "Clean, robust code and exceptional communication throughout. They helped us implement complex reactive states without sacrificing any performance.",
    author: "Emily Watson",
    role: "Product Manager",
    company: "NoveLink",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  },
  {
    quote: "Incredibly clean TypeScript code. It's rare to find a team that cares so deeply about both performance, design, and developer experience.",
    author: "Marcus Vance",
    role: "VP of Engineering",
    company: "CloudScale",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  },
  {
    quote: "Our conversion rate went up by 25% within weeks of launching the new design. The attention to subtle micro-interactions and animations is superb.",
    author: "Sophia Martinez",
    role: "Head of Growth",
    company: "ZetaPay",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
  }
];

// Split testimonials into two rows for alternate directions
const row1 = [testimonials[0], testimonials[1], testimonials[2]];
const row2 = [testimonials[3], testimonials[4], testimonials[5]];

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      {/* Inline styles for handling the seamless marquee translations and pausing on hover */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: scroll-left 50s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: scroll-right 50s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header and Subheading (Unchanged) */}
      <div className="text-center mx-auto mb-16 px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {/* Changed to Solid White Heading */}
        <h2 className="text-4xl md:text-6xl tracking-tight mb-6 text-white">
          Trusted by innovators worldwide
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-3xl ">
          See how we help fast-growing startups and enterprises leverage modern frameworks to deliver robust, lightning-fast digital solutions.
        </p>
        
        {/* Book a Call Button */}
          <a
            href="#get-started"
            className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors duration-200"
          >
            <span>Book a 15-Min Call</span>
            <span className="flex items-center justify-center p-2 bg-zinc-950 text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
            </span>
          </a>
      </div>

      {/* Infinite Scrolling Rows Container */}
      <div className="marquee-container flex flex-col gap-8 w-full">
        
        {/* Row 1: Leftward Infinite Scroll */}
        <div className="relative w-full overflow-hidden flex">
          {/* Fades for left and right edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee-left gap-6">
            {/* Duplicating array to enable seamless looping */}
            {[...row1, ...row1].map((item, idx) => (
              <div key={`row1-${idx}`} className="w-[380px] sm:w-[440px] shrink-0 px-1">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Scroll */}
        <div className="relative w-full overflow-hidden flex">
          {/* Fades for left and right edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee-right gap-6">
            {/* Duplicating array to enable seamless looping */}
            {[...row2, ...row2].map((item, idx) => (
              <div key={`row2-${idx}`} className="w-[380px] sm:w-[440px] shrink-0 px-1">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative h-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800/90 rounded-[2rem] p-6 md:p-8 hover:border-cyan-500/30 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between whitespace-normal">
      
      {/* Subtle Cyan Top Glow (Active on Hover) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/40 transition-all duration-500 rounded-t-[2rem]" />
      
      {/* Quote */}
      <p className="text-zinc-300 text-base md:text-[15px] leading-relaxed mb-6 font-normal">
        “{testimonial.quote}”
      </p>

      {/* Author Details */}
      <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-10 h-10 rounded-full object-cover filter transition-all duration-300 border border-zinc-800"
        />
        <div>
          <h4 className="text-white text-sm font-semibold">{testimonial.author}</h4>
          <p className="text-zinc-500 text-xs">
            {testimonial.role} at <span className="text-zinc-400 font-medium">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}