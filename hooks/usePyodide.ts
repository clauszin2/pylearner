
import { useState, useEffect, useCallback } from 'react';

declare global {
  interface Window {
    loadPyodide: (options?: { indexURL: string }) => Promise<any>;
  }
}

const PYTHON_IMPORTS_PRELUDE = `
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import requests
import json
`;

// Questo hook incapsula tutta la logica relativa a Pyodide
export function usePyodide(setInitialOutput: (message: string) => void) {
  const [pyodideInstance, setPyodideInstance] = useState<any | null>(null);
  const [isPyodideLoading, setIsPyodideLoading] = useState<boolean>(true);

  // Carica l'istanza di Pyodide e i pacchetti
  useEffect(() => {
    async function load() {
      setInitialOutput("Caricamento dell'interprete Python in locale (Pyodide)...");
      try {
        const pyodide = await window.loadPyodide();
        setInitialOutput('Caricamento pacchetti (NumPy, Pandas, Matplotlib, Requests)...');
        await pyodide.loadPackage(['numpy', 'pandas', 'matplotlib', 'requests']);
        setPyodideInstance(pyodide);
        setInitialOutput("Interprete Python pronto. Esegui il codice in locale!");
      } catch (error) {
        console.error("Failed to load Pyodide:", error);
        setInitialOutput("Errore: Impossibile caricare l'interprete Python locale. L'esecuzione del codice non è disponibile.");
      } finally {
        setIsPyodideLoading(false);
      }
    }
    load();
  }, [setInitialOutput]);

  // Funzione memoizzata per eseguire codice Python
  const runPython = useCallback(async (code: string): Promise<string> => {
    if (!pyodideInstance) {
      return "L'interprete Python locale non è ancora pronto.";
    }

    const outputLines: string[] = [];
    pyodideInstance.setStdout({ batched: (str: string) => outputLines.push(str) });
    pyodideInstance.setStderr({ batched: (str: string) => outputLines.push(str) });

    try {
      await pyodideInstance.runPythonAsync(PYTHON_IMPORTS_PRELUDE);
      await pyodideInstance.runPythonAsync(code);
      const result = outputLines.join('\n');
      return result || "Il codice è stato eseguito senza produrre output.";
    } catch (error: any) {
      return error.message;
    } finally {
      // È cruciale resettare stdout/stderr per non accumulare output tra le esecuzioni
      pyodideInstance.setStdout({});
      pyodideInstance.setStderr({});
    }
  }, [pyodideInstance]);

  return { isPyodideLoading, runPython };
}
