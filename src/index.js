import format from 'date-fns/fp/format';
import logger from 'lib/logger';
import welcome from 'lib/welcome';

function displayHello() {
    welcome.message();
    logger.log('This is an app');
    logger.log(welcome.credits);
    console.log('Today is', format('d MMM')(new Date()));
    document.body.innerHTML = `
        <h1>Welcome: Lesson 2</h1>`;
}

displayHello();
