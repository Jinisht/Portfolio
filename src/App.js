import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        ...styles.page,
        background: darkMode ? theme.dark.pageBg : theme.light.pageBg,
        color: darkMode ? theme.dark.text : theme.light.text,
      }}
    >
      <div
        style={{
          ...styles.container,
          backgroundColor: darkMode
            ? theme.dark.containerBg
            : theme.light.containerBg,
        }}
      >

        {/* ================= HEADER ================= */}
        <header style={styles.header}>
          <h1 style={styles.name}>Jinish Thomas</h1>
          <p style={styles.title}>
            Softwareingenieur (Entwicklung / Test) | IT
          </p>
          <p style={styles.subtitle}>
            Deutschland · Offen für Software Entwicklung / Testautomatisierung / Testingenieur-Positionen
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="https://github.com/Jinisht" target="_blank" rel="noreferrer"
              style={{ padding: "8px 16px", backgroundColor: "#333", color: "#fff", borderRadius: "8px", textDecoration: "none" }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jinishthomas/" target="_blank" rel="noreferrer"
              style={{ padding: "8px 16px", backgroundColor: "#0a66c2", color: "#fff", borderRadius: "8px", textDecoration: "none" }}>
              LinkedIn
            </a>
            <span style={{ padding: "8px 16px", backgroundColor: "#6b7280", color: "#fff", borderRadius: "8px", fontWeight: "500" }}>
              jinishthomas88@gmail.com
            </span>
            <span style={{ padding: "8px 16px", backgroundColor: "#6b7280", color: "#fff", borderRadius: "8px", fontWeight: "500" }}>
              +4915163279226
            </span>
          </div>



          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              marginTop: "16px",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: "500",
              background: darkMode ? "#e5e7eb" : "#111827",
              color: darkMode ? "#111827" : "#ffffff",
            }}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        {/* ================= ÜBER MICH ================= */}
        <Section title="Über mich">
          <p>
            Test- und Entwicklungsingenieur mit über 4 Jahren Erfahrung in
            Testautomatisierung, Softwareentwicklung und Softwaretests.
            Starke Kenntnisse und Erfahrung in Python, C/C++, HIL-Tests und agilen Methoden.
          </p>
        </Section>

        {/* ================= FÄHIGKEITEN ================= */}
        <Section title="Fähigkeiten">
          <div style={styles.skillGrid}>
            {[
              "Python", "C / C++", "LUA", "Git & GitHub", 
              "HIL-Tests", "Linux (Bash)", "Agil (Scrum, Kanban)",
              "Visual Studio Code, Pycharm, Anconda",
              "Vector CANoe, vTESTstudio, EXAM, Ranorex", "CAN / FlexRay / Ethernet",
              "ISTQB Zertifikat",
              "JIRA, Confluence"
            ].map(skill => (
              <span key={skill} style={styles.skillChip}>{skill}</span>
            ))}
          </div>
        </Section>

        {/* ================= BERUFSERFAHRUNG ================= */}
        <Section title="Berufserfahrung">
          <ExperienceCard
            darkMode={darkMode}
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
                tech: "Linux, LUA, Python, AWS, GitHub/Git, CI/CD, Advantage, Brian, Splunk, Jira, Confluence"
              },
              {
                title: "Projekt 2: KTM Motorrad – ePP Labbike T200 (HIL)",
                points: [
                  "Automatisierte HIL-Tests mit CANoe und vTESTstudio",
                  "Test von Battery Handling, Drive Mode Handling und Vehicle State Machine",
                  "Erstellung und Pflege von Testspezifikationen"
                ],
                tech: "CANoe, vTESTstudio, HIL, Vector Tools, Microsoft Office"
              },
              {
                title: "Projekt 3: In-tech internes Projekt – Embedded Software",
                points: [
                  "Embedded Softwareentwicklung auf Raspberry Pi (Linux)",
                  "Python-Entwicklung nach Scrum-Methodik",
                  "Sprintplanung, Reviews und Retrospektiven"
                ],
                tech: "Python, Linux, Raspberry Pi, Git, Scrum, Unit Tests, CI/CD, EXAM, Jira, Confluence"
              },
              {
                title: "Projekt 4: CARIAD – Buskommunikation & Fehleranalyse",
                points: [
                  "Analyse von NMH-, E2E- und Knockout-Tests",
                  "Fehleranalyse für CAN, FlexRay und Ethernet",
                  "Dokumentation und Abstimmung mit Entwicklungsteams"
                ],
                tech: "CAN, FlexRay, Ethernet, KPM, Microsoft Office, Jira, Confluence"
              }
            ]}
          />

          <ExperienceCard
            darkMode={darkMode}
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
                  <p key="tools">Einsatz von Messmitteln und Tools wie Spektrumanalysator, dSPACE Radar Target Simulator, Oszilloskop,<br />
                  Vector CANoe (Restbussimulation), Measurement Interface (MI5), Temperaturkammer, XCP und Wireshark</p>
                ],
                tech: "Python, Anconda, Radar Sensor, Python, Flashing, Simulation, CAN,Ethernet, CANoe, Jira, Confluence"
              }
            ]}
          />
        </Section>

        {/* ================= AUSBILDUNG ================= */}
        <Section title="Ausbildung">
          <EducationCard
            darkMode={darkMode}
            title="Weiterbildung – Embedded System Softwareentwicklung"
            place="Emertxe Information Technologies, Bangalore, Indien · Sept 2025 – März 2026"
            points={[
              "Schwerpunkt: Linux Systems: Linux-Kommandos, Shell, Pipes, VIM-Editor",
              "C Programmierung: Operatoren, Loops, Arrays, Funktionen, Pointers, Strings, Structures, Storage classes",
              "Datenstrukturen, C++ (OOP)",
              "Mikrocontroller, Linux Internals Networking, Embedded Linux",
            ]}
          />          
          <EducationCard
            darkMode={darkMode}
            title="Master Studium (M.Eng) –  Simulation Und System Design"
            place="Hochschule Stralsund · 2020 – 2022"
            points={[
              "Schwerpunkt: Fahrzeugsysteme und Simulation, Informatik, Mathematik",
              "Masterarbeit im Bereich Systemtest von Radarsensoren",
              "Praxisorientierte Projekte mit Fokus auf Automotive Software",
            ]}
            note ="1,9"
          />

          <EducationCard
            darkMode={darkMode}
            title="Bachelor Studium (B.Tech.) – Maschinenbau"
            place="Anna Universität – Indien · 2007 – 2011"
            points={[
              "Grundlagen in Robotik, Simulation und Regelungstechnik",
              "Programmierung in C, C++ und Python",
            ]}
            note ="1.9"
          />


        </Section>

        {/* ================= PROJEKTE ================= */}
        <Section title="Persönliche Projekte">
          <ProjectCard
            darkMode={darkMode}
            title="SpaceX Launch Tracker - Python Programmierung"
            description={[
              "Python-Anwendung zur Analyse und Visualisierung von SpaceX-Starts unter Nutzung der öffentlichen SpaceX-API",
              "Abruf und Auswertung von Startdaten, einschließlich Missionsdetails und historischer Statistiken",
              "Datenaufbereitung und Visualisierung zur übersichtlichen Darstellung der SpaceX-Startgeschichte"
            ]}
            tech="Python, Pycharm, Virtual Enviornment, REST API"
            link="https://github.com/Jinisht/SpaceX_Launch_Tracker"
          />

          <ProjectCard
            darkMode={darkMode}
            title="Adressbuch Anwendung - C Programmierung"
            description={[
              "Konsolenbasierte Adressbuch-Anwendung in C zur Verwaltung von Namen, Telefon-/Handynummern und E-Mail-Adressen",
              "Funktionen zum Hinzufügen, Suchen, Aktualisieren und Löschen von Kontakten über Standard-Ein-/Ausgabe (Standard I/O)",
              "Strukturierte Datenverwaltung mit Fokus auf Dateiverarbeitung und Programmierkonzepte in C"
            ]}
            tech="C, Visual Studio Code, Code Dateiverarbeitung, Datenstrukturen, Funktion, Strings"
            link="https://github.com/Jinisht/Addressbook-Project"
          />

           <ProjectCard
            darkMode={darkMode}
            title="Steganografie - C Programmierung"
            description={[
              "Dieses Projekt implementiert Bildsteganographie in C. Geheime Nachrichten werden in BMP-Bildern versteckt, indem die Least Significant Bits (LSB) der Pixel modifiziert werden.", 
              "Das Programm unterstützt Encoding und Decoding, sodass Benutzer Nachrichten in ein Bild einbetten und später wieder extrahieren können.",
               "Es demonstriert Konzepte wie Dateiverarbeitung, Bitmanipulation und Datenversteckung als zusätzliche Sicherheitsebene."
            ]}
            tech="C, Visual Studio Code, Dateiverarbeitung, Datenstrukturen, Bitmanipulation, Pointer, I/O file"
            link="https://github.com/Jinisht/Steganography_project"
          />         
        </Section>

        {/* ================= ERFOLGE ================= */}
        <Section title="Erfolge">
          <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
            <li>ISTQB Certified Tester-Foundation</li>
            <li>Englisch - Fluent</li>
            <li>Deutsch (B2)</li>
            <li>Führerschein – Klasse B</li>
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

