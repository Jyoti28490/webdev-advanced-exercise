import React from 'react';
import { SearchResultProps } from '../../types';

const SearchResults: React.FC<SearchResultProps> = ({ items }) => {
  return (
    <section className="content__container">
      <div className="content__area">
        {items.map((item) => (
          <article key={item.identifier}>
            <a
              className="itemContainer text--linkReset"
              target="_self"
              href={item.link}
            >
              <div className="itemContent">
                <span
                  className="item__icon iconSprite iconSprite--statisticPremium"
                  style={{
                    backgroundImage: `url(${item.teaser_image_urls[2].src})`,
                  }}
                ></span>

                <span className="item__text">| {item.date}</span>
                <div className="itemContent__title">{item.title}</div>
                <div className="itemContent__description">
                  {item.description}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
