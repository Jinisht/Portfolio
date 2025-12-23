import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px",
          color: "#111827",
          fontFamily: "Arial, sans-serif"
        }}
      >
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Jinish Thomas
          </h1>
          <p style={{ marginTop: "8px", fontSize: "1.1rem" }}>
            Software Engineer (Development / Testing) | IT
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "16px"
            }}
          >
            <a href="https://github.com/Jinisht" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/jinishthomas/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
            <a href="mailto:jinishthomas88@gmail.com">
              <Mail />
            </a>
          </div>
        </header>

        {/* About */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "8px" }}>
            About Me
          </h2>
          <p>
            Test and Development Engineer with over 3+ years of experience in testing,
            test automation, software development, and analysis.
          </p>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "12px" }}>
            Skills
          </h2>
          <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <li>Python</li>
            <li>C, C++</li>
            <li>Git, GitHub, Bitbucket</li>
            <li>Testing, Debugging, Error Analysis</li>
            <li>CAN, Ethernet, FlexRay, Trace Analysis</li>
            <li>HIL, Linux (Bash), Visual Studio</li>
            <li>Agile (Scrum, Kanban), V-Model</li>
            <li>Test Automation: vTESTstudio, EXAM, Ranorex, Vector CANoe</li>
          </ul>
        </section>

                {/* Work Experience */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "16px" }}>
            Work Experience
          </h2>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Test & Development Engineer
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              in-tech GmbH · Oktober 2022 – Februar 2026
            </p>

            <ul style={{ marginTop: "25px", paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
            <h3 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>
              Projekt 1: BMW, Crowd Data Collector(CDC)
            </h3>
            <li>            
                Weiterentwicklung und Pflege von CDC-Skripten (LUA) inkl.Versionskontrolle(CI/CD), zur effizienten Erfassung und Analyse von Fahrbetriebsdaten
              </li>
              </li>
              <li>
                Analyse von CDC-Backend-Daten zur Verarbeitung großer Datenmengen (Big Data)in AWS.
                
              </li>
              <li>
                Versionsverwaltung und kollaborative Entwicklung mit Git/GitHub(CI/CD-Pipelines).
              </li>
              <li>
                Einsatz von Linux- undWindows-Betriebssystemen, Python, Splunk, AWS, Advantage, Brian.
              </li>
            </ul>

            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, C/C++, CANoe, vTESTstudio, Ranorex,
              Linux, Git, Jira
            </p>

            <ul style={{ marginTop: "25px", paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
            <h3 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>
              Projekt 2: KTM Motorrad, ePP Labbike T200 (HIL) - Automatisierten
Tests
            </h3>
            <li>            
                Entwicklung und Durchführung automatisierter Testfälle mit dem Automatisierungstool VTest-Studio und Vector CANoe
gemäß den Testspezifikationen für verschiedene Motorradfunktionen (z.B. Battery Handling, Drive Mode Handling, Vehicle State Machine, E-Ride byWire).
              </li>
              </li>
              
            </ul>

            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, C/C++, CANoe, vTESTstudio, Ranorex,
              Linux, Git, Jira
            </p>

            <ul style={{ marginTop: "25px", paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
            <h3 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>
              Projekt 3: in-tech internes Projekt - Embedded Softwareentwicklung
            </h3>
            <li>            
                Entwicklung von Software für ein autonomes Fahrzeugmodell auf einer Raspberry-Pi-Plattform(Linux-Betriebssystem).
              </li>
              </li>
              <li>
                Einsatz von Python und Anwendung der Scrum-Methodik.
              </li>
              <li>
                Aktive Teilnahme an Anforderungsanalyse, Skriptentwicklung, Sprintplanung, Reviews und Retrospektiven
              </li>
              <li>
                Versionsverwaltung und kollaborative Entwicklung mit Git/GitHub(CI/CD-Pipelines).
              </li>
            </ul>

            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, C/C++, CANoe, vTESTstudio, Ranorex,
              Linux, Git, Jira
            </p> 

            <ul style={{ marginTop: "25px", paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
            <h3 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>
              Projekt 4: Cariad -Buskommunikation- Fehleranalyse
            </h3>
            <li>            
                Analyse der Testergebnisse verschiedener Testarten wie Network Management(NMH), End-to-End (E2E) und Knockout-
                Tests für High-Speed-CAN/FlexRay/Ethernet-Steuergeräte.
              </li>
              </li>
              
            </ul>

            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, C/C++, CANoe, vTESTstudio, Ranorex,
              Linux, Git, Jira
            </p>  
          </div>


          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Praktikum & Masterarbeit
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              ADC Continental GmbH · Juni 2021 – August 2022
            </p>

            <ul style={{ marginTop: "25px", paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
            <h3 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>
              Master-Arbeit: Entwicklung von Softwarearchitekturen für den Systemtest.
            </h3>
            <li>            
                Entwicklung einer Softwarearchitektur für Radarsensor-Systemtests (SDLC).
              </li>
              </li>
             
            </ul>

            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, C/C++, CANoe, vTESTstudio, Ranorex,
              Linux, Git, Jira
            </p>

            <ul style={{ marginTop: "25px", paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
            <h3 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>
              Projekt 2: KTM Motorrad, ePP Labbike T200 (HIL) - Automatisierten
Tests
            </h3>
            <li>            
                Entwicklung und Durchführung automatisierter Testfälle mit dem Automatisierungstool VTest-Studio und Vector CANoe
gemäß den Testspezifikationen für verschiedene Motorradfunktionen (z.B. Battery Handling, Drive Mode Handling, Vehicle State Machine, E-Ride byWire).
              </li>
              </li>
              
            </ul>

            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, C/C++, CANoe, vTESTstudio, Ranorex,
              Linux, Git, Jira
            </p>

            <ul style={{ marginTop: "25px", paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
            <h3 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>
              Projekt 3: in-tech internes Projekt - Embedded Softwareentwicklung
            </h3>
            <li>            
                Entwicklung von Software für ein autonomes Fahrzeugmodell auf einer Raspberry-Pi-Plattform(Linux-Betriebssystem).
              </li>
              </li>
              <li>
                Einsatz von Python und Anwendung der Scrum-Methodik.
              </li>
              <li>
                Aktive Teilnahme an Anforderungsanalyse, Skriptentwicklung, Sprintplanung, Reviews und Retrospektiven
              </li>
              <li>
                Versionsverwaltung und kollaborative Entwicklung mit Git/GitHub(CI/CD-Pipelines).
              </li>
            </ul>

            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, C/C++, CANoe, vTESTstudio, Ranorex,
              Linux, Git, Jira
            </p> 

            <ul style={{ marginTop: "25px", paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
            <h3 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>
              Projekt 4: Cariad -Buskommunikation- Fehleranalyse
            </h3>
            <li>            
                Analyse der Testergebnisse verschiedener Testarten wie Network Management(NMH), End-to-End (E2E) und Knockout-
                Tests für High-Speed-CAN/FlexRay/Ethernet-Steuergeräte.
              </li>
              </li>
              
            </ul>

            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, C/C++, CANoe, vTESTstudio, Ranorex,
              Linux, Git, Jira
            </p>  
          </div>
          
        </section>

        {/* Projects */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "16px" }}>
            Projects
          </h2>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              SpaceX Launch Tracker – Python Programming
            </h3>
            <p style={{ marginTop: "8px" }}>
              Developed a Python application to analyze and visualize SpaceX launches
              using the public SpaceX API. The application allows users to track launch
              data, view mission details, and analyze launch statistics.
            </p>
            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, SpaceX API, Data Visualization Libraries
            </p>
            <a
              href="https://github.com/Jinisht/SpaceX_Launch_Tracker"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", fontSize: "0.9rem" }}
            >
              GitHub Repository
            </a>
          </div>
        </section>
        
          <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "16px" }}>
            
          </h2>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Addressbook-Projekt – C Programmierung
            </h3>
            <p style={{ marginTop: "8px" }}>
              Adressbuch ist eine Anwendung, die in C geschrieben wurde. Sie dient dazu, Namen, Telefon- bzw. Handynummern und 
              E-Mail-Adressen zu verwalten. Es handelt sich um eine konsolenbasierte Anwendung, die Standard I/O verwendet, um 
              Kontaktnamen, Telefonnummern und E-Mail-Adressen hinzuzufügen oder zu löschen, Namen mit den zugehörigen Nummern und
              E-Mail-Adressen zu suchen, Nummern und E-Mail-Adressen zu aktualisieren sowie Kontakte zu löschen.Der Link: -rechten 
              Seite unter Links.
            </p>
            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
              <strong>Tech Stack:</strong> Python, SpaceX API, Data Visualization Libraries
            </p>
            <a
              href="https://github.com/Jinisht/SpaceX_Launch_Tracker"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", fontSize: "0.9rem" }}
            >
              GitHub Repository
            </a>
          </div>
        </section>

        {/* Achievements */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "8px" }}>
            Achievements
          </h2>
          <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
            <li>Certification in XYZ</li>
            <li>Winner of ABC Hackathon</li>
          </ul>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: "center", fontSize: "0.85rem", color: "#6b7280" }}>
          © 2025 Jinish Thomas | Portfolio
        </footer>
      </div>
    </div>
  );
}
