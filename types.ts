export interface Lesson {
  title: string;
  content: string;
  starterCode: string;
}

export interface Chapter {
  title: string;
  lessons: Lesson[];
}
