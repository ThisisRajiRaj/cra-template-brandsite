Thank you for considering to contribute! Here are some rules of thumb as you go about it.

### Submitting a Pull Request
Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please ask first if somebody else is already working on this or the core developers think your feature is in-scope for Create React App. Generally always have a related issue with discussions for whatever you are including.

Please also provide a test plan, i.e. specify how you verified that your addition works.

### Folder Structure of this app
rajiraj-brandsite is based on ReactJS and was created with create-react-app template.

It has the following structure under folder template/

src
  assets/
    Contains images for core web pages in the site
  components/
    Contains any code that can be reused across pages
  pages/
    Contains the JC core web pages in the site
  models/
    Contains the data structures + logic that do not have any rendering elements
  css/
    The various stylesheets. Stylesheets are split to correlate with the corresponding pages where special styling is needed.
  posts/   
    The data files (organized as plain text files) that contain the HTML for blog posts. See README.md on how to create a new blog post.

### Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/thisisrajiraj/cra-template-brandsite`
2. Find the path to template.json in the cloned folder.
From the folder where you want to create a site based on this template, 
run 
`` npx create-react-app your-app-name --template file:\<path_to_template.json> ``
3. You now have a site ready that is built form the local template. Run it using "npm start" from <your-app-name> folder.
4. Make any changes you want in the files inside src or public folder of your 
cloned repo folder
5. Run "rm -rf" to delete the folder created for <your-app-name> in step 2. Redo step 2 to see your changes in action.
5. When you have tested and are ready to go, send a pull request in GitHub.

Once it is done, you can modify any file locally and run `npm start`, `npm test` or `npm build` like you can in a generated project. It will serve the application from the files located in `packages/cra-template/template`.


_Many thanks to [h5bp](https://raw.githubusercontent.com/facebook/create-react-app/master/CONTRIBUTING.md) for the inspiration with this contributing guide_