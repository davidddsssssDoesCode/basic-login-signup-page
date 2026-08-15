import {useState} from "react";
import LogIn from "../components/AuthPage/LogIn";
import SignUp from "../components/AuthPage/SignUp";

export default function LogInPage() {
  const [formState, setFormState] = useState<string>("login");

  function logIn(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function signUp(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <main className="h-screen flex justify-center items-center bg-blue-200 p-5">
      <form onSubmit={formState === "login" ? logIn : signUp} className="flex justify-center items-center">
        <LogIn formState={formState} setFormState={setFormState} />
        <SignUp formState={formState} setFormState={setFormState} />
      </form>
    </main>
  );
}
