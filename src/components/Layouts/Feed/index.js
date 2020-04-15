import React, { useState } from "react";
import { Section, HeaderTitle, SectionHeader, LimitedSection } from "../styles";
import { Tabs, Tab } from "@material-ui/core";
import Item from "./Item";

export default function Feed() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Section>
      <SectionHeader>
        <HeaderTitle component="h2" variant="h4">
          Feed
        </HeaderTitle>
        <Tabs
          value={tabIndex}
          onChange={(event, value) => setTabIndex(value)}
          scrollButtons="auto"
          variant="scrollable"
        >
          <Tab label="Todos" />
          <Tab label="Produção" />
          <Tab label="Estoque" />
          <Tab label="Falhas" />
        </Tabs>
      </SectionHeader>
      <LimitedSection>
        {[0, 1, 2, 3, 4].map((el) => (
          <Item key={el} />
        ))}
      </LimitedSection>
    </Section>
  );
}
