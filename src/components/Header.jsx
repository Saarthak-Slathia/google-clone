import React from "react";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <ul className="m-1">
          <li className="m-rl-05">Gmail</li>
          <li className="m-rl-05">Images</li>
          <li>
            <IconButton>
              <AppsRoundedIcon />
            </IconButton>
          </li>
          <li>
            <IconButton size="small">
              <Avatar />
            </IconButton>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
