import { useEffect, useState } from 'react';
import { getData } from './services/api';
import './App.css';
import { searchDataProps } from '../types';
import {
  Loader,
  SearchResults,
  SearchBar,
  NoResults,
  TotalResult,
  NoSearchQuery,
  ErrorDisplay,
} from './components';

const App: React.FC = () => {
  const [searchData, setSearchData] = useState<searchDataProps[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      if (searchQuery.trim() === '') {
        setSearchData([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await getData();

        if (searchQuery.trim().toLowerCase() === 'statista') {
          setSearchData(data);
        } else {
          setSearchData([]);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching data:', error);
          setError(error.message as string);
        } else {
          console.log('Unknown Error occured:', error);
          setError('Unknown Error occured:');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [searchQuery]);

  return (
    <div className="app-container">
      <section className="app-container__header">
        <SearchBar onSearch={handleSearch} />
      </section>
      <section className="app-container__main">
        {searchQuery && <TotalResult resultsCount={searchData.length} />}
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay message={error} />
        ) : searchQuery === '' ? (
          <NoSearchQuery />
        ) : searchData.length === 0 ? (
          <NoResults />
        ) : (
          <SearchResults items={searchData as searchDataProps[]} />
        )}
      </section>
    </div>
  );
};

export default App;
