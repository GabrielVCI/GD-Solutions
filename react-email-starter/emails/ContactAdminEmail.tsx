import * as React from "react";
import {
  Html, Head, Preview, Body, Container, Section, Text, Hr,
} from "@react-email/components";

export default function ContactAdminEmail({ name, email, message, meta }) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje desde GD Solutions</Preview>
      <Body style={{ backgroundColor: "#ffffff", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: 640, margin: "0 auto", padding: 24 }}>
          <Section>
            <Text style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>
              Nuevo mensaje desde el sitio web
            </Text>

            <Text style={{ margin: "0 0 6px" }}><strong>Nombre:</strong> {name}</Text>
            <Text style={{ margin: "0 0 6px" }}><strong>Email:</strong> {email}</Text>

            <Hr style={{ margin: "16px 0" }} />

            <Text style={{ margin: "0 0 6px" }}><strong>Mensaje:</strong></Text>
            <Text style={{ margin: 0, whiteSpace: "pre-wrap" }}>{message}</Text>

            {meta ? (
              <>
                <Hr style={{ margin: "16px 0" }} />
                <Text style={{ fontSize: 12, color: "#666", margin: 0 }}>
                  <strong>Meta:</strong> {meta}
                </Text>
              </>
            ) : null}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
