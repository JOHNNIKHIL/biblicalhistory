export type CanonTradition = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  bookCount: string;
  oldTestamentCount: string;
  newTestamentCount: string;
  notes: string[];
};

export const canonTraditions: CanonTradition[] = [
  {
    slug: "protestant",
    name: "Protestant canon",
    shortName: "Protestant",
    description: "The standard 66-book Protestant Bible: 39 Old Testament books and 27 New Testament books.",
    bookCount: "66",
    oldTestamentCount: "39",
    newTestamentCount: "27",
    notes: ["The Old Testament follows the 39-book Christian arrangement corresponding to the books of the Hebrew Bible/Tanakh, though order and grouping differ.", "The New Testament contains the same 27 books used by Catholic and Eastern Orthodox churches."]
  },
  {
    slug: "catholic",
    name: "Roman Catholic canon",
    shortName: "Catholic",
    description: "The Roman Catholic canon contains 46 Old Testament books and 27 New Testament books, for 73 books when counted in the standard Western manner.",
    bookCount: "73",
    oldTestamentCount: "46",
    newTestamentCount: "27",
    notes: ["Tobit, Judith, 1–2 Maccabees, Wisdom, Sirach and Baruch are included in the Old Testament canon.", "Esther and Daniel contain additional canonical material in Catholic editions.", "The Catholic Church calls these additional Old Testament books deuterocanonical."]
  },
  {
    slug: "eastern-orthodox",
    name: "Eastern Orthodox traditions",
    shortName: "Eastern Orthodox",
    description: "Eastern Orthodox churches generally receive a broader Old Testament collection associated with the Septuagint tradition; exact lists and counting conventions vary by church.",
    bookCount: "Varies",
    oldTestamentCount: "Varies",
    newTestamentCount: "27",
    notes: ["The broader collection includes books such as 1 Esdras, 3 Maccabees, Psalm 151 and the Prayer of Manasseh in commonly encountered Greek Orthodox editions.", "4 Maccabees may appear as an appendix in some editions rather than as a canonical book.", "Do not treat 'Orthodox canon' as one universally identical list: Greek, Russian, Serbian and other Orthodox traditions can differ in details."]
  },
  {
    slug: "ethiopian-orthodox",
    name: "Ethiopian Orthodox Tewahedo tradition",
    shortName: "Ethiopian Orthodox",
    description: "The Ethiopian Orthodox Tewahedo biblical collection is broader than Western Christian canons and includes distinctive books such as 1 Enoch and Jubilees.",
    bookCount: "Commonly described as 81",
    oldTestamentCount: "Varies by counting convention",
    newTestamentCount: "Broader tradition",
    notes: ["The traditional 81-book description depends on how books are grouped and counted.", "The collection includes distinctive works such as 1 Enoch, Jubilees and the Meqabyan books.", "This tradition should be represented on its own terms rather than simply as an enlarged Protestant or Catholic canon."]
  },
  {
    slug: "syriac",
    name: "Syriac / Peshitta tradition",
    shortName: "Syriac",
    description: "Syriac Christian traditions have distinctive textual and canonical histories, especially around parts of the New Testament; modern church editions can differ.",
    bookCount: "Varies by church and edition",
    oldTestamentCount: "Broadly shared core with variations",
    newTestamentCount: "Historically varied; modern editions generally contain the 27-book NT",
    notes: ["The Peshitta is a Syriac textual tradition, not simply a different translation of a single universal canon.", "Some early Syriac traditions lacked or differed on several New Testament books before later standardization."]
  }
];

export type CanonStatusRow = {
  name: string;
  slug?: string;
  category: "shared" | "deuterocanonical" | "orthodox" | "ethiopian" | "textual-addition";
  protestant: "canonical" | "not-in-canon";
  catholic: "canonical" | "deuterocanonical" | "not-in-canon";
  easternOrthodox: "canonical" | "received" | "appendix" | "varies" | "not-in-canon";
  ethiopianOrthodox: "canonical" | "received" | "varies" | "not-in-canon";
  note: string;
};

