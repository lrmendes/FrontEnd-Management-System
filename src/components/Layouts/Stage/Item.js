import React from "react";
import {
  IconButton,
  Card,
  CardHeader,
  Chip,
  CardContent,
  CardActions,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/DoneAll";
import MoreVert from "@material-ui/icons/MoreVert";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 300px;
  overflow: hidden;
  cursor: pointer;
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
`;

export default function Item({ onClick }) {
  return (
    <StyledCard onClick={onClick}>
      <CardHeader
        title="Produto X"
        subheader="codigo do produto"
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      />
      <StyledCardContent>
        <div className="item">
          <span className="key">Data de inicio:</span>
          <span className="value">14h30, 30 de Janeiro</span>
          <span className="key">Etapas concluidas:</span>
          <span className="value">
            3 <small>de 5 (60%)</small>
          </span>
          <span className="key">Total esperado:</span>
          <span className="value">14</span>
        </div>
      </StyledCardContent>
      <StyledCardActions>
        <Chip icon={<DoneIcon />} label="Concluido" />
      </StyledCardActions>
    </StyledCard>
  );
}
