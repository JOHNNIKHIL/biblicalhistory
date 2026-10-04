export type MediaItem = {
  title: string;
  caption: string;
  src: string;
  source: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  kind: "map" | "artifact";
  tags: string[];
};

// Visuals deliberately favor institutional / specialist sources over generic image aggregators.
// Some museum images are served directly by the institution; licensing is recorded per item.
export const visualMedia: MediaItem[] = [
  {
    title: "Ancient World — Patriarchal Age",
    caption: "A public-domain study map of the ancient world useful for orienting the patriarchal narratives geographically.",
    src: "https://churchmaps.info/maps/Map_Ancient_World_Patriarchs/Map_Ancient_World_Patriarchs_sm_eng.png",
    source: "ChurchMaps",
    sourceUrl: "https://churchmaps.info/index.html",
    license: "Public domain",
    licenseUrl: "https://churchmaps.info/index.html",
    kind: "map",
    tags: ["Patriarchs", "Mesopotamia", "Canaan", "Egypt"]
  },
  {
    title: "Exodus & Canaan Conquest",
    caption: "A public-domain study map tracing the Exodus setting and the traditional conquest geography of Canaan.",
    src: "https://churchmaps.info/maps/Map_Exodus_and_Canaan_Conquest/Map_Exodus_and_Canaan_Conquest_with_political_incut_eng_sm.png",
    source: "ChurchMaps",
    sourceUrl: "https://churchmaps.info/index.html",
    license: "Public domain",
    licenseUrl: "https://churchmaps.info/index.html",
    kind: "map",
    tags: ["Exodus", "Canaan", "Joshua", "Sinai"]
  },
  {
    title: "Palestine in the New Testament",
    caption: "A public-domain regional map showing the political and geographic setting of the New Testament period.",
    src: "https://churchmaps.info/maps/Map_Palestine_New_Testament/Map_Palestine_New_Testament_eng_sm.png",
    source: "ChurchMaps",
    sourceUrl: "https://churchmaps.info/index.html",
    license: "Public domain",
    licenseUrl: "https://churchmaps.info/index.html",
    kind: "map",
    tags: ["Jesus", "Galilee", "Judea", "New Testament"]
  },
  {
    title: "Paul's Missionary Journeys",
    caption: "A public-domain map visualizing the broad geography of Paul's journeys across the eastern Mediterranean.",
    src: "https://churchmaps.info/maps/Map_Paul_Journeys/Map_Paul_Journeys_with_political_incut_eng_sm.png",
    source: "ChurchMaps",
    sourceUrl: "https://churchmaps.info/index.html",
    license: "Public domain",
    licenseUrl: "https://churchmaps.info/index.html",
    kind: "map",
    tags: ["Paul", "Acts", "Rome", "Mediterranean"]
  },
  {
    title: "Mesha Stele",
    caption: "Louvre collection image of the Moabite royal inscription associated with King Mesha, inventory AO 5066.",
    src: "https://collections.louvre.fr/media/cache/small/0000000021/0000146144/0000232411_OG.JPG",
    source: "Musée du Louvre · Collections",
    sourceUrl: "https://collections.louvre.fr/en/ark:/53355/cl010146144",
    license: "See Louvre terms",
    licenseUrl: "https://collections.louvre.fr/en/page/conditions",
    kind: "artifact",
    tags: ["Mesha", "Moab", "Inscription", "9th century BCE"]
  },
  {
    title: "Sennacherib Campaign Cylinder",
    caption: "Metropolitan Museum of Art object 86.11.197, a Neo-Assyrian cuneiform cylinder describing Sennacherib's third campaign.",
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/321775/691726/main-image",
    source: "The Metropolitan Museum of Art · Open Access",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/321775",
    license: "Public domain",
    licenseUrl: "https://www.metmuseum.org/policies/open-access",
    kind: "artifact",
    tags: ["Sennacherib", "Assyria", "Judah", "Cuneiform"]
  },
  {
    title: "Assyrian Siege Relief",
    caption: "Metropolitan Museum of Art object 32.143.15, a Neo-Assyrian relief fragment depicting siege warfare.",
    src: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/322622/1701968/main-image",
    source: "The Metropolitan Museum of Art · Open Access",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/322622",
    license: "Public domain",
    licenseUrl: "https://www.metmuseum.org/policies/open-access",
    kind: "artifact",
    tags: ["Assyria", "Siege warfare", "Sennacherib", "Nineveh"]
  },
  {
    title: "Assyrian Relief from Nimrud",
    caption: "Metropolitan Museum of Art Neo-Assyrian relief from Nimrud, useful for studying imperial art and royal ideology.",
    src: "https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg",
    source: "The Metropolitan Museum of Art · Open Access",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/322614",
    license: "Public domain",
    licenseUrl: "https://www.metmuseum.org/policies/open-access",
    kind: "artifact",
    tags: ["Assyria", "Nimrud", "Royal art", "Iron Age"]
  },
  {
    title: "Sumerian Cuneiform Tablet",
    caption: "Penn Museum collection image of an ancient Mesopotamian cuneiform tablet, illustrating the written world behind early Near Eastern history.",
    src: "https://www.penn.museum/collections/assets/1600/795460.jpg",
    source: "Penn Museum · Online Collections",
    sourceUrl: "https://www.penn.museum/collections/object_images.php?irn=583629",
    license: "See Penn Museum terms",
    licenseUrl: "https://www.penn.museum/about/terms-of-use",
    kind: "artifact",
    tags: ["Mesopotamia", "Cuneiform", "Writing", "Urbanism"]
  },
  {
    title: "Ram in a Thicket — Ur",
    caption: "Penn Museum's famous Sumerian object from the Royal Cemetery at Ur, illustrating the material culture of southern Mesopotamia.",
    src: "https://arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/IB2CK6YWOBD4PMJZIPI73WZMWQ.jpg",
    source: "Penn Museum · Middle East Galleries",
    sourceUrl: "https://www.penn.museum/collections/",
    license: "See Penn Museum terms",
    licenseUrl: "https://www.penn.museum/about/terms-of-use",
    kind: "artifact",
    tags: ["Ur", "Sumer", "Royal Cemetery", "Bronze Age"]
  }
];

export const mapMedia = visualMedia.filter(item => item.kind === "map");
export const artifactMedia = visualMedia.filter(item => item.kind === "artifact");

export const evidenceMediaBySlug: Record<string, MediaItem> = Object.fromEntries(
  visualMedia
    .filter(item => item.kind === "artifact")
    .map(item => [
      item.title === "Mesha Stele" ? "mesha-stele" :
      item.title === "Sennacherib Campaign Cylinder" ? "sennacherib-prism" :
      item.title === "Assyrian Siege Relief" ? "lachish-reliefs" :
      item.title === "Sumerian Cuneiform Tablet" ? "ur-archaeology" :
      item.title === "Ram in a Thicket — Ur" ? "ur-site" : item.title,
      item
    ])
);

export type ExternalVisualResource = {
  title: string;
  description: string;
  url: string;
  source: string;
  license: string;
};

export const externalVisualResources: ExternalVisualResource[] = [
  {
    title: "Digital Atlas of the Roman Empire",
    description: "Interactive ancient-place map with Roman roads, places and reusable GeoJSON data.",
    url: "https://imperium.ahlfeldt.se/",
    source: "University of Gothenburg / DARE",
    license: "CC BY-SA 3.0"
  },
  {
    title: "ORBIS — Stanford Roman World",
    description: "Interactive model of Roman routes, travel time and travel cost across the ancient Mediterranean.",
    url: "https://orbis.stanford.edu/",
    source: "Stanford University",
    license: "Project resource"
  },
  {
    title: "Israel Antiquities Authority — Qadum Gallery",
    description: "Archaeological publications and image galleries containing excavation photographs, plans and finds.",
    url: "https://publications.iaa.org.il/qadum_gallery/",
    source: "Israel Antiquities Authority",
    license: "Institutional terms vary"
  },
  {
    title: "Penn Museum — Middle East Collections",
    description: "Museum collection records and photography for Mesopotamian, Egyptian and Near Eastern material.",
    url: "https://www.penn.museum/collections/",
    source: "Penn Museum",
    license: "Institutional terms vary"
  },
  {
    title: "Louvre Collections — Near Eastern Antiquities",
    description: "Object records for Mesopotamian, Levantine and Iranian antiquities, with structured metadata and images.",
    url: "https://collections.louvre.fr/en/",
    source: "Musée du Louvre",
    license: "Institutional terms vary"
  },
  {
    title: "The Met — Open Access",
    description: "Public-domain museum images and collection data, including extensive Ancient West Asian material.",
    url: "https://www.metmuseum.org/art/collection",
    source: "The Metropolitan Museum of Art",
    license: "Public-domain works available under Open Access"
  }
];
