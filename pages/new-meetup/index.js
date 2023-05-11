import React, { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetUp() {
  const newMeetuphandler = async (enteredData) => {
    try {
      console.log(enteredData);
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredData),
        // body: enteredData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Add new Meetup</title>
        <meta
          name="description"
          content="Creatye a amazing network of New Meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={newMeetuphandler} />
    </Fragment>
  );
}

export default NewMeetUp;
