export type QualificationCommentType = 'ACCEPT' | 'INVALID' | 'INCOMPLETE' | 'INPROCESS';

export interface Assessment {
  id: string;
  state: QualificationCommentType;
  date: string;
  text: string;
  assignee: string;
}
