#!/usr/bin/env node
const bcrypt = require("bcryptjs");

const password = process.argv[2];
if (!password) {
  console.error("Usage: npm run admin:hash -- MotDePasse");
  process.exit(1);
}

bcrypt.hash(password, 12).then((hash) => {
  const b64 = Buffer.from(hash, "utf8").toString("base64");
  console.log("Ajoutez dans .env (recommandé — compatible Next.js/Vercel) :");
  console.log(`ADMIN_PASSWORD_HASH_B64=${b64}`);
  console.log("");
  console.log("Hash bcrypt brut (référence) :");
  console.log(hash);
});
