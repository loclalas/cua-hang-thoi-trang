import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.components";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formFieldsData = {
      ...formFields,
    };

    if (password !== confirmPassword) return;

    try {
      console.log(email, password);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Tai khoan nay da duoc dang ky");
      } else {
        console.log("Xay ra loi", error.message);
      }
    }
    resetForm();
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have a account?</h2>
      <span>Sign Up With Your Email</span>
      <form onSubmit={submitHandler}>
        <div>
          <FormInput
            label="Display Name"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />

          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <FormInput
            label="Comfirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button type="submit" buttonTypes="google">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
