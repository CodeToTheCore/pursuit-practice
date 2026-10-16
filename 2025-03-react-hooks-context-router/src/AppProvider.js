import React, { useReducer } from 'react';
import Context from './Context';
import { reducer, initialState } from './reducer';

// Wraps the app so any component can read the shared state and dispatch actions
function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export default AppProvider;
