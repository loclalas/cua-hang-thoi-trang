import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/87 - crown.svg";
import "./navigation.styles.scss";
import { useSelector } from "react-redux";

import { UserContext } from "./../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "./../../components/cart-icon/cart-icon.component";
import { CartContext } from "./../../contexts/cart.context";
import CartDropdown from "./../../components/cart-dropdown/cart-dropdown.compenent";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const currentUser = useSelector(selectCurrentUser);

  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo">LOGO</Logo>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="sign-in" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
