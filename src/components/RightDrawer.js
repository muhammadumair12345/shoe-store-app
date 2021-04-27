import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from '@material-ui/core';
import { MenuSharp } from '@material-ui/icons';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import '../App.css';
import { Link } from "react-router-dom";
import FontIcons from "./FontIcons";


const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function RightDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({right: false});
  const links=["/","/men-shoes","/women-shoes","/kids-shoes"];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            {["Home","Men", "Women", "Kids"].map((text, index) => (
            <Link to={links[index]}  className="drawer-list" key={index}>
                <ListItem button key={index}>
                <ListItemIcon>
                    <FontIcons loc={index}/>
                </ListItemIcon>
                <ListItemText primary={text}/>
                </ListItem>
                {index===0?<Divider />:""}
            </Link>
            ))}
        </List>
    </div>
  );

  return (
    <div className="drawer">
      <>
        <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("right", true)}
        >
            <MenuSharp fontSize="small"/>
        </IconButton>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </>
    </div>
  );
}
