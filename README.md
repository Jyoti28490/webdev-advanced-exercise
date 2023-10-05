# Exercise for Web Developers

# Clone the Repository

git clone https://github.com/Jyoti28490/webdev-advanced-exercise.git

# Change Directory to "my-search-app"

cd webdev-advanced-exercise/my-search-app

# Install Dependencies using npm

npm install

# Start the project

npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Ajax Search Page

Welcome to our programming exercise for Web Developers.

Please provide a basic search page user interface, based on the Statista Search API data.

Max. time: 3h

For more details, please see below.

---

### Goal

- Create a user interface for displaying search results.
- The results should at least include title and description.
- Show the number of results for the given keyword (in this case “Statista”).
- Keep usability and accessibility in mind. Code for real world conditions.
- If there is time left think about additional features that would be interesting for a user.

### Frame conditions

- Instead of the real Statista Search API use the following JSON file for the Ajax request:
  https://cdn.statcdn.com/static/application/search_results.json
- This sample data only contains search results for the keyword “Statista”. This means the search functionality wouldn't work for other search terms, which is fine.
- The provided code contains a basic Vue.js app, feel free to rewrite or extend it. You may also use any other reactive framework.

### Support

- You can use statista.com as a design reference. The linked stylesheets give you the opportunity to use the same utility classes as used on statista.com.
- API documentation:
  - https://de.statista.com/api/v2/doc
