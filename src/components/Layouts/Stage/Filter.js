import React, { useState } from "react";
import { Button, MenuItem, Menu, Divider } from "@material-ui/core";
import FilterVert from "@material-ui/icons/Tune";

export default function Filter() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="primary"
        startIcon={<FilterVert />}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        All
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>All</MenuItem>
        <div style={{ padding: 14 }}>
          <Divider />
        </div>
        <MenuItem onClick={() => setAnchorEl(null)}>Complete</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>In progress</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Aborted</MenuItem>
      </Menu>
    </>
  );
}
