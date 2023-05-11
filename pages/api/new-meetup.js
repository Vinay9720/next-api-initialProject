import { MongoClient } from "mongodb";

const apiHandler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://mrvinay9720:lXkQTX2DtHvB4G61@cluster1.twnhcqc.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
};
export default apiHandler;
