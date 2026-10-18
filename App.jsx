import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Compass, Cpu, Facebook, Globe2, Menu, MessageCircle, Sparkles, X } from 'lucide-react';
import OrbScene from './components/OrbScene.jsx';

const copy = {
  en: {
    nav: ['About', 'Interests', 'Skills', 'Contact'],
    eyebrow: 'A LITTLE CURIOSITY GOES A LONG WAY',
    headlineA: 'Curious by', headlineB: 'nature.',
    intro: 'An AI explorer, travel lover and curious reader. I explore digital creativity, technology and new ideas.',
    cta: 'Let’s connect', explore: 'Explore my world', scroll: 'SCROLL TO EXPLORE',
    aboutTag: '01 / THE HUMAN BEHIND THE SCREEN', aboutTitle: 'Always learning.\nAlways exploring.',
    aboutText: 'I’m Jihad — drawn to the ideas shaping tomorrow, the places that broaden perspective, and the books that make me think differently. I’m building my skills in digital marketing, creative design and AI, one experiment at a time.',
    note: 'No finished case studies yet — just curiosity, learning, and the next thing to make.',
    interestsTag: '02 / WHAT PULLS ME IN', interestsTitle: 'Three ways I see\nthe world.',
    aiTitle: 'AI Explorer', aiText: 'Testing new tools, discovering possibilities and finding practical ways to make technology useful.',
    travelTitle: 'Travel Lover', travelText: 'New streets, unfamiliar views and little moments that turn into lasting memories.',
    readTitle: 'Curious Reader', readText: 'Following ideas across pages, collecting perspectives and staying open to new ways of thinking.',
    skillsTag: '03 / TOOLS IN MY TOOLKIT', skillsTitle: 'Learning to turn\nideas into impact.',
    skillsIntro: 'The areas I’m exploring and developing — with a focus on practical work and steady improvement.',
    skillNames: ['Digital Marketing', 'Facebook Ads', 'Graphic Design', 'AI Tools'],
    connectTag: '04 / SAY HELLO', connectTitle: 'Have an idea?\nLet’s talk.',
    connectText: 'Open to conversations, creative collaborations and freelance opportunities. Tell me what you’re working on.',
    whatsapp: 'Message on WhatsApp', facebook: 'Find me on Facebook', footer: 'Made with curiosity and a little cosmic energy.', top: 'BACK TO TOP',
  },
  bn: {
    nav: ['পরিচিতি', 'আগ্রহ', 'দক্ষতা', 'যোগাযোগ'],
    eyebrow: 'কৌতূহল থেকেই নতুন কিছুর শুরু',
    headlineA: 'কৌতূহলী মন,', headlineB: 'অসীম সম্ভাবনা।',
    intro: 'আমি AI নিয়ে ঘাঁটাঘাঁটি করতে ভালোবাসি, ভ্রমণ করি আর নতুন বই ও ধারণার ভেতর হারিয়ে যাই। প্রযুক্তি, সৃজনশীলতা ও নতুন কিছু শেখাই আমার আগ্রহ।',
    cta: 'যোগাযোগ করো', explore: 'আমার জগৎ দেখো', scroll: 'আরও দেখতে স্ক্রল করো',
    aboutTag: '০১ / পর্দার পেছনের মানুষটি', aboutTitle: 'শিখছি প্রতিনিয়ত।\nখুঁজছি নতুন দিগন্ত।',
    aboutText: 'আমি জিহাদ। আগামী দিনের প্রযুক্তি, নতুন জায়গা আর ভাবনার জগৎ খুলে দেয় এমন বই আমাকে টানে। Digital Marketing, Creative Design এবং AI নিয়ে ধীরে ধীরে দক্ষতা গড়ছি—প্রতিটি নতুন চেষ্টা থেকে কিছু শিখে।',
    note: 'এখনো দেখানোর মতো সম্পন্ন case study নেই—আছে শেখার আগ্রহ, কৌতূহল আর নতুন কিছু তৈরির ইচ্ছা।',
    interestsTag: '০২ / যে বিষয়গুলো আমাকে টানে', interestsTitle: 'পৃথিবীকে দেখার\nতিনটি জানালা।',
    aiTitle: 'AI Explorer', aiText: 'নতুন AI tools পরীক্ষা করা, সম্ভাবনা খোঁজা এবং প্রযুক্তিকে কাজে লাগানোর উপায় শেখা।',
    travelTitle: 'Travel Lover', travelText: 'নতুন রাস্তা, অচেনা দৃশ্য আর ছোট ছোট মুহূর্ত—যেগুলো স্মৃতি হয়ে থাকে।',
    readTitle: 'Curious Reader', readText: 'বইয়ের পাতায় নতুন ধারণা খোঁজা, ভিন্ন দৃষ্টিভঙ্গি জানা এবং চিন্তার পরিসর বাড়ানো।',
    skillsTag: '০৩ / আমার শেখার টুলকিট', skillsTitle: 'ধারণা থেকে\nকাজের ফলাফলে।',
    skillsIntro: 'যে বিষয়গুলোতে দক্ষতা তৈরি করছি—বাস্তব কাজ, অনুশীলন এবং নিয়মিত উন্নতির মাধ্যমে।',
    skillNames: ['Digital Marketing', 'Facebook Ads', 'Graphic Design', 'AI Tools'],
    connectTag: '০৪ / কথা বলা যাক', connectTitle: 'কোনো আইডিয়া আছে?\nআলাপ করি।',
    connectText: 'নতুন পরিচয়, creative collaboration এবং freelance কাজের ব্যাপারে কথা বলতে আগ্রহী। তোমার পরিকল্পনার কথা জানাও।',
    whatsapp: 'WhatsApp-এ মেসেজ দাও', facebook: 'Facebook-এ খুঁজে নাও', footer: 'কৌতূহল আর একটু cosmic energy দিয়ে তৈরি।', top: 'ওপরে যাও',
  }
};

