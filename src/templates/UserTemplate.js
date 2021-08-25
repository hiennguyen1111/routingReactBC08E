import { Fragment } from "react";
// Fragment giong the div ma khong hien thi chi dung de bao boc trang

import { Route } from "react-router-dom";

export const UserTemplate = (props) => {
    // props (path,component)

    
    return <Route exact path={props.path} render={(propsRoute)=>{
            return <Fragment>
                <div className="d-flex">
                    <div className="w-50">
                        <img src="https://picsum.photos/200/200" className="vh-100 w-100" alt="..." />
                    </div>
                    <div className="w-50">
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </Fragment>
        }} />
}