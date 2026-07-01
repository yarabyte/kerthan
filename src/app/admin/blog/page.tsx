"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, BookOpen, Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import { formatBlogDate, sortBlogPosts } from "@/lib/blog";
import type { BlogPostItem, SectionIntro } from "@/lib/content-types";
import { fetchDraftContent, saveDraftContent } from "@/lib/admin/client";

function createEmptyPost(): BlogPostItem {
  return {
    id: `blog-${Date.now()}`,
    slug: "",
    title: "",
    excerpt: "",
    image: "",
    body: "",
    published: false,
    publishedAt: new Date().toISOString().slice(0, 10),
  };
}

export default function AdminBlogPage() {
  const [section, setSection] = useState<SectionIntro | null>(null);
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showSection, setShowSection] = useState(false);

  const load = useCallback(async () => {
    const content = await fetchDraftContent();
    setSection(content.blogSection);
    setPosts(content.blogPosts);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const sortedPosts = useMemo(() => sortBlogPosts(posts), [posts]);
  const editingPost = editingId ? posts.find((p) => p.id === editingId) : null;

  function updatePost(id: string, patch: Partial<BlogPostItem>) {
    setPosts((current) => current.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  }

  function addPost() {
    const post = createEmptyPost();
    setPosts((current) => [post, ...current]);
    setEditingId(post.id);
    setShowSection(false);
  }

  function deletePost(id: string) {
    setPosts((current) => current.filter((p) => p.id !== id));
    setEditingId(null);
  }

  async function saveSection() {
    if (!section) return;
    setSaving(true);
    setMessage(null);
    try {
      await saveDraftContent({ settings: { blog_section: section } });
      setMessage("Section blog enregistrée.");
    } catch {
      setMessage("Erreur.");
    } finally {
      setSaving(false);
    }
  }

  async function savePosts() {
    setSaving(true);
    setMessage(null);
    try {
      await saveDraftContent({ items: { blog_post: posts } });
      setMessage("Articles enregistrés.");
    } catch {
      setMessage("Erreur.");
    } finally {
      setSaving(false);
    }
  }

  if (loading || !section) return <AdminShell title="Blog"><p>Chargement…</p></AdminShell>;

  return (
    <AdminShell title="Blog" wide>
      {message && <div className="kt-admin__success">{message}</div>}

      {editingPost ? (
        <div className="kt-admin-blog-editor">
          <div className="kt-admin-blog-editor__toolbar">
            <button
              type="button"
              className="kt-admin__btn kt-admin__btn--ghost"
              onClick={() => setEditingId(null)}
            >
              <ArrowLeft size={18} aria-hidden />
              Retour à la liste
            </button>
            <div className="kt-admin-blog-editor__toolbar-actions">
              <button
                type="button"
                className="kt-admin__btn kt-admin__btn--danger"
                onClick={() => {
                  if (window.confirm("Supprimer cet article ?")) deletePost(editingPost.id);
                }}
              >
                Supprimer
              </button>
              <button
                type="button"
                className="kt-admin__btn kt-admin__btn--primary"
                disabled={saving}
                onClick={savePosts}
              >
                {saving ? "Enregistrement…" : "Enregistrer"}
              </button>
            </div>
          </div>

          <div className="kt-admin__card">
            <div className="kt-admin-blog-editor__head">
              <h2>{editingPost.title || "Nouvel article"}</h2>
              <span
                className={`kt-admin-blog-badge${editingPost.published ? " is-published" : ""}`}
              >
                {editingPost.published ? "Publié" : "Brouillon"}
              </span>
            </div>

            <div className="kt-admin__grid">
              <div className="kt-admin__field">
                <label>Titre</label>
                <input
                  value={editingPost.title}
                  onChange={(e) => updatePost(editingPost.id, { title: e.target.value })}
                />
              </div>
              <div className="kt-admin__field">
                <label>Slug URL</label>
                <input
                  value={editingPost.slug}
                  onChange={(e) => updatePost(editingPost.id, { slug: e.target.value })}
                  placeholder="mon-article"
                />
              </div>
              <div className="kt-admin__field">
                <label>Date de publication</label>
                <input
                  type="date"
                  value={editingPost.publishedAt ?? ""}
                  onChange={(e) => updatePost(editingPost.id, { publishedAt: e.target.value })}
                />
              </div>
              <ImageUploadField
                label="Image de couverture"
                value={editingPost.image ?? ""}
                onChange={(v) => updatePost(editingPost.id, { image: v })}
                hint="JPG, PNG, WebP ou GIF — max. 5 Mo"
              />
              <div className="kt-admin__field kt-admin__field--wide">
                <label>Extrait</label>
                <textarea
                  value={editingPost.excerpt}
                  onChange={(e) => updatePost(editingPost.id, { excerpt: e.target.value })}
                />
              </div>
              <RichTextEditor
                label="Contenu"
                value={editingPost.body}
                onChange={(html) => updatePost(editingPost.id, { body: html })}
                minHeight={280}
              />
              <label className="kt-admin__toggle">
                <input
                  type="checkbox"
                  checked={editingPost.published}
                  onChange={(e) => updatePost(editingPost.id, { published: e.target.checked })}
                />
                Publié sur le site
              </label>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="kt-admin-blog-list__toolbar">
            <p className="kt-admin-blog-list__hint">
              {sortedPosts.length} article{sortedPosts.length !== 1 ? "s" : ""} — les{" "}
              <strong>3 plus récents</strong> s&apos;affichent sur l&apos;accueil.
            </p>
            <div className="kt-admin-blog-list__toolbar-actions">
              <button
                type="button"
                className="kt-admin__btn kt-admin__btn--ghost"
                onClick={() => setShowSection((v) => !v)}
              >
                {showSection ? "Masquer la section" : "Section accueil"}
              </button>
              <button type="button" className="kt-admin__btn kt-admin__btn--primary" onClick={addPost}>
                <Plus size={18} aria-hidden />
                Nouvel article
              </button>
            </div>
          </div>

          {showSection && (
            <div className="kt-admin__card" style={{ marginBottom: "1.25rem" }}>
              <h2>Section sur la page d&apos;accueil</h2>
              <div className="kt-admin__grid">
                <div className="kt-admin__field">
                  <label>Surtitre</label>
                  <input
                    value={section.eyebrow ?? ""}
                    onChange={(e) => setSection({ ...section, eyebrow: e.target.value })}
                  />
                </div>
                <div className="kt-admin__field">
                  <label>Titre</label>
                  <input
                    value={section.title}
                    onChange={(e) => setSection({ ...section, title: e.target.value })}
                  />
                </div>
                <div className="kt-admin__field kt-admin__field--wide">
                  <label>Description</label>
                  <textarea
                    value={section.description ?? ""}
                    onChange={(e) => setSection({ ...section, description: e.target.value })}
                  />
                </div>
              </div>
              <div className="kt-admin__actions" style={{ marginTop: "1rem" }}>
                <button
                  type="button"
                  className="kt-admin__btn kt-admin__btn--primary"
                  disabled={saving}
                  onClick={saveSection}
                >
                  Enregistrer la section
                </button>
              </div>
            </div>
          )}

          <div className="kt-admin-blog-grid">
            <button type="button" className="kt-admin-blog-card kt-admin-blog-card--add" onClick={addPost}>
              <Plus size={32} aria-hidden />
              <span>Nouvel article</span>
            </button>

            {sortedPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                className="kt-admin-blog-card"
                onClick={() => setEditingId(post.id)}
              >
                <div className="kt-admin-blog-card__media">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt=""
                      width={400}
                      height={225}
                      className="kt-admin-blog-card__img"
                    />
                  ) : (
                    <span className="kt-admin-blog-card__placeholder" aria-hidden>
                      <BookOpen size={28} />
                    </span>
                  )}
                  <span
                    className={`kt-admin-blog-badge kt-admin-blog-card__badge${
                      post.published ? " is-published" : ""
                    }`}
                  >
                    {post.published ? "Publié" : "Brouillon"}
                  </span>
                </div>
                <div className="kt-admin-blog-card__body">
                  {post.publishedAt && (
                    <time className="kt-admin-blog-card__date" dateTime={post.publishedAt}>
                      {formatBlogDate(post.publishedAt)}
                    </time>
                  )}
                  <h3 className="kt-admin-blog-card__title">{post.title || "Sans titre"}</h3>
                  {post.excerpt && <p className="kt-admin-blog-card__excerpt">{post.excerpt}</p>}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </AdminShell>
  );
}
