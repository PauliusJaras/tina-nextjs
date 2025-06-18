let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
import EmailTemplate from "../components/templates/emailTemplate";
import { render } from "@react-email/render";
import ResponseEmailTemplate from "../components/templates/responseEmailTemplate";

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const adminSendMail = process.env.ADMIN_SEND_EMAIL;
const adminReceiveMail = process.env.ADMIN_RECEIVE_EMAIL;

const transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

export const sendEmail = async (emailData) => {
  const emailTemplate = <EmailTemplate formData={emailData?.formData} />;
  const emailHtml = render(emailTemplate);
  const replyEmailTemplate = (
    <ResponseEmailTemplate
      replyEmailData={emailData?.replyEmailData}
      formData={emailData?.formData}
    />
  );

  const replyEmailHtml = render(replyEmailTemplate);

  try {
    const response = await transporter.sendMail({
      from: `"JMA Centras" <${adminSendMail}>`,
      to: adminReceiveMail,
      cc: emailData?.cc?.toString(),
      subject: emailData?.subject || "JMA Centras",
      html: emailHtml,
      ses: {
        // optional extra arguments for SendRawEmail
        Tags: [
          {
            Name: "tag_name",
            Value: "tag_value",
          },
        ],
      },
    });
    if (response?.response) {
      if (
        emailData?.replyEmailData?.topText &&
        emailData?.replyEmailData?.bottomText &&
        emailData.replyEmail
      ) {
        const replyRes = await transporter.sendMail({
          from: `"JMA Centras" <${adminSendMail}>`,
          to: emailData?.replyEmail,
          subject: emailData?.subject || "JMA Centras",
          html: replyEmailHtml,
          ses: {
            // optional extra arguments for SendRawEmail
            Tags: [
              {
                Name: "tag_name",
                Value: "tag_value",
              },
            ],
          },
        });
        if (replyRes?.response) {
          console.log("Reply email sent");
        }
      }

      return { ok: true };
    } else {
      return { ok: false, msg: "Failed to send email data" };
    }
  } catch (error) {
    console.log(error);
    return { ok: false, msg: error };
  }
};
