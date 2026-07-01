import { NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/mail";
import { getPublishedContent, insertContactSubmission } from "@/lib/db/queries/content";

export const runtime = "nodejs";

interface ContactBody {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: boolean;
}

function validate(
  body: ContactBody,
  allowedServices: string[],
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2) {
    return { ok: false, error: "Veuillez indiquer votre nom complet." };
  }

  if (phone.length < 8) {
    return { ok: false, error: "Veuillez indiquer un numéro de téléphone valide." };
  }

  if (service && !allowedServices.includes(service)) {
    return { ok: false, error: "Service sélectionné invalide." };
  }

  if (!body.consent) {
    return { ok: false, error: "Veuillez accepter d'être recontacté(e)." };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      service: service || undefined,
      message: message || undefined,
      consent: true,
    },
  };
}

export async function POST(request: Request) {
  try {
    const content = await getPublishedContent();
    const allowedServices = content.appointmentServices.map((s) => s.label);

    const body = (await request.json()) as ContactBody;
    const result = validate(body, allowedServices);

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    await sendContactEmail(result.data);
    await insertContactSubmission(result.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    console.error("[contact]", message);

    const hint =
      message.includes("certificate") || message.includes("ESOCKET")
        ? "Vérifiez SMTP_HOST (utiliser smtp.siteprotect.com, pas l'IP)."
        : message.includes("auth") || message.includes("EAUTH")
          ? "Vérifiez SMTP_USER et SMTP_PASSWORD."
          : null;

    if (hint) console.error("[contact]", hint);

    return NextResponse.json(
      { error: "L'envoi a échoué. Veuillez nous appeler directement." },
      { status: 500 },
    );
  }
}
