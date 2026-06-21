import React from "react";

interface EcosystemItem {
  name: string;
  imgUrl: string;
  sizeClass: string;
}

// --- Logo Card Component with Native HTML Fallback (Zero JS) ---
const OrbitCard = ({ item }: { item: EcosystemItem }) => {
  // Determine correct mime type based on file extension
  const mimeType = item.imgUrl.endsWith(".png") ? "image/png" : "image/svg+xml";

  return (
    <div className="relative flex items-center justify-center min-w-[130px] min-h-[46px]">
      {/* Blurred background glow layer (now matches the central card offset & style) */}
      <div className="absolute w-full h-full mt-4 ml-4 blur bg-blue-700 rounded-xl opacity-80 pointer-events-none" />

      {/* Solid foreground card content */}
      <div className="relative z-10 bg-neutral-900 rounded-xl px-4 py-2.5 w-full h-full flex items-center justify-center min-w-[130px] min-h-[46px]">
        <object
          data={item.imgUrl}
          type={mimeType}
          className={`${item.sizeClass} object-contain brightness-0 invert opacity-90 flex items-center justify-center`}
          aria-label={item.name}
        >
          {/* Native fallback: renders ONLY if the data URL fails to load */}
          <span className="text-neutral-200 text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
            {item.name}
          </span>
        </object>
      </div>
    </div>
  );
};

export default function Unified3DEcosystem() {
  // Inner Ring (Supporting Tools)
  const innerItems: EcosystemItem[] = [
    {
      name: "zapier",
      imgUrl: "/images/tools/zapier.svg",
      sizeClass: "h-5 w-auto",
    },
    { name: "n8n", imgUrl: "/images/tools/n8n.svg", sizeClass: "h-5 w-auto" },
    {
      name: "quickbooks",
      imgUrl: "/images/tools/quickbooks.svg",
      sizeClass: "h-5 w-auto",
    },
    {
      name: "responsibid",
      imgUrl: "/images/tools/responsibid.svg",
      sizeClass: "h-5 w-auto",
    },
    {
      name: "nicejob",
      imgUrl: "/images/tools/nicejob.svg",
      sizeClass: "h-5 w-auto",
    },
    {
      name: "datacandy",
      imgUrl: "/images/tools/datacandy.svg",
      sizeClass: "h-5 w-auto",
    },
    {
      name: "paystone",
      imgUrl: "/images/tools/paystone.png",
      sizeClass: "h-5 w-auto",
    },
  ];

  // Outer Ring (Secondary Ventures) with wider spacing
  const outerItems: EcosystemItem[] = [
    {
      name: "Tamil Golfers",
      imgUrl: "/images/tools/tamilgolfers.png",
      sizeClass: "h-5 w-auto",
    },
    {
      name: "King Tours",
      imgUrl: "/images/tools/kingtours.png",
      sizeClass: "h-5 w-auto",
    },
    {
      name: "Secure with Saj",
      imgUrl: "/images/tools/securewithsaj.png",
      sizeClass: "h-5 w-auto",
    },
    {
      name: "LankaSellers",
      imgUrl: "/images/tools/lankasellers.svg",
      sizeClass: "h-5 w-auto",
    },
  ];

  return (
    <section className="w-full max-w-[100rem] mx-auto px-4 md:px-12 lg:px-16 flex flex-col items-center justify-center bg-black relative select-none text-white">
      {/* Header and Subheading - Styled to match 'WhyWorkWithMe' */}
      <div className="text-center mx-auto mb-12 md:mb-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl tracking-tight mb-6 text-white font-normal">
          A Connected Ecosystem
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
          Integrating with the industry-standard software you rely on daily,
          while powering specialized ventures that expand technical and
          commercial reach under a single, unified framework.
        </p>
      </div>

      {/* Self-contained CSS styles for animations and responsive orbit radii */}
      <style>{`
        :root {
          --inner-radius: 140px;
          --outer-radius: 270px; 
        }
        @media (min-width: 768px) {
          :root {
            --inner-radius: 210px;
            --outer-radius: 400px; 
          }
        }

        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .anim-spin-cw {
          animation: spin-cw 50s linear infinite;
        }
        .anim-spin-ccw {
          animation: spin-ccw 50s linear infinite;
        }

        /* Pauses all animations on hover */
        .orbit-group:hover,
        .orbit-group:hover * {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Main concentric visual field with 3D perspective applied */}
      <div className="relative w-[500px] h-[700px] flex items-center justify-center [perspective:1500px] -mt-24 mb-16">
        {/* ================= UNIFIED 3D TILTED CONTAINER ================= */}
        <div
          className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
          style={{
            transform: "rotateX(45deg) rotateY(-20deg) rotateZ(20deg)",
          }}
        >
          {/* ================= OUTER ORBIT TRACK ================= */}
          <div className="orbit-group absolute rounded-full border-2 border-neutral-800/80 w-[calc(var(--outer-radius)*2)] h-[calc(var(--outer-radius)*2)] flex items-center justify-center anim-spin-ccw [transform-style:preserve-3d] z-10">
            {outerItems.map((item, idx) => {
              const angle = idx * (360 / outerItems.length);
              return (
                <div
                  key={item.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * var(--outer-radius)))`,
                  }}
                >
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <div className="anim-spin-cw">
                      <OrbitCard item={item} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= INNER ORBIT TRACK ================= */}
          <div className="orbit-group absolute rounded-full border-2 border-neutral-800/80 w-[calc(var(--inner-radius)*2)] h-[calc(var(--inner-radius)*2)] flex items-center justify-center anim-spin-cw [transform-style:preserve-3d] z-10">
            {innerItems.map((item, idx) => {
              const angle = idx * (360 / innerItems.length);
              return (
                <div
                  key={item.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * var(--inner-radius)))`,
                  }}
                >
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <div className="anim-spin-ccw">
                      <OrbitCard item={item} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= CENTRAL PLATFORM ================= */}
          <div className="absolute z-20">
            <div className="relative flex items-center justify-center min-w-[150px] md:min-w-[180px]">
              {/* Blurred background glow layer (slightly larger blur for central piece) */}
              <div className="absolute w-full h-full mt-4 ml-4 blur bg-blue-700 rounded-xl opacity-80 pointer-events-none" />

              {/* Solid foreground card content */}
              <div className="relative z-10 bg-neutral-900 rounded-xl px-6 py-4 w-full h-full flex items-center justify-center">
                <object
                  data="/images/tools/heymilo.svg"
                  type="image/svg+xml"
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert flex items-center justify-center"
                  aria-label="HeyMilo"
                >
                  <span className="text-neutral-200 text-sm font-semibold tracking-wide uppercase">
                    HeyMilo
                  </span>
                </object>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}