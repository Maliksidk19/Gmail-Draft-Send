"use server";

import { google } from "googleapis";
import { redirect } from "next/navigation";

const SCOPES = [
  "https://www.googleapis.com/auth/gmail.compose",
  "https://www.googleapis.com/auth/gmail.readonly",
  "https://www.googleapis.com/auth/gmail.modify",
  "https://mail.google.com/",
];

const oAuth2Client = new google.auth.OAuth2({
  clientId: process.env.GMAIL_CLIENT_ID,
  clientSecret: process.env.GMAIL_CLIENT_SECRET,
  redirectUri: process.env.GMAIL_REDIRECT_URI,
});

export default async function authorize() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });

  redirect(authUrl);
}

export const sendDraftMail = async (code: string) => {
  const { tokens } = await oAuth2Client.getToken(code);

  const access_token = tokens.access_token;

  oAuth2Client.setCredentials({
    access_token,
  });

  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

  const data = {
    from: "text@gmail.com",
    to: "testify@test.com",
    subject: "Test",
    message: "Test email!",
  };

  const encodedString = btoa(
    `From: ${data.from}\nTo: ${data.to}\nSubject:${data.subject}\n\n${data.message}`
  );

  const draft = {
    userId: "me",
    requestBody: {
      message: {
        raw: encodedString,
      },
    },
  };

  await gmail.users.drafts.create(draft);
};
