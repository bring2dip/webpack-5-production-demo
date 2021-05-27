import mean from 'lodash/mean';
import sum from 'lodash/sum';

import logger from 'lib/logger';
import reports from 'lib/reports';

function displayHello() {
    logger.log('This is an Admin app');
    logger.log('mean', mean([5, 5, 10, 15, 20]));
    logger.log('sum', sum([5, 5, 10, 15, 20]));
    logger.log(reports.data()); 
}

displayHello();