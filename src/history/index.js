/**
 * History
 * @see https://github.com/ReactTraining/history
 */

import { createBrowserHistory, createMemoryHistory } from 'history';

const historyConfig = {
  baseName: '',
  forceRefresh: false, // set to true when page reload is required
};

export const createClientHistory = () => createBrowserHistory(historyConfig);
export const createServerHistory = () => createMemoryHistory(historyConfig);
