export interface Lesson {
  title: string;
  content: string;
  starterCode: string;
  exercisePrompt: string;
  solution: string;
}

export interface Chapter {
  title: string;
  lessons: Lesson[];
}