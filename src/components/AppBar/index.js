import React from "react";
import {
  AppBar as Bar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  fade,
} from "@material-ui/core";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountIcon from "@material-ui/icons/AccountCircle";

const StyledBar = styled(Bar)`
  display: flex;
  background-color: #fff;
  color: #333;
`;

const SearchInput = styled.div`
  display: flex;
  flex: 1;
  background-color: ${fade("#333", 0.15)};
  margin: 0 3rem;
  border-radius: ${({ theme }) => theme.roundness}px;
  align-items: center;
  transition: 300ms ease-in all;

  @media (max-width: 900px) {
    margin: 0 1rem;
  }
`;

const Logo = styled(Typography)`
  font-family: inherit;
  font-weight: 600;
  margin: 0 1rem;
  @media (max-width: 750px) {
    display: none;
  }
`;

const Icon = styled.div`
  padding: 0 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Input = styled(InputBase)`
  font-family: inherit;
  width: 100%;
  /* color: #fff; */
  color: #333;
`;

const Container = styled(Toolbar)`
  display: flex;
  align-items: center;
  align-content: center;
`;

export default function AppBar({ toogleDrawer }) {
  return (
    <StyledBar position="static" elevation={0}>
      <Container>
        {/* Menu */}
        <IconButton
          onClick={toogleDrawer}
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        {/* Title */}
        <Logo variant="h6" noWrap>
          Wineer
        </Logo>
        {/* Serch */}
        <SearchInput>
          <Icon>
            <SearchIcon />
          </Icon>
          <Input
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchInput>
        {/* User */}
        <IconButton aria-label="show more" aria-haspopup="true" color="inherit">
          <SettingsIcon />
        </IconButton>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountIcon />
        </IconButton>
      </Container>
    </StyledBar>
  );
}
