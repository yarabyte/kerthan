"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { ImagePlus, Loader2, X } from "lucide-react";
import { uploadAdminImage } from "@/lib/admin/client";

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  hint?: string;
}

export function ImageUploadField({ label, value, onChange, hint }: ImageUploadFieldProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    try {
      const url = await uploadAdminImage(file);
      onChange(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Échec de l'envoi.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="kt-admin__field kt-image-upload">
      <label htmlFor={inputId}>{label}</label>
      {hint && <span className="kt-admin__field-hint">{hint}</span>}

      {value ? (
        <div className="kt-image-upload__preview">
          <Image
            src={value}
            alt=""
            width={320}
            height={180}
            className="kt-image-upload__img"
          />
          <div className="kt-image-upload__actions">
            <button
              type="button"
              className="kt-admin__btn kt-admin__btn--ghost"
              disabled={uploading}
              onClick={() => inputRef.current?.click()}
            >
              Remplacer
            </button>
            <button
              type="button"
              className="kt-admin__btn kt-admin__btn--ghost"
              disabled={uploading}
              onClick={() => onChange("")}
              aria-label="Supprimer l'image"
            >
              <X size={16} aria-hidden />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="kt-image-upload__dropzone"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
        >
          {uploading ? (
            <>
              <Loader2 size={22} className="kt-image-upload__spin" aria-hidden />
              Envoi en cours…
            </>
          ) : (
            <>
              <ImagePlus size={22} aria-hidden />
              Choisir une image
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="kt-image-upload__input"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
        }}
      />

      {value && (
        <input
          className="kt-image-upload__path"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/assets/…"
          aria-label={`${label} — chemin`}
        />
      )}

      {error && <p className="kt-image-upload__error">{error}</p>}
    </div>
  );
}
