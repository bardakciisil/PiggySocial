import "./topbar.css";
import { Search, Person, Chat, Notifications, HomeRounded, ViewDayRounded } from "@material-ui/icons";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext);
  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">PiggySocial</span>
      </Link>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <div className="searchIconContainer"> 
          <Search className="searchIcon" />
        </div>
        <input placeholder="Just search for whatever you want :)" className="searchInput" />
      </div>
    </div>
    <div className="topbarRight">
      <div className="topbarLinks">
        <span className="topbarLink"><HomeRounded/></span>
        <span className="topbarLink"><ViewDayRounded/></span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
        <Link to={`/profile/${user.username}`}>
        <img src={
          user.profilePicture
          ? PF+user.profilePicture
          :PF+"noprofile.png"}
           alt="" className="topbarImg"/>
        </Link>
      </div>
    </div>
  );
}