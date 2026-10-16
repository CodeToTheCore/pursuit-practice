import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

function ChildComponent() {
    const theme = useContext(ThemeContext);

    return <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#FFF'}}>Current Theme: {theme}</div>;
}

export default ChildComponent;