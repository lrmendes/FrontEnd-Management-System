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
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

export default function SideBar({ isOpen }) {
  const classes = useStyles();
  const { location, ...history } = useHistory();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{ paper: classes.drawerPaper }}
      elevation={0}
    >
      <List>
        <ListItem
          selected={location.pathname === "/"}
          button
          onClick={() => history.push("/")}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListSubheader component="div">Gerenciamento</ListSubheader>
        <ListItem
          selected={location.pathname === "/storage"}
          button
          onClick={() => history.push("/storage")}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Estoque"} />
        </ListItem>

        <ListItem
          button
          selected={location.pathname === "/products"}
          onClick={() => history.push("/products")}
        >
          <ListItemIcon>
            <TagIcon />
          </ListItemIcon>
          <ListItemText primary={"Produtos"} />
        </ListItem>

        <ListItem
          button
          selected={location.pathname === "/wine"}
          onClick={() => history.push("/wine")}
        >
          <ListItemIcon>
            <WineIcon />
          </ListItemIcon>
          <ListItemText primary={"Vinhos"} />
        </ListItem>

        <ListSubheader component="div">Produção</ListSubheader>
        <ListItem
          button
          selected={location.pathname === "/stages"}
          onClick={() => history.push("/stages")}
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary={"Etapas"} />
        </ListItem>

        <ListItem
          button
          selected={location.pathname === "/tasks"}
          onClick={() => history.push("/tasks")}
        >
          <ListItemIcon>
            <DoneIcon />
          </ListItemIcon>
          <ListItemText primary={"Tarefas"} />
        </ListItem>

        <ListSubheader component="div">Administração</ListSubheader>

        <ListItem
          button
          selected={location.pathname === "/users"}
          onClick={() => history.push("/users")}
        >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={"Usuários"} />
        </ListItem>

        <ListItem
          button
          selected={location.pathname === "/permissions"}
          onClick={() => history.push("/permissions")}
        >
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary={"Permissões"} />
        </ListItem>
      </List>
    </Drawer>
  );
}
