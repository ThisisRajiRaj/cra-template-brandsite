This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

## To use this template
1- Create an empty directory and CD into it
2- Run "npx create-react-app <app name> --template rajirajcom-brandsite" 
3- Run npm install
4- Customize site as described below
5- Run npm start

### To customize the site
1- Open the code in Visual Studio Code. Find and update all instances of [%REPLACE%]
2. Change any of the stock images you want to change. Replace text in post1.txt, post2.txt, and post3.txt
3. Change the video links in Portfolio.js page


### To add a new blog post
1. Create a txt with a unique name in all lowercase in posts folder. Copy over or create the html of the content. LinkedIn is a great service to use to author drafts. https://html-online.com/editor/ is good editor for html creation
2. Take care with the case of txt file being created. It should match the case of the "name" attribute in articleindex.js in next step.
3. Add an entry in articleIndex.js. Once again, the jpg file should match the exact case of the file name on disk and the name attribute should match the case of the txt file name (without extension) created in step 2.
4. Any embedded image link should be a publicly available URL
5. Use div with className=quote for quotes
6. If you want a header image served with the content, add the image with the same name as the txt file to the images folder, and refer to it in articleIndex.js file