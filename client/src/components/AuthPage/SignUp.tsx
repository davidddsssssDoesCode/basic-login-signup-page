import type React from "react";

type SignUpProps = {
  formState: string;
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  setNewUsernameInput: React.Dispatch<React.SetStateAction<string>>;
  setNewPasswordInput: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPasswordInput: React.Dispatch<React.SetStateAction<string>>;
  signupInputErrorStatus: boolean;
  signupInputErrorMessage: string;
};

export default function SignUp({
  formState,
  setFormState,
  setNewUsernameInput,
  setNewPasswordInput,
  setConfirmPasswordInput,
  signupInputErrorStatus,
  signupInputErrorMessage,
}: SignUpProps) {
  return (
    <div
      className={`h-120 w-90 fixed flex flex-col justify-center items-center gap-5 rounded-4xl bg-white p-5 border sm:h-125 sm:w-105 transition-transform duration-200 ease-in-out ${formState === "signup" ? "animate-show" : "animate-hide"}`}
    >
      <h1 className="text-5xl">Sign-Up</h1>
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="New Username"
          onChange={(e) => setNewUsernameInput(e.target.value)}
          className={`h-13 w-65 border-b p-3 outline-0 transition-all duration-200 ease-in-out focus:scale-[1.02] focus:border-b-blue-800 sm:w-75 ${signupInputErrorStatus ? "text-red-500" : 
            ""}`}
        />
        <input
          type="text"
          placeholder="New Password"
          onChange={(e) => setNewPasswordInput(e.target.value)}
          className={`h-13 w-65 border-b p-3 outline-0 transition-all duration-200 ease-in-out focus:scale-[1.02] focus:border-b-blue-800 sm:w-75 ${signupInputErrorStatus ? "text-red-500" : 
            ""}`}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPasswordInput(e.target.value)}
          className={`h-13 w-65 border-b p-3 outline-0 transition-all duration-200 ease-in-out focus:scale-[1.02] focus:border-b-blue-800 sm:w-75 ${signupInputErrorStatus ? "text-red-500" : 
            ""}`}
        />
        {signupInputErrorStatus ? (
          <p className="text-red-600 text-[14px]">{signupInputErrorMessage}</p>
        ) : (
          ""
        )}
        <button className="h-13 w-20 rounded-full bg-sky-300 border transition-all duration-200 ease-in-out hover:bg-sky-400 hover:scale-[1.05] active:bg-sky-500 active:scale-[0.95]">
          Sign-Up
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p>Don't have an account?</p>
        <a
          onClick={() => setFormState("login")}
          className="text-purple-700 transition-colors duration-200 ease-in-out hover:text-purple-900 cursor-pointer active:text-purple-950"
        >
          Log-In
        </a>
      </div>
    </div>
  );
}
