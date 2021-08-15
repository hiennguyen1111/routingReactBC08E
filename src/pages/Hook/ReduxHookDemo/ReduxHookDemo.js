import React, {useState} from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export default function ReduxHookDemo(props) {
  const [userComment, setUserComment] = useState({
    name: '',
    comment: '',
  });
  // useDispatch giong voi this.props.dispatch ben rcc
  const dispatch = useDispatch();
  console.log('userComment',userComment)
  // Sd useSelector la hook tuong duong voi ham mapStateToProps
  const { arrComment } = useSelector(state => state.FacebookReducer);

  const handleChangeInput = (event) => {
    let { value, name } = event.target;
    setUserComment({
        ...userComment,
      [name]: value
    })
  };

  const handleSubmit = (event)=>{
      // Chan su kien submit browser
      event.preventDefault();
      const action = {
          type:'ADD_COMMENT',
          userComment: {...userComment,image:`https://i.pravatar.cc/50/u=${userComment.name}`}
      }
      dispatch(action)
  }

  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-1">
            <img src={comment.image} width="50" height="50" alt="..." />
          </div>
          <div className="col-11">
            <h3 className="text-danger">{comment.name}</h3>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h3 className="">Facebook app!</h3>
      <div className="card">
        <div className="card-header">
          {renderComment()}
          {/* <div className="row">
            <div className="col-1">
              <img
                src="https://picsum.photos/200/200"
                width="50"
                height="50"
                alt="..."
              />
            </div>
            <div className="col-11">
              <h3 className="text-danger">Name</h3>
              <p>Content</p>
            </div>
          </div> */}
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <p>Name</p>
            <input
              className="form-control"
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input
              className="form-control"
              name="content"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-outline-success" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    arrComment: state.FacebookReducer.arrComment,
  };
};

// export default connect(mapStateToProps)(ReduxHookDemo);
