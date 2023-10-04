import React from 'react';
import { TotalResultProps } from '../../types';

const TotalResult: React.FC<TotalResultProps> = ({ resultsCount }) => {
  return (
    <section className="result_grid">
      <p className="resultsBox">
        <span className="leftOrder__totalResult">
          <b>TOTAL RESULTS :</b>
        </span>
        <span className="leftOrder__totalResult">{resultsCount} results</span>
      </p>
    </section>
  );
};

export default TotalResult;
