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

  async function logIn(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (usernameInput === "" || passwordInput === "") {
      return alert("Username and/or Password is invalid.");
    }

    try {
      const response = await authLogIn(usernameInput, passwordInput);

      return console.log(response);
    } catch (error) {
      return console.log("There was an error logging you in.");
    }
  }

  async function signUp(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newUsernameInput === "" || newPasswordInput === "" || confirmPasswordInput === "") {
      return alert("Some fields are not filled.");
    }

    if (newPasswordInput !== confirmPasswordInput) {
      return alert("Passwords do not match.");
    }

    try {
      const response = await authSignUp(newUsernameInput, newPasswordInput);

      return console.log(response);
    } catch (error ) {
      return console.log("There was an error in creating an account.");
    }
  }

  return (
    <main className="h-screen flex justify-center items-center bg-blue-200 p-5">
      <form onSubmit={formState === "login" ? logIn : signUp} className="flex justify-center items-center">
        <LogIn 
          formState={formState}
          setFormState={setFormState}
          setUsernameInput={setUsernameInput}
          setPasswordInput={setPasswordInput}
        />
        <SignUp
          formState={formState}
          setFormState={setFormState}
          setNewUsernameInput={setNewUsernameInput}
          setNewPasswordInput={setNewPasswordInput}
          setConfirmPasswordInput={setConfirmPasswordInput}
        />
      </form>
    </main>
  );
}
