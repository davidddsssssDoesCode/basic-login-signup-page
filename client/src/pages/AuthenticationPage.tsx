import {useState} from "react";
import LogIn from "../components/AuthPage/LogIn";
import SignUp from "../components/AuthPage/SignUp";
import {authLogIn, authSignUp} from "../apis/AuthAPI";

export default function LogInPage() {
  const [formState, setFormState] = useState<string>("login");
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [newUsernameInput, setNewUsernameInput] = useState<string>("");
  const [newPasswordInput, setNewPasswordInput] = useState<string>("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>("");
  
  const [loginInputErrorStatus, setLoginInputErrorStatus] = useState<boolean>(false);
  const [loginInputErrorMessage, setLoginInputErrorMessage] = useState<string>("");
  const [signupInputErrorStatus, setSignupInputErrorStatus] = useState<boolean>(false);
  const [signupInputErrorMessage, setSignupInputErrorMessage] = useState<string>("");

  async function logIn(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (usernameInput === "" || passwordInput === "") {
      setLoginInputErrorStatus(true);
      setLoginInputErrorMessage("There are missing fields.");
      return;
    }

    try {
      const response = await authLogIn(usernameInput, passwordInput);

      return console.log(response);
    } catch (error) {
      setLoginInputErrorStatus(true);
      setLoginInputErrorMessage("There was a problem logging you in.");
      return;
    }
  }

  async function signUp(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newUsernameInput === "" || newPasswordInput === "" || confirmPasswordInput === "") {
      setSignupInputErrorStatus(true);
      setSignupInputErrorMessage("There are missing fields.");
      return;
    }

    if (newPasswordInput !== confirmPasswordInput) {
      setSignupInputErrorStatus(true);
      setSignupInputErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await authSignUp(newUsernameInput, newPasswordInput);

      return console.log(response);
    } catch (error ) {
      setSignupInputErrorStatus(true);
      setSignupInputErrorMessage("There was a problem making an account.");
      return;
    }
  }

  return (
    <main className="h-screen flex justify-center items-center bg-blue-200 p-5">
      <form onSubmit={formState === "login" ? logIn : signUp} className="flex justify-center items-center animate-setup">
        <LogIn 
          formState={formState}
          setFormState={setFormState}
          setUsernameInput={setUsernameInput}
          setPasswordInput={setPasswordInput}
          loginInputErrorStatus={loginInputErrorStatus}
          loginInputErrorMessage={loginInputErrorMessage}
        />
        <SignUp
          formState={formState}
          setFormState={setFormState}
          setNewUsernameInput={setNewUsernameInput}
          setNewPasswordInput={setNewPasswordInput}
          setConfirmPasswordInput={setConfirmPasswordInput}
          signupInputErrorStatus={signupInputErrorStatus}
          signupInputErrorMessage={signupInputErrorMessage}
        />
      </form>
    </main>
  );
}
