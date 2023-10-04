const NoSearchQuery = () => {
  return (
    <section className="userInfo">
      <div className="userInfo__box">
        <div className="newAlert info">
          <p>Searchbox cannot be empty, please enter a word to search</p>
          <div className="center">
            <button className="button">Search Archive</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoSearchQuery;
