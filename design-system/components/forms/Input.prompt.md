Labelled text field with optional icon, hint and error.

```jsx
<Input label="Nom complet" placeholder="Votre nom" required icon="user-round" />
<Input label="Téléphone" type="tel" icon="phone" hint="Format : +237 6XX XX XX XX" />
<Input label="Motif de consultation" multiline placeholder="Décrivez vos symptômes…" />
<Input label="Email" error="Adresse invalide" icon="mail" />
```

Props: `label`, `hint`, `error`, `required`, `icon`, `multiline`, plus all native input attrs.
