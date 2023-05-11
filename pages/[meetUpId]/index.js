import { MongoClient, ObjectId } from "mongodb";
import React, { Fragment } from "react";
import Card from "../../components/ui/Card";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>

      <Card>
        <MeetupDetail
          data={props.meetupData}
          // title={props.meetupData.title}
          // address={props.meetupData.address}
          // image={props.meetupData.image}
          // description={props.meetupData.description}
        />
      </Card>
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://mrvinay9720:lXkQTX2DtHvB4G61@cluster1.twnhcqc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetUpId: meetup._id.toString(),
        },
      };
    }),
  };
};

export const getStaticProps = async (context) => {
  // debugger;
  const meetUpId = context.params.meetUpId;
  const client = await MongoClient.connect(
    "mongodb+srv://mrvinay9720:lXkQTX2DtHvB4G61@cluster1.twnhcqc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  // const k = new ObjectId(meetUpId);
  console.log("my meetUpId", meetUpId);

  const selectedMeetup = await meetupCollection.findOne({
    // _id: meetUpId,
    _id: new ObjectId(meetUpId),
    // _id: ObjectId(meetUpId),
    // title: "vjhhhhhhhhhhhhhhhhhhh",
  });
  // const selectedMeetup = meetUpId;

  client.close();
  selectedMeetup._id = selectedMeetup._id.toString();
  console.log("selectedMeetup", selectedMeetup);

  return {
    props: {
      meetupData: selectedMeetup,
    },
  };
};

export default MeetupDetails;
