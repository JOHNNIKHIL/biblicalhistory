export type CanonStatus = "canonical" | "deuterocanonical" | "received" | "appendix" | "varies" | "not-in-canon";

export type BibleBook = {
  name: string;
  slug: string;
  testament: "Old Testament" | "New Testament";
  section: string;
  chapters: number;
  guideSlug?: string;
  order: number;
  canonicalNotes?: string;
};

const ot = (name: string, slug: string, section: string, chapters: number, order: number, guideSlug?: string): BibleBook => ({ name, slug, testament: "Old Testament", section, chapters, order, guideSlug });
const nt = (name: string, slug: string, section: string, chapters: number, order: number, guideSlug?: string): BibleBook => ({ name, slug, testament: "New Testament", section, chapters, order, guideSlug });

/**
 * The 66-book Protestant canon is used as the core navigation set.
 * Other Christian traditions are represented separately in content/bible/canons.ts
 * because canon size, ordering, grouping, and status vary between churches.
 */
export const bibleBooks: BibleBook[] = [
  ot("Genesis", "genesis", "Torah", 50, 1, "book-genesis"),
  ot("Exodus", "exodus", "Torah", 40, 2, "book-exodus"),
  ot("Leviticus", "leviticus", "Torah", 27, 3, "book-leviticus"),
  ot("Numbers", "numbers", "Torah", 36, 4, "book-numbers"),
  ot("Deuteronomy", "deuteronomy", "Torah", 34, 5, "book-deuteronomy"),
  ot("Joshua", "joshua", "Historical Books", 24, 6, "book-joshua"),
  ot("Judges", "judges", "Historical Books", 21, 7, "book-judges"),
  ot("Ruth", "ruth", "Historical Books", 4, 8),
  ot("1 Samuel", "1-samuel", "Historical Books", 31, 9, "book-1-samuel"),
  ot("2 Samuel", "2-samuel", "Historical Books", 24, 10, "book-2-samuel"),
  ot("1 Kings", "1-kings", "Historical Books", 22, 11, "book-1-kings"),
  ot("2 Kings", "2-kings", "Historical Books", 25, 12, "book-2-kings"),
  ot("1 Chronicles", "1-chronicles", "Historical Books", 29, 13),
  ot("2 Chronicles", "2-chronicles", "Historical Books", 36, 14),
  ot("Ezra", "ezra", "Historical Books", 10, 15),
  ot("Nehemiah", "nehemiah", "Historical Books", 13, 16),
  ot("Esther", "esther", "Historical Books", 10, 17),
  ot("Job", "job", "Wisdom & Poetry", 42, 18),
  ot("Psalms", "psalms", "Wisdom & Poetry", 150, 19),
  ot("Proverbs", "proverbs", "Wisdom & Poetry", 31, 20),
  ot("Ecclesiastes", "ecclesiastes", "Wisdom & Poetry", 12, 21),
  ot("Song of Songs", "song-of-songs", "Wisdom & Poetry", 8, 22),
  ot("Isaiah", "isaiah", "Prophets", 66, 23, "book-isaiah"),
  ot("Jeremiah", "jeremiah", "Prophets", 52, 24, "book-jeremiah-book"),
  ot("Lamentations", "lamentations", "Prophets", 5, 25),
  ot("Ezekiel", "ezekiel", "Prophets", 48, 26, "book-ezekiel-book"),
  ot("Daniel", "daniel", "Prophets", 12, 27, "book-daniel-book"),
  ot("Hosea", "hosea", "Prophets", 14, 28),
  ot("Joel", "joel", "Prophets", 3, 29),
  ot("Amos", "amos", "Prophets", 9, 30),
  ot("Obadiah", "obadiah", "Prophets", 1, 31),
  ot("Jonah", "jonah", "Prophets", 4, 32),
  ot("Micah", "micah", "Prophets", 7, 33),
  ot("Nahum", "nahum", "Prophets", 3, 34),
  ot("Habakkuk", "habakkuk", "Prophets", 3, 35),
  ot("Zephaniah", "zephaniah", "Prophets", 3, 36),
  ot("Haggai", "haggai", "Prophets", 2, 37),
  ot("Zechariah", "zechariah", "Prophets", 14, 38),
  ot("Malachi", "malachi", "Prophets", 4, 39),
  nt("Matthew", "matthew", "Gospels", 28, 40, "book-matthew-book"),
  nt("Mark", "mark", "Gospels", 16, 41, "book-mark-book"),
  nt("Luke", "luke", "Gospels", 24, 42, "book-luke-book"),
  nt("John", "john", "Gospels", 21, 43, "book-john-book"),
  nt("Acts", "acts", "History", 28, 44, "book-acts-book"),
  nt("Romans", "romans", "Pauline Epistles", 16, 45),
  nt("1 Corinthians", "1-corinthians", "Pauline Epistles", 16, 46),
  nt("2 Corinthians", "2-corinthians", "Pauline Epistles", 13, 47),
  nt("Galatians", "galatians", "Pauline Epistles", 6, 48),
  nt("Ephesians", "ephesians", "Pauline Epistles", 6, 49),
  nt("Philippians", "philippians", "Pauline Epistles", 4, 50),
  nt("Colossians", "colossians", "Pauline Epistles", 4, 51),
  nt("1 Thessalonians", "1-thessalonians", "Pauline Epistles", 5, 52),
  nt("2 Thessalonians", "2-thessalonians", "Pauline Epistles", 3, 53),
  nt("1 Timothy", "1-timothy", "Pastoral Epistles", 6, 54),
  nt("2 Timothy", "2-timothy", "Pastoral Epistles", 4, 55),
  nt("Titus", "titus", "Pastoral Epistles", 3, 56),
  nt("Philemon", "philemon", "Pauline Epistles", 1, 57),
  nt("Hebrews", "hebrews", "General Epistles", 13, 58),
  nt("James", "james", "General Epistles", 5, 59),
  nt("1 Peter", "1-peter", "General Epistles", 5, 60),
  nt("2 Peter", "2-peter", "General Epistles", 3, 61),
  nt("1 John", "1-john", "General Epistles", 5, 62),
  nt("2 John", "2-john", "General Epistles", 1, 63),
  nt("3 John", "3-john", "General Epistles", 1, 64),
  nt("Jude", "jude", "General Epistles", 1, 65),
  nt("Revelation", "revelation", "Apocalyptic", 22, 66),
];

export const bibleBookMap = Object.fromEntries(bibleBooks.map(book => [book.slug, book]));
