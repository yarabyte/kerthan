/* Clinique Kerthan — Website UI kit · header + hero + services + about
   Babel script: reads primitives from the DS namespace, exports parts to window. */
const NS = window.CliniqueKerthanDesignSystem_0add2c;
const { Button, IconButton, Badge, Icon, ServiceCard, StatCard, SectionHeading, ContactItem, Card } = NS;

const NAV = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'histoire', label: 'Notre histoire' },
  { id: 'services', label: 'Services' },
  { id: 'interne', label: 'Médecine interne' },
  { id: 'contact', label: 'Contact' },
];

function TopBar() {
  return (
    <div className="kt-topbar">
      <div className="kt-container kt-topbar__inner">
        <div className="kt-topbar__contacts">
          <span><Icon name="phone" size={14} /> Urgences 24/7 : <strong>+237 699 41 61 53</strong></span>
          <span className="kt-hide-sm"><Icon name="map-pin" size={14} /> 1ère rue Nangah, Bonaberi — Douala</span>
        </div>
        <div className="kt-topbar__social">
          <span className="kt-hide-sm">Nous suivre</span>
          <IconButton icon="facebook" variant="ghost" size="sm" label="Facebook" />
          <IconButton icon="music" variant="ghost" size="sm" label="TikTok" />
        </div>
      </div>
    </div>
  );
}

function Header({ active, onNav, onBook }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="kt-header">
      <div className="kt-container kt-header__inner">
        <a className="kt-brand" href="#accueil" onClick={(e) => { e.preventDefault(); onNav('accueil'); }}>
          <img src="../../assets/logo-seal.png" alt="Clinique Kerthan" className="kt-brand__mark" />
          <span className="kt-brand__text">
            <span className="kt-brand__name">Clinique Kerthan</span>
            <span className="kt-brand__tag">We Care · depuis 2004</span>
          </span>
        </a>
        <nav className={`kt-nav ${open ? 'is-open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}
               className={`kt-nav__link ${active === n.id ? 'is-active' : ''}`}
               onClick={(e) => { e.preventDefault(); onNav(n.id); setOpen(false); }}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="kt-header__cta">
          <Button variant="primary" size="sm" leftIcon={<Icon name="calendar-check" size={17} />}
                  onClick={onBook}>Rendez-vous</Button>
          <span className="kt-burger">
            <IconButton icon={open ? 'x' : 'menu'} variant="outline" label="Menu" onClick={() => setOpen(!open)} />
          </span>
        </div>
      </div>
    </header>
  );
}

function Hero({ onBook, onNav }) {
  return (
    <section id="accueil" className="kt-hero">
      <div className="kt-container kt-hero__grid">
        <div className="kt-hero__copy">
          <Badge tone="green" dot>Clinique privée · Bonaberi, Douala</Badge>
          <h1 className="kt-hero__title">Votre santé, soignée avec <span className="kt-underline">compassion</span>.</h1>
          <p className="kt-hero__lead">
            Depuis 2004, la Clinique Kerthan offre des soins médicaux de qualité dans un
            environnement chaleureux et humain — avec professionnalisme, rigueur et humanité.
          </p>
          <div className="kt-motto">
            <span>Accueil</span><i>—</i><span>Confort</span><i>—</i><span>Compétence</span>
          </div>
          <div className="kt-hero__actions">
            <Button variant="primary" size="lg" leftIcon={<Icon name="calendar-check" size={19} />} onClick={onBook}>
              Prendre rendez-vous
            </Button>
            <Button variant="secondary" size="lg" leftIcon={<Icon name="stethoscope" size={18} />}
                    onClick={() => onNav('services')}>Nos services</Button>
          </div>
        </div>
        <div className="kt-hero__visual">
          <div className="kt-hero__card">
            <img src="../../assets/logo-seal.png" alt="Sceau Clinique Kerthan" className="kt-hero__seal" />
            <p className="kt-script">We Care</p>
            <p className="kt-hero__sig">20 years of compassionate care</p>
            <img src="../../assets/motif-heartbeat.png" alt="" className="kt-hero__pulse" />
          </div>
          <div className="kt-hero__chip kt-hero__chip--1">
            <Icon name="shield-check" size={20} color="var(--green-600)" />
            <div><strong>Soins certifiés</strong><span>aux standards en vigueur</span></div>
          </div>
          <div className="kt-hero__chip kt-hero__chip--2">
            <Icon name="clock" size={20} color="var(--gold-600)" />
            <div><strong>Urgences 24/7</strong><span>toujours à votre écoute</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="kt-stats">
      <div className="kt-container kt-stats__row">
        <StatCard value="20" suffix="ans" label="d'expérience à Douala" align="center" />
        <StatCard value="6" label="services médicaux" tone="gold" align="center" />
        <StatCard value="24/7" label="service d'urgences" tone="red" align="center" />
        <StatCard value="100%" label="approche humaine" align="center" />
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: 'stethoscope', tone: 'green', title: 'Médecine générale & spécialités', desc: 'Consultations, diagnostics et suivi médical pour toute la famille.' },
  { icon: 'heart-pulse', tone: 'red', title: 'Médecine interne', desc: 'Prévention et traitement des maladies chroniques et des cas complexes de l\'adulte.' },
  { icon: 'briefcase-medical', tone: 'gold', title: 'SMILE — Inter-entreprises', desc: 'Service Médical Inter-entreprise de Liaison et d\'Expertise pour les entreprises.' },
  { icon: 'plane', tone: 'green', title: 'CMTH — Voyage & migration', desc: 'Centre for Migration and Travel Health : bilans et vaccins du voyageur.' },
  { icon: 'scan', tone: 'gold', title: 'Imagerie médicale', desc: 'Examens d\'imagerie pour un diagnostic précis et rapide.' },
  { icon: 'microscope', tone: 'red', title: 'Laboratoire d\'analyses', desc: 'Analyses biologiques fiables, réalisées dans nos propres locaux.' },
];

function Services({ onBook }) {
  return (
    <section id="services" className="kt-section">
      <div className="kt-container">
        <SectionHeading eyebrow="Nos services" align="center"
          title="Un plateau technique complet"
          description="De la médecine générale au laboratoire d'analyses, tous vos soins réunis en un seul lieu." />
        <div className="kt-services__grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} tone={s.tone} title={s.title} description={s.desc} href="#contact"
              onClick={(e) => { e.preventDefault(); onBook(); }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    'Écoute attentive du patient',
    'Explication claire des diagnostics',
    'Prise en charge personnalisée',
    'Coordination des soins spécialisés',
    'Maîtrise des coûts en environnement à ressources limitées',
  ];
  return (
    <section id="histoire" className="kt-section kt-section--soft">
      <div className="kt-container kt-about__grid">
        <div className="kt-about__media">
          <div className="kt-about__photo">
            <Icon name="hospital" size={46} color="rgba(255,255,255,.9)" />
            <span>Façade de la Clinique Kerthan — Bonaberi</span>
          </div>
          <div className="kt-about__badge">
            <span className="kt-about__since">Depuis</span>
            <strong>Mars 2004</strong>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Notre histoire"
            title="D'un cabinet médical à une clinique moderne"
            description="Créée en mars 2004 sous la forme de Cabinet Médical, la Clinique Kerthan n'a cessé d'évoluer pour devenir aujourd'hui un établissement moderne doté d'un plateau technique complet, dans le district de santé de Bonassama." />
          <ul className="kt-checklist">
            {points.map((p) => (
              <li key={p}><Icon name="check" size={16} color="#fff" /> {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TopBar, Header, Hero, Stats, Services, About, NAV });
