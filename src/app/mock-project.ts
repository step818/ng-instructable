import { Project } from './models/project.model';

export const PROJECTS: Project[] = [
  new Project("Cat", "Feline", "Furry", "simple", ["yes", "hairball"]),
  new Project("dog", "canine", "barks a lot", "expert", ["9 times", "ipsum", "lorem"]),
  new Project("bird", "latin name", "chirps a lot", "intermediate", ["feathers", "talon", "beak"]),
  new Project("Hand-sewn wallet", "living", "basic waller made of fabric", "simple", ["gather supplies", "cut fabric", "thread needle", "stitch fabric together", "cut string"]),
  new Project("grow your own tomatoes", "outdoor", "never have to buy tomatoes again!", "simple", ["put a few seeds in the ground", "put pot by window with sunlight", "water every other day"])
];