import React, { useState } from "react";
import Styles from "./Login.module.scss";
import { InputField } from "@/components/atoms/input-field/input";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { PrimaryButton } from "@/components/atoms/buttons/Button";
import Link from "next/link";
import { useAppDispatch } from "@/store/reduxHooks";
import { setLogin } from "@/store/slices/authSlice";
import { useRouter } from "next/router";


const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "", credential: '' });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch()
  const router = useRouter();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
     const newErrors = { username: errors.username, password: errors.password , credential:''};
    setErrors(newErrors)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: "", password: "" , credential:''};

    if (!formData.username.trim()) {
      newErrors.username = "Username or email is required.";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    if (validateForm()) {
      if (formData.username === "user" && formData.password === "password") {
        setIsLoading(true)
        dispatch(setLogin())      
        router.push("/dashboard")                
      } else {

        const newErrors = { username: "", password: "" , credential:'Invalid username or password : username:user, password:password'};
        setErrors(newErrors)
        
      }

    }
  };

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <div className={Styles.form_formGroup}>
        <InputField
          noFormat={true}
          type="text"
          label="Email Address or Username"
          name="username"
          placeholder="Email Address or Username"
          value={formData.username}
          onChange={handleInputChange}
          className={""}
          width="100%"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>
      <div className="mb-2 relative">
        <label
          htmlFor="password"
          className={Styles.form_formGroup_label}
        ></label>
        <InputField
          noFormat={true}
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          width="100%"
        />
        <PrimaryButton
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-[2.75rem] w-fit md:right-[1vw] right-[-90%]  p-0 h-fit  items-center  transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
        </PrimaryButton>
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <div className="mb-2  text-right">
        <Link href={"/forgot-passport"} className="text-[#E32662] ">
          Forgot Password?
        </Link>
      </div>
      {errors.credential  && <p className="text-red-500 font-semibold">{errors.credential}</p>}
      <div className={Styles.form_formGroup_btnWrapper}>
        <PrimaryButton
          type="submit"
          className="bg-[#B51749] font-extralight  my-auto min-h-[52px] md:w-[70%] w-[80%] flex items-center justify-center  text-white lg:py-2 py-2 px-4 rounded-full hover:bg-[#e32662bd]  transition duration-300 mb-4"
        >
          { isLoading ? <span>Loading...</span> : 'Log In'}          
        </PrimaryButton>
      </div>
    </form>
  );
};

export default LoginForm;
