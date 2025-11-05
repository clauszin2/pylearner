import type { Chapter } from './types';

export const CURRICULUM: Chapter[] = [
  {
    title: 'Introduzione a Python',
    lessons: [
      {
        title: 'Ciao, Busaccone!',
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
      },
      {
        title: 'Moduli e Pacchetti',
        content: `Nessun programmatore scrive tutto da zero! Python ti permette di organizzare il codice in 'moduli' (singoli file .py) e di usare moduli scritti da altri. La libreria standard di Python è ricca di moduli utili. Si usa la parola chiave 'import' per rendere disponibile il codice di un modulo, come il modulo 'math' per le operazioni matematiche.`,
        starterCode: `import math\n\n# Usa una funzione dal modulo math per calcolare la radice quadrata\nradice = math.sqrt(16)\n\nprint(f"La radice quadrata di 16 è {radice}")`,
        exercisePrompt: `Importa il modulo 'random'. Usa la funzione 'random.randint(1, 10)' per generare e stampare un numero intero casuale compreso tra 1 e 10.`,
        solution: `import random\n\nnumero_casuale = random.randint(1, 10)\nprint(f"Numero casuale generato: {numero_casuale}")`
      },
      {
        title: 'Argomenti Flessibili (*args, **kwargs)',
        content: `A volte vuoi creare funzioni che possano accettare un numero variabile di argomenti. Python lo permette con *args e **kwargs. '*args' raccoglie tutti gli argomenti posizionali extra in una tupla. '**kwargs' raccoglie tutti gli argomenti con parola chiave extra in un dizionario.`,
        starterCode: `def calcola_media(*numeri):\n    # Calcola la media dei numeri passati\n    pass\n\nprint(calcola_media(10, 20, 30))\nprint(calcola_media(5, 10, 15, 20))`,
        exercisePrompt: `Completa la funzione 'calcola_media' per calcolare e restituire la media di un numero qualsiasi di argomenti. Se non vengono passati numeri (la tupla 'numeri' è vuota), la funzione dovrebbe restituire 0.`,
        solution: `def calcola_media(*numeri):\n    if not numeri:\n        return 0\n    return sum(numeri) / len(numeri)\n\nprint(f"Media 1: {calcola_media(10, 20, 30)}")\nprint(f"Media 2: {calcola_media(5, 10, 15, 20)}")`
      },
      {
        title: 'Lambda, Map e Filter',
        content: `Python offre strumenti per uno stile di programmazione più 'funzionale'. Le funzioni 'lambda' sono piccole funzioni anonime. 'map()' applica una funzione a tutti gli elementi di un iterabile (es. una lista). 'filter()' costruisce un iteratore dagli elementi di un iterabile per cui una funzione restituisce True.`,
        starterCode: `numeri = [1, 2, 3, 4, 5]\n\n# Usa map e una funzione lambda per creare una lista con i quadrati di ogni numero\nquadrati = list(map(lambda x: x**2, numeri))\n\nprint(f"Quadrati: {quadrati}")`,
        exercisePrompt: `Data la lista 'nomi', usa 'filter' e una funzione 'lambda' per creare una nuova lista che contenga solo i nomi che iniziano con la lettera 'A'.`,
        solution: `nomi = ["Anna", "Bruno", "Alberto", "Carla"]\nnomi_con_a = list(filter(lambda nome: nome.startswith('A'), nomi))\nprint(f"Nomi che iniziano con A: {nomi_con_a}")`
      },
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
        },
        {
          title: 'Incapsulamento (Attributi Privati)',
          content: `L'incapsulamento è l'idea di raggruppare dati (attributi) e i metodi che operano su di essi all'interno di un unico oggetto. Una parte importante è nascondere i dettagli interni di un oggetto. In Python, si usa una convenzione: un trattino basso (es. _saldo) suggerisce che un attributo è per uso interno, mentre due trattini bassi (es. __saldo) attivano il 'name mangling', rendendo più difficile l'accesso dall'esterno.`,
          starterCode: `class ContoBancario:\n    def __init__(self, titolare, saldo_iniziale):\n        self.titolare = titolare\n        self.__saldo = saldo_iniziale # Attributo 'privato'\n\n    def deposita(self, importo):\n        if importo > 0:\n            self.__saldo += importo\n            print(f"Depositati {importo} EUR.")\n\n    def preleva(self, importo):\n        # Aggiungi il controllo sul saldo\n        pass\n\n    def get_saldo(self):\n        return f"Saldo attuale: {self.__saldo} EUR"\n\nconto = ContoBancario("Mario", 1000)\nconto.deposita(200)\nconto.preleva(1500) # Questo non dovrebbe funzionare\nprint(conto.get_saldo())`,
          exercisePrompt: `Completa il metodo 'preleva'. Dovrebbe sottrarre l'importo dal saldo solo se l'importo è positivo E se c'è abbastanza saldo disponibile. Stampa un messaggio di successo o di errore.`,
          solution: `class ContoBancario:\n    def __init__(self, titolare, saldo_iniziale):\n        self.titolare = titolare\n        self.__saldo = saldo_iniziale\n\n    def deposita(self, importo):\n        if importo > 0:\n            self.__saldo += importo\n            print(f"Depositati {importo} EUR.")\n\n    def preleva(self, importo):\n        if importo > 0 and self.__saldo >= importo:\n            self.__saldo -= importo\n            print(f"Prelevati {importo} EUR.")\n        else:\n            print("Prelievo non riuscito: fondi insufficienti o importo non valido.")\n\n    def get_saldo(self):\n        return f"Saldo attuale: {self.__saldo} EUR"\n\nconto = ContoBancario("Mario", 1000)\nconto.deposita(200)\nconto.preleva(1500)\nconto.preleva(500)\nprint(conto.get_saldo())`
        },
        {
            title: 'Metodi Speciali (Dunder)',
            content: `I metodi speciali, spesso chiamati "dunder methods" (da Double Underscore), permettono alle tue classi di integrarsi con il comportamento nativo di Python. Ad esempio, definendo il metodo '__str__', puoi personalizzare cosa viene stampato quando usi print() su un oggetto. Con '__len__', puoi usare la funzione len() su di esso.`,
            starterCode: `class MazzoDiCarte:\n    def __init__(self):\n        self.carte = ["Asso", "Re", "Regina", "Jack"] * 4\n\n    def __str__(self):\n        # Restituisci una stringa descrittiva\n        return "Un mazzo di carte"\n\n    def __len__(self):\n        # Restituisci il numero di carte\n        return 0\n\nmazzo = MazzoDiCarte()\nprint(mazzo) # Dovrebbe usare __str__\nprint(f"Numero di carte: {len(mazzo)}") # Dovrebbe usare __len__`,
            exercisePrompt: `Implementa i metodi '__str__' e '__len__'. '__str__' dovrebbe restituire una stringa come 'Mazzo con 16 carte'. '__len__' dovrebbe restituire il numero effettivo di carte nella lista 'self.carte'.`,
            solution: `class MazzoDiCarte:\n    def __init__(self):\n        self.carte = ["Asso", "Re", "Regina", "Jack"] * 4\n\n    def __str__(self):\n        return f"Mazzo con {len(self.carte)} carte"\n\n    def __len__(self):\n        return len(self.carte)\n\nmazzo = MazzoDiCarte()\nprint(mazzo)\nprint(f"Numero di carte: {len(mazzo)}")`
        },
         {
            title: 'Metodi Statici e di Classe',
            content: `Oltre ai metodi di istanza (che usano 'self'), le classi possono avere metodi statici e metodi di classe. Un 'metodo statico' (decorato con @staticmethod) è come una normale funzione che vive dentro una classe; non riceve né l'istanza né la classe. Un 'metodo di classe' (decorato con @classmethod) riceve la classe stessa come primo argomento, convenzionalmente chiamato 'cls'. È spesso usato per creare 'factory methods'.`,
            starterCode: `import datetime\n\nclass Utente:\n    def __init__(self, nome, eta):\n        self.nome = nome\n        self.eta = eta\n\n    @staticmethod\n    def is_maggiorenne(eta):\n        return eta >= 18\n\n    # Crea un metodo di classe qui\n\n# Esempio di utilizzo\nprint(f"Un 20enne è maggiorenne? {Utente.is_maggiorenne(20)}")`,
            exercisePrompt: `Aggiungi un metodo di classe chiamato 'from_anno_nascita'. Deve prendere 'nome' e 'anno_nascita' come argomenti, calcolare l'età corrente e restituire una nuova istanza della classe 'Utente' con i dati corretti.`,
            solution: `import datetime\n\nclass Utente:\n    def __init__(self, nome, eta):\n        self.nome = nome\n        self.eta = eta\n\n    @staticmethod\n    def is_maggiorenne(eta):\n        return eta >= 18\n\n    @classmethod\n    def from_anno_nascita(cls, nome, anno_nascita):\n        anno_corrente = datetime.date.today().year\n        eta = anno_corrente - anno_nascita\n        return cls(nome, eta)\n\n# Esempio\nutente_nato_nel_2000 = Utente.from_anno_nascita("Giulia", 2000)\nprint(f"Nome: {utente_nato_nel_2000.nome}, Età: {utente_nato_nel_2000.eta}")`
        },
    ]
  },
  {
    title: 'Concetti Avanzati',
    lessons: [
      {
        title: 'Decoratori',
        content: `I decoratori sono una funzionalità potente di Python. Un decoratore è una funzione che prende un'altra funzione come argomento, aggiunge qualche tipo di funzionalità e poi restituisce un'altra funzione, il tutto senza alterare il codice della funzione originale. Si usano con la sintassi '@nome_decoratore'.`,
        starterCode: `import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        # Il tuo codice qui\n        risultato = func(*args, **kwargs)\n        # E qui\n        return risultato\n    return wrapper\n\n@timer\ndef calcolo_lento():\n    time.sleep(1)\n    print("Calcolo completato!")\n\ncalcolo_lento()`,
        exercisePrompt: `Completa il decoratore 'timer'. Prima di chiamare la funzione originale (func), stampa "Inizio esecuzione...". Dopo averla chiamata, calcola e stampa il tempo trascorso in secondi.`,
        solution: `import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start_time = time.time()\n        print(f"Inizio esecuzione di '{func.__name__}'...")\n        risultato = func(*args, **kwargs)\n        end_time = time.time()\n        print(f"Fine esecuzione. Tempo trascorso: {end_time - start_time:.4f} secondi.")\n        return risultato\n    return wrapper\n\n@timer\ndef calcolo_lento():\n    time.sleep(1)\n    print("Calcolo completato!")\n\ncalcolo_lento()`
      },
      {
        title: 'Generatori e Yield',
        content: `I generatori sono un modo speciale per creare iteratori. Invece di costruire e restituire una lista completa, che potrebbe usare molta memoria, i generatori producono i valori uno alla volta usando la parola chiave 'yield'. La funzione 'si mette in pausa' a ogni 'yield', per poi riprendere da quel punto alla successiva richiesta.`,
        starterCode: `def conto_alla_rovescia(n):\n    print("Inizio conto alla rovescia!")\n    while n > 0:\n        # 'yield' invia un valore e mette in pausa la funzione\n        n -= 1\n\n# Itera sul generatore\nfor numero in conto_alla_rovescia(3):\n    print(numero)`,
        exercisePrompt: `Completa la funzione generatore 'conto_alla_rovescia'. Dovrebbe usare 'yield' per restituire il valore corrente di 'n' all'interno del ciclo 'while', prima di decrementarlo.`,
        solution: `def conto_alla_rovescia(n):\n    print("Inizio conto alla rovescia!")\n    while n > 0:\n        yield n\n        n -= 1\n\nprint("Conto alla rovescia da 3:")\nfor numero in conto_alla_rovescia(3):\n    print(numero)`
      },
      {
        title: 'Context Manager (with)',
        content: `Abbiamo già visto il costrutto 'with' per i file. Questo funziona grazie al 'context manager protocol'. Qualsiasi oggetto che implementi i metodi speciali '__enter__' e '__exit__' può essere usato con 'with'. Questo è utilissimo per gestire risorse che hanno bisogno di una fase di setup e una di teardown (come connessioni a database, lock, etc.).`,
        starterCode: `import time\n\nclass Timer:\n    def __enter__(self):\n        # Codice da eseguire all'inizio del blocco 'with'\n        print("Timer avviato.")\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        # Codice da eseguire alla fine del blocco 'with'\n        print("Timer fermato.")\n\n# Usiamo il nostro context manager\nwith Timer():\n    print("Eseguo un'operazione...")\n    time.sleep(1)\nprint("Operazione terminata.")`,
        exercisePrompt: `Migliora la classe Timer. Nel metodo '__enter__', salva il tempo di inizio (usando time.time()) in un attributo di istanza (es. self.start_time). Nel metodo '__exit__', calcola il tempo trascorso e stampalo.`,
        solution: `import time\n\nclass Timer:\n    def __enter__(self):\n        self.start_time = time.time()\n        print("Timer avviato.")\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        end_time = time.time()\n        tempo_trascorso = end_time - self.start_time\n        print(f"Timer fermato. Tempo trascorso: {tempo_trascorso:.4f} secondi.")\n\nwith Timer():\n    print("Eseguo un'operazione...")\n    time.sleep(1)\nprint("Operazione terminata.")`
      },
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
      },
      {
        title: 'Unire DataFrame (Merge & Join)',
        content: "Spesso i dati sono suddivisi in più tabelle. Pandas, proprio come SQL, permette di combinare DataFrame in modo efficiente usando `pd.merge()`. Puoi specificare la colonna (o le colonne) su cui unire e il tipo di join: 'inner' (solo le corrispondenze in entrambe), 'outer' (tutti i dati, con NaN dove mancano), 'left' o 'right'.",
        starterCode: `import pandas as pd\n\ndf_utenti = pd.DataFrame({\n    'user_id': [1, 2, 3],\n    'nome': ['Alice', 'Bob', 'Carlo']\n})\n\ndf_ordini = pd.DataFrame({\n    'user_id': [2, 3, 4],\n    'prodotto': ['Libro', 'Penna', 'Quaderno']\n})\n\n# Unisci i due DataFrame per vedere quali utenti hanno fatto ordini\nutenti_con_ordini = pd.merge(df_utenti, df_ordini, on='user_id', how='inner')\n\nprint(utenti_con_ordini)`,
        exercisePrompt: "Modifica il codice per eseguire un 'outer' join invece di un 'inner' join. Assegna il risultato a una variabile `tutti_i_dati` e stampala. Osserva come vengono gestiti gli utenti senza ordini e gli ordini senza utenti.",
        solution: `import pandas as pd\n\ndf_utenti = pd.DataFrame({\n    'user_id': [1, 2, 3],\n    'nome': ['Alice', 'Bob', 'Carlo']\n})\n\ndf_ordini = pd.DataFrame({\n    'user_id': [2, 3, 4],\n    'prodotto': ['Libro', 'Penna', 'Quaderno']\n})\n\ntutti_i_dati = pd.merge(df_utenti, df_ordini, on='user_id', how='outer')\n\nprint(tutti_i_dati)`
      },
      {
        title: 'Gestire Dati Mancanti',
        content: "I dati nel mondo reale sono raramente perfetti e spesso contengono valori mancanti, rappresentati in Pandas come 'NaN' (Not a Number). Gestire questi dati è cruciale. Puoi decidere di eliminare le righe o colonne con dati mancanti usando `.dropna()` oppure riempire i valori mancanti con un valore specifico (es. la media o la mediana) usando `.fillna()`.",
        starterCode: `import pandas as pd\nimport numpy as np\n\ndati = {\n    'A': [1, 2, np.nan, 4],\n    'B': [5, np.nan, np.nan, 8],\n    'C': [10, 20, 30, 40]\n}\ndf = pd.DataFrame(dati)\n\nprint("DataFrame originale:")\nprint(df)\n\n# Il tuo codice per gestire i dati mancanti qui`,
        exercisePrompt: "Completa il codice. Prima, usa `.fillna()` per sostituire i valori NaN nella colonna 'B' con il valore 0. Poi, usa `.dropna()` per rimuovere le righe che hanno ancora valori NaN (che a questo punto sarà solo la riga della colonna 'A'). Stampa il DataFrame pulito.",
        solution: `import pandas as pd\nimport numpy as np\n\ndati = {\n    'A': [1, 2, np.nan, 4],\n    'B': [5, np.nan, np.nan, 8],\n    'C': [10, 20, 30, 40]\n}\ndf = pd.DataFrame(dati)\n\nprint("DataFrame originale:")\nprint(df)\n\ndf['B'] = df['B'].fillna(0)\ndf_pulito = df.dropna()\n\nprint("\\nDataFrame pulito:")\nprint(df_pulito)`
      },
       {
        title: 'Istogrammi con Matplotlib',
        content: `Un istogramma è un tipo di grafico essenziale per capire la distribuzione di una singola variabile numerica. Mostra la frequenza con cui i valori cadono all'interno di determinati intervalli (chiamati 'bins'). È uno strumento fondamentale per l'analisi esplorativa dei dati. Si crea con 'plt.hist()'.`,
        starterCode: `import matplotlib.pyplot as plt\nimport numpy as np\n\n# Genera 1000 numeri casuali da una distribuzione normale\nnp.random.seed(0)\ndati_distribuzione = np.random.randn(1000)\n\n# Crea un istogramma qui`,
        exercisePrompt: `Usa Matplotlib per creare un istogramma della variabile 'dati_distribuzione'. Usa il parametro 'bins=30' per dividere i dati in 30 intervalli. Aggiungi un titolo appropriato al grafico, come "Distribuzione dei Dati".`,
        solution: `import matplotlib.pyplot as plt\nimport numpy as np\n\nnp.random.seed(0)\ndati_distribuzione = np.random.randn(1000)\n\nplt.hist(dati_distribuzione, bins=30)\nplt.title("Distribuzione dei Dati")\nplt.xlabel("Valore")\nplt.ylabel("Frequenza")\n\nprint("Codice per l'istogramma generato correttamente.")`
      },
      {
        title: 'Grafici a Dispersione (Scatter Plot)',
        content: "Un grafico a dispersione (scatter plot) è ideale per visualizzare la relazione tra due variabili numeriche. Ogni punto nel grafico rappresenta un'osservazione. Questo tipo di grafico può aiutarti a identificare correlazioni, cluster o valori anomali (outlier) nei tuoi dati. In Matplotlib, si crea con `plt.scatter()`.",
        starterCode: `import matplotlib.pyplot as plt\nimport numpy as np\n\n# Genera dati casuali correlati\nnp.random.seed(42) # per la riproducibilità\nore_studio = np.random.rand(50) * 10\npunteggio_esame = ore_studio * 7 + np.random.randn(50) * 10 + 15\npunteggio_esame = np.clip(punteggio_esame, 0, 100) # Limita i punteggi tra 0 e 100\n\n# Crea lo scatter plot qui`,
        exercisePrompt: "Usa `plt.scatter()` per creare un grafico a dispersione con 'ore_studio' sull'asse x e 'punteggio_esame' sull'asse y. Aggiungi un titolo al grafico 'Ore di Studio vs. Punteggio Esame' e etichette per l'asse x ('Ore di Studio') e l'asse y ('Punteggio Esame').",
        solution: `import matplotlib.pyplot as plt\nimport numpy as np\n\nnp.random.seed(42)\nore_studio = np.random.rand(50) * 10\npunteggio_esame = ore_studio * 7 + np.random.randn(50) * 10 + 15\npunteggio_esame = np.clip(punteggio_esame, 0, 100)\n\nplt.scatter(ore_studio, punteggio_esame)\nplt.title("Ore di Studio vs. Punteggio Esame")\nplt.xlabel("Ore di Studio")\nplt.ylabel("Punteggio Esame")\n\nprint("Codice per lo scatter plot generato correttamente.")`
      }
    ],
  },
  {
    title: 'Interagire con il Web (API)',
    lessons: [
      {
        title: 'Introduzione a API e JSON',
        content: `Un'API (Application Programming Interface) è un modo per due programmi di comunicare tra loro. Molte API web restituiscono dati in formato JSON (JavaScript Object Notation), un formato testuale leggero e facile da leggere sia per gli umani che per le macchine. Python ha un modulo integrato, 'json', per lavorare con questi dati.`,
        starterCode: `import json\n\n# Questa è una stringa che contiene dati in formato JSON\njson_string = '{"nome": "Luca", "eta": 28, "citta": "Firenze"}'\n\n# Converti la stringa JSON in un dizionario Python\ndati_python = json.loads(json_string)\n\nprint(f"Tipo di dati: {type(dati_python)}")\nprint(f"Dati: {dati_python}")`,
        exercisePrompt: `Data la variabile 'dati_python', accedi e stampa il valore associato alla chiave 'citta'.`,
        solution: `import json\n\njson_string = '{"nome": "Luca", "eta": 28, "citta": "Firenze"}'\ndati_python = json.loads(json_string)\n\nprint(f"La città è: {dati_python['citta']}")`
      },
      {
        title: 'Fare Richieste HTTP con `requests`',
        content: `Per comunicare con un'API web, dobbiamo inviare una richiesta HTTP a un URL specifico (chiamato 'endpoint'). La libreria 'requests' è lo standard di fatto in Python per fare questo. Il tipo di richiesta più comune è 'GET', usata per recuperare dati. La risposta contiene uno status code (200 significa OK) e i dati richiesti.`,
        starterCode: `import requests\n\n# Un endpoint di un\'API pubblica di test\nurl = "https://jsonplaceholder.typicode.com/todos/1"\n\n# Fai una richiesta GET\nresponse = requests.get(url)\n\nprint(f"Status Code: {response.status_code}")\n# .json() converte direttamente la risposta JSON in un dizionario Python\nprint(f"Dati: {response.json()}")`,
        exercisePrompt: `Modifica l'URL per richiedere i dati del "todo" con ID 5. Poi, converti la risposta JSON in un dizionario Python e stampa solo il valore della chiave 'title'.`,
        solution: `import requests\n\nurl = "https://jsonplaceholder.typicode.com/todos/5"\n\nresponse = requests.get(url)\n\nif response.status_code == 200:\n    dati = response.json()\n    print(f"Titolo del todo 5: {dati['title']}")\nelse:\n    print(f"Errore: Status Code {response.status_code}")`
      },
      {
        title: 'Esempio Pratico: PokéAPI',
        content: `Mettiamo tutto insieme! Useremo la PokéAPI, un'API pubblica e gratuita, per recuperare informazioni su un Pokémon. Costruiremo l'URL con il nome del Pokémon, faremo la richiesta GET, controlleremo se la richiesta è andata a buon fine e infine estrarremo e stamperemo i dati che ci interessano.`,
        starterCode: `import requests\n\npokemon_nome = "ditto" # Prova a cambiarlo con "charmander" o "squirtle"!\nurl = f"https://pokeapi.co/api/v2/pokemon/{pokemon_nome}"\n\nresponse = requests.get(url)\n\nif response.status_code == 200:\n    dati = response.json()\n    # Estrai e stampa i dati qui!\n    print(f"Hai trovato {dati['name'].capitalize()}!")\nelse:\n    print(f"Errore: Pokémon non trovato o API non disponibile. Status: {response.status_code}")`,
        exercisePrompt: `Completa il codice. Dopo aver controllato che la richiesta sia andata a buon fine, estrai e stampa il numero (ID), l'altezza (height) e il peso (weight) del Pokémon dal dizionario 'dati'.`,
        solution: `import requests\n\npokemon_nome = "ditto"\nurl = f"https://pokeapi.co/api/v2/pokemon/{pokemon_nome}"\n\nresponse = requests.get(url)\n\nif response.status_code == 200:\n    dati = response.json()\n    print(f"Nome: {dati['name'].capitalize()}")\n    print(f"ID: {dati['id']}")\n    print(f"Altezza: {dati['height']}")\n    print(f"Peso: {dati['weight']}")\nelse:\n    print(f"Errore: Pokémon non trovato o API non disponibile. Status: {response.status_code}")`
      },
    ]
  }
];
