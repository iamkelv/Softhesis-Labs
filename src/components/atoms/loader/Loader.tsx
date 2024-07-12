import style from "./Loader.module.scss";
import { useEffect } from "react";
import "./Loader.css";
import { Oval } from "react-loader-spinner";
import { colors } from "../../../styles/colors";
const Loader = ({ loading }: { loading: boolean }) => {
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <div className={style.container} id="loader-container">
      <Oval
        visible={true}
        height="60"
        width="60"
        color={colors.pink100}
        secondaryColor={colors.pink_T3}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;

export const SpinalLoader = () => {
  return (
    <div className="loader_container">
      <Oval
        visible={true}
        height="40"
        width="40"
        color={colors.pink_T3}
        secondaryColor={colors.pink100}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
