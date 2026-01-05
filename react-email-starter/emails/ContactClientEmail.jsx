import * as React from "react";
import {
  Html, Head, Preview, Body, Container, Section, Text, Hr,
} from "@react-email/components";

export default function ContactClientEmail({ name }) {
  return (
    <Html>
      <Head />
      <Preview>Hemos recibido tu mensaje - GD Solutions</Preview>
      <Body style={{ backgroundColor: "#ffffff", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: 640, margin: "0 auto", padding: 24 }}>
          <Section>
            <Text style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>
              Gracias por contactarnos
            </Text>

            <Text style={{ margin: "0 0 10px" }}>
              Hola {name}, hemos recibido tu mensaje y te responderemos lo antes posible.
            </Text>

            <Hr style={{ margin: "16px 0" }} />

            <Text style={{ fontSize: 12, color: "#666", margin: 0 }}>
              GD Solutions
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