const skills = [
  { icon: Globe2, en: 'Digital Marketing', bn: 'Digital Marketing', desc: 'Audience, content & online growth' },
  { icon: MessageCircle, en: 'Facebook Ads', bn: 'Facebook Ads', desc: 'Campaign ideas & ad creative' },
  { icon: Sparkles, en: 'Graphic Design', bn: 'Graphic Design', desc: 'Visual storytelling & layouts' },
  { icon: Cpu, en: 'AI Tools', bn: 'AI Tools', desc: 'Experimenting with new workflows' },
];

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduced ? 0 : 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduced ? 0.2 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = copy[lang];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navIds = ['about', 'interests', 'skills', 'contact'];
  const phone = '8801595358912';
  const handlePortraitMove = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--tilt-y', `${x * 12 - 3}deg`);
    el.style.setProperty('--tilt-x', `${-y * 10}deg`);
  };
  const resetPortrait = (event) => { event.currentTarget.style.setProperty('--tilt-y', '-7deg'); event.currentTarget.style.setProperty('--tilt-x', '2deg'); };
  return <div className={`site ${lang === 'bn' ? 'is-bengali' : ''}`}>
    <div className="noise" aria-hidden="true" />
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <a href="#home" className="wordmark" aria-label="Jihad home"><span className="mark">J<span>.</span></span><span className="wordmark-sub">PERSONAL UNIVERSE</span></a>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        {t.nav.map((label, i) => <a key={navIds[i]} href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact">{t.cta} <ArrowUpRight size={15}/></a>
      </nav>
      <div className="header-actions"><button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} aria-label="Switch language">{lang === 'en' ? 'বাংলা' : 'EN'} <span className="lang-dot"/></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}><span className="eyebrow-line"/>{t.eyebrow}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }}><span>{t.headlineA}</span><br/><em>{t.headlineB}</em></motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .3 }}>{t.intro}</motion.p>
          <motion.div className="hero-buttons" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }}><a className="button button-primary" href="#contact">{t.cta}<ArrowUpRight size={17}/></a><a className="text-link" href="#about">{t.explore}<ArrowDownRight size={17}/></a></motion.div>
          <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}><span className="status-dot"/> CURIOUS MIND · CREATIVE JOURNEY</motion.div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
          <div className="portrait-card" data-tilt onPointerMove={handlePortraitMove} onPointerLeave={resetPortrait}>
            <div className="portrait-glow"/>
            <img src="/images/portrait.png" className="hero-portrait" alt="Jihad seated outdoors at sunset" fetchPriority="high"/>
            <div className="portrait-gradient"/>
            <div className="portrait-caption"><span className="caption-kicker">MEET THE MIND</span><strong>Jihad<span>.</span></strong><small>AI · TRAVEL · IDEAS</small></div>
            <div className="portrait-chip"><Sparkles size={14}/> Open to possibilities</div>
          </div>
          <div className="orb-holder"><OrbScene/></div>
          <div className="float-label label-ai"><span className="label-icon"><Cpu size={15}/></span><span><b>AI curious</b><small>Always exploring</small></span></div>
          <div className="float-label label-read"><BookOpen size={16}/><span><b>Read. Reflect.</b><small>Repeat.</small></span></div>
          <div className="hero-index">01 <span>—</span> 04</div>
        </div>
        <a className="scroll-cue" href="#about"><span>{t.scroll}</span><ArrowDown size={15}/></a>
        <div className="hero-side-note">INFINITE CURIOSITY <span>✳</span> OPEN MIND</div>
      </section>

      <section className="about section-wrap section-space" id="about">
        <Reveal className="section-label"><span>{t.aboutTag}</span><span className="label-rule"/></Reveal>
        <div className="about-grid">
          <Reveal><h2>{t.aboutTitle.split('\n').map((s, i) => <React.Fragment key={s}>{i > 0 && <br/>}{s}</React.Fragment>)}</h2></Reveal>
          <Reveal delay={.12} className="about-body"><p>{t.aboutText}</p><div className="about-note"><span className="note-star">✳</span><span>{t.note}</span></div><div className="about-signature">Jihad <span>↗</span></div></Reveal>
        </div>
        <div className="about-image-row"><Reveal className="formal-image-wrap"><img src="/images/formal.jpg" alt="Jihad in a white formal shirt" loading="lazy"/><span className="image-index">A MOMENT, NOT A MILESTONE</span></Reveal><Reveal className="image-side-copy" delay={.12}><span className="big-quote">“</span><p>{lang === 'en' ? 'The best way to predict the future is to keep learning, keep asking, and keep making.' : 'ভবিষ্যৎকে কাছে পাওয়ার উপায়—শিখতে থাকা, প্রশ্ন করতে থাকা, আর নতুন কিছু তৈরি করা।'}</p><span className="tiny-rule"/></Reveal></div>
      </section>

      <section className="interests section-wrap section-space" id="interests">
        <Reveal className="section-label"><span>{t.interestsTag}</span><span className="label-rule"/></Reveal>
        <Reveal><h2 className="section-heading">{t.interestsTitle.split('\n').map((s, i) => <React.Fragment key={s}>{i > 0 && <br/>}{s}</React.Fragment>)}</h2></Reveal>
        <div className="interest-grid">
          {[{n:'01',icon:Cpu,title:t.aiTitle,text:t.aiText,word:'FUTURE'},{n:'02',icon:Compass,title:t.travelTitle,text:t.travelText,word:'WANDER'},{n:'03',icon:BookOpen,title:t.readTitle,text:t.readText,word:'WONDER'}].map((item, i) => {const Icon = item.icon; return <Reveal key={item.n} delay={i * .1} className={`interest-card interest-${i+1}`}><div className="interest-top"><span>{item.n} / 03</span><ArrowUpRight size={17}/></div><div className="interest-art"><span className="art-ring ring-a"/><span className="art-ring ring-b"/><Icon size={39} strokeWidth={1.15}/><span className="art-word">{item.word}</span></div><div className="interest-content"><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>})}
        </div>
      </section>

      <section className="skills section-wrap section-space" id="skills">
        <Reveal className="section-label"><span>{t.skillsTag}</span><span className="label-rule"/></Reveal>
        <div className="skills-head"><Reveal><h2 className="section-heading">{t.skillsTitle.split('\n').map((s, i) => <React.Fragment key={s}>{i > 0 && <br/>}{s}</React.Fragment>)}</h2></Reveal><Reveal delay={.1}><p className="skills-intro">{t.skillsIntro}</p></Reveal></div>
        <div className="skill-list">{skills.map((skill, i) => {const Icon = skill.icon; return <Reveal key={skill.en} delay={i * .05} className="skill-row"><span className="skill-num">0{i+1}</span><span className="skill-icon"><Icon size={20} strokeWidth={1.5}/></span><div className="skill-main"><h3>{t.skillNames[i]}</h3><p>{skill.desc}</p></div><span className="skill-state"><span/> EXPLORING</span><ArrowUpRight className="skill-arrow" size={19}/></Reveal>})}</div>
        <div className="learning-banner"><Sparkles size={18}/><span>{lang === 'en' ? 'Curiosity is the skill I bring to everything.' : 'প্রতিটি কাজে আমার সবচেয়ে বড় শক্তি—কৌতূহল।'}</span><span className="banner-line"/></div>
      </section>

      <section className="contact section-wrap section-space" id="contact">
        <div className="contact-backglow"/>
        <Reveal className="section-label"><span>{t.connectTag}</span><span className="label-rule"/></Reveal>
        <div className="contact-grid"><Reveal><h2>{t.connectTitle.split('\n').map((s, i) => <React.Fragment key={s}>{i > 0 && <br/>}{s}</React.Fragment>)}</h2></Reveal><Reveal delay={.12} className="contact-copy"><p>{t.connectText}</p><a className="button button-primary button-large" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{t.whatsapp}<ArrowUpRight size={17}/></a><a className="facebook-link" href="https://www.facebook.com/share/1CcMCmbyPZ/" target="_blank" rel="noreferrer"><Facebook size={17}/>{t.facebook}<ArrowUpRight size={15}/></a></Reveal></div>
        <div className="contact-bottom"><span>JIHAD / DIGITAL WORLD</span><span>GOOD THINGS START WITH A HELLO <span className="sun-icon">✳</span></span></div>
      </section>
    </main>
    <footer className="footer section-wrap"><a href="#home" className="footer-logo">J<span>.</span></a><p>© {new Date().getFullYear()} Jihad. {t.footer}</p><a href="#home" className="back-top">{t.top}<ArrowUpRight size={14}/></a></footer>
  </div>;
}
