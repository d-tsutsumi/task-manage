export type Project = {
  name: string;
  start_year: string;
  end_years: string;
  members: ProjectMember[];
  description: string;
  member_count: number;
};

export type ProjectMember = {
  user_id: string;
  user_name: string;
  period: number;
};


type DashBoadTableProjects = Pick<Project, "name" | "start_year" | "end_years" | "member_count">