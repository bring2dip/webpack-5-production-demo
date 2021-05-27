
import logger from 'lib/logger';

import 'css/global.css';
import styles from 'css/movies.module.css';

function displayMovies() {
    logger.log('Movies list');
    
    const movies = [
        'Interstellar',
        'Chakka Panja',
        'IT',
        'Darpan Chaya',
        'Kuch Kuch Hota Hai',
        'Inception',
        'Source Code',
    ];

    document.body.innerHTML = `
        <ul class=${styles.movieList}>
            ${movies.map(movie => `<li>${movie}</li>`).join('')}
        </ul>
    `;
}

displayMovies();