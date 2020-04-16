import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  ListSubheader,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InboxIcon from "@material-ui/icons/Inbox";
import TagIcon from "@material-ui/icons/LocalOffer";
import WineIcon from "@material-ui/icons/LocalBar";
import LayersIcon from "@material-ui/icons/Layers";
import DoneIcon from "@material-ui/icons/Done";
import GroupIcon from "@material-ui/icons/Group";
import LockIcon from "@material-ui/icons/Lock";
// import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

export default function SideBar({ isOpen }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{ paper: classes.drawerPaper }}
      elevation={0}
    >
      <List>
        <ListItem button onClick={() => console.log("/")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListSubheader component="div">Gerenciamento</ListSubheader>
        <ListItem button onClick={() => console.log("/stock")}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Estoque"} />
        </ListItem>

        <ListItem button onClick={() => console.log("/stock")}>
          <ListItemIcon>
            <TagIcon />
          </ListItemIcon>
          <ListItemText primary={"Produtos"} />
        </ListItem>

        <ListItem button onClick={() => console.log("/stock")}>
          <ListItemIcon>
            <WineIcon />
          </ListItemIcon>
          <ListItemText primary={"Vinhos"} />
        </ListItem>

        <ListSubheader component="div">Produção</ListSubheader>
        <ListItem button onClick={() => console.log("/stock")}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary={"Etapas"} />
        </ListItem>
        <ListItem button onClick={() => console.log("/stock")}>
          <ListItemIcon>
            <DoneIcon />
          </ListItemIcon>
          <ListItemText primary={"Tarefas"} />
        </ListItem>

        <ListSubheader component="div">Administração</ListSubheader>
        <ListItem button onClick={() => console.log("/stock")}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={"Usuários"} />
        </ListItem>
        <ListItem button onClick={() => console.log("/stock")}>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary={"Permissões"} />
        </ListItem>
      </List>
    </Drawer>
  );
}