function ExperienceCard({ darkMode, role, company, duration, projects }) {
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: darkMode ? theme.dark.cardBg : theme.light.cardBg,
        border: `1px solid ${darkMode ? theme.dark.border : theme.light.border}`,
      }}
    >
      <h3 style={styles.cardTitle}>{role}</h3>
      <p style={{...styles.cardSubtitle, color: darkMode ? theme.dark.mutedText : theme.light.mutedText}}>
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
          <p style={styles.projectTech}><strong>Tech Stack:</strong> {project.tech}</p>
        </div>
      ))}
    </div>
  );
}

function EducationCard({ darkMode, title, place, points, note }) {
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: darkMode ? theme.dark.cardBg : theme.light.cardBg,
        border: `1px solid ${darkMode ? theme.dark.border : theme.light.border}`,
      }}
    >
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={{...styles.cardSubtitle, color: darkMode ? theme.dark.mutedText : theme.light.mutedText}}>{place}</p>
      <ul style={styles.list}>
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      {note && (
        <p style={styles.note}>
          <strong>Abschlussnote:</strong> {note}
        </p>
      )}
    </div>
  );
}

function ProjectCard({ darkMode, title, description, tech, link }) {
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: darkMode ? theme.dark.cardBg : theme.light.cardBg,
        border: `1px solid ${darkMode ? theme.dark.border : theme.light.border}`,
      }}
    >
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

