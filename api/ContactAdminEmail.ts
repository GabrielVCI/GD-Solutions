import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
} from "@react-email/components";

export type ContactAdminEmailProps = {
  name: string;
  email: string;
  message: string;
  meta?: string;
};

export default function ContactAdminEmail({
  name,
  email,
  message,
  meta,
}: ContactAdminEmailProps) {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(Preview, null, "Nuevo mensaje desde GD Solutions"),

    React.createElement(
      Body,
      { style: { backgroundColor: "#ffffff", margin: 0, padding: 0 } },
      React.createElement(
        Container,
        { style: { maxWidth: 640, margin: "0 auto", padding: 24 } },
        React.createElement(
          Section,
          null,

          React.createElement(
            Text,
            { style: { fontSize: 20, fontWeight: 700, margin: "0 0 12px" } },
            "Nuevo mensaje desde el sitio web"
          ),

          React.createElement(
            Text,
            { style: { margin: "0 0 6px" } },
            React.createElement("strong", null, "Nombre:"),
            " ",
            name
          ),

          React.createElement(
            Text,
            { style: { margin: "0 0 6px" } },
            React.createElement("strong", null, "Email:"),
            " ",
            email
          ),

          React.createElement(Hr, { style: { margin: "16px 0" } }),

          React.createElement(
            Text,
            { style: { margin: "0 0 6px" } },
            React.createElement("strong", null, "Mensaje:")
          ),

          React.createElement(
            Text,
            { style: { margin: 0, whiteSpace: "pre-wrap" } },
            message
          ),

          meta
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement(Hr, { style: { margin: "16px 0" } }),
                React.createElement(
                  Text,
                  { style: { fontSize: 12, color: "#666", margin: 0 } },
                  React.createElement("strong", null, "Meta:"),
                  " ",
                  meta
                )
              )
            : null
        )
      )
    )
  );
}
