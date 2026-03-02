# Touren-Zeiterfassung - Frontend (JS)
Frontend für as Touren-Zeiterfassungsprojekt.  
Aktueller Fokus: 
**Login-UI + Client-side Validierung** und (als nächster Schritt)
**Anbindung an das Spring-Boot-Backend**.

## Ziel
- Login-Formular bereitstellen
- Eingaben validieren und dem Nutzer verständliches Feedback geben
- (WIP) Login-Request an das Backend senden und Responses korrekt behandeln


## Aktueller Stand
- ✅ Login Formular (HTML / CSS)
- ✅ Client-side Validierung (Username/Passwort) inkl. Fehlermeldungen
- ✅ Submit-Handling via JavaScript ('preventDefault')
- Backend-Anbindung (POST /auth/*)
- Token/Session Handling
- Protected Routes / Views nach Login

## Tech Stack
- HTML, CSS, JavaScript
- Backend separat: Java / Spring Boot


## Lokal starten
Die 'index.html' im Browser öffnen oder z.B. mit einem lokalen Server:

```bash
#Option 1: VS Code Live Server
#Option 2: Python:
python -m http.server 5500
```