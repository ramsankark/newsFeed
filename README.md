News Feed
=========

News feed application will load top headlines news from google news API. Only top 5 news information are displayed here and on clicking the view more button on the News Feed bottom, next 5 feeds will be displayed. Full story pane will display the brief story of the news from news feed pane click.

About news feed
    -> In news feed, async google API call is handled using redux thunk.
    -> LoremIpsum is a stateless component used to display static context to fill news brief.
    -> Loading and Pagination are handled from 'NEWS_FEED' action payload.

Library files included:
----------------------
React, Redux, Redux-Thunk, Enzyme


Components
==========

1. App.js           - App component is the initial component which will include two components Feed and FeedDetails

2. Feed.js          - Feed component will load the top 5 google news API, this will be the left side pane which highlights the news and is clickable. Component is customized to show Image, news title and news description. It also includes pagination to load next 5 stories.

3. FeedDetails.js   - FeedDetails component will be empty initially, when the user click on any news feed from Feed component the brief details of the news will be displayed in this right side pane. When user clicks on view more button the Id param will be set -1 to display no value.

4. LoremIpsum.js    - LoremIpsum is a stateless component I have used here. Since google news API i'm using here is a developer version the news details will not be displayed fully, so i have placed lorem ipsum context to get a news detail look.


Actions
=======

fetchNewsFeed       - This method will access the google news API and get top 5 news information. pageNumber param will                         be initially send as 1. It will return the 'NEWS_FEED' action to getNewsFeed action.

getNewsFeed         - Method will get the news feed information from fetchNewsFeed method

displayLoading      - This method will enable and disable the loading icon while loading news feed

getMoreNewsDetails  - id param will pass the news feed id based on which news feed details will be obtained and displayed.


Reducers
========

newsFeedReducers.js
    - newsFeedReducer will return the news feeds, page number and loading values to the store
    - newsDetailReducer will return news feed details to the store








##################################################################################################################

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
