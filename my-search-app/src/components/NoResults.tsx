const NoResults = () => {
  return (
    <section className="userInfo">
      <div className="userInfo__box">
        <div className="newAlert info">
          <b>NoResults</b>
          <p>
            Unfortunately, no content could be found with the word. Please check
            the spelling and try again.
          </p>
          <div className="center">
            <button className="button">Search Archive</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoResults;
