const amqp = require("amqplib");

const data = require("./data.json");
const queueName = process.argv[2] || "jobsQueue";

connect_rabbitmq();

async function connect_rabbitmq() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    const assertion = await channel.assertQueue(queueName);

    console.log("message pending...");

    channel.consume(queueName, (message) => {
      const incomingData = JSON.parse(message.content.toString());
      const userInfo = data.find((u) => u.id == incomingData.id);

      if (userInfo) {
        console.log("processed record: ", userInfo);
        channel.ack(message);
      }
    });
  } catch (error) {
    console.log("error", error);
  }
}
