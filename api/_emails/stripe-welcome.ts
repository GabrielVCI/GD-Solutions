
import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function StripeWelcomeEmail() {
  return React.createElement(
    Html,
    null,

    React.createElement(Head, null),

    React.createElement(
      Preview,
      null,
      "You're now ready to make live transactions with Stripe!"
    ),

    React.createElement(
      Body,
      { style: main },

      React.createElement(
        Container,
        { style: container },

        React.createElement(
          Section,
          { style: box },

          React.createElement(Img, {
            src: `${baseUrl}/static/stripe-logo.png`,
            width: "49",
            height: "21",
            alt: "Stripe",
          }),

          React.createElement(Hr, { style: hr }),

          React.createElement(
            Text,
            { style: paragraph },
            "Thanks for submitting your account information. You're now ready to make live transactions with Stripe!"
          ),

          React.createElement(
            Text,
            { style: paragraph },
            "You can view your payments and a variety of other information about your account right from your dashboard."
          ),

          React.createElement(
            Button,
            {
              style: button,
              href: "https://dashboard.stripe.com/login",
            },
            "View your Stripe Dashboard"
          ),

          React.createElement(Hr, { style: hr }),

          React.createElement(
            Text,
            { style: paragraph },
            "If you haven't finished your integration, you might find our ",
            React.createElement(
              Link,
              { style: anchor, href: "https://stripe.com/docs" },
              "docs"
            ),
            " handy."
          ),

          React.createElement(
            Text,
            { style: paragraph },
            "Once you're ready to start accepting payments, you'll just need to use your live ",
            React.createElement(
              Link,
              {
                style: anchor,
                href: "https://dashboard.stripe.com/login?redirect=%2Fapikeys",
              },
              "API keys"
            ),
            " instead of your test API keys. Your account can simultaneously be used for both test and live requests, so you can continue testing while accepting live payments. Check out our ",
            React.createElement(
              Link,
              { style: anchor, href: "https://stripe.com/docs/dashboard" },
              "tutorial about account basics"
            ),
            "."
          ),

          React.createElement(
            Text,
            { style: paragraph },
            "Finally, we've put together a ",
            React.createElement(
              Link,
              {
                style: anchor,
                href: "https://stripe.com/docs/checklist/website",
              },
              "quick checklist"
            ),
            " to ensure your website conforms to card network standards."
          ),

          React.createElement(
            Text,
            { style: paragraph },
            "We'll be here to help you with any step along the way. You can find answers to most questions and get in touch with us on our ",
            React.createElement(
              Link,
              { style: anchor, href: "https://support.stripe.com/" },
              "support site"
            ),
            "."
          ),

          React.createElement(
            Text,
            { style: paragraph },
            "— The Stripe team"
          ),

          React.createElement(Hr, { style: hr }),

          React.createElement(
            Text,
            { style: footer },
            "Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080"
          )
        )
      )
    )
  );
}

/* ===== styles ===== */

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
