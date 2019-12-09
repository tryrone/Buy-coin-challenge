import React from "react";

export default function Table(props) {
  return (
    <tr>
      <td className="lo">
        <span role="img" className="hide" aria-label="tega">
          💰 <p className="desc">Coin</p>
        </span>
        {props.item.name}
      </td>
      &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <td>
        <span role="img" className="hide" aria-label="tega">
          📄 <p className="desc">Code</p>
        </span>

        {props.item.symbol}
      </td>
      &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <td>
        <span role="img" className="hide" aria-label="tega">
          🤑 <p className="desc">Price</p>
        </span>
        $ &nbsp;{props.item.price_usd}
      </td>
      &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <td>
        <span role="img" className="hide" aria-label="tega">
          📉 <p className="desc">Total Supply</p>
        </span>
        {props.item.tsupply}
        &nbsp;
        {props.item.symbol}
      </td>
      &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
    </tr>
  );
}
