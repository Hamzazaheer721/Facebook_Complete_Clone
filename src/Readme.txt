npm install @material-ui/core
npm install @material-ui/icons
npm i firebase
npm install -g firebase-tools             (Two important commands if firebase is not recognized:    npm config get prefix          npm config set prefix "$APPDATA\npm")
firebase login
firebase init                             (type "build" when you are asked about public directory)
npm run build
firebase deploy                           (https://facebook-full-clone.web.app)
git init
git add .
git commit -m "Facebook Full Clone"


(now create new repository after logging into github and follow the rest of instructions there)

git remote add origin https://github.com/Hamzazaheer721/Facebook_Complete_Clone.git
git push -u origin master


(in case if you make any changes after pushing it on github)
git add .
git commit -m "Alert changes have been made"
git push