export type EvidenceType =
  | "Biblical"
  | "Archaeological"
  | "Epigraphic"
  | "Imperial"
  | "Classical"
  | "Material";

export type Confidence = "Strong" | "Moderate" | "Debated" | "Uncertain";

export type HistoricalEvent = {
  id: string;
  date: string;
  sortYear: number;
  era: string;
  title: string;
  summary: string;
  location: string;
  people: string[];
  bible: string[];
  evidence: EvidenceType[];
  confidence: Confidence;
  sources: string[];
  tags: string[];
};

export const events: HistoricalEvent[] = [
  {
    id: "v4-1200",
    date: "c. 1200 BCE",
    sortYear: -1200,
    era: "Iron Age I",
    title: "The transition into Iron Age I",
    summary:
      "Across the southern Levant, the end of Late Bronze Age political systems is followed by new settlement patterns, changing material culture, and the emergence of smaller regional communities. The transition is complex rather than a single collapse event.",
    location: "Southern Levant",
    people: ["Canaanite communities", "Sea Peoples"],
    bible: ["Judges 1–3"],
    evidence: ["Archaeological", "Imperial", "Material"],
    confidence: "Strong",
    sources: [
      "Metropolitan Museum of Art — The Eastern Mediterranean and Syria, 2000–1000 B.C.",
      "Metropolitan Museum of Art — Assyria to Iberia at the Dawn of the Classical Age"
    ],
    tags: ["Iron Age", "Canaan", "transition", "archaeology"]
  },
  {
    id: "v4-1175",
    date: "c. 1175 BCE",
    sortYear: -1175,
    era: "Iron Age I",
    title: "Philistine settlement horizon",
    summary:
      "Archaeological evidence from coastal sites points to new populations and cultural patterns in the southern Levant during Iron Age I. The biblical Philistines belong to this wider historical horizon, although the exact relationship between textual traditions and archaeological populations remains debated.",
    location: "Southern Levantine coast",
    people: ["Philistine communities"],
    bible: ["Judges 13–16", "1 Samuel 4–7"],
    evidence: ["Archaeological", "Imperial", "Material"],
    confidence: "Moderate",
    sources: [
      "Metropolitan Museum of Art — Assyria to Iberia at the Dawn of the Classical Age",
      "British Museum — Iron Age collections from Ashkelon and the southern Levant"
    ],
    tags: ["Philistines", "Sea Peoples", "Iron Age I", "Ashkelon", "Gaza"]
  },
  {
    id: "v4-1207",
    date: "c. 1207 BCE",
    sortYear: -1207,
    era: "Late Bronze Age / Iron Age transition",
    title: "Merneptah Stele: Israel appears in Egyptian royal rhetoric",
    summary:
      "An Egyptian victory inscription associated with Merneptah refers to Israel in the context of a campaign in Canaan. This is an important external anchor for the existence of a population or political-social entity identified as Israel by the late 13th century BCE. The inscription does not independently describe Moses, the Exodus, or Joshua.",
    location: "Egypt and Canaan",
    people: ["Merneptah"],
    bible: [],
    evidence: ["Epigraphic", "Imperial"],
    confidence: "Strong",
    sources: [
      "Merneptah Stele",
      "Metropolitan Museum of Art — Assyria to Iberia at the Dawn of the Classical Age"
    ],
    tags: ["Israel", "Merneptah", "Egypt", "Canaan", "external evidence"]
  },
  {
    id: "v4-1150",
    date: "c. 1150–1050 BCE",
    sortYear: -1100,
    era: "Judges",
    title: "Highland settlement and the emergence of early Israel",
    summary:
      "Archaeological surveys identify substantial growth of small settlements in the central highlands during Iron Age I. Scholars debate how these communities should be related to the emergence of Israel, but the settlement pattern is a major part of the historical discussion.",
    location: "Central highlands of Canaan",
    people: ["Early Israelite communities", "Canaanite communities"],
    bible: ["Judges 1–21"],
    evidence: ["Archaeological", "Material"],
    confidence: "Moderate",
    sources: [
      "Metropolitan Museum of Art — The Eastern Mediterranean and Syria, 2000–1000 B.C."
    ],
    tags: ["Israel", "highlands", "settlement", "Judges", "Iron Age I"]
  },
  {
    id: "v4-1100",
    date: "c. 1100 BCE",
    sortYear: -1100,
    era: "Judges",
    title: "The Judges period",
    summary:
      "The biblical book of Judges presents a cycle of regional conflicts, charismatic deliverers, tribal communities, and interaction with neighboring peoples. Historically, this narrative belongs to the broader Iron Age I setting in which political organization in the southern Levant was changing.",
    location: "Canaan",
    people: ["Deborah", "Gideon", "Jephthah", "Samson", "Samuel"],
    bible: ["Judges 2–21"],
    evidence: ["Biblical", "Archaeological"],
    confidence: "Debated",
    sources: [
      "Book of Judges",
      "Metropolitan Museum of Art — The Eastern Mediterranean and Syria, 2000–1000 B.C."
    ],
    tags: ["Judges", "Deborah", "Gideon", "Samson", "Philistines"]
  },
  {
    id: "v4-1050",
    date: "c. 1050 BCE",
    sortYear: -1050,
    era: "Early Monarchy",
    title: "Saul and the emergence of monarchy",
    summary:
      "The biblical narrative moves from tribal leadership toward monarchy under Saul. Archaeologically, the transition from Iron Age I to Iron Age II is visible through changing settlement and political organization, but the precise historical contours of Saul's kingdom remain difficult to reconstruct.",
    location: "Central and northern Canaan",
    people: ["Saul", "Samuel", "Jonathan", "David"],
    bible: ["1 Samuel 8–31"],
    evidence: ["Biblical", "Archaeological"],
    confidence: "Debated",
    sources: [
      "1 Samuel",
      "Metropolitan Museum of Art — The Eastern Mediterranean and Syria, 2000–1000 B.C."
    ],
    tags: ["Saul", "Samuel", "monarchy", "Philistines"]
  },
  {
    id: "v4-1000",
    date: "c. 1000 BCE",
    sortYear: -1000,
    era: "Early Monarchy",
    title: "David and the Jerusalem tradition",
    summary:
      "The biblical narrative presents David as king of Judah and Israel and identifies Jerusalem as his political center. The historical debate concerns the scale, institutions, chronology, and archaeological visibility of the early Davidic state. The later Tel Dan inscription provides an important external reference to a 'House of David', but it dates to the 9th century BCE rather than David's own lifetime.",
    location: "Jerusalem and the southern Levant",
    people: ["David", "Saul", "Jonathan", "Nathan", "Joab"],
    bible: ["2 Samuel 1–24", "1 Kings 1–2"],
    evidence: ["Biblical", "Epigraphic", "Archaeological"],
    confidence: "Moderate",
    sources: [
      "2 Samuel",
      "1 Kings 1–2",
      "Tel Dan Stele",
      "Metropolitan Museum of Art — Iron Age Levant chronology"
    ],
    tags: ["David", "Jerusalem", "Judah", "House of David", "Tel Dan"]
  },
  {
    id: "v4-970",
    date: "c. 970 BCE",
    sortYear: -970,
    era: "United Monarchy",
    title: "Solomon and the First Temple tradition",
    summary:
      "1 Kings describes Solomon's reign, international relationships, administrative organization, and construction of the Jerusalem Temple. Archaeological interpretations of major Iron Age building programs and their dates remain debated, so individual structures should not automatically be identified with Solomon's projects.",
    location: "Jerusalem and the southern Levant",
    people: ["Solomon", "Hiram of Tyre"],
    bible: ["1 Kings 3–11", "2 Chronicles 1–9"],
    evidence: ["Biblical", "Archaeological"],
    confidence: "Debated",
    sources: [
      "1 Kings 3–11",
      "2 Chronicles 1–9",
      "Metropolitan Museum of Art — Iron Age Levant chronology"
    ],
    tags: ["Solomon", "Temple", "Jerusalem", "Tyre"]
  },
  {
    id: "v4-930",
    date: "c. 930 BCE",
    sortYear: -930,
    era: "Divided Monarchy",
    title: "The kingdom divides",
    summary:
      "The biblical narrative describes the political division after Solomon into a northern kingdom commonly called Israel and a southern kingdom of Judah. The following centuries produce two distinct political histories within a wider Levantine world increasingly shaped by Aram and Assyria.",
    location: "Israel and Judah",
    people: ["Rehoboam", "Jeroboam I"],
    bible: ["1 Kings 12", "2 Chronicles 10"],
    evidence: ["Biblical", "Archaeological"],
    confidence: "Strong",
    sources: [
      "1 Kings 12",
      "2 Chronicles 10",
      "Metropolitan Museum of Art — Iron Age Levant chronology"
    ],
    tags: ["Israel", "Judah", "Rehoboam", "Jeroboam", "divided monarchy"]
  }
];
