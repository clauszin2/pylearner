import type { Chapter } from './types';

export const CURRICULUM: Chapter[] = [
  {
    title: 'Introduzione a Python',
    lessons: [
      {
        title: 'Ciao, Mondo!',
        content: `Benvenuto su PyLearner! Iniziamo con il programma più classico: stampare un messaggio a schermo. In Python, la funzione 'print()' è usata per visualizzare output. Il testo, chiamato stringa, deve essere racchiuso tra virgolette (""). Prova a eseguire il codice per vedere il risultato!`,
        starterCode: `print("Ciao, Python!")`,
      },
      {
        title: 'Variabili e Tipi di Dati',
        content: `Le variabili sono come contenitori per memorizzare dati. Puoi assegnare un valore a una variabile usando il simbolo "=". Python ha diversi tipi di dati, come stringhe (testo), interi (numeri interi) e float (numeri con la virgola). In questo esempio, creiamo una variabile 'nome' e la usiamo all'interno di una f-string per un saluto personalizzato.`,
        starterCode: `nome = "Mondo"\nprint(f"Ciao, {nome}")`,
      },
      {
        title: 'Liste',
        content: `Una lista è una collezione ordinata di elementi. Puoi creare una lista racchiudendo gli elementi tra parentesi quadre [] e separandoli con virgole. Per accedere a un elemento, usi il suo indice, che parte da 0. Quindi, 'studenti[0]' ti darà il primo elemento della lista.`,
        starterCode: `studenti = ["Alice", "Bob", "Carlo"]\nprint(studenti[0])\nprint(f"Ci sono {len(studenti)} studenti in classe.")`,
      },
      {
        title: 'Cicli For',
        content: `I cicli (loops) ti permettono di eseguire un blocco di codice più volte. Un ciclo 'for' è perfetto per iterare su ogni elemento di una lista. Il codice all'interno del ciclo (indentato) verrà eseguito per ciascun elemento, uno dopo l'altro. L'indentazione (spazio all'inizio della riga) è fondamentale in Python!`,
        starterCode: `numeri = [1, 2, 3, 4, 5]\nsomma = 0\nfor numero in numeri:\n    print(f"Aggiungo {numero}")\n    somma = somma + numero\n\nprint(f"La somma totale è: {somma}")`,
      },
      {
        title: 'Funzioni',
        content: `Le funzioni sono blocchi di codice riutilizzabili che eseguono un'azione specifica. Si definiscono con la parola chiave 'def', seguita dal nome della funzione e da parentesi (). Possono accettare parametri (input) e restituire un valore (output) usando 'return'. Questo aiuta a organizzare il codice e a non ripetersi.`,
        starterCode: `def saluta(nome):\n    return f"Ciao, {nome}!"\n\n# Ora chiamiamo la funzione\nmessaggio = saluta("PyLearner")\nprint(messaggio)`,
      },
      {
        title: 'Condizioni If/Else',
        content: `Le istruzioni condizionali ti permettono di eseguire codice diverso a seconda che una condizione sia vera o falsa. Si usano 'if', 'elif' (else if) e 'else'. In questo esempio, controlliamo l'età per determinare se una persona può votare o guidare.`,
        starterCode: `eta = 19\n\nif eta >= 18:\n    print("Puoi votare.")\n    if eta >= 18:\n      print("Puoi anche guidare.")\nelif eta >= 16:\n    print("Puoi guidare ma non votare.")\nelse:\n    print("Non puoi né guidare né votare.")`,
      },
      {
        title: 'Dizionari',
        content: `I dizionari sono un altro tipo di collezione, ma invece di essere indicizzati da numeri, usano 'chiavi' per accedere ai 'valori'. Ogni elemento è una coppia chiave-valore. Sono incredibilmente utili per memorizzare dati strutturati, come le informazioni di un utente. Si creano con le parentesi graffe {}.`,
        starterCode: `utente = {\n    "nome": "Mario Rossi",\n    "eta": 30,\n    "citta": "Roma"\n}\n\n# Accesso ai valori tramite le chiavi\nprint(f"Nome utente: {utente['nome']}")\nprint(f"Età: {utente['eta']}")`,
      },
      {
        title: 'List Comprehension',
        content: `Le 'List Comprehension' sono un modo elegante e conciso per creare liste in Python. Permettono di scrivere un ciclo 'for' all'interno di parentesi quadre. Questo rende il codice più leggibile e spesso più veloce. Guarda come possiamo creare una lista di numeri al quadrato con una sola riga!`,
        starterCode: `numeri = [1, 2, 3, 4, 5]\n\n# Modo tradizionale con un ciclo for\nquadrati_loop = []\nfor n in numeri:\n    quadrati_loop.append(n * n)\nprint(f"Con il loop: {quadrati_loop}")\n\n# Con una List Comprehension\nquadrati_comp = [n * n for n in numeri]\nprint(f"Con comprehension: {quadrati_comp}")`,
      },
      {
        title: 'Gestione degli Errori',
        content: `A volte il codice può fallire per motivi imprevisti, come un input errato dell'utente. Invece di far crashare il programma, possiamo gestire questi errori con i blocchi 'try' e 'except'. Il codice nel blocco 'try' viene eseguito, e se si verifica un errore, viene eseguito il codice nel blocco 'except' corrispondente.`,
        starterCode: `numeratore = 10\ndenominatore = 0\n\ntry:\n    risultato = numeratore / denominatore\n    print(risultato)\nexcept ZeroDivisionError:\n    print("Errore: Impossibile dividere per zero!")\n\nprint("Il programma continua...")`,
      },
    ],
  },
  {
    title: 'Data Science con Python',
    lessons: [
      {
        title: 'Introduzione a NumPy',
        content: `NumPy è una libreria fondamentale per il calcolo scientifico in Python. Fornisce un oggetto array ad alte prestazioni e strumenti per lavorare con questi array. È molto più veloce delle liste Python per le operazioni numeriche. In questo esempio, creiamo un array, eseguiamo operazioni su tutti gli elementi contemporaneamente e calcoliamo la media.`,
        starterCode: `import numpy as np\n\n# Creare un array NumPy da una lista Python\ndati_lista = [10, 20, 30, 40, 50]\ndati_numpy = np.array(dati_lista)\n\nprint(f"Array NumPy: {dati_numpy}")\n\n# Le operazioni sono più semplici e veloci\ndati_incrementati = dati_numpy + 5\nprint(f"Array incrementato: {dati_incrementati}")\n\n# Calcolare la media con una funzione NumPy\nmedia = np.mean(dati_numpy)\nprint(f"La media è: {media}")`,
      },
      {
        title: 'Introduzione a Pandas',
        content: `Pandas è la libreria più popolare per la manipolazione e l'analisi dei dati. La sua struttura dati principale è il DataFrame, che puoi immaginare come una tabella o un foglio di calcolo. I DataFrame rendono semplice leggere, manipolare e analizzare dati strutturati. Qui creiamo un DataFrame da un dizionario.`,
        starterCode: `import pandas as pd\n\n# Creare un DataFrame da un dizionario\ndati = {\n    'Nome': ['Alice', 'Bob', 'Carlo'],\n    'Eta': [25, 30, 22],\n    'Citta': ['Roma', 'Milano', 'Napoli']\n}\n\ndf = pd.DataFrame(dati)\n\n# Visualizzare l'intero DataFrame\nprint("DataFrame completo:")\nprint(df)\n\n# Selezionare e visualizzare solo la colonna 'Nome'\nprint("\\nSolo la colonna 'Nome':")\nprint(df['Nome'])`,
      },
    ],
  },
];
