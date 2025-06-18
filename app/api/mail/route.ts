import { NextResponse } from "next/server";
import { sendEmail } from "../../../utils/aws-ses";


//Checks email data and response from mailing service
export async function POST(request: Request) {

  const data = await request.json();

  if(data?.formData?.field && data?.formData?.field !== ''){
    console.log("Failed to send email")
    return NextResponse.json("Detected", {
      status: 400
    })
  }

  const res = await sendEmail(data);

  if(res.msg){
    console.log("Error", res.msg);
  }

  if(res.ok) {
    return NextResponse.json("Ok", {
      status: 200
    });
  }

  return NextResponse.json(res.msg, {
    status: 400
  })
}
