import React from "react";
import { Section, ScrollSection, BoldText } from "../styles";
import HorizontalScroll from "react-scroll-horizontal";
import Statistic from "./Statistic";
import { Typography } from "@material-ui/core";

export default function Statistics() {
  return (
    <Section>
      <Typography component="h2" variant="h4">
        Estatística
      </Typography>
      <ScrollSection>
        <HorizontalScroll>
          {[0, 1, 2, 3, 4, 5].map((el) => (
            <Statistic key={el} title={"estátistica nº" + el} action={() => {}}>
              <BoldText>{1000 * el}</BoldText>
            </Statistic>
          ))}
        </HorizontalScroll>
      </ScrollSection>
    </Section>
  );
}
