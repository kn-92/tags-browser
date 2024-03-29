export interface State {
  numberOfElements: string;
  sort: string;
  order: string;
  setNumberOfElements: (payload: string) => void;
  setSort: (payload: string) => void;
  setOrder: (payload: string) => void;
}
