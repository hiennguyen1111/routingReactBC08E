import React, { Component } from "react";
import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../util/settings";

export default class AxiosDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: [],
    };
  }

  // Ham xu ly su kien click de call api
  // Dung nhieu api khong lien quan nghiep vu voi nhau dung promise
  // Dung api ma phai cho ket qua moi lam tiep duoc thi dung try -- await chi
  getApi = async () => {
    try {
      const result = await axios({
        url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      });
      await this.setState({
        mangPhim: result.data.content,
      });
    } catch (error) {
      console.log("abc");
    }
  };

  // Ham renderPhim ra giao dien tu this.state.mangPhim
  renderPhim = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={phim.hinhAnh} alt="..." height={300} />
            <div className="card-body">
              <h3>{phim.tenPhim}</h3>
              <p>{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <button
          onClick={() => {
            this.getApi();
          }}
        >
          Lay danh sach phim
        </button>
        <h3 className="text-center">Danh sach phim</h3>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
  // Component tu dong goi ham nay sau khi render
  componentDidMount() {
    this.getApi();
  }
}

// getApi = () => {
// let promise = axios({
//     url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
//     method: "GET",
//     headers: {
//         "TokenCybersoft": TOKEN_CYBERSOFT,
//   },
// });

// promise.then((result) => {
//   console.log("result", result.data);
//   // Sau khi call api thanh cong lay du lieu api set vao state
//   this.setState({
//     mangPhim: result.data.content,
//   });
// });

// promise.catch((error) => {
//   console.log("error", error.response.data);
// });
// };
