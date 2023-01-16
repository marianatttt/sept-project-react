import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
 return (
  <div className={css.Header}>
      <NavLink to={"todos"}>Todo</NavLink>
      <NavLink to={"albums"}>Album</NavLink>
      <NavLink to={"comments"}>Comment</NavLink>
  </div>
 );
};

export {Header};