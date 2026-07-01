import nodemailer from "nodemailer";

export interface ContactPayload {
  name: string;
  phone: string;
  service?: string;
  message?: string;
  consent: boolean;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error("Configuration SMTP incomplète.");
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";

  return {
    host,
    port,
    secure,
    auth: { user, pass },
    requireTLS: !secure && port === 587,
    tls: {
      servername: process.env.SMTP_TLS_SERVERNAME || host,
      minVersion: "TLSv1.2" as const,
    },
  };
}

export function createMailTransporter() {
  return nodemailer.createTransport(getSmtpConfig());
}

export async function sendContactEmail(payload: ContactPayload) {
  const transporter = createMailTransporter();

  // Vérifie la connexion avant l'envoi pour une erreur plus claire
  await transporter.verify();

  const to = process.env.CONTACT_TO ?? process.env.SMTP_USER ?? "webmaster@kerthan.org";
  const from = process.env.SMTP_FROM ?? `Clinique Kerthan <${process.env.SMTP_USER}>`;

  const lines = [
    "Nouvelle demande de rendez-vous — Clinique Kerthan",
    "",
    `Nom : ${payload.name}`,
    `Téléphone : ${payload.phone}`,
    `Service : ${payload.service || "Non précisé"}`,
    "",
    "Message :",
    payload.message?.trim() || "(aucun message)",
    "",
    `Consentement recontact : ${payload.consent ? "Oui" : "Non"}`,
    "",
    `Envoyé depuis : ${process.env.NEXT_PUBLIC_SITE_URL ?? "kerthan.org"}`,
  ];

  await transporter.sendMail({
    from,
    to,
    replyTo: process.env.SMTP_USER,
    subject: `[Kerthan] Rendez-vous — ${payload.name}`,
    text: lines.join("\n"),
    html: lines
      .map((line) => (line === "" ? "<br>" : `<p style="margin:0 0 8px">${escapeHtml(line)}</p>`))
      .join(""),
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
