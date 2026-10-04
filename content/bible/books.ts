export type BibleBook = {
  name: string;
  slug: string;
  testament: "Old Testament" | "New Testament";
  section: string;
  chapters: number;
  guideSlug: string;
};

export const bibleBooks: BibleBook[] = [
  { name: "Genesis", slug: "genesis", testament: "Old Testament", section: "Torah", chapters: 50, guideSlug: "book-genesis" },
  { name: "Exodus", slug: "exodus", testament: "Old Testament", section: "Torah", chapters: 40, guideSlug: "book-exodus" },
  { name: "Leviticus", slug: "leviticus", testament: "Old Testament", section: "Torah", chapters: 27, guideSlug: "book-leviticus" },
  { name: "Numbers", slug: "numbers", testament: "Old Testament", section: "Torah", chapters: 36, guideSlug: "book-numbers" },
  { name: "Deuteronomy", slug: "deuteronomy", testament: "Old Testament", section: "Torah", chapters: 34, guideSlug: "book-deuteronomy" },
  { name: "Joshua", slug: "joshua", testament: "Old Testament", section: "Historical Books", chapters: 24, guideSlug: "book-joshua" },
  { name: "Judges", slug: "judges", testament: "Old Testament", section: "Historical Books", chapters: 21, guideSlug: "book-judges" },
  { name: "1 Samuel", slug: "1-samuel", testament: "Old Testament", section: "Historical Books", chapters: 31, guideSlug: "book-1-samuel" },
  { name: "2 Samuel", slug: "2-samuel", testament: "Old Testament", section: "Historical Books", chapters: 24, guideSlug: "book-2-samuel" },
  { name: "1 Kings", slug: "1-kings", testament: "Old Testament", section: "Historical Books", chapters: 22, guideSlug: "book-1-kings" },
  { name: "2 Kings", slug: "2-kings", testament: "Old Testament", section: "Historical Books", chapters: 25, guideSlug: "book-2-kings" },
  { name: "Isaiah", slug: "isaiah", testament: "Old Testament", section: "Prophets", chapters: 66, guideSlug: "book-isaiah" },
  { name: "Jeremiah", slug: "jeremiah", testament: "Old Testament", section: "Prophets", chapters: 52, guideSlug: "book-jeremiah" },
  { name: "Ezekiel", slug: "ezekiel", testament: "Old Testament", section: "Prophets", chapters: 48, guideSlug: "book-ezekiel" },
  { name: "Daniel", slug: "daniel", testament: "Old Testament", section: "Prophets", chapters: 12, guideSlug: "book-daniel" },
  { name: "Matthew", slug: "matthew", testament: "New Testament", section: "Gospels", chapters: 28, guideSlug: "book-matthew" },
  { name: "Mark", slug: "mark", testament: "New Testament", section: "Gospels", chapters: 16, guideSlug: "book-mark" },
  { name: "Luke", slug: "luke", testament: "New Testament", section: "Gospels", chapters: 24, guideSlug: "book-luke" },
  { name: "John", slug: "john", testament: "New Testament", section: "Gospels", chapters: 21, guideSlug: "book-john" },
  { name: "Acts", slug: "acts", testament: "New Testament", section: "History", chapters: 28, guideSlug: "book-acts" },
];
