import { GithubIcon, LinkedinIcon, LucideChartNoAxesColumn, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* ================= HEADER ================= */}
        <header style={styles.header}>
          <h1 style={styles.name}>Jinish Thomas</h1>
          <p style={styles.title}>
            Softwareentwickler (Entwicklung / Test) | IT
          </p>
          <p style={styles.subtitle}>
            Deutschland · Offen für Software- / Testingenieur-Positionen
          </p>

          <div style={styles.iconRow}>
            <a href="https://github.com/Jinisht" target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/jinishthomas/" target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
            <a href="mailto:jinishthomas88@gmail.com">
              <Mail />
            </a>
          </div>
        </header>

        {/* ================= ÜBER MICH ================= */}
        <Section title="Über mich">
          <p>
            Test- und Entwicklungsingenieur mit über 4 Jahren Erfahrung in
            Softwaretests, Testautomatisierung und Embedded Softwareentwicklung.
            Starke Kenntnisse in Python, C/C++, HIL-Tests und agilen Methoden.
          </p>
        </Section>

        {/* ================= FÄHIGKEITEN ================= */}
        <Section title="Fähigkeiten">
          <div style={styles.skillGrid}>
            {[
              "Python", "C / C++", "LUA", "Git & GitHub", "CAN / FlexRay / Ethernet",
              "HIL-Tests", "Linux (Bash)", "Agil (Scrum, Kanban)",
              "Visual Studio Code, Pycharm, Anconda",
              "Vector CANoe, vTESTstudio, EXAM, Ranorex",
              "ISTQB Zertifikat",
              "JIRA, Confluence"
            ].map(skill => (
              <span key={skill} style={styles.skillChip}>{skill}</span>
            ))}
          </div>
        </Section>

        {/* ================= BERUFSERFAHRUNG ================= */}
        <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "16px" }}>
        Berufserfahrung
        </h2>

            <ExperienceCard
        role="Test- & Entwicklungsingenieur"
        company="in-tech GmbH"
        duration="Okt 2022 – Feb 2026"
        projects={[
          {
            title: "Projekt 1: BMW – Crowd Data Collector (CDC)",
            points: [
              "Weiterentwicklung und Pflege von LUA-Skripten mit CI/CD",
              "Analyse großer Fahrzeugdatensätze (Big Data) in AWS",
              "Versionsverwaltung mit Git und GitHub"
            ],
            tech: "Linux, LUA, Python, AWS, Git, CI/CD, Advantage, Brian, Splunk, Jira, Confluence"
          },
          {
            title: "Projekt 2: KTM Motorrad – ePP Labbike T200 (HIL)",
            points: [
              "Automatisierte HIL-Tests mit CANoe und vTESTstudio",
              "Test von Battery Handling, Drive Mode Handling und Vehicle State Machine",
              "Erstellung und Pflege von Testspezifikationen"
            ],
            tech: "CANoe, vTESTstudio, HIL, Vector Tools"
          },
          {
            title: "Projekt 3: In-tech internes Projekt – Embedded Software",
            points: [
              "Embedded Softwareentwicklung auf Raspberry Pi (Linux)",
              "Python-Entwicklung nach Scrum-Methodik",
              "Sprintplanung, Reviews und Retrospektiven"
            ],
            tech: "Python, Linux, Raspberry Pi, Git, Scrum, Jira, Confluence, Unit Tests, CI/CD, EXAM"
          },
          {
            title: "Projekt 4: CARIAD – Buskommunikation & Fehleranalyse",
            points: [
              "Analyse von NMH-, E2E- und Knockout-Tests",
              "Fehleranalyse für CAN, FlexRay und Ethernet",
              "Dokumentation und Abstimmung mit Entwicklungsteams"
            ],
            tech: "CAN, FlexRay, Ethernet, CANoe, Python"
          }
        ]}
      />

      <ExperienceCard
        role="Praktikum & Masterarbeit"
        company="ADC Continental GmbH"
        duration="Juni 2021 – Sept 2022"
        projects={[
          {
            title: "Masterarbeit: Entwicklung von Softwarearchitekturen für den Systemtest",
            points: [
              "Entwicklung einer Softwarearchitektur für Radarsensor-Systemtests gemäß SDLC"
            ],
            tech: "Python, CANoe, Systemtest, SDLC, Software Architectur"
          },
          {
            title: "Praktikum: Radarsensor-Systemtest",
            points: [
             "Durchführung manueller Testfälle zur Leistungsprüfung und für Homologationstests von Radarsensoren (Systemtest)",
             <p>Einsatz von Messmitteln und Tools wie Spektrumanalysator, dSPACE Radar Target Simulator, Oszilloskop,<br />
              Vector CANoe (Restbussimulation), Measurement Interface (MI5),     Temperaturkammer, XCP und Wireshark </p>
              
            ],
            tech: "CAN,Ethernet, CANoe, Python, Radar Sensor, Python, Flashing, Simulation"
          }
        ]}
      />
    </section>
        {/* ================= AUSBILDUNG ================= */}
<Section title="Ausbildung">

  <div style={styles.card}>
    <h3 style={styles.cardTitle}>
      Master of Engineering  – Simulation Und System Design
    </h3>
    <p style={styles.cardSubtitle}>
      Hochschule Stralsund · 2020 – 2022
    </p>
    <ul style={styles.list}>
      <li>Schwerpunkt: Fahrzeugsysteme und Simulation, Informatik, Mathematik </li>
      <li>Masterarbeit im Bereich Systemtest von Radarsensoren</li>
      <li>Praxisorientierte Projekte mit Fokus auf Automotive Software</li>
    </ul>
  </div>

  <div style={styles.card}>
    <h3 style={styles.cardTitle}>
      Bachelor of Technology (B.Tech.) – Maschinenbau
    </h3>
    <p style={styles.cardSubtitle}>
      Anna University- Indien · 2007 – 2011
    </p>
    <ul style={styles.list}>
      <li>Grundlagen in Robotik, Simulation und Regelungstechnik</li>
      <li>Programmierung in C, C++ und Python</li>
    </ul>
  </div>

  <div style={styles.card}>
    <h3 style={styles.cardTitle}>
      Weiterbildung  – Embedded System Softwareentwicklung
    </h3>
    <p style={styles.cardSubtitle}>
      Emertxe Information Technologies, Bangalore, Indien · 2025 – 2026
    </p>
    <ul style={styles.list}>
      <li>Schwerpunkt: Linux Systems: Linux-Kommandos, Shell, Pipes, VIM-Editor </li>
      <li>C Programmierung: Operatoren, Loops, Arrays, Funktionen,
          Pointers, Strings, Structures, Storage classes</li>
      <li>Datenstrukturen, C++ (OOP).</li> 
      <li> Mikrocontroller, Linux Internals Networking, Embedded Linux.</li>
    </ul>
  </div>

</Section>


        {/* ================= PROJEKTE ================= */}
        <Section title="Projekte">

          <ProjectCard
            title="SpaceX Launch Tracker"
            description={[
              "Problem: Notwendigkeit zur Analyse der SpaceX-Startdaten",
              "Lösung: Entwicklung einer Python-Anwendung unter Nutzung der SpaceX-API",
              "Ergebnis: Visualisierung von Starts, Missionsdetails und Statistiken"
            ]}
            tech="Python, REST API, Datenvisualisierung"
            link="https://github.com/Jinisht/SpaceX_Launch_Tracker"
          />

          <ProjectCard
            title="Adressbuch-Anwendung"
            description={[
              "Konsolenbasierte C-Anwendung zur Verwaltung von Kontakten",
              "Unterstützt CRUD-Operationen mit Dateiverwaltung",
              "Fokus auf Speicherverwaltung und Datenstrukturen"
            ]}
            tech="C, Dateiverarbeitung, Datenstrukturen"
            link="https://github.com/Jinisht"
          />

        </Section>

        {/* ================= ERFOLGE ================= */}
        <Section title="Erfolge">
          <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
            <li>ISTQB Certified Tester-Foundation</li>
            <li>Deutsch (B2)</li>
            <li>Führerschein–Klasse B</li>
          </ul>
        </Section>

        {/* ================= FOOTER ================= */}
        <footer style={styles.footer}>
          © 2025 Jinish Thomas · Portfolio
        </footer>

      </div>
    </div>
  );
}

/* ================= WIEDERVERWENDBARE KOMPONENTEN ================= */
function Section({ title, children }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function ExperienceCard({ role, company, duration, projects }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{role}</h3>
      <p style={styles.cardSubtitle}>
        {company} · {duration}
      </p>

      {projects.map((project, index) => (
        <div key={index} style={styles.projectBlock}>
          <h4 style={styles.projectTitle}>{project.title}</h4>

          <ul style={styles.list}>
            {project.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <p style={styles.projectTech}>
            <strong>Tech Stack:</strong> {project.tech}
          </p>
        </div>
      ))}
    </div>
  );
}


function ProjectCard({ title, description, tech, link }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <ul style={styles.list}>
        {description.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
      <p style={styles.tech}><strong>Tech:</strong> {tech}</p>
      <a href={link} target="_blank" rel="noreferrer" style={styles.link}>
        GitHub Repository →
      </a>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: { backgroundColor: "#f3f4f6", minHeight: "100vh" },
  container: { maxWidth: "1000px", margin: "0 auto", padding: "40px 20px", fontFamily: "Inter, Arial, sans-serif", color: "#111827" },
  header: { textAlign: "center", marginBottom: "60px" },
  name: { fontSize: "2.6rem", fontWeight: "700" },
  title: { marginTop: "10px", fontSize: "1.1rem" },
  subtitle: { fontSize: "0.95rem", color: "#6b7280" },
  iconRow: { display: "flex", justifyContent: "center", gap: "18px", marginTop: "16px" },

  section: { marginBottom: "60px" },
  sectionTitle: { fontSize: "1.6rem", fontWeight: "600", marginBottom: "20px" },

  card: { background: "#fff", padding: "20px", borderRadius: "14px", boxShadow: "0 10px 20px rgba(0,0,0,0.08)", marginBottom: "20px" },
  cardTitle: { fontSize: "1.2rem", fontWeight: "600" },
  cardSubtitle: { fontSize: "0.9rem", color: "#6b7280", marginBottom: "12px" },
  list: { paddingLeft: "20px", lineHeight: "1.6" },
  tech: { marginTop: "10px", fontSize: "0.9rem" },

  skillGrid: { display: "flex", flexWrap: "wrap", gap: "10px" },
  skillChip: { background: "#e5e7eb", padding: "6px 12px", borderRadius: "999px", fontSize: "0.85rem" },

  link: { color: "#2563eb", fontSize: "0.9rem", fontWeight: "500" },
  footer: { textAlign: "center", fontSize: "0.85rem", color: "#6b7280", marginTop: "60px" }
};
