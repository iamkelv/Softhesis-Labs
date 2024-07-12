import style from "./Loader.module.scss";
import { useEffect } from "react";
import "./Loader.css";
const Loader = ({ loading }: { loading: boolean }) => {
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <div className={style.container} id="loader-container">
      <span>Loading..</span>
    </div>
  );
};

export default Loader;

export const SpinalLoader = () => {
  return (
    <div className="loader_container">
      <span>Loading</span>      
    </div>
  );
};
