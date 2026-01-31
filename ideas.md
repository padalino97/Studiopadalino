# Brainstorm Design V2 - Studio Sicurezza Padalino

## Nuovo Requisito del Cliente
- Design professionale da studio di CONSULENZA (NON industriale)
- Pagine dedicate per ogni servizio con spiegazioni dettagliate
- Struttura simile a ANFOS: contenuti approfonditi, ben organizzati
- Ogni pagina servizio deve spiegare: cosa è, cosa costa, come funziona

---

## Design Selezionato: "Authoritative Consulting"

### Design Movement
Professional Authority - Stile Studio Legale/Consulenza di Alto Livello. Elegante, sobrio, che ispira fiducia immediata.

### Core Principles
1. **Autorevolezza e competenza percepita** attraverso design pulito
2. **Contenuti strutturati** e facilmente navigabili
3. **Call-to-action strategiche** senza essere invasive
4. **Whitespace generoso** per respiro e leggibilità

### Color Philosophy
- **Primario**: Blu Professionale (#2563eb) - competenza, affidabilità
- **Secondario**: Grigio Antracite (#374151) - serietà, solidità
- **Accento CTA**: Verde WhatsApp (#25D366) per CTA
- **Sfondo**: Bianco (#ffffff) con sezioni grigio chiaro (#f9fafb)
- **Bordi**: Grigio medio (#e5e7eb)
- **Testo**: Grigio scuro (#111827) per massima leggibilità

### Layout Paradigm
**Homepage**:
- Header fisso con logo, navigazione dropdown servizi, CTA WhatsApp
- Hero pulito con titolo, sottotitolo, 2 CTA
- Griglia servizi (8 card)
- Sezione Chi Siamo
- Sezione Contatti
- Footer completo

**Pagine Servizio** (struttura ANFOS-like):
- Breadcrumb per orientamento
- Titolo H1 + sottotitolo
- Sidebar destra sticky con:
  - Box CTA WhatsApp
  - Info rapide (durata, costi, validità)
  - Link correlati
- Contenuto principale:
  - Introduzione (cos'è)
  - Sezioni dettagliate (come funziona, a chi serve)
  - Lista punti/servizi inclusi
  - Box prezzi/costi indicativi
  - FAQ accordion
  - CTA finale

### Signature Elements
1. **Box informativi** con icona e bordo sinistro blu
2. **Accordion** per FAQ e contenuti espandibili
3. **Card servizi** con hover elegante (lift + shadow)
4. **Badge** per normative (D.Lgs 81/08, ISO, etc.)
5. **Breadcrumb** per navigazione chiara

### Interaction Philosophy
- Navigazione chiara con dropdown servizi nel menu
- Sidebar sticky su pagine lunghe (desktop)
- WhatsApp button fisso in basso a destra
- Smooth scroll tra sezioni
- Form di contatto semplice

### Animation
- Fade-in al caricamento (300ms)
- Smooth scroll
- Accordion con transizione fluida (200ms)
- Hover lift leggero sulle card (transform: translateY(-4px))
- Nessuna animazione eccessiva o distraente

### Typography System
- **Heading**: Plus Jakarta Sans (600, 700) - moderno, autorevole
- **Body**: Inter (400, 500) - massima leggibilità
- **Sizes**: 
  - H1: 40px (mobile: 32px)
  - H2: 32px (mobile: 24px)
  - H3: 24px (mobile: 20px)
  - Body: 16px
  - Small: 14px
- **Line-height**: 1.6 per body, 1.2 per headings

### Struttura Pagine Servizio

Ogni pagina servizio avrà questa struttura:

```
1. HEADER (sticky)
   - Logo
   - Menu con dropdown servizi
   - CTA WhatsApp

2. BREADCRUMB
   Home > Servizi > [Nome Servizio]

3. HERO SERVIZIO
   - Titolo H1
   - Sottotitolo/descrizione breve
   - Immagine rappresentativa

4. LAYOUT A 2 COLONNE
   
   COLONNA SINISTRA (70%):
   - Sezione "Cos'è"
   - Sezione "A chi si rivolge"
   - Sezione "Cosa include" (lista)
   - Sezione "Come funziona" (step)
   - Sezione "Normativa di riferimento"
   - Sezione "Costi" (tabella o box)
   - FAQ Accordion
   - CTA finale

   COLONNA DESTRA (30%) - SIDEBAR STICKY:
   - Box CTA WhatsApp
   - Info rapide (icona + testo)
   - Servizi correlati
   - Download (se presenti)

5. FOOTER
```

### Servizi da Creare (8 pagine dedicate)

1. **Sicurezza sul Lavoro** - DVR, RSPP, valutazioni rischi
2. **Medicina del Lavoro** - Visite mediche, medico competente
3. **Formazione** - Corsi obbligatori, attestati
4. **Autorizzazioni Sanitarie** - Apertura ambulatori, accreditamento
5. **Sistemi di Qualità ISO** - ISO 9001, 14001, 45001
6. **HACCP** - Sicurezza alimentare
7. **Privacy GDPR** - Protezione dati
8. **Sicurezza Cantieri** - CSP, CSE, PSC
