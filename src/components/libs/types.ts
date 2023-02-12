export interface ITask {
  id: number;
  parentId: number;
  title: string;
  description: string;
  importance: 'low' | 'mid' | 'high';
  isDone: boolean;
}

export type ITaskList = {
  id: number;
  date: Date;
  taskList: ITask[];
}[];

export interface IFilteredTasks {
  todayTasks: ITaskList;
  otherDaysTasks: ITaskList;
}

export type ThemeType = 'dark' | 'light';

interface Action<Payload> {
  type: string;
  payload: Payload;
}

export type ReducerType<State, Payload> = (state: State, action: Action<Payload>) => State;
