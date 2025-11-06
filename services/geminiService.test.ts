// Nota: questi test sono scritti in un formato simile a Jest.
// Per eseguirli, sarebbe necessario integrare un framework di test come Jest o Vitest nel progetto.

// Fix: Import Jest globals to resolve TypeScript errors for missing test runner definitions.
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { runPythonCode, explainCode } from './geminiService';
import { GoogleGenAI } from '@google/genai';

// Mock dell'intero modulo @google/genai per isolare i test dalle chiamate API reali.
// Fix: Explicitly type the mock function to return a Promise. This allows TypeScript
// to correctly infer the types for mockResolvedValue and mockRejectedValue,
// fixing the "not assignable to parameter of type 'never'" errors.
const mockGenerateContent = jest.fn<(...args: any[]) => Promise<{ text: string }>>();
jest.mock('@google/genai', () => ({
  GoogleGenAI: jest.fn().mockImplementation(() => ({
    models: {
      generateContent: mockGenerateContent,
    },
  })),
}));

// Mock di console.error per mantenere pulito l'output dei test in caso di errori gestiti.
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

describe('geminiService', () => {

  beforeEach(() => {
    // Pulisce la cronologia e le implementazioni dei mock prima di ogni test.
    mockGenerateContent.mockClear();
    // Fix: Cast to 'any' to avoid TypeScript namespace error for jest.Mock.
    (GoogleGenAI as any).mockClear();
    mockConsoleError.mockClear();
  });

  describe('runPythonCode', () => {
    it('dovrebbe restituire l\'output ripulito (trimmed) dall\'API in caso di successo', async () => {
      const code = 'print("  hello  ")';
      const mockResponse = { text: '  hello  \n' };
      mockGenerateContent.mockResolvedValue(mockResponse);

      const result = await runPythonCode(code);

      expect(result).toBe('hello');
      expect(mockGenerateContent).toHaveBeenCalledTimes(1);
    });

    it('dovrebbe restituire una stringa vuota se l\'API restituisce solo spazi bianchi', async () => {
      const code = 'x = 1';
      const mockResponse = { text: ' \n \t ' };
      mockGenerateContent.mockResolvedValue(mockResponse);

      const result = await runPythonCode(code);

      expect(result).toBe('');
    });

    it('dovrebbe restituire un messaggio di errore specifico quando la chiamata API fallisce', async () => {
      const code = 'print("test")';
      const apiError = new Error('API Failure');
      mockGenerateContent.mockRejectedValue(apiError);

      const result = await runPythonCode(code);

      expect(result).toBe("Errore di comunicazione con l'API di Gemini.");
      expect(mockConsoleError).toHaveBeenCalledWith("Gemini API error in runPythonCode:", apiError);
    });
  });

  describe('explainCode', () => {
    it('dovrebbe restituire la spiegazione completa dall\'API in caso di successo', async () => {
      const code = 'def hello():\n  print("world")';
      const mockResponse = { text: 'Questo codice definisce una funzione.' };
      mockGenerateContent.mockResolvedValue(mockResponse);

      const result = await explainCode(code);

      expect(result).toBe('Questo codice definisce una funzione.');
      expect(mockGenerateContent).toHaveBeenCalledTimes(1);
    });

    it('dovrebbe restituire un messaggio di errore specifico quando la chiamata API fallisce', async () => {
      const code = '...';
      const apiError = new Error('API Failure');
      mockGenerateContent.mockRejectedValue(apiError);

      const result = await explainCode(code);

      expect(result).toBe("Errore di comunicazione con l'API di Gemini.");
      expect(mockConsoleError).toHaveBeenCalledWith("Gemini API error in explainCode:", apiError);
    });
  });
});