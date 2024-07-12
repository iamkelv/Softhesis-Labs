import React from "react";
import Style from "./404page.module.scss";
import Link from "next/link";


const NotFound: React.FC = () => {
  return (
    <>
      <div className={Style.notFound}>
        <div className={Style.notFound_wrapper}>
          <h1 className={Style.notFound_wrapper_body}>404</h1>
          <p className={Style.notFound_wrapper_header}>Page not found</p>
          <p className={Style.notFound_wrapper_content}>
            The page can not be found.
          </p>
          <Link href="/dashboard" className={Style.notFound_wrapper_link}>
            Go back home
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default NotFound;
