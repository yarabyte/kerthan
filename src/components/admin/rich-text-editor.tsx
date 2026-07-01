"use client";

import { useEffect, type ReactNode } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Link2,
  Heading2,
  Undo2,
  Redo2,
  Unlink,
} from "lucide-react";
import { isRichHtml, plainTextToHtml } from "@/lib/rich-text";

interface RichTextEditorProps {
  label?: string;
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}

function ToolbarButton({
  active,
  onClick,
  children,
  title,
}: {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      className={`kt-rte__btn${active ? " is-active" : ""}`}
      onClick={onClick}
      title={title}
      aria-label={title}
    >
      {children}
    </button>
  );
}

export function RichTextEditor({
  label,
  value,
  onChange,
  placeholder = "Rédigez votre contenu…",
  minHeight = 200,
}: RichTextEditorProps) {
  const initialContent = isRichHtml(value) ? value : plainTextToHtml(value);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
      }),
    ],
    content: initialContent,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "kt-rte__editor",
        "data-placeholder": placeholder,
      },
    },
    onUpdate: ({ editor: ed }) => {
      const html = ed.getHTML();
      onChange(html === "<p></p>" ? "" : html);
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    const next = isRichHtml(value) ? value : plainTextToHtml(value);
    const normalizedCurrent = current === "<p></p>" ? "" : current;
    const normalizedNext = next === "<p></p>" ? "" : next;
    if (normalizedNext !== normalizedCurrent) {
      editor.commands.setContent(next || "<p></p>", { emitUpdate: false });
    }
  }, [editor, value]);

  function setLink() {
    if (!editor) return;
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("URL du lien", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  if (!editor) {
    return (
      <div className="kt-rte kt-rte--loading" style={{ minHeight }}>
        <span className="kt-admin__spinner" aria-hidden />
      </div>
    );
  }

  return (
    <div className="kt-rte">
      {label && <label className="kt-rte__label">{label}</label>}
      <div className="kt-rte__toolbar" role="toolbar" aria-label="Mise en forme">
        <ToolbarButton
          title="Gras"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Italique"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </ToolbarButton>
        <span className="kt-rte__sep" aria-hidden />
        <ToolbarButton
          title="Titre niveau 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading2 size={16} />
        </ToolbarButton>
        <span className="kt-rte__sep" aria-hidden />
        <ToolbarButton
          title="Liste à puces"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Liste numérotée"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={16} />
        </ToolbarButton>
        <span className="kt-rte__sep" aria-hidden />
        <ToolbarButton
          title="Insérer un lien"
          active={editor.isActive("link")}
          onClick={setLink}
        >
          <Link2 size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Retirer le lien"
          onClick={() => editor.chain().focus().unsetLink().run()}
        >
          <Unlink size={16} />
        </ToolbarButton>
        <span className="kt-rte__sep" aria-hidden />
        <ToolbarButton title="Annuler" onClick={() => editor.chain().focus().undo().run()}>
          <Undo2 size={16} />
        </ToolbarButton>
        <ToolbarButton title="Rétablir" onClick={() => editor.chain().focus().redo().run()}>
          <Redo2 size={16} />
        </ToolbarButton>
      </div>
      <EditorContent editor={editor} style={{ minHeight }} />
    </div>
  );
}
