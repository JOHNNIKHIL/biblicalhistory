import { Creation } from "./creation";
import { AdamAndEve } from "./adam-and-eve";
import { TheFall } from "./the-fall";
import { CainAndAbel } from "./cain-and-abel";
import { Noah } from "./noah";
import { TheFlood } from "./the-flood";
import { TowerOfBabel } from "./tower-of-babel";
import { Abraham } from "./abraham";
import { Isaac } from "./isaac";
import { Jacob } from "./jacob";
import { Joseph } from "./joseph";
import { Moses } from "./moses";
import { Exodus } from "./exodus";

export const stories = [
  Creation, AdamAndEve, TheFall, CainAndAbel, Noah, TheFlood, TowerOfBabel,
  Abraham, Isaac, Jacob, Joseph, Moses, Exodus
];

export const storyMap = Object.fromEntries(stories.map(s => [s.slug, s]));
