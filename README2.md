Erase all previous installation
rm -rf node_modules package-lock.json

Check correct version of node 
node -v
(v20.18.3)

install dependencies:
npm install

solve problem with host (npi. chatgpt...)
unset HOST

run the webpage in browser
npm start


To create a production build (show all warnings)
npm run build



*******************************************

Webpages/Ideas

https://codesandbox.io/p/sandbox/github/CriticalErorr/Portfoolio/tree/master/resume
https://codesandbox.io/p/sandbox/laughing-forest-mgf93g

*******************************************

nvm install 20
nvm use 20

*******************************************
Info images:

Volcano dark
https://www.goodfon.com/nature/wallpaper-nature-volcano-eruption-lava.html
https://www.goodfon.com/nature/wallpaper-download-1920x1200-volcano-lava-eruption-fire.html
https://www.goodfon.com/nature/wallpaper-download-1920x1080-nature-sicilia-night-mountain.html
 

*******************************************
Deploy webpage on internet using github pages
1. Create repository in github:
name: andbarajas.github.io (see andbarajas.github.io)

Now I can run this in the terminal (on local)
echo "# andbarajas.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AndBarajas/andbarajas.github.io.git

(solve error "fatal: the remote end hung up unexpectedly")
git config http.postBuffer 524288000

git push -u origin main

Install the gh-pages npm package:
npm install gh-pages --save-dev

Make sure my pacjage.json has this:
"homepage": "https://andbarajas.github.io/",

and "scripts" has this
"predeploy": "npm run build",
"deploy": "gh-pages -d build",


"npm run deploy" was telling me that gh-pages already existed so I erased
node-modules/.cache/gh-pages

I run npm run deploy

8. Configure GitHub Pages

    Navigate to the GitHub Pages settings page
        In your web browser, navigate to the GitHub repository
        Above the code browser, click on the tab labeled "Settings"
        In the sidebar, in the "Code and automation" section, click on "Pages"
    Configure the "Build and deployment" settings like this:
        Source: Deploy from a branch
        Branch:
            Branch: gh-pages
            Folder: / (root)
    Click on the "Save" button

*******************************************
After making changes, they can be updated on web as this:

git add .
git commit -m "Updated website with latest changes"
git push origin main  # or 'master', depending on your branch name

npm run deploy

