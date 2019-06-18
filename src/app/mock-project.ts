import { Project } from './models/project.model';

export const PROJECTS: Project[] = [
  new Project("Cat", "Feline", "Furry", "simple", 4, ["yes", "hairball"], 56),
  new Project("dog", "canine", "barks a lot", "expert", 3, ["9 times", "ipsum", "lorem"], 99),
  new Project("bird", "latin name", "chirps a lot", "intermediate", 7, ["feathers", "talon", "beak"], 65),
  new Project("Hand-sewn wallet", "living", "basic waller made of fabric", "simple", 5, ["gather supplies", "cut fabric", "thread needle", "stitch fabric together", "cut string"], 1),
  new Project("grow your own tomatoes", "outdoor", "never have to buy tomatoes again!", "simple", 3, ["put a few seeds in the ground", "put pot by window with sunlight", "water every other day"], 2)
];