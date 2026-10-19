"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { PEOPLE } from "@/components/home/content";
import { placeNodes } from "@/lib/constellation";

const STRIP_BELOW = 1100; // matches the hero's stacking breakpoint in styles.js
const ORANGE_DOTS = 6;

// Size comes from CSS (square up to 560px on desktop, a 520:188 strip capped
// at 150px when the hero stacks), so nothing jumps while this measures itself.
// The faces are pure image: no hover, no names.
export function Constellation() {
  const ref = useRef(null);
  const [box, setBox] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const next = { w: Math.round(rect.width), h: Math.round(rect.height), strip: window.innerWidth < STRIP_BELOW };
      setBox((prev) => (prev && prev.w === next.w && prev.h === next.h && prev.strip === next.strip ? prev : next));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const view = useMemo(() => {
    if (!box || !box.w || !box.h) return null;
    // Desktop lays out on a 520x520 board; the strip keeps a 188-unit height
    // and widens the board with the container, so faces never shrink below
    // what the strip height allows.
    const VH = box.strip ? 188 : 520;
    const VW = box.strip ? Math.round((box.w / box.h) * 188) : 520;
    return { VW, VH, nodes: placeNodes({ width: VW, height: VH, people: PEOPLE, dots: ORANGE_DOTS, strip: box.strip }) };
  }, [box]);

  return (
    <div ref={ref} className="h-const">
      {view && (
        <div className="h-const-in">
          {view.nodes.map((n) => {
            const left = (Math.max(0, Math.min(view.VW - n.d, n.x - n.d / 2)) / view.VW) * 100;
            const top = (Math.max(0, Math.min(view.VH - n.d, n.y - n.d / 2)) / view.VH) * 100;
            const width = box.strip ? `${Math.round((n.d * box.h) / view.VH)}px` : `${(n.d / view.VW) * 100}%`;
            const style = { left: `${left}%`, top: `${top}%`, width, animation: `hFloat${n.i % 3} ${14 + (n.i % 5) * 3}s ease-in-out ${-(n.i * 1.7)}s infinite`, zIndex: n.person ? 2 : 1 };
            return (
              <div key={n.i} className="h-node" style={style} aria-hidden={n.person ? undefined : "true"}>
                {n.person ? (
                  <div className="h-face">
                    <Image src={`/assets/v2/faces/${n.person.slug}.webp`} alt={n.person.name} width={160} height={160} sizes="(max-width: 1099px) 64px, 140px" loading="eager" draggable={false} />
                  </div>
                ) : (
                  <div className="h-node-dot" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
