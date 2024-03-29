import Button from "../ui/Button";

import classes from "./events-search.module.css";
import { useRef } from "react";

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const year = yearInputRef.current.value;
    const month = monthInputRef.current.value;
    props.onSearch(year, month);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select
            id="year"
            ref={yearInputRef}
            className="border border-gray-400"
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select
            id="month"
            ref={monthInputRef}
            className="border border-gray-400"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
