export interface NavigationList {
  id: number;
  link: string;
  name: string;
}

interface StatI {
  number: number;
  description: string;
}
export interface AboutI {
  visitStats: StatI;
  eventStats: StatI;
  athleteStats: StatI;
  lessonsStats: StatI;
}
