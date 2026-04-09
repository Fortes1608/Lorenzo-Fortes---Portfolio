"use client";

import { Reveal } from "./reveal";
import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <SectionContainer id="about" className="py-32 lg:py-44" innerClassName="max-w-[1240px]">
      <div className="text-center">
        <Reveal offset={18}>
          <SectionHeading
            eyebrow="About"
            title="A minimal introduction to who I am"
            description="I build iOS apps with a product mindset.
Working with Swift, SwiftUI and modern architectures,
I focus on clarity, performance and polished user experiences
that feel simple and intentional."
            align="center"
          />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
