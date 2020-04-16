import React from "react";
import styled from "styled-components";
import { Card, CardHeader, IconButton, CardContent } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const StyledCard = styled(Card)`
  width: 250px;
  height: 200px;
  margin: 0 1rem;
`;

export default function Statistic({ children, title, action }) {
  return (
    <StyledCard>
      <CardHeader
        subheader={title}
        action={
          <IconButton onClick={action} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
}
