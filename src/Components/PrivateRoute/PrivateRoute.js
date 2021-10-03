import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
  const { user, setUser } = useContext(UserContext);
  console.log("sagar", user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.name || user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
