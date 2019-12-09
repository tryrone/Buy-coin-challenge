import React, { Component } from "react";
import axios from "axios";
import Table from "../Table/Table";
import "./Wrapper.css";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      coinData: [],
      perPage: 10,
      dataItems: [],
      curPage: 1
    };
  }

  componentDidMount() {
    axios
      .get(" https://api.coinlore.com/api/tickers/?start=100&limit=100")
      .then(res => {
        this.setState({ coinData: res.data.data });
        this.setState({
          dataItems: this.state.coinData.slice(0, this.state.perPage)
        });
      });
  }

  nextClick() {
    if (
      this.state.curPage !==
      this.state.coinData.length / this.state.perPage
    ) {
      this.setState({ curPage: this.state.curPage + 1 });
      const start = (this.state.curPage - 1) * this.state.perPage;

      const end = start + this.state.perPage;

      this.setState({ dataItems: this.state.coinData.slice(start, end) });
    }
  }
  previousClick() {
    if (this.state.curPage > 1) {
      this.setState({ curPage: this.state.curPage - 1 });
      const start = (this.state.curPage - 1) * 10;

      const end = start + this.state.perPage;

      this.setState({ dataItems: this.state.coinData.slice(start, end) });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <table>
          <thead>
            <tr className="right">
              <th className="right lo">
                <span role="img" aria-label="tega">
                  💰
                </span>
                Coin
              </th>
              &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <th className="right lo">
                <span role="img" aria-label="tega">
                  📄
                </span>
                Code
              </th>
              &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <th className="right lo">
                <span role="img" aria-label="tega">
                  🤑
                </span>
                Price
              </th>
              &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <th className="right lo">
                <span role="img" aria-label="tega">
                  📉
                </span>
                Total Supply
              </th>
              &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            </tr>
          </thead>
          <tbody>
            {this.state.dataItems.map(item => {
              return <Table item={item} />;
            })}
          </tbody>
          <div className="nav">
            {this.state.curPage > 1 ? (
              <button className="prev" onClick={this.previousClick.bind(this)}>
                <i className="fas fa-arrow-left"></i>&nbsp; Prev
              </button>
            ) : null}
            {this.state.curPage <
            Math.ceil(this.state.coinData.length / this.state.perPage) ? (
              <button className="next" onClick={this.nextClick.bind(this)}>
                Next &nbsp;<i className="fas fa-arrow-right"></i>
              </button>
            ) : null}
          </div>
        </table>
      </div>
    );
  }
}

export default Wrapper;