export const canonComparison: CanonStatusRow[] = [
  ...[
    ["Genesis","genesis"],["Exodus","exodus"],["Leviticus","leviticus"],["Numbers","numbers"],["Deuteronomy","deuteronomy"],["Joshua","joshua"],["Judges","judges"],["Ruth","ruth"],["1 Samuel","1-samuel"],["2 Samuel","2-samuel"],["1 Kings","1-kings"],["2 Kings","2-kings"],["1 Chronicles","1-chronicles"],["2 Chronicles","2-chronicles"],["Ezra","ezra"],["Nehemiah","nehemiah"],["Esther","esther"],["Job","job"],["Psalms","psalms"],["Proverbs","proverbs"],["Ecclesiastes","ecclesiastes"],["Song of Songs","song-of-songs"],["Isaiah","isaiah"],["Jeremiah","jeremiah"],["Lamentations","lamentations"],["Ezekiel","ezekiel"],["Daniel","daniel"],["Hosea","hosea"],["Joel","joel"],["Amos","amos"],["Obadiah","obadiah"],["Jonah","jonah"],["Micah","micah"],["Nahum","nahum"],["Habakkuk","habakkuk"],["Zephaniah","zephaniah"],["Haggai","haggai"],["Zechariah","zechariah"],["Malachi","malachi"],
    ["Matthew","matthew"],["Mark","mark"],["Luke","luke"],["John","john"],["Acts","acts"],["Romans","romans"],["1 Corinthians","1-corinthians"],["2 Corinthians","2-corinthians"],["Galatians","galatians"],["Ephesians","ephesians"],["Philippians","philippians"],["Colossians","colossians"],["1 Thessalonians","1-thessalonians"],["2 Thessalonians","2-thessalonians"],["1 Timothy","1-timothy"],["2 Timothy","2-timothy"],["Titus","titus"],["Philemon","philemon"],["Hebrews","hebrews"],["James","james"],["1 Peter","1-peter"],["2 Peter","2-peter"],["1 John","1-john"],["2 John","2-john"],["3 John","3-john"],["Jude","jude"],["Revelation","revelation"]
  ].map(([name, slug]) => ({ name, slug, category: "shared" as const, protestant: "canonical" as const, catholic: "canonical" as const, easternOrthodox: "canonical" as const, ethiopianOrthodox: "canonical" as const, note: "Shared Christian Scripture; order, grouping and naming can differ by tradition." })),
  { name: "Tobit", category: "deuterocanonical", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Included in Catholic and broader Eastern traditions; not in the standard Protestant 66-book canon." },
  { name: "Judith", category: "deuterocanonical", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Received in Catholic and Orthodox traditions; excluded from the standard Protestant canon." },
  { name: "Wisdom of Solomon", category: "deuterocanonical", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "A major wisdom text in the Septuagint tradition." },
  { name: "Sirach", category: "deuterocanonical", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Also called Ecclesiasticus; widely received in Catholic and Orthodox traditions." },
  { name: "Baruch", category: "deuterocanonical", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Catholic editions include the Letter of Jeremiah within Baruch; Orthodox arrangements can differ." },
  { name: "1 Maccabees", category: "deuterocanonical", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Important source for the Hasmonean period." },
  { name: "2 Maccabees", category: "deuterocanonical", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "A distinct retelling focused especially on Judea, martyrdom and the Temple." },
  { name: "Additions to Esther", category: "textual-addition", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Additional Greek material incorporated into Catholic and Orthodox editions of Esther." },
  { name: "Additions to Daniel", category: "textual-addition", protestant: "not-in-canon", catholic: "deuterocanonical", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Includes Susanna, Bel and the Dragon, and the Prayer of Azariah/Song of the Three." },
  { name: "1 Esdras", category: "orthodox", protestant: "not-in-canon", catholic: "not-in-canon", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Known by different numbering conventions in different traditions." },
  { name: "3 Maccabees", category: "orthodox", protestant: "not-in-canon", catholic: "not-in-canon", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Received in many Eastern Orthodox editions." },
  { name: "Psalm 151", category: "orthodox", protestant: "not-in-canon", catholic: "not-in-canon", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "An additional psalm preserved in the Septuagint tradition." },
  { name: "Prayer of Manasseh", category: "orthodox", protestant: "not-in-canon", catholic: "not-in-canon", easternOrthodox: "received", ethiopianOrthodox: "canonical", note: "Included in some Eastern collections and associated with 2 Chronicles 33." },
  { name: "4 Maccabees", category: "orthodox", protestant: "not-in-canon", catholic: "not-in-canon", easternOrthodox: "appendix", ethiopianOrthodox: "canonical", note: "Often placed in an appendix in Greek Orthodox editions rather than treated as a core canonical book." },
  { name: "1 Enoch", category: "ethiopian", protestant: "not-in-canon", catholic: "not-in-canon", easternOrthodox: "not-in-canon", ethiopianOrthodox: "canonical", note: "Distinctive to the Ethiopian Orthodox biblical tradition among major historic Christian canons." },
  { name: "Jubilees", category: "ethiopian", protestant: "not-in-canon", catholic: "not-in-canon", easternOrthodox: "not-in-canon", ethiopianOrthodox: "canonical", note: "An ancient Jewish work preserved as Scripture in the Ethiopian Orthodox tradition." },
  { name: "1–3 Meqabyan", category: "ethiopian", protestant: "not-in-canon", catholic: "not-in-canon", easternOrthodox: "not-in-canon", ethiopianOrthodox: "canonical", note: "Ethiopian works distinct from the Greek 1–3 Maccabees." },
];
