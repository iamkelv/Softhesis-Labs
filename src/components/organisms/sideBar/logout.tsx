import React from "react";
import Flex from "../../common/flex/flex";
import Text from "../../common/text/text";
import { PrimaryButton } from "../../common/buttons/Button";
import styles from "./sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/reduxHooks";
import { axiosClient } from "../../../utils/useApi";
import { QueryCache, useMutation } from "@tanstack/react-query";
import { toggleToastOpen } from "../../../app/slices/toastSlice";
import {
  clearType,
  setSelectedAccount,
} from "../../../app/slices/userTypeSlice";
import { logOut, setShowLogout } from "../../../app/slices/authSlice";
import { isLoading } from "../../../app/slices/statusSlice";

const Logout = () => {
  const dispatch = useAppDispatch();
  const queryCache = new QueryCache({});
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);

  const { mutate } = useMutation({
    mutationFn: async () => {
      return await axiosClient("auth/logout", "post", { refreshToken });
    },

    onSuccess: (response) => {
      if (response) {
        queryCache.clear();
        dispatch(clearType());
        dispatch(isLoading(false));
        dispatch(setSelectedAccount(null));
        dispatch(logOut({ redirect: false }));
      }
    },

    onError: (error: any) => {
      dispatch(
        toggleToastOpen({
          message: `${`Failed to Log out Account `}`,
          color: "DANGER",
        })
      );
    },
  });

  const handleLogout = async () => {
    dispatch(isLoading(true));
    dispatch(setShowLogout(false));
    try {
      await mutate();
    } catch (error) {}
  };

  return (
    <div className={styles.logout_modal}>
      <Flex
        background="white"
        borderRadius="2rem"
        alignItems="flex-start"
        padding="3rem"
        gap="3rem"
        flexFlow="column"
      >
        <Text fontSize="1.1rem" fontWeight="600">
          Sign out of your account?
        </Text>
        <Flex alignItems="center" justifyContent="flex-start" gap="1rem">
          <PrimaryButton
            onClick={() => dispatch(setShowLogout(false))}
            className={styles.cancel_btn}
          >
            Cancel
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              handleLogout();
            }}
            className={styles.logout_btn}
          >
            Logout
          </PrimaryButton>
        </Flex>
      </Flex>
    </div>
  );
};

export default Logout;
