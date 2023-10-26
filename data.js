let currentTopic = 0
let currentQuestion = 0
let currentTotalQuestion = 0
let rightAnswers = [0,0,0,0]


questions = [
[
    {
        "frage": "Was steht für HTML?",
        "antwort 1": "Hyper Text Markup Language",
        "antwort 2": "Hyperlinks and Text Markup Language",
        "antwort 3": "Home Tool Markup Language",
        "antwort 4": "Keine der oben genannten Antworten",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Element wird verwendet, um eine Überschrift der ersten Ebene zu definieren?",
        "antwort 1": "&lt;h1&gt;",
        "antwort 2": "&lt;heading&gt;",
        "antwort 3": "&lt;h6&gt;",
        "antwort 4": "&lt;header&gt;",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Element wird verwendet, um einen Absatz zu definieren?",
        "antwort 1": "&lt;section&gt;",
        "antwort 2": "&lt;paragraph&gt;",
        "antwort 3": "&lt;para&gt;",
        "antwort 4": "&lt;p&gt;",
        "richtige antwort": "antwort 4"
    },
    {
        "frage": "Welches Element wird verwendet, um einen Link zu definieren?",
        "antwort 1": "&lt;link&gt;",
        "antwort 2": "&lt;a&gt;",
        "antwort 3": "&lt;href&gt;",
        "antwort 4": "&lt;url&gt;",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "In welchem Element befindet sich der gesamte Inhalt einer Webseite?",
        "antwort 1": "&lt;body&gt;",
        "antwort 2": "&lt;head&gt;",
        "antwort 3": "&lt;html&gt;",
        "antwort 4": "&lt;meta&gt;",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Element wird verwendet, um eine nummerierte Liste zu definieren?",
        "antwort 1": "&lt;list&gt;",
        "antwort 2": "&lt;ul&gt;",
        "antwort 3": "&lt;ol&gt;",
        "antwort 4": "&lt;dl&gt;",
        "richtige antwort": "antwort 3"
    },
    {
        "frage": "Welches Element wird verwendet, um eine nicht nummerierte Liste zu definieren?",
        "antwort 1": "&lt;ul&gt;",
        "antwort 2": "&lt;ol&gt;",
        "antwort 3": "&lt;li&gt;",
        "antwort 4": "&lt;ul&gt;",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Element wird verwendet, um ein Bild einzufügen?",
        "antwort 1": "&lt;img&gt;",
        "antwort 2": "&lt;picture&gt;",
        "antwort 3": "&lt;image&gt;",
        "antwort 4": "&lt;photo&gt;",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Element wird verwendet, um einen Absatz zu erzwingen?",
        "antwort 1": "&lt;lb&gt;",
        "antwort 2": "&lt;br&gt;",
        "antwort 3": "&lt;p&gt;",
        "antwort 4": "&lt;cr&gt;",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Welches Element wird verwendet, um eine horizontale Linie zu definieren?",
        "antwort 1": "&lt;hr&gt;",
        "antwort 2": "&lt;line&gt;",
        "antwort 3": "&lt;br&gt;",
        "antwort 4": "&lt;tr&gt;",
        "richtige antwort": "antwort 1"
    }
],

[
    {
        "frage": "Was steht für CSS?",
        "antwort 1": "Cascading Style Sheets",
        "antwort 2": "Creative Style Sheets",
        "antwort 3": "Computer Style Sheets",
        "antwort 4": "None of the above",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Attribut wird verwendet, um den Hintergrundfarbeigenschaftswert eines Elements festzulegen?",
        "antwort 1": "background-color",
        "antwort 2": "color",
        "antwort 3": "background-image",
        "antwort 4": "background-style",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welche Einheit wird verwendet, um die Breite eines Elements in CSS zu definieren?",
        "antwort 1": "px",
        "antwort 2": "em",
        "antwort 3": "%",
        "antwort 4": "Alle der oben genannten Antworten",
        "richtige antwort": "antwort 4"
    },
    {
        "frage": "Welches Attribut wird verwendet, um den Textfarbeigenschaftswert eines Elements festzulegen?",
        "antwort 1": "color",
        "antwort 2": "text-color",
        "antwort 3": "font-color",
        "antwort 4": "None of the above",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Attribut wird verwendet, um den Abstand zwischen den Zeilen eines Textes zu definieren?",
        "antwort 1": "line-height",
        "antwort 2": "font-size",
        "antwort 3": "letter-spacing",
        "antwort 4": "text-spacing",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Attribut wird verwendet, um die Schriftart eines Elements festzulegen?",
        "antwort 1": "font-family",
        "antwort 2": "font-type",
        "antwort 3": "font-style",
        "antwort 4": "None of the above",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Attribut wird verwendet, um den Abstand um ein Element herum festzulegen?",
        "antwort 1": "padding",
        "antwort 2": "margin",
        "antwort 3": "border",
        "antwort 4": "outline",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Welches Attribut wird verwendet, um den Text in Großbuchstaben umzuwandeln?",
        "antwort 1": "text-decoration: uppercase",
        "antwort 2": "text-style: uppercase",
        "antwort 3": "text-transform: uppercase",
        "antwort 4": "None of the above",
        "richtige antwort": "antwort 3"
    },
    {
        "frage": "Welches Attribut wird verwendet, um die Ausrichtung eines Elements zu definieren?",
        "antwort 1": "text-align",
        "antwort 2": "align",
        "antwort 3": "position",
        "antwort 4": "None of the above",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Attribut wird verwendet, um die Transparenz eines Elements festzulegen?",
        "antwort 1": "transparent",
        "antwort 2": "opacity",
        "antwort 3": "visibility",
        "antwort 4": "filter",
        "richtige antwort": "antwort 2"
    }
],

[
    {
        "frage": "Welches Schlüsselwort wird verwendet, um eine Variable zu deklarieren?",
        "antwort 1": "var",
        "antwort 2": "let",
        "antwort 3": "const",
        "antwort 4": "define",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Was ist das Ergebnis von 3 + '3' in JavaScript?",
        "antwort 1": "6",
        "antwort 2": "33",
        "antwort 3": "9",
        "antwort 4": "undefined",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Welches Schlüsselwort wird verwendet, um eine Funktion in JavaScript zu definieren?",
        "antwort 1": "function",
        "antwort 2": "def",
        "antwort 3": "func",
        "antwort 4": "define",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Was ist der Unterschied zwischen '==' und '===' in JavaScript?",
        "antwort 1": "'==' vergleicht den Wert, '===' vergleicht den Wert und den Typ",
        "antwort 2": "'===' vergleicht den Wert, '==' vergleicht den Wert und den Typ",
        "antwort 3": "'==' und '===' sind dasselbe",
        "antwort 4": "Keine der obigen Antworten ist korrekt",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Schlüsselwort wird verwendet, um eine Bedingung in JavaScript zu definieren?",
        "antwort 1": "if",
        "antwort 2": "when",
        "antwort 3": "condition",
        "antwort 4": "choose",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welches Schlüsselwort wird verwendet, um eine Schleife in JavaScript zu definieren?",
        "antwort 1": "loop",
        "antwort 2": "repeat",
        "antwort 3": "while",
        "antwort 4": "for",
        "richtige antwort": "antwort 4"
    },
    {
        "frage": "Was ist das Ergebnis von 2 + 2 * 2 in JavaScript?",
        "antwort 1": "6",
        "antwort 2": "8",
        "antwort 3": "4",
        "antwort 4": "None of the above",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Welches Schlüsselwort wird verwendet, um eine Ausnahmebehandlung in JavaScript zu definieren?",
        "antwort 1": "exception",
        "antwort 2": "try",
        "antwort 3": "catch",
        "antwort 4": "error",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Welches Objekt wird verwendet, um die Ausgabe in die Konsole zu schreiben?",
        "antwort 1": "console",
        "antwort 2": "window",
        "antwort 3": "document",
        "antwort 4": "log",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Was ist das Ergebnis von '5' - '3' in JavaScript?",
        "antwort 1": "2",
        "antwort 2": "8",
        "antwort 3": "53",
        "antwort 4": "NaN",
        "richtige antwort": "antwort 1"
    }
],

[
    {
        "frage": "Was ist Node.js?",
        "antwort 1": "Eine serverseitige JavaScript-Plattform",
        "antwort 2": "Ein webbasierter JavaScript-Editor",
        "antwort 3": "Ein JavaScript-Framework",
        "antwort 4": "Ein JavaScript-Compiler",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welche Methode wird in Node.js verwendet, um eine Datei asynchron zu lesen?",
        "antwort 1": "fs.read()",
        "antwort 2": "fs.readfile()",
        "antwort 3": "fs.readFile()",
        "antwort 4": "fs.open()",
        "richtige antwort": "antwort 3"
    },
    {
        "frage": "Welche Methode wird in Node.js verwendet, um eine Datei asynchron zu schreiben?",
        "antwort 1": "fs.write()",
        "antwort 2": "fs.writeFile()",
        "antwort 3": "fs.createWriteStream()",
        "antwort 4": "fs.open()",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Welches Modul wird in Node.js verwendet, um einen HTTP-Server zu erstellen?",
        "antwort 1": "http",
        "antwort 2": "server",
        "antwort 3": "net",
        "antwort 4": "web",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Wie kann man in Node.js eine externe Bibliothek einbinden?",
        "antwort 1": "Mit der require()-Funktion",
        "antwort 2": "Mit der import()-Funktion",
        "antwort 3": "Mit der include()-Funktion",
        "antwort 4": "Mit der load()-Funktion",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Wie kann man in Node.js eine Datei synchron lesen?",
        "antwort 1": "fs.readFile()",
        "antwort 2": "fs.readFileSync()",
        "antwort 3": "fs.readfileSync()",
        "antwort 4": "fs.open()",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Wie kann man in Node.js eine Datei synchron schreiben?",
        "antwort 1": "fs.writeFile()",
        "antwort 2": "fs.writeFileSync()",
        "antwort 3": "fs.createWriteStream()",
        "antwort 4": "fs.open()",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Wie kann man in Node.js eine Datei umbenennen?",
        "antwort 1": "fs.rename()",
        "antwort 2": "fs.renameFile()",
        "antwort 3": "fs.move()",
        "antwort 4": "fs.relocate()",
        "richtige antwort": "antwort 1"
    },
    {
        "frage": "Welche Methode wird in Node.js verwendet, um einen HTTP-Request zu senden?",
        "antwort 1": "http.sendRequest()",
        "antwort 2": "http.request()",
        "antwort 3": "http.send()",
        "antwort 4": "http.post()",
        "richtige antwort": "antwort 2"
    },
    {
        "frage": "Welches Node.js-Modul wird verwendet, um asynchrone Operationen zu verarbeiten?",
        "antwort 1": "async",
        "antwort 2": "event",
        "antwort 3": "promise",
        "antwort 4": "callback",
        "richtige antwort": "antwort 4"
    }
]
]