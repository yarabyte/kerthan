/* Clinique Kerthan — Website UI kit · internal medicine + appointment + footer */
const NS2 = window.CliniqueKerthanDesignSystem_0add2c;
const { Button, IconButton, Badge, Icon, Card, Input, Select, Checkbox, Alert, SectionHeading, ContactItem, StatCard } = NS2;

function InternalMed() {
  const items = [
    { icon: 'activity', t: 'Maladies chroniques', d: 'Diabète, hypertension, VIH/SIDA, maladies rhumatismales.' },
    { icon: 'layers', t: 'Cas complexes', d: 'Prise en charge quand plusieurs maladies coexistent.' },
    { icon: 'route', t: 'Coordination des soins', d: 'Orientation vers la chirurgie ou les autres spécialistes.' },
    { icon: 'graduation-cap', t: 'Prévention & éducation', d: 'Comprendre sa santé et se maintenir en bon état.' },
  ];
  return (
    <section id="interne" className="kt-imed">
      <div className="kt-container kt-imed__grid">
        <div className="kt-imed__intro">
          <SectionHeading light eyebrow="Spécialité phare"
            title="La médecine interne"
            description="La combinaison de la science et de l'art de soigner. L'interniste, formé pendant au moins 3 années supplémentaires, accompagne l'adulte tout au long de son parcours de santé." />
          <p className="kt-script kt-imed__quote">« Science &amp; art de soigner »</p>
        </div>
        <div className="kt-imed__cards">
          {items.map((it) => (
            <div key={it.t} className="kt-imed__card">
              <span className="kt-imed__icon"><Icon name={it.icon} size={22} color="var(--gold-300)" /></span>
              <div>
                <strong>{it.t}</strong>
                <p>{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" className="kt-section">
      <div className="kt-container kt-appt__grid">
        <div className="kt-appt__info">
          <SectionHeading eyebrow="Prendre rendez-vous"
            title="Nous sommes à votre écoute"
            description="Remplissez le formulaire ou contactez-nous directement. Les urgences restent prioritaires sur les rendez-vous programmés." />
          <div className="kt-appt__contacts">
            <ContactItem icon="phone" label="Standard" value="+237 699 41 61 53" href="tel:+237699416153" />
            <ContactItem icon="phone-call" label="Second numéro" value="+237 688 02 08 26" href="tel:+237688020826" tone="gold" />
            <ContactItem icon="map-pin" label="Adresse" value="1ère rue Nangah N°303, face lycée bilingue de Bonaberi" />
            <ContactItem icon="globe" label="Site web" value="www.kerthan.org" href="https://www.kerthan.org" />
          </div>
          <div className="kt-appt__hours">
            <Badge tone="green" dot>Ouvert aujourd'hui</Badge>
            <span>Lun – Sam · 07h30 – 19h00 &nbsp;·&nbsp; Urgences 24h/24</span>
          </div>
        </div>

        <Card className="kt-appt__form">
          {sent ? (
            <div className="kt-appt__sent">
              <Alert tone="success" title="Demande envoyée">
                Merci ! Notre équipe vous rappellera très vite pour confirmer votre rendez-vous.
              </Alert>
              <Button variant="secondary" onClick={() => setSent(false)} leftIcon={<Icon name="rotate-ccw" size={16} />}>
                Nouvelle demande
              </Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="kt-form__row">
                <Input label="Nom complet" placeholder="Votre nom" icon="user-round" required />
                <Input label="Téléphone" type="tel" placeholder="+237 6XX XX XX XX" icon="phone" required />
              </div>
              <Select label="Service souhaité" placeholder="Choisir un service"
                options={['Médecine générale', 'Médecine interne', 'Imagerie médicale', 'Laboratoire d\'analyses', 'SMILE — inter-entreprises', 'CMTH — santé du voyageur']} />
              <Input label="Message (optionnel)" multiline placeholder="Décrivez brièvement le motif de votre consultation…" />
              <Checkbox label="J'accepte d'être recontacté(e) par téléphone ou SMS." defaultChecked />
              <Button type="submit" variant="primary" fullWidth size="lg" leftIcon={<Icon name="send" size={18} />}>
                Envoyer ma demande
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="kt-footer">
      <div className="kt-container kt-footer__grid">
        <div className="kt-footer__brand">
          <img src="../../assets/logo-seal.png" alt="Clinique Kerthan" className="kt-footer__mark" />
          <p className="kt-footer__name">Clinique Kerthan</p>
          <p className="kt-footer__mission">Établissement de santé privé · Douala IV, Bonassama. Vingt ans de soins prodigués avec compassion.</p>
          <div className="kt-footer__social">
            <IconButton icon="facebook" variant="outline" label="Facebook" />
            <IconButton icon="music" variant="outline" label="TikTok" />
            <IconButton icon="globe" variant="outline" label="Site web" />
          </div>
        </div>
        <div className="kt-footer__col">
          <h4>Navigation</h4>
          {window.NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); onNav(n.id); }}>{n.label}</a>
          ))}
        </div>
        <div className="kt-footer__col">
          <h4>Nos services</h4>
          <a href="#services" onClick={(e) => { e.preventDefault(); onNav('services'); }}>Médecine générale</a>
          <a href="#interne" onClick={(e) => { e.preventDefault(); onNav('interne'); }}>Médecine interne</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); onNav('services'); }}>Imagerie médicale</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); onNav('services'); }}>Laboratoire</a>
        </div>
        <div className="kt-footer__col">
          <h4>Contact</h4>
          <p><Icon name="phone" size={14} /> +237 699 41 61 53</p>
          <p><Icon name="phone" size={14} /> +237 688 02 08 26</p>
          <p><Icon name="map-pin" size={14} /> 1ère rue Nangah N°303,<br/>Bonaberi — Douala</p>
          <p><Icon name="globe" size={14} /> www.kerthan.org</p>
        </div>
      </div>
      <div className="kt-container kt-footer__bottom">
        <span>© 2026 Clinique Kerthan — Tous droits réservés.</span>
        <span className="kt-footer__care">We Care!</span>
      </div>
    </footer>
  );
}

Object.assign(window, { InternalMed, Appointment, Footer });
