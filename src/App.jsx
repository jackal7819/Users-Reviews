import { people } from './data';
import { useState } from 'react';

const App = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    return <h2>{name}</h2>;
};

export default App;
