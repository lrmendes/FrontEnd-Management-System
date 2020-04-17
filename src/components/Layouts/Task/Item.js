import React from "react";
import {
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import ReportIcon from "@material-ui/icons/Report";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
`;

const StyledCardContent = styled(CardContent)`
  .item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    .key {
      text-align: right;
      font-weight: 600;
    }

    .value {
      text-align: left;
      font-weight: 400;
    }
  }
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;
`;
export default function Item() {
  return (
    <StyledCard>
      <div>
        <CardHeader title="Buscar Garrafas no Estoque" subheader="Produto X" />
        <StyledCardContent>
          <div className="item">
            <span className="key">Estoque:</span>
            <span className="value">14</span>
          </div>
          <div className="item">
            <span className="key">Tipo:</span>
            <span className="value">
              1 <small>Litro</small>
            </span>
          </div>
          <div className="item">
            <span className="key">Quantidade:</span>
            <span className="value">14</span>
          </div>
        </StyledCardContent>
      </div>
      <StyledCardActions>
        <IconButton>
          <ReportIcon />
        </IconButton>
        <IconButton>
          <DoneIcon />
        </IconButton>
      </StyledCardActions>
    </StyledCard>
  );
}
