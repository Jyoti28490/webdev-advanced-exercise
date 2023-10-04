import axios from 'axios';
import { searchDataProps, SearchResultProps } from '../../types/index';

export const getData = async (): Promise<searchDataProps[]> => {
  // In production scenario this should be place in a different .env file and imported here instead
  const REACT_BASE_URL =
    'https://cdn.statcdn.com/static/application/search_results.json';

  try {
    const response = await axios.get<SearchResultProps>(`${REACT_BASE_URL}`);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.data.items;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data ${error.message}`);
    } else {
      throw new Error('Unknown error occured');
    }
  }
};
