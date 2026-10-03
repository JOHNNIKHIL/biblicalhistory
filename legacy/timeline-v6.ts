import rawEvents from "./events-v5.json";
import type { Event } from "./types";

export const events = rawEvents as Event[];

export const eras = [
  { id: "iron1", label: "Emergence of Israel", range: "c. 1200–1000 BCE" },
  { id: "monarchy", label: "Monarchy & Divided Kingdom", range: "c. 1000–722 BCE" },
  { id: "assyria", label: "Assyria & Judah", range: "722–609 BCE" },
  { id: "babylon", label: "Babylonian Crisis & Exile", range: "609–539 BCE" }
];
