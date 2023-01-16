import { userSliceActions } from "./user";
import { indicatorActions } from "./indicators";

export const settingUser = (user) => {
  return (dispatch) => {
    const setUser = async () => {
      dispatch(indicatorActions.setLoading(true));
      try {
        const response = await fetch(
          "https://e-commerce-eb5e0-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            body: JSON.stringify({user:user}),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        if (!response.ok) {
          throw new Error("failed to store user information!!");
        }

        dispatch(indicatorActions.setLoading(false));
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "successful",
            message: "User Saved",
          })
        );
        setTimeout(() => {
          dispatch(
            indicatorActions.setAlerts({
              show: false,
              status: null,
              message: null,
            })
          );
        }, 1000);
       const data = await response.json();
       localStorage.setItem("userID",JSON.stringify(data.name))
      } catch (error) {
        dispatch(indicatorActions.setLoading(false));
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "unsuccessful",
            message: "User Data Can't Be Saved!",
          })
        );
        setTimeout(() => {
          dispatch(
            indicatorActions.setAlerts({
              show: false,
              status: null,
              message: null,
            })
          );
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
        let userID = JSON.parse(localStorage.getItem("userID"));
        const response = await fetch(
         `https://e-commerce-eb5e0-default-rtdb.firebaseio.com/users/${userID}/user.json`
        );
        
        if (!response.ok) {
          throw new Error("something went wrong!!");
        }
        dispatch(indicatorActions.setLoading(false));
        const data = await response.json();
      
        return data;
      } catch (error) {
        dispatch(indicatorActions.setLoading(false));
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "unsuccessful",
            message: "User Data Can't Be Get!",
          })
        );
        setTimeout(() => {
          dispatch(
            indicatorActions.setAlerts({
              show: false,
              status: null,
              message: null,
            })
          );
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
