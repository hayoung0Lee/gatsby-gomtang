const initialState = {
  isMapInstalled: false,
};

const TOGGLE_MAP = "TOGGLE_MAP";

export const toggleMap = (install: boolean) => ({
  type: TOGGLE_MAP,
  install,
});

export default (state = initialState, action: { [key: string]: string }) => {
  switch (action.type) {
    case TOGGLE_MAP:
      return { ...state, isMapInstalled: action.install };
    default:
      return state;
  }
};
