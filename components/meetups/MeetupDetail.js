import React, { Fragment } from "react";
import classes from "./MeetupDetail.module.css";
import Card from "../ui/Card";

function MeetupDetail(props) {
  console.log("my props", props.data);

  const { image, title, address, description } = props.data;
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
