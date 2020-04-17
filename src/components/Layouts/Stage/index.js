import React, { useState } from "react";
import { Section, HeaderTitle, SectionHeader, GridSection } from "../styles";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Item from "./Item";
import Filter from "./Filter";
import Form from "./Form";

export default function Stage() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Section>
      <SectionHeader justify="end">
        <HeaderTitle component="h2" variant="h4">
          Etapas de produção
        </HeaderTitle>
        <div>
          <Filter />
          <IconButton
            aria-label="account of current user"
            aria-haspopup="true"
            color="primary"
            onClick={() => setOpenForm(true)}
          >
            <AddIcon />
          </IconButton>
        </div>
      </SectionHeader>
      <GridSection>
        {[0, 1, 2, 3, 4].map((el) => (
          <Item key={el} onClick={() => setOpenForm(true)} />
        ))}
      </GridSection>
      <Form open={openForm} setOpen={setOpenForm} />
    </Section>
  );
}
