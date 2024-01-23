import React, { useReducer } from 'react';

const initialState = {
  engine: null,
  transmission: null,
  color: null,
};

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext(() => {});

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'addCarConfig': {
        return {
          engine: action.payload.engine,
          transmission: action.payload.transmission,
          color: action.payload.color,
        };
      }

      case 'addCarEngine': {
        return {
          ...state,
          engine: action.payload.engine,
          transmission: action.payload.transmission,
        };
      }

      case 'addCarTransmission': {
        return {
          ...state,
          transmission: action.payload.transmission,
        };
      }

      case 'addCarColor': {
        return {
          ...state,
          color: action.payload.color,
        };
      }

      default:
        return state;
    }
  }, initialState);

  const dispatchAndSave = (action) => {
    dispatch(action);
    // setCarConfig((prevState) => reducer(prevState, action)); // це можна видалити
  };

  return (
    <DispatchContext.Provider value={dispatchAndSave}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
