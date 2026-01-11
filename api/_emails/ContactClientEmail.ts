
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

export type ContactClientEmailProps = {
  name: string;
};

export default function ContactClientEmail({
  name,
}: ContactClientEmailProps) {
  return React.createElement(
    Html,
    null,

    React.createElement(Head, null),

    React.createElement(
      Preview,
      null,
      "Hemos recibido tu mensaje - GD Solutions"
    ),

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
            {
              style: {
                fontSize: 20,
                fontWeight: 700,
                margin: "0 0 12px",
              },
            },
            "Gracias por contactarnos"
          ),

          React.createElement(
            Text,
            { style: { margin: "0 0 10px" } },
            "Hola ",
            name,
            ", hemos recibido tu mensaje y te responderemos lo antes posible."
          ),

          React.createElement(Hr, { style: { margin: "16px 0" } }),

          React.createElement(
            Text,
            { style: { fontSize: 12, color: "#666", margin: 0 } },
            "GD Solutions"
          )
        )
      )
    )
  );
}
