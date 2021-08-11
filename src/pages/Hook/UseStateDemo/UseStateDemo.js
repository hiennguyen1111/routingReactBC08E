// Hook chi hoat dong tren rfc, khong co state, props, khong co con tro this

import React, { useState } from "react";

export default function UseStateDemo(props) {
  const [like, setLike] = useState(1);

  // const [state, setState] = useState({like:1}) // array tra ve 2 phan tu [pt1,pt2]
  /* this.state = {
        like:1
    }
    */

  const [imgCar, setImgcar] = useState("./img/CarBasic/products/red-car.jpg");
  const changeColor = (color) => {
    setImgcar(`./img/CarBasic/products/${color}-car.jpg`);
  };

  return (
    <div className="container">
      <h3>Demo useState</h3>
      <div className="card w-25">
        <img src="https://picsum.photos/200/200" alt="..." />
        <div className="card-body">
          <p>{like} Like</p>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
      </div>
      <hr />
      <h3>Bai tap chon xe hoi</h3>
      <div className="row">
        <div className="col-6">
          <img src={imgCar} className="w-100" />
        </div>
        <div className="cok-6">
          <div className="row">
            <button
              className="bg-dark text-white col-3"
              onClick={() => {
                changeColor("steel");
              }}
            >
              Steel
            </button>
            <button
              className="bg-dark text-white col-3"
              onClick={() => {
                changeColor("black");
              }}
            >
              Black
            </button>
            <button
              className="bg-dark text-white col-3"
              onClick={() => {
                changeColor("red");
              }}
            >
              Red
            </button>
            <button
              className="bg-dark text-white col-3"
              onClick={() => {
                changeColor("silver");
              }}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
