import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { people } from './data';
import { useState } from 'react';

const App = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleRandom = () => {
        let newIndex;
        while (
            (newIndex = Math.floor(Math.random() * people.length)) === index
        );
        setIndex(newIndex);
    };

    return (
        <main>
            <article className='review'>
                <div className='img-container'>
                    <img src={image} alt={name} className='person-img' />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <div className='btn-container'>
                    <button
                        className='prev-btn'
                        onClick={handlePrev}
                        disabled={index === 0}>
                        <FaChevronLeft />
                    </button>
                    <button
                        className='prev-btn'
                        onClick={handleNext}
                        disabled={index === people.length - 1}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className='btn btn-hipster' onClick={handleRandom}>
                    surprise me
                </button>
            </article>
        </main>
    );
};

export default App;
