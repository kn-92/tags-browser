export interface State {
  numberOfElements: string;
  sort: string;
  order: string;
  page: number;
  setNumberOfElements: (payload: string) => void;
  setSort: (payload: string) => void;
  setOrder: (payload: string) => void;
  setPage: (payload: number) => void;
}
