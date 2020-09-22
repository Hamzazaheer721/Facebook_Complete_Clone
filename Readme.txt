Facebook clone allows you to login via Google account using Firebase. 
This application will make use of 
1) Fireebase Authentification Usage
2) React Context API
3) Facebook CSS design
4) Material UI library
5) Firebase Realtime databse
6) Hosting website with Firebase deployment


You will able to upload your status and image/ gif with caption.

Video of the project running is present in src/Readme/Video
Pictures of the project are present in src/Readme/Pictures


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

(in case you have added a folder after pushing the project on github)
git pull
git add .
git commit -m "Alert changes have been made"
git push
