import type { Chapter } from './types';

export const CURRICULUM: Chapter[] = [
  {
    title: 'Introduzione a Python',
    lessons: [
      {
        title: 'Ciao, Mondo!',
        content: `Benvenuto su PyLearner! Iniziamo con il programma più classico: stampare un messaggio a schermo. In Python, la funzione 'print()' è usata per visualizzare output. Il testo, chiamato stringa, deve essere racchiuso tra virgolette (""). Prova a eseguire il codice per vedere il risultato!`,
        starterCode: `print("Ciao, Python!")`,
        exercisePrompt: `Modifica il codice per stampare il messaggio "Python è fantastico!" invece di "Ciao, Python!".`,
        solution: `print("Python è fantastico!")`
      },
      {
        title: 'Variabili e Tipi di Dati',
        content: `Le variabili sono come contenitori per memorizzare dati. Puoi assegnare un valore a una variabile usando il simbolo "=". Python ha diversi tipi di dati, come stringhe (testo), interi (numeri interi) e float (numeri con la virgola). In questo esempio, creiamo una variabile 'nome' e la usiamo all'interno di una f-string per un saluto personalizzato.`,
        starterCode: `nome = "Mondo"\nprint(f"Ciao, {nome}")`,
        exercisePrompt: `Crea una nuova variabile chiamata 'anno' con il valore 2024. Poi, modifica la stringa di stampa per includere l'anno, mostrando un messaggio come "Ciao, Mondo nel 2024".`,
        solution: `nome = "Mondo"\nanno = 2024\nprint(f"Ciao, {nome} nel {anno}")`
      },
      {
        title: 'Liste',
        content: `Una lista è una collezione ordinata di elementi. Puoi creare una lista racchiudendo gli elementi tra parentesi quadre [] e separandoli con virgole. Per accedere a un elemento, usi il suo indice, che parte da 0. Quindi, 'studenti[0]' ti darà il primo elemento della lista.`,
        starterCode: `studenti = ["Alice", "Bob", "Carlo"]\nprint(studenti[0])`,
        exercisePrompt: `Aggiungi un nuovo studente, "David", alla fine della lista 'studenti' usando il metodo .append(). Poi, stampa l'ultimo studente della lista (ricorda che puoi usare l'indice -1).`,
        solution: `studenti = ["Alice", "Bob", "Carlo"]\nstudenti.append("David")\nprint(studenti[-1])`
      },
      {
        title: 'Cicli For',
        content: `I cicli (loops) ti permettono di eseguire un blocco di codice più volte. Un ciclo 'for' è perfetto per iterare su ogni elemento di una lista. Il codice all'interno del ciclo (indentato) verrà eseguito per ciascun elemento, uno dopo l'altro. L'indentazione (spazio all'inizio della riga) è fondamentale in Python!`,
        starterCode: `numeri = [1, 2, 3, 4, 5]\nsomma = 0\nfor numero in numeri:\n    somma = somma + numero\n\nprint(f"La somma totale è: {somma}")`,
        exercisePrompt: `Modifica il ciclo 'for' per calcolare il prodotto di tutti i numeri nella lista invece della somma. Avrai bisogno di una nuova variabile 'prodotto' inizializzata a 1.`,
        solution: `numeri = [1, 2, 3, 4, 5]\nprodotto = 1\nfor numero in numeri:\n    prodotto = prodotto * numero\n\nprint(f"Il prodotto totale è: {prodotto}")`
      },
      {
        title: 'Funzioni',
        content: `Le funzioni sono blocchi di codice riutilizzabili che eseguono un'azione specifica. Si definiscono con la parola chiave 'def', seguita dal nome della funzione e da parentesi (). Possono accettare parametri (input) e restituire un valore (output) usando 'return'. Questo aiuta a organizzare il codice e a non ripetersi.`,
        starterCode: `def somma(a, b):\n    # Il tuo codice qui per restituire la somma di a e b\n    pass\n\nrisultato = somma(5, 7)\nprint(f"La somma è: {risultato}")`,
        exercisePrompt: `Completa la funzione 'somma' in modo che prenda due numeri come parametri ('a' e 'b') e restituisca la loro somma usando la parola chiave 'return'.`,
        solution: `def somma(a, b):\n    return a + b\n\nrisultato = somma(5, 7)\nprint(f"La somma è: {risultato}")`
      },
      {
        title: 'Condizioni If/Else',
        content: `Le istruzioni condizionali ti permettono di eseguire codice diverso a seconda che una condizione sia vera o falsa. Si usano 'if', 'elif' (else if) e 'else'. In questo esempio, controlliamo l'età per determinare se una persona può votare o guidare.`,
        starterCode: `eta = 18\n\nif eta > 18:\n    print("Puoi votare.")\nelif eta >= 16:\n    print("Puoi guidare ma non votare.")\nelse:\n    print("Non puoi né guidare né votare.")`,
        exercisePrompt: `Aggiungi una condizione per controllare se l'età è esattamente 18 (usa l'operatore ==). Se lo è, stampa "Hai esattamente 18 anni! Benvenuto tra i grandi." e posizionala correttamente nella catena if/elif/else.`,
        solution: `eta = 18\n\nif eta > 18:\n    print("Puoi votare.")\nelif eta == 18:\n    print("Hai esattamente 18 anni! Benvenuto tra i grandi.")\nelif eta >= 16:\n    print("Puoi guidare ma non votare.")\nelse:\n    print("Non puoi né guidare né votare.")`
      },
      {
        title: 'Dizionari',
        content: `I dizionari sono un altro tipo di collezione, ma invece di essere indicizzati da numeri, usano 'chiavi' per accedere ai 'valori'. Ogni elemento è una coppia chiave-valore. Sono incredibilmente utili per memorizzare dati strutturati, come le informazioni di un utente. Si creano con le parentesi graffe {}.`,
        starterCode: `utente = {\n    "nome": "Mario Rossi",\n    "eta": 30,\n    "citta": "Roma"\n}\n\nprint(f"Nome utente: {utente['nome']}")`,
        exercisePrompt: `Aggiungi una nuova coppia chiave-valore al dizionario 'utente': la chiave deve essere 'professione' e il valore 'Ingegnere'. Poi, stampa la professione appena aggiunta.`,
        solution: `utente = {\n    "nome": "Mario Rossi",\n    "eta": 30,\n    "citta": "Roma"\n}\n\nutente['professione'] = 'Ingegnere'\n\nprint(f"Professione: {utente['professione']}")`
      },
      {
        title: 'List Comprehension',
        content: `Le 'List Comprehension' sono un modo elegante e conciso per creare liste in Python. Permettono di scrivere un ciclo 'for' all'interno di parentesi quadre. Questo rende il codice più leggibile e spesso più veloce. Guarda come possiamo creare una lista di numeri al quadrato con una sola riga!`,
        starterCode: `numeri = [1, 2, 3, 4, 5, 6, 7, 8]\n\n# Crea una lista con solo i numeri pari usando list comprehension\npari = [] # completa questa riga\n\nprint(f"Numeri pari: {pari}")`,
        exercisePrompt: `Usa una list comprehension per creare una nuova lista chiamata 'pari' che contenga solo i numeri pari dalla lista 'numeri'. (Suggerimento: puoi usare l'operatore modulo '%' per controllare se un numero è pari: n % 2 == 0).`,
        solution: `numeri = [1, 2, 3, 4, 5, 6, 7, 8]\n\npari = [n for n in numeri if n % 2 == 0]\n\nprint(f"Numeri pari: {pari}")`
      },
      {
        title: 'Gestione degli Errori',
        content: `A volte il codice può fallire per motivi imprevisti, come un input errato dell'utente. Invece di far crashare il programma, possiamo gestire questi errori con i blocchi 'try' e 'except'. Il codice nel blocco 'try' viene eseguito, e se si verifica un errore, viene eseguito il codice nel blocco 'except' corrispondente.`,
        starterCode: `dati = [1, 2, 3]\n\ntry:\n    # Prova ad accedere a un indice non valido\n    print(dati[5])\nexcept ZeroDivisionError:\n    print("Errore: Impossibile dividere per zero!")\n# Aggiungi il tuo blocco except qui\n`,
        exercisePrompt: `Il codice cerca di accedere a un elemento di una lista che non esiste, causando un 'IndexError'. Aggiungi un altro blocco 'except' per gestire specificamente questo 'IndexError' e stampare il messaggio "Errore: Indice fuori dai limiti!".`,
        solution: `dati = [1, 2, 3]\n\ntry:\n    print(dati[5])\nexcept ZeroDivisionError:\n    print("Errore: Impossibile dividere per zero!")\nexcept IndexError:\n    print("Errore: Indice fuori dai limiti!")`
      },
    ],
  },
  {
    title: 'Python Intermedio',
    lessons: [
      {
        title: 'Manipolazione delle Stringhe',
        content: `Python offre molti metodi utili per manipolare le stringhe. Puoi convertirle in maiuscolo (.upper()) o minuscolo (.lower()), rimuovere spazi bianchi all'inizio e alla fine (.strip()), o sostituire parti di esse (.replace()). Puoi anche accedere a "fette" (slices) di una stringa usando la notazione [inizio:fine].`,
        starterCode: `testo = "  Benvenuti su PyLearner!  "\n\n# Pulisci e modifica il testo\nprint(testo)`,
        exercisePrompt: `Usa i metodi delle stringhe per pulire la variabile 'testo': rimuovi gli spazi bianchi iniziali e finali, converti tutto in minuscolo e sostituisci la parola "benvenuti" con "ciao".`,
        solution: `testo = "  Benvenuti su PyLearner!  "\n\npulito = testo.strip().lower().replace("benvenuti", "ciao")\nprint(pulito)`
      },
      {
        title: 'Tuple e Set',
        content: `Oltre alle liste, Python ha altre due importanti strutture dati: le tuple e i set. Le tuple, create con parentesi tonde (), sono come le liste ma sono immutabili (non possono essere modificate dopo la creazione). I set, creati con parentesi graffe {}, sono collezioni non ordinate di elementi unici. Sono ottimi per rimuovere duplicati o per controlli di appartenenza veloci.`,
        starterCode: `numeri_duplicati = [1, 2, 2, 3, 4, 4, 5]\n\n# Converti la lista in un set per rimuovere i duplicati\n\n\ncoordinate_fisse = (41.9028, 12.4964) # Roma\nprint(f"Coordinate: {coordinate_fisse}")`,
        exercisePrompt: `Crea una nuova variabile chiamata 'numeri_unici' convertendo 'numeri_duplicati' in un set. Poi stampa 'numeri_unici' per vedere il risultato.`,
        solution: `numeri_duplicati = [1, 2, 2, 3, 4, 4, 5]\n\nnumeri_unici = set(numeri_duplicati)\nprint(f"Numeri unici: {numeri_unici}")\n\ncoordinate_fisse = (41.9028, 12.4964)\nprint(f"Coordinate: {coordinate_fisse}")`
      },
       {
        title: 'Lettura e Scrittura File',
        content: `Interagire con i file è un'operazione comune. Python rende semplice leggere e scrivere su file di testo. L'approccio migliore è usare il costrutto 'with open(...) as ...'. Questo garantisce che il file venga chiuso correttamente anche se si verificano errori. Puoi aprire un file in modalità lettura ('r'), scrittura ('w') o aggiunta ('a').`,
        starterCode: `linee_da_scrivere = ["Prima riga.", "Seconda riga."]\n\n# Scrivi le linee in un file 'note.txt'\n\n# Rileggi il file e stampa il suo contenuto`,
        exercisePrompt: `Completa il codice. Prima, apri 'note.txt' in modalità scrittura ('w') e scrivi ogni linea dalla lista. Poi, riapri lo stesso file in modalità lettura ('r'), leggi tutto il contenuto e stampalo.`,
        solution: `linee_da_scrivere = ["Prima riga.\\n", "Seconda riga.\\n"]\n\n# Scrivi nel file\nwith open('note.txt', 'w') as file:\n    file.writelines(linee_da_scrivere)\n\n# Leggi dal file\nwith open('note.txt', 'r') as file:\n    contenuto = file.read()\n    print("Contenuto del file:")\n    print(contenuto)`
      }
    ]
  },
  {
    title: 'Programmazione a Oggetti (OOP)',
    lessons: [
        {
            title: 'Classi e Oggetti',
            content: `La Programmazione a Oggetti (OOP) è un paradigma per strutturare il codice. Una 'classe' è un modello (blueprint) per creare 'oggetti'. Gli oggetti hanno attributi (dati) e metodi (funzioni). Il metodo speciale '__init__' è il costruttore, che viene chiamato quando si crea un nuovo oggetto per inizializzare i suoi attributi.`,
            starterCode: `class Veicolo:\n    def __init__(self, marca, modello):\n        self.marca = marca\n        self.modello = modello\n\n    def descrizione(self):\n        # Completa questo metodo\n        pass\n\nmia_auto = Veicolo("Fiat", "500")\nprint(mia_auto.descrizione())`,
            exercisePrompt: `Completa il metodo 'descrizione' in modo che restituisca una stringa come "Questo è un veicolo di marca Fiat, modello 500.".`,
            solution: `class Veicolo:\n    def __init__(self, marca, modello):\n        self.marca = marca\n        self.modello = modello\n\n    def descrizione(self):\n        return f"Questo è un veicolo di marca {self.marca}, modello {self.modello}."\n\nmia_auto = Veicolo("Fiat", "500")\nprint(mia_auto.descrizione())`
        },
        {
            title: 'Ereditarietà',
            content: `L'ereditarietà permette a una classe (figlia) di ereditare attributi e metodi da un'altra classe (genitore). Questo promuove il riuso del codice. La classe figlia può usare i metodi del genitore, sovrascriverli (override) o aggiungerne di nuovi.`,
            starterCode: `class Animale:\n    def __init__(self, nome):\n        self.nome = nome\n\n    def parla(self):\n        return "Suono generico di animale"\n\nclass Cane(Animale):\n    # Sovrascrivi il metodo parla per il Cane\n    pass\n\nfido = Cane("Fido")\nprint(f"{fido.nome} fa: {fido.parla()}")`,
            exercisePrompt: `Nella classe 'Cane', sovrascrivi (override) il metodo 'parla' in modo che restituisca la stringa "Bau!".`,
            solution: `class Animale:\n    def __init__(self, nome):\n        self.nome = nome\n\n    def parla(self):\n        return "Suono generico di animale"\n\nclass Cane(Animale):\n    def parla(self):\n        return "Bau!"\n\nfido = Cane("Fido")\nprint(f"{fido.nome} fa: {fido.parla()}")`
        }
    ]
  },
  {
    title: 'Data Science con Python',
    lessons: [
      {
        title: 'Introduzione a NumPy',
        content: `NumPy è una libreria fondamentale per il calcolo scientifico in Python. Fornisce un oggetto array ad alte prestazioni e strumenti per lavorare con questi array. È molto più veloce delle liste Python per le operazioni numeriche. In questo esempio, creiamo un array, eseguiamo operazioni su tutti gli elementi contemporaneamente e calcoliamo la media.`,
        starterCode: `import numpy as np\n\ndati_numpy = np.array([10, 20, 30, 40, 50])\n\nprint(f"Array NumPy: {dati_numpy}")`,
        exercisePrompt: `Crea un secondo array NumPy chiamato 'pesi' con i valori [0.5, 0.8, 1.2, 1.5, 0.9]. Calcola e stampa il prodotto elemento per elemento (moltiplicazione) tra 'dati_numpy' e 'pesi'.`,
        solution: `import numpy as np\n\ndati_numpy = np.array([10, 20, 30, 40, 50])\npesi = np.array([0.5, 0.8, 1.2, 1.5, 0.9])\n\nprod_ponderato = dati_numpy * pesi\nprint(f"Prodotto ponderato: {prod_ponderato}")`
      },
      {
        title: 'Introduzione a Pandas',
        content: `Pandas è la libreria più popolare per la manipolazione e l'analisi dei dati. La sua struttura dati principale è il DataFrame, che puoi immaginare come una tabella o un foglio di calcolo. I DataFrame rendono semplice leggere, manipolare e analizzare dati strutturati. Qui creiamo un DataFrame da un dizionario.`,
        starterCode: `import pandas as pd\n\ndati = {\n    'Nome': ['Alice', 'Bob', 'Carlo'],\n    'Eta': [25, 30, 22],\n    'Citta': ['Roma', 'Milano', 'Napoli']\n}\n\ndf = pd.DataFrame(dati)\n\nprint(df)`,
        exercisePrompt: `Aggiungi una nuova colonna chiamata 'Salario' al DataFrame 'df' con i valori [50000, 60000, 45000]. Poi, stampa di nuovo l'intero DataFrame aggiornato.`,
        solution: `import pandas as pd\n\ndati = {\n    'Nome': ['Alice', 'Bob', 'Carlo'],\n    'Eta': [25, 30, 22],\n    'Citta': ['Roma', 'Milano', 'Napoli']\n}\n\ndf = pd.DataFrame(dati)\n\ndf['Salario'] = [50000, 60000, 45000]\n\nprint("DataFrame aggiornato:")\nprint(df)`
      },
      {
        title: 'Filtrare Dati con Pandas',
        content: `Una delle operazioni più comuni in Pandas è selezionare un sottoinsieme del DataFrame basato su determinate condizioni. Questo si chiama 'boolean indexing'. Si crea una serie di valori booleani (True/False) e la si usa per filtrare le righe del DataFrame.`,
        starterCode: `import pandas as pd\n\ndati = {\n    'Nome': ['Alice', 'Bob', 'Carlo', 'Diana'],\n    'Eta': [25, 30, 22, 35],\n    'Salario': [50000, 80000, 45000, 90000]\n}\ndf = pd.DataFrame(dati)\n\n# Filtra il DataFrame per trovare le persone con più di 28 anni\n`,
        exercisePrompt: `Completa il codice per selezionare e stampare solo le righe del DataFrame in cui il valore della colonna 'Salario' è maggiore di 60000.`,
        solution: `import pandas as pd\n\ndati = {\n    'Nome': ['Alice', 'Bob', 'Carlo', 'Diana'],\n    'Eta': [25, 30, 22, 35],\n    'Salario': [50000, 80000, 45000, 90000]\n}\ndf = pd.DataFrame(dati)\n\nstipendi_alti = df[df['Salario'] > 60000]\nprint(stipendi_alti)`
      },
      {
        title: 'Raggruppare Dati con Pandas',
        content: `Il metodo 'groupby()' è estremamente potente. Ti permette di raggruppare il DataFrame in base ai valori di una o più colonne e poi applicare una funzione di aggregazione (come .mean(), .sum(), .count()) a ciascun gruppo. È fondamentale per l'analisi esplorativa dei dati.`,
        starterCode: `import pandas as pd\n\ndati = {\n    'Citta': ['Roma', 'Milano', 'Roma', 'Milano', 'Napoli'],\n    'Vendite': [200, 150, 300, 250, 100]\n}\ndf = pd.DataFrame(dati)\n\n# Raggruppa per città e calcola il totale delle vendite per ciascuna`,
        exercisePrompt: `Usa il metodo groupby() per raggruppare il DataFrame per 'Citta' e poi calcola la media (.mean()) delle 'Vendite' per ogni città.`,
        solution: `import pandas as pd\n\ndati = {\n    'Citta': ['Roma', 'Milano', 'Roma', 'Milano', 'Napoli'],\n    'Vendite': [200, 150, 300, 250, 100]\n}\ndf = pd.DataFrame(dati)\n\nvendite_medie_citta = df.groupby('Citta')['Vendite'].mean()\nprint(vendite_medie_citta)`
      },
      {
        title: 'Introduzione a Matplotlib',
        content: `Matplotlib è la libreria di riferimento per creare visualizzazioni statiche in Python. Anche se non possiamo visualizzare il grafico qui, possiamo scrivere il codice per crearlo. Si importata solitamente come 'plt'. Si usano funzioni come 'plt.plot()' per grafici a linee, 'plt.bar()' per grafici a barre, e poi 'plt.title()', 'plt.xlabel()', 'plt.ylabel()' per aggiungere etichette.`,
        starterCode: `import matplotlib.pyplot as plt\n\nmesi = ['Gen', 'Feb', 'Mar']\nricavi = [1000, 1200, 1500]\n\n# Crea un grafico a barre dei ricavi per mese`,
        exercisePrompt: `Usa Matplotlib per creare un grafico a barre ('plt.bar()') che mostri i ricavi per ogni mese. Aggiungi un titolo al grafico chiamato "Ricavi Trimestrali".`,
        solution: `import matplotlib.pyplot as plt\n\nmesi = ['Gen', 'Feb', 'Mar']\nricavi = [1000, 1200, 1500]\n\nplt.bar(mesi, ricavi)\nplt.title("Ricavi Trimestrali")\nplt.xlabel("Mese")\nplt.ylabel("Ricavi (€)")\n\n# In un ambiente locale, plt.show() mostrerebbe il grafico.\nprint("Codice per il grafico a barre generato correttamente.")`
      }
    ],
  },
];
