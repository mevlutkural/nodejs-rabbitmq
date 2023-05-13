const amqp = require("amqplib");

const data = require("./data.json");
const queueName = process.argv[2] || "jobsQueue";

connect_rabbitmq();

async function connect_rabbitmq() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    const assertion = await channel.assertQueue(queueName);

    data.forEach((i) => {
      const data = {
        id: i.id,
      };
      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
      console.log("data sent: ", i.id);
    });
  } catch (error) {
    console.log("error:", error);
  }
}
