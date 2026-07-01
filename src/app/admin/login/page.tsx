"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import "@/styles/admin.css";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "Connexion impossible.");
      window.location.href = "/admin";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connexion impossible.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="kt-admin kt-admin--login">
      <div className="kt-admin__login-wrap">
        <div className="kt-admin__login">
          <div className="kt-admin__login-brand">
            <Image
              src="/assets/logo-seal.png"
              alt="Clinique Kerthan"
              width={72}
              height={54}
              className="kt-admin__login-logo"
              priority
            />
            <h1>Backoffice</h1>
            <p>Gestion du contenu du site</p>
          </div>

          {error && <div className="kt-admin__error">{error}</div>}

          <form onSubmit={handleSubmit} className="kt-admin__grid">
            <div className="kt-admin__field">
              <label htmlFor="email">Adresse email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="username"
                placeholder="webmaster@kerthan.org"
              />
            </div>
            <div className="kt-admin__field">
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="kt-admin__btn kt-admin__btn--primary"
              disabled={loading}
              style={{ width: "100%", marginTop: "0.25rem" }}
            >
              <Lock size={16} aria-hidden />
              {loading ? "Connexion…" : "Se connecter"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
