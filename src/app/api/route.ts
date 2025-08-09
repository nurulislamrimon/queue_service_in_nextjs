import { emailQueue, emailQueueName } from "@/jobs/emailJob";
import { NextResponse } from "next/server";

export const GET = async () => {
  await emailQueue.add(emailQueueName, {
    name: "Nijam Uddin Chinku",
    age: 290,
  });

  return NextResponse.json({
    success: true,
    message: "Email send successfully!",
  });
};
