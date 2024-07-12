import React, { useEffect, useState } from "react";
import Styles from "./Login.module.scss";
import LoginForm from "./LoginForm";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/store/reduxHooks";
import { useRouter } from "next/router";

const SigninPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const auth = useAppSelector(state => state.auth.isLogged)

  useEffect(() => {
    if (auth) {
      router.push('/dashboard')
    }
  }, [auth, router])
  
  return (
    <div className={Styles.container}>
      <div className={Styles.container_leftWrapper}>
        <div
          className={Styles.container_leftWrapper_wrapper}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        >
          <div className={Styles.container_leftWrapper_wrapper_overlay}></div>
          <div className={Styles.container_leftWrapper_wrapper_imageWrapper}>
            <div className={Styles.container_leftWrapper_wrapper_content}>
              <div className={Styles.container_leftWrapper_wrapper_welcomeContent}>
                <span className={Styles.container_leftWrapper_wrapper_header}>
                  Welcome to Softhesis Labs
                </span>
                <span className={Styles.container_leftWrapper_wrapper_span}>
                  We specialize in covering technology desires of companies from various industries: creating and running dedicated development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.container_rightSection}>
        <div className={Styles.container_rightSection_wrapper}>
          <div className={Styles.container_leftWrapper_wrapper_content_image}>
            <Link href={`/`}>
              <Image
                width={1000}
                height={100}
                src={`/assets/images/logo.png`}
                alt="Logo Image"
                className="w-[100px] md:mt-2 mt-[100%] "
              />
            </Link>
          </div>
          <div className={Styles.container_rightSection_wrapper_content}>
            <h2 className={Styles.container_rightSection_wrapper_content_welcome}>
              Welcome Back
            </h2>
            <span className={Styles.container_rightSection_wrapper_content_account}>
              Dont have an account?
              <Link
                href={""}
                onClick={() => setOpen(true)}
                className="text-[#E32662] ml-1 font-bold w-full text-left "
              >
                Register
              </Link>
            </span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};



export default SigninPage;
