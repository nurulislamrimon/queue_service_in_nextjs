import { defaultQueueOptions, redisConnection } from "@/config/queue";
import { Job, Queue, Worker } from "bullmq";

export const emailQueueName = "emailQueue";

export const emailQueue = new Queue(emailQueueName, {
  connection: redisConnection,
  defaultJobOptions: defaultQueueOptions,
});

export const queueWorker = new Worker(
  emailQueueName,
  async (job: Job) => {
    const data = job.data;
    console.log(data, "================job data from queue");
  },
  {
    connection: redisConnection,
  }
);
