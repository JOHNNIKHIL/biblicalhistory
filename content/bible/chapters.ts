export type ChapterMeta = {
  title: string;
  summary: string;
  themes: string[];
  historicalLens: string;
  relatedStories?: string[];
};

const known: Record<string, Record<number, ChapterMeta>> = {
  genesis: {
    1: { title: "Creation", summary: "The opening creation account presents the ordering of the cosmos, the separation of realms, and humanity as the image of God.", themes: ["Creation", "Image of God", "Order"], historicalLens: "Genesis 1 belongs to the ancient Near Eastern world of creation traditions. Comparison with other ancient texts is useful, but similarities do not erase the distinctive theology of the biblical account.", relatedStories: ["creation"] },
    2: { title: "Eden and Humanity", summary: "The garden narrative describes humanity, Eden, work, the command concerning the tree, and the creation of woman.", themes: ["Eden", "Humanity", "Work", "Marriage"], historicalLens: "The chapter provides the narrative setting for later Genesis themes rather than a securely datable archaeological event.", relatedStories: ["adam-and-eve"] },
    3: { title: "The Fall", summary: "The serpent, the forbidden fruit, human disobedience and the expulsion from Eden reshape the Genesis narrative.", themes: ["Temptation", "Disobedience", "Judgment"], historicalLens: "This is a theological narrative. Archaeology cannot directly verify the Eden episode; historical study instead examines its literary and ancient Near Eastern context.", relatedStories: ["the-fall"] },
    4: { title: "Cain and Abel", summary: "Cain and Abel bring offerings, Cain kills his brother, and the chapter traces violence, judgment and the growth of human society.", themes: ["Sacrifice", "Violence", "Exile"], historicalLens: "The story explores recurring ancient themes of kinship, violence and social order rather than providing a straightforward archaeological episode.", relatedStories: ["cain-and-abel"] },
    6: { title: "Noah and the Flood", summary: "The narrative introduces Noah, the corruption of humanity, the ark and the coming flood.", themes: ["Noah", "Judgment", "Ark", "Covenant"], historicalLens: "Flood traditions occur across the ancient Near East. Comparative study helps situate Genesis within its cultural environment without proving a particular historical reconstruction.", relatedStories: ["noah", "the-flood"] },
    12: { title: "Abram's Call", summary: "Abram leaves his homeland and travels toward Canaan, beginning the patriarchal narrative and the promise associated with his family.", themes: ["Abraham", "Canaan", "Promise"], historicalLens: "The patriarchal narratives are difficult to anchor to individual archaeological events. Ancient Near Eastern geography and social customs provide important context.", relatedStories: ["abraham"] },
    22: { title: "Abraham and Isaac", summary: "Abraham is tested in the binding of Isaac, followed by the reaffirmation of the promise.", themes: ["Abraham", "Isaac", "Testing", "Sacrifice"], historicalLens: "The narrative should be distinguished from later sacrificial practices documented in the ancient Near East; the chapter itself does not provide a datable external event.", relatedStories: ["isaac"] },
    37: { title: "Joseph and His Brothers", summary: "Joseph's dreams, his brothers' jealousy and his sale into Egypt begin the final major narrative cycle of Genesis.", themes: ["Joseph", "Family", "Egypt"], historicalLens: "The Joseph story connects the Genesis narrative to Egypt and the ancient Near Eastern world, while the precise historical identification of Joseph remains debated.", relatedStories: ["joseph"] },
  },
  exodus: {
    1: { title: "Israel in Egypt", summary: "The Israelites multiply in Egypt, a new Pharaoh fears their growth, and forced labor is imposed.", themes: ["Egypt", "Israel", "Oppression"], historicalLens: "The chapter is central to Exodus chronology debates. Egyptian evidence provides context for Semitic populations and labor systems, but does not independently establish every detail of the narrative.", relatedStories: ["exodus"] },
    3: { title: "The Burning Bush", summary: "Moses encounters the divine presence in the burning bush and receives his commission to confront Pharaoh.", themes: ["Moses", "Calling", "YHWH"], historicalLens: "The episode is a foundational religious narrative. Its historical study focuses on the literary tradition and the Egyptian/Sinaitic setting rather than a directly datable archaeological event.", relatedStories: ["moses"] },
    12: { title: "Passover and the Exodus", summary: "Passover instructions lead into the departure from Egypt and the institution of a central Israelite memorial practice.", themes: ["Passover", "Exodus", "Memory"], historicalLens: "Passover and Exodus chronology remain subjects of historical debate. The chapter is best read alongside the site's Exodus chronology article.", relatedStories: ["exodus"] },
    14: { title: "Crossing the Sea", summary: "Israel leaves Egypt while Pharaoh's forces pursue them, culminating in the crossing of the sea and the destruction of the pursuing army.", themes: ["Exodus", "Sea", "Deliverance"], historicalLens: "The location of the sea crossing and the historical reconstruction of the episode remain debated; several proposed routes and chronologies exist.", relatedStories: ["exodus"] },
    20: { title: "The Ten Commandments", summary: "The covenant at Sinai is articulated through the Decalogue and the beginning of a larger body of covenant instructions.", themes: ["Sinai", "Covenant", "Law"], historicalLens: "Ancient Near Eastern treaty and law traditions provide comparative context for covenant language, while the biblical presentation has its own theological structure.", relatedStories: ["exodus"] },
  },
  joshua: {
    1: { title: "Joshua Commissioned", summary: "Joshua succeeds Moses and is commissioned to lead Israel across the Jordan into the land.", themes: ["Joshua", "Jordan", "Leadership"], historicalLens: "The settlement narratives are among the most debated parts of Biblical history. Archaeological evidence must be assessed site by site rather than treated as a single verdict.", relatedStories: ["crossing-the-jordan"] },
    2: { title: "Rahab and the Spies", summary: "Spies enter Jericho and receive protection from Rahab before returning to Joshua.", themes: ["Jericho", "Rahab", "Spies"], historicalLens: "Jericho's archaeological chronology is central to discussions of Joshua, but interpretations of the site's destruction layers remain contested.", relatedStories: ["jericho"] },
    6: { title: "The Fall of Jericho", summary: "Israel circles Jericho for seven days before the city's defenses fall in the narrative.", themes: ["Jericho", "Conquest", "Ritual"], historicalLens: "Jericho is an important archaeological site, but the date and interpretation of its destruction layers do not produce a simple consensus about Joshua 6.", relatedStories: ["jericho"] },
  },
  "1-samuel": {
    8: { title: "Israel Asks for a King", summary: "Israel requests a king, Samuel warns about monarchy, and the transition toward kingship begins.", themes: ["Monarchy", "Samuel", "Kingship"], historicalLens: "The chapter is valuable for studying how the biblical writers portray monarchy and its tensions with prophetic authority.", relatedStories: ["samuel", "saul"] },
    16: { title: "David Anointed", summary: "Samuel anoints David, the youngest son of Jesse, marking the beginning of his rise in the narrative.", themes: ["David", "Anointing", "Kingship"], historicalLens: "David's historical existence has an important external anchor in the Tel Dan Stele, although the precise reconstruction of the early monarchy remains debated.", relatedStories: ["david"] },
    17: { title: "David and Goliath", summary: "David confronts Goliath and defeats the Philistine champion with a sling.", themes: ["David", "Goliath", "Philistines"], historicalLens: "The story belongs to the wider biblical portrayal of David's rise. Philistine archaeology and Iron Age chronology provide broader historical context.", relatedStories: ["david-and-goliath"] },
  },
  "2-samuel": {
    5: { title: "David Captures Jerusalem", summary: "David becomes king over all Israel and captures Jerusalem, establishing it as his royal center.", themes: ["David", "Jerusalem", "Kingship"], historicalLens: "Jerusalem's archaeology and the emergence of the Davidic monarchy are major areas of research. The Tel Dan Stele provides external evidence for a Davidic dynasty, while the scale of the united monarchy remains debated.", relatedStories: ["david-captures-jerusalem", "jerusalem"] },
    7: { title: "The Davidic Covenant", summary: "The promise concerning David's dynasty becomes a central theological and political theme in the biblical tradition.", themes: ["Davidic covenant", "Dynasty", "Temple"], historicalLens: "The chapter is particularly important for tracing how later biblical writers understand kingship and Davidic identity.", relatedStories: ["david"] },
  },
  "1-kings": {
    8: { title: "Dedication of the Temple", summary: "Solomon dedicates the Jerusalem Temple and prays over the covenant, kingship and the future of Israel.", themes: ["Solomon", "Temple", "Jerusalem"], historicalLens: "The First Temple itself is no longer standing, and the archaeological record of Iron Age Jerusalem is complex. Later sources and excavations help reconstruct the city's setting.", relatedStories: ["solomon-builds-temple", "jerusalem"] },
    18: { title: "Elijah on Mount Carmel", summary: "Elijah confronts the prophets of Baal in the dramatic contest on Mount Carmel.", themes: ["Elijah", "Baal", "Carmel"], historicalLens: "The chapter belongs to the Omride period, which has substantial external historical context through Assyrian and Moabite evidence.", relatedStories: ["elijah"] },
  },
  "2-kings": {
    17: { title: "The Fall of Samaria", summary: "Samaria falls and the northern kingdom of Israel comes to an end under Assyrian domination.", themes: ["Assyria", "Samaria", "Exile"], historicalLens: "The Assyrian conquest is strongly anchored by Assyrian royal records and the broader history of the Neo-Assyrian Empire.", relatedStories: ["fall-samaria", "samaria"] },
    18: { title: "Hezekiah and Sennacherib", summary: "Hezekiah's reign is placed against the Assyrian invasion led by Sennacherib.", themes: ["Hezekiah", "Sennacherib", "Assyria"], historicalLens: "This is one of the best externally anchored biblical episodes. Sennacherib's inscriptions and reliefs provide an Assyrian perspective on the campaign.", relatedStories: ["hezekiah", "sennacherib", "sennacherib-prism"] },
    25: { title: "The Fall of Jerusalem", summary: "Jerusalem is captured, the Temple is destroyed, and Judah enters the Babylonian exile.", themes: ["Babylon", "Jerusalem", "Exile"], historicalLens: "The Babylonian conquest of Jerusalem is supported by Babylonian historical sources and the wider chronology of the Neo-Babylonian Empire.", relatedStories: ["jerusalem-586", "babylonian-chronicles", "exile"] },
  },
  isaiah: {
    6: { title: "Isaiah's Vision", summary: "Isaiah describes his temple vision and receives his prophetic commission.", themes: ["Prophecy", "Temple", "Holiness"], historicalLens: "The chapter provides theological and literary insight into prophetic vocation in the eighth-century BCE setting of Judah.", relatedStories: ["isaiah"] },
    36: { title: "Sennacherib Threatens Jerusalem", summary: "Assyrian forces threaten Jerusalem during Hezekiah's reign, leading into the narrative of deliverance.", themes: ["Assyria", "Jerusalem", "Hezekiah"], historicalLens: "The Assyrian campaign is independently documented, making this a particularly valuable chapter for comparing biblical and Assyrian perspectives.", relatedStories: ["sennacherib", "sennacherib-prism"] },
  },
  jeremiah: {
    7: { title: "The Temple Sermon", summary: "Jeremiah warns against misplaced confidence in the Temple and calls Judah toward reform.", themes: ["Temple", "Judgment", "Covenant"], historicalLens: "The chapter belongs to the political and religious crisis preceding Jerusalem's fall to Babylon.", relatedStories: ["jeremiah"] },
    31: { title: "The New Covenant", summary: "Jeremiah announces a new covenant written on the heart, one of the most influential passages in later biblical interpretation.", themes: ["New covenant", "Restoration", "Law"], historicalLens: "The chapter should be situated in the context of Judah's Babylonian crisis and later restoration traditions.", relatedStories: ["jeremiah"] },
  },
  ezekiel: {
    37: { title: "The Valley of Dry Bones", summary: "Ezekiel's vision of dry bones symbolizes restoration and renewed life for the people of Israel.", themes: ["Exile", "Restoration", "Resurrection imagery"], historicalLens: "The vision is rooted in the experience of exile and the prophetic imagination of restoration rather than an archaeological event.", relatedStories: ["ezekiel"] },
    40: { title: "Vision of the Temple", summary: "Ezekiel receives an extended vision describing a future temple complex and its sacred order.", themes: ["Temple", "Restoration", "Priesthood"], historicalLens: "The vision is an important source for studying temple theology and post-destruction hopes in the exilic setting.", relatedStories: ["ezekiel"] },
  },
  daniel: {
    1: { title: "Daniel in Babylon", summary: "Daniel and his companions enter the Babylonian court and maintain their dietary practices while being trained for service.", themes: ["Exile", "Babylon", "Identity"], historicalLens: "The Babylonian exile provides the historical setting, while the composition and transmission of Daniel involve later historical questions.", relatedStories: ["daniel-babylon"] },
    7: { title: "The Four Beasts", summary: "Daniel sees a vision of four beasts representing successive kingdoms and the coming judgment of God.", themes: ["Apocalyptic", "Kingdoms", "Judgment"], historicalLens: "Daniel's visions are especially important for studying apocalyptic literature and the political pressures reflected in the text.", relatedStories: ["daniel"] },
  },
  matthew: {
    5: { title: "The Sermon on the Mount", summary: "Jesus teaches about the kingdom, righteousness, prayer, enemies and the fulfillment of the law.", themes: ["Kingdom of heaven", "Law", "Discipleship"], historicalLens: "The sermon should be read within the Jewish and Roman setting of first-century Galilee and Judea.", relatedStories: ["jesus-galilee"] },
    28: { title: "Resurrection and the Great Commission", summary: "Matthew concludes with the resurrection appearance and the commission to make disciples among the nations.", themes: ["Resurrection", "Mission", "Discipleship"], historicalLens: "The chapter is a central early Christian witness and should be studied alongside Acts and other resurrection traditions.", relatedStories: ["resurrection-early-tradition"] },
  },
  mark: {
    1: { title: "The Beginning of the Gospel", summary: "Mark introduces John the Baptist, Jesus' baptism and the beginning of Jesus' public ministry.", themes: ["John the Baptist", "Baptism", "Galilee"], historicalLens: "The chapter places Jesus in the religious and political world of early first-century Roman Judea.", relatedStories: ["john-baptist", "jesus-galilee"] },
    15: { title: "The Crucifixion", summary: "Jesus is tried before Pilate, crucified and buried.", themes: ["Pilate", "Crucifixion", "Jerusalem"], historicalLens: "Pontius Pilate is independently attested archaeologically by the Pilate Stone, while crucifixion was a known Roman punishment.", relatedStories: ["pilate", "crucifixion", "pilate-stone"] },
  },
  luke: {
    4: { title: "Jesus Begins His Ministry", summary: "Jesus reads from Isaiah in Nazareth and begins a ministry marked by teaching, healing and proclamation.", themes: ["Nazareth", "Isaiah", "Ministry"], historicalLens: "Luke's narrative is situated in the Galilean towns and synagogue culture of the early Roman period.", relatedStories: ["jesus-galilee", "nazareth"] },
    24: { title: "Resurrection and Emmaus", summary: "Luke narrates resurrection appearances, the road to Emmaus and the commissioning of the disciples.", themes: ["Resurrection", "Emmaus", "Mission"], historicalLens: "The chapter is part of the early Christian resurrection tradition and connects directly to the opening of Acts.", relatedStories: ["resurrection-early-tradition"] },
  },
  john: {
    1: { title: "The Word and the First Disciples", summary: "John opens with the Logos prologue and introduces John the Baptist and the first disciples of Jesus.", themes: ["Logos", "Incarnation", "Disciples"], historicalLens: "John's prologue is a highly developed theological introduction. The narrative setting remains the Jewish and Roman world of the first century.", relatedStories: ["john-baptist", "jesus-historical-context"] },
    20: { title: "Resurrection Appearances", summary: "John narrates the empty tomb, appearances to Mary Magdalene and the disciples, and Thomas's encounter with the risen Jesus.", themes: ["Resurrection", "Mary Magdalene", "Thomas"], historicalLens: "The chapter is a major source for studying the diversity of early Christian resurrection traditions.", relatedStories: ["resurrection-early-tradition"] },
  },
  acts: {
    2: { title: "Pentecost", summary: "The Spirit comes upon the disciples, Peter addresses the crowd, and the Jerusalem community expands.", themes: ["Pentecost", "Holy Spirit", "Jerusalem church"], historicalLens: "Acts places the earliest Jesus movement in Jerusalem within the religious world of Second Temple Judaism.", relatedStories: ["jerusalem-church"] },
    15: { title: "The Council of Jerusalem", summary: "Leaders debate the place of circumcision and Torah observance for Gentile believers and formulate a shared decision.", themes: ["Jerusalem", "Gentiles", "Council"], historicalLens: "The chapter illuminates the social and religious questions created by the rapid expansion of the Jesus movement beyond Judea.", relatedStories: ["jerusalem-church", "paul-missions"] },
    28: { title: "Paul in Rome", summary: "Acts concludes with Paul living in Rome and proclaiming the kingdom while under house arrest.", themes: ["Paul", "Rome", "Mission"], historicalLens: "The Roman setting connects Acts with the imperial infrastructure and diaspora networks of the first century.", relatedStories: ["paul-roman-world", "roman-roads"] },
  },
};

export function getChapterMeta(book: string, chapter: number, bookName: string): ChapterMeta {
  const custom = known[book]?.[chapter];
  if (custom) return custom;
  return {
    title: `${bookName} — Chapter ${chapter}`,
    summary: `Chapter ${chapter} of ${bookName} is part of the book's wider narrative, legal, poetic, prophetic or theological movement. Use this page as the starting point for chapter-level study and cross-reference it with the book guide and related encyclopedia entries.`,
    themes: [bookName, `Chapter ${chapter}`],
    historicalLens: `Historical interpretation of ${bookName} ${chapter} should distinguish the biblical text itself from independently established evidence. The surrounding political, geographic and religious context can be explored through the site's timeline, people, places and archaeology sections.`,
  };
}
