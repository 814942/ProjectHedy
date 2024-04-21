"use client"
import { useEffect, useState } from "react";

import Button from "@/components/atoms/Button";
import signIn from "@/services/auth/signIn";
import { LOGIN_VIEW } from "@/interfaces/enums";
import { useDataContext } from "@/context/data.context";
import { navigate } from "@/services/actions";
import { toast } from "react-toastify";

interface ILoginProps {
  setCurrentView: (view: LOGIN_VIEW) => void;
}

const Login = ({ setCurrentView }: ILoginProps) => {
  const { setUser } = useDataContext()
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitLoading(true)

    const { response, status, message } = await signIn(userEmail, userPassword)

    if (status === 400 && message) {
      toast.error(message, { toastId: "fail" })
    }
    else {
      setUser(response!.user.email)
      toast.success(message, { toastId: "success" })
      navigate("/")
    }
    setIsSubmitLoading(false)
  };

  useEffect(() => {
    if (userEmail && userPassword) {
      setIsSubmitDisabled(false)
    }
    else {
      setIsSubmitDisabled(true)
    }
  }, [userEmail, userPassword])

  return (
    <div id="login-pages" className="w-2/4 mb-16 mt-16">
      <div id="onboarding-card" className="min-w-full m-auto bg-gray-bg">
        <div 
          id="onboarding-form" 
          className="p-8 rounded-xl bg-gray-bg flex flex-col justify-center w-full text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
            <h2 className="text-xl font-bold	">
            WELCOME BACK
            </h2>
            <p className="text-base">Sign in to access an enhanced shopping experience.</p>
          
          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                title="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="border m-2 text-xl bg-white p-2 w-full rounded-lg font-extralight"
                required
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                title="Enter your password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="border m-2 text-xl bg-white p-2 w-full rounded-lg font-extralight"
                required
              />
            </div>
            <Button name="Sign in" isDisabled={isSubmitDisabled} isLoading={isSubmitLoading} />
          </form>
          <div>
            <button 
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)} 
              className="hover:underline"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;