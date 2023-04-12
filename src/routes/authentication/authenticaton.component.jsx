import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./authentication.styles.scss";
import SignInForm from "./../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "./../../components/sign-up-form/sign-up-form.components";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
