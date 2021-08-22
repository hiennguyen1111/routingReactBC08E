import { Fragment } from "react";
// Fragment giong the div ma khong hien thi chi dung de bao boc trang
import { Route } from "react-router-dom";
import Header from "../components/HomePage/Header";

export const HomeTemplate = (props) => {
  // props (path,component)

  return (
    <Route exact
      path={props.path}
      render={(propsRoute) => {
        return  <Fragment>
            <Header />
            <props.component {...propsRoute} />
          </Fragment>;
      }} />
  );
};
