"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/reduxHooks";

export default function isAuth(Component: React.ComponentType<any>,isLogin?:boolean) {
  return function IsAuth(props: any) {
    const auth = useAppSelector((state) => state.auth.isLogged);
    const router = useRouter();

    useEffect(() => {
      if (!auth ) {
        router.push("/");
      } else {
          if (auth && isLogin) {
            router.push("/dashboard");
          }
      }
      
    }, [auth, router]);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
