import { indicatorActions } from "./indicators";
import { userSliceActions } from "./user";

export const settingUser = (user) => {
  return (dispatch) => {
    const setUser = async () => {
      dispatch(indicatorActions.setLoading(true));
      try {
        const response = await fetch(
          "https://e-commerce-eb5e0-default-rtdb.firebaseio.com/user.json",
          {
            method: "PUT",
            body: JSON.stringify(user.user),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(indicatorActions.setLoading(false));
        if (!response.ok) {
          throw new Error("failed to store user information!!");
        }
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "successful",
            message: "User Saved",
          })
        );
        setTimeout(() => {
          dispatch(indicatorActions.setShow());
        }, 1000);
      } catch (error) {
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "unsuccessful",
            message: "User Data Can't Be Saved!",
          })
        );
        setTimeout(() => {
          dispatch(indicatorActions.setShow());
        }, 1000);
      }
    };
    setUser();
  };
};

export const gettingUser = () => {
  return async (dispatch) => {
    const getUser = async () => {
      dispatch(indicatorActions.setLoading(true));
      try {
        const response = await fetch(
          "https://e-commerce-eb5e0-default-rtdb.firebaseio.com/user.json"
        );
        dispatch(indicatorActions.setLoading(false));
        if (!response.ok) {
          throw new Error("something went wrong!!");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "unsuccessful",
            message: "User Data Can't Be Get!",
          })
        );
        setTimeout(() => {
          dispatch(indicatorActions.setShow());
        }, 1000);
      }
    };
    const user = await getUser();

    dispatch(
      userSliceActions.replaceUser(
        user || {
          name: null,
          email: null,
          address: null,
          addressB: null,
          city: null,
          state: null,
          zip: null,
        }
      )
    );
  };
};
