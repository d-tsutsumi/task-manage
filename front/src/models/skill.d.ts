export type Skill = {
  name: string;
  kinds: string;
  proficiency: Proficiency[];
  all_member: number;
};

export type Proficiency = {
  rank: string;
  members: string[];
  count: number;
};

export type Skills = {
  name: string;
  kinds: string;
  all_member: number;
}[];
