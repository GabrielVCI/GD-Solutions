
import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function VercelInviteUserEmail({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: VercelInviteUserEmailProps) {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return React.createElement(
    Html,
    null,

    React.createElement(Head, null),

    React.createElement(
      Tailwind,
      null,

      React.createElement(
        Body,
        { className: "mx-auto my-auto bg-white px-2 font-sans" },

        React.createElement(Preview, null, previewText),

        React.createElement(
          Container,
          {
            className:
              "mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]",
          },

          // Logo
          React.createElement(
            Section,
            { className: "mt-[32px]" },
            React.createElement(Img, {
              src: `${baseUrl}/static/vercel-logo.png`,
              width: "40",
              height: "37",
              alt: "Vercel",
              className: "mx-auto my-0",
            })
          ),

          // Heading
          React.createElement(
            Heading,
            {
              className:
                "mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black",
            },
            "Join ",
            React.createElement("strong", null, teamName),
            " on ",
            React.createElement("strong", null, "Vercel")
          ),

          React.createElement(
            Text,
            { className: "text-[14px] text-black leading-[24px]" },
            "Hello ",
            username,
            ","
          ),

          React.createElement(
            Text,
            { className: "text-[14px] text-black leading-[24px]" },
            React.createElement("strong", null, invitedByUsername),
            " (",
            React.createElement(
              Link,
              {
                href: `mailto:${invitedByEmail}`,
                className: "text-blue-600 no-underline",
              },
              invitedByEmail
            ),
            ") has invited you to the ",
            React.createElement("strong", null, teamName),
            " team on ",
            React.createElement("strong", null, "Vercel"),
            "."
          ),

          // User images
          React.createElement(
            Section,
            null,
            React.createElement(
              Row,
              null,

              React.createElement(
                Column,
                { align: "right" },
                React.createElement(Img, {
                  className: "rounded-full",
                  src: userImage,
                  width: "64",
                  height: "64",
                })
              ),

              React.createElement(
                Column,
                { align: "center" },
                React.createElement(Img, {
                  src: `${baseUrl}/static/vercel-arrow.png`,
                  width: "12",
                  height: "9",
                  alt: "invited you to",
                })
              ),

              React.createElement(
                Column,
                { align: "left" },
                React.createElement(Img, {
                  className: "rounded-full",
                  src: teamImage,
                  width: "64",
                  height: "64",
                })
              )
            )
          ),

          // Button
          React.createElement(
            Section,
            { className: "mt-[32px] mb-[32px] text-center" },
            React.createElement(
              Button,
              {
                className:
                  "rounded bg-[#000000] px-5 py-3 text-center font-semibold text-[12px] text-white no-underline",
                href: inviteLink,
              },
              "Join the team"
            )
          ),

          // Invite link
          React.createElement(
            Text,
            { className: "text-[14px] text-black leading-[24px]" },
            "or copy and paste this URL into your browser: ",
            React.createElement(
              Link,
              { href: inviteLink, className: "text-blue-600 no-underline" },
              inviteLink
            )
          ),

          React.createElement(Hr, {
            className:
              "mx-0 my-[26px] w-full border border-[#eaeaea] border-solid",
          }),

          // Footer text
          React.createElement(
            Text,
            { className: "text-[#666666] text-[12px] leading-[24px]" },
            "This invitation was intended for ",
            React.createElement("span", { className: "text-black" }, username),
            ". This invite was sent from ",
            React.createElement("span", { className: "text-black" }, inviteFromIp),
            " located in ",
            React.createElement(
              "span",
              { className: "text-black" },
              inviteFromLocation
            ),
            ". If you were not expecting this invitation, you can ignore this email."
          )
        )
      )
    )
  );
}
