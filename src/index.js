import format from 'date-fns/fp/format';
import logger from 'lib/logger';
import welcome from 'lib/welcome';

import 'css/global.css';
import styles from 'css/index.module.css';

function displayHello() {
    welcome.message();
    logger.log('This is an app');
    logger.log(welcome.credits);
    console.log('Today is', format('d MMM')(new Date()));
    document.body.innerHTML = `        
        <h1 class=${styles.title}">App</h1>
        <h3 class=${styles.title}">This is an app.</h3>
    `;
}

displayHello();
