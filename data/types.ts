export type Evidence =
  | "Biblical"
  | "Archaeological"
  | "Epigraphic"
  | "Imperial"
  | "Classical"
  | "Material"
  | "Textual";

export type Confidence = "Strong" | "Moderate" | "Debated" | "Uncertain";

export type Event = {
  id: string;
  date: string;
  sortYear: number;
  era: string;
  title: string;
  summary: string;
  location: string;
  people: string[];
  bible: string[];
  evidence: Evidence[];
  confidence: Confidence;
  sources: string[];
  significance?: string;
  historicalNote?: string;
  tags?: string[];
};
