import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

class MyMenu extends React.Component {
  state = {
    open: false,
    anchor: "left"
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const drawer = (
      <Drawer variant="persistent" open={open}>
        <div>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        <Divider />
        <Typography variant="title" color="inherit">
          Drawer
        </Typography>
      </Drawer>
    );

    return (
      <div>
        <div>
          <AppBar className="MENU">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Menu
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer}
        </div>
      </div>
    );
  }
}

export default MyMenu;