/* ================= THEMES ================= */
const theme = {
  light: {
    pageBg: "linear-gradient(135deg, #eef2ff, #f8fafc)",
    containerBg: "#ffffff",
    text: "#111827",
    mutedText: "#6b7280",
    cardBg: "#ffffff",
    border: "#e5e7eb",
  },
  dark: {
    pageBg: "linear-gradient(135deg, #020617, #0f172a)",
    containerBg: "#020617",
    text: "#e5e7eb",
    mutedText: "#94a3b8",
    cardBg: "#0f172a",
    border: "#1e293b",
  },
};

/* ================= STYLES ================= */
const styles = {
  page: { minHeight: "100vh", transition: "background 0.3s, color 0.3s" },
  container: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    transition: "background 0.3s",
  },
  header: { textAlign: "center", marginBottom: "60px" },
  name: {
    fontSize: "3rem",
    fontWeight: "800",
    background: "linear-gradient(90deg, #2563eb, #9333ea)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  title: { marginTop: "12px", fontSize: "1.15rem", fontWeight: "500" },
  subtitle: { fontSize: "0.95rem", color: "#64748b" },
  iconRow: { display: "flex", justifyContent: "center", gap: "18px", marginTop: "16px" },

  section: { marginBottom: "60px" },
  sectionTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    marginBottom: "20px",
    borderLeft: "5px solid #2563eb",
    paddingLeft: "12px",
  },

  card: {
    padding: "24px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    marginBottom: "24px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s",
  },
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },

  note: {
  marginTop: "12px",
  fontSize: "0.9rem",
  fontWeight: "600",
  padding: "6px 12px",
  borderRadius: "8px",
  display: "inline-block",
  backgroundColor: "#f1f5f9",
  color: "#0f172a",
},

  cardTitle: { fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" },
  cardSubtitle: { fontSize: "0.9rem", marginBottom: "12px" },
  projectBlock: { marginTop: "16px" },
  projectTitle: { fontSize: "1rem", fontWeight: "600" },
  list: { paddingLeft: "20px", lineHeight: "1.6" },
  projectTech: { marginTop: "10px", fontSize: "0.9rem" },

  skillGrid: { display: "flex", flexWrap: "wrap", gap: "10px" },
  skillChip: {
    background: "linear-gradient(135deg, #2563eb, #9333ea)",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "0.85rem",
    fontWeight: "500",
    transition: "transform 0.2s ease",
  },
  skillChipHover: {
    transform: "scale(1.05)",
  },

  tech: { marginTop: "10px", fontSize: "0.9rem" },
  link: {
    color: "#2563eb",
    fontSize: "0.9rem",
    fontWeight: "500",
    textDecoration: "underline",
    transition: "color 0.2s ease",
  },
  footer: {
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#64748b",
    marginTop: "80px",
    borderTop: "1px solid #e5e7eb",
    paddingTop: "20px",
  },
};
