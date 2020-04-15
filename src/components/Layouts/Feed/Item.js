import React from "react";
import styled from "styled-components";
import { Card, CardHeader, Chip, Typography } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/DoneAll";

const StyledCard = styled(Card)`
  display: flex;
  flex: 1;
  height: 200px;
  flex-direction: row;
  overflow: hidden;
`;
const StyledImage = styled.div`
  display: flex;
  width: 150px;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  flex: 1;
  overflow: hidden;
  padding: 0.5rem 1rem;
  align-items: start;
`;

const StyledHeader = styled(CardHeader)`
  width: 100%;
`;

export default function FeedItem() {
  return (
    <StyledCard>
      <StyledImage>
        <img src="https://via.placeholder.com/200" alt="placeholder" />
      </StyledImage>
      <StyledContent>
        <StyledHeader
          title={"100.12.3.2020"}
          subheader={"Vinho Verde"}
          action={<Chip icon={<DoneIcon />} label="Concluido" />}
        />
        <div>
          <Typography variant="h6">Produção</Typography>
          <div>
            <Typography paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
              nemo voluptate debitis autem quos, maxime officiis architecto
              officia porro inventore iusto minima cumque, laborum repellendus?
              Similique repellendus quisquam dicta esse?
            </Typography>
          </div>
        </div>
      </StyledContent>
    </StyledCard>
  );
}
