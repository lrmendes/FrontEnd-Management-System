import React from "react";
import { Section, SectionHeader, HeaderTitle, LimitedSection } from "../styles";
import Item from "./Item";

export default function Task() {
  return (
    <Section>
      <SectionHeader>
        <HeaderTitle component="h2" variant="h4">
          Tarefas
        </HeaderTitle>
      </SectionHeader>
      <LimitedSection>
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <Item key={el} />
        ))}
      </LimitedSection>
    </Section>
  );
}
