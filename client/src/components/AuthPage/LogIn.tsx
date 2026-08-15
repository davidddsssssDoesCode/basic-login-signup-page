type LogInProps = {
    formState: string;
    setFormState: React.Dispatch<React.SetStateAction<string>>;
}

export default function LogIn({formState, setFormState}: LogInProps) {
  return (
    <div className={`h-120 w-90 fixed flex flex-col justify-center items-center gap-5 rounded-4xl bg-white p-5 border sm:h-125 sm:w-105 transition-transform duration-200 ease-in-out ${formState === "login" ? "animate-show" : "animate-hide"}`}>
      <h1 className="text-5xl">Log-In</h1>
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Username"
          className="h-13 w-65 border-b p-3 outline-0 transition-all duration-200 ease-in-out focus:scale-[1.02] focus:border-b-blue-800 sm:w-75"
        />
        <input
          type="text"
          placeholder="Password"
          className="h-13 w-65 border-b p-3 outline-0 transition-all duration-200 ease-in-out focus:scale-[1.02] focus:border-b-blue-800 sm:w-75"
        />
        <button className="h-13 w-20 rounded-full bg-sky-300 border transition-all duration-200 ease-in-out hover:bg-sky-400 hover:scale-[1.05] active:bg-sky-500 active:scale-[0.95]">
          Log-In
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p>Don't have an account?</p>
        <a
          onClick={() => setFormState("signup")}
          className="text-purple-700 transition-colors duration-200 ease-in-out hover:text-purple-900 cursor-pointer active:text-purple-950"
        >
          Sign-Up
        </a>
      </div>
    </div>
  );
}
