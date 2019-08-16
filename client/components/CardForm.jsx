import React, { Fragment, useState } from "react";

const CardForm = () => {
  const [account, setAccount] = useState("");
  const [limit, setLimit] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardName, setCardName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(account, limit, expiry, cardName);
  };

  return (
    <Fragment className="card-form">
      <section class="hero is-medium is-default is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">GET STARTED</h1>
          </div>
        </div>
      </section>
      <h2 className="title"> </h2>
      <form className="column is-half" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Choose Account</label>
          <div className="control">
            <div className="select">
              <select onChange={e => setAccount(e.target.value)}>
                <option>Select account</option>
                <option>Current Account | $1200.00</option>
                <option>Savings Account | $3000.00</option>
                <option>Debit Account | $4000.00</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Select Card Limit</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="number"
              placeholder="Select limit"
              onChange={e => setLimit(e.target.value)}
            />
            <span class="icon is-small is-left">$</span>
          </div>
        </div>

        <div className="field">
          <label className="label">
            Select Card Expiry{" "}
            <span className="text-muted">up to 12 months</span>
          </label>
          <div className="control">
            <input
              className="input"
              type="date"
              placeholder="Select expiry date"
              onChange={e => setExpiry(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Name Your Card!</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Your card name here"
              onChange={e => setCardName(e.target.value)}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary" type="submit">
              Create My Virtual Card!
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default CardForm;
