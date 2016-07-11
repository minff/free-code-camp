# Setup development environment
+ Start by creating a c9 *blank* project, then try configuring the item following
## Node
+ Node v4.4.5 (preinstalled)
+ npm@2.15.5 preinstalled
## Express.js
+ express@4.14.0
```
npm install express -g
npm link express --save
```
Install globally `-g`
Add express to package.js dependency `--save`

To init node webapp  
`npm init`

## Git
**Tips:**
+ How to force new line: type *space* twice, then *return*. [link](http://stackoverflow.com/questions/22385334/how-to-write-one-new-line-in-bitbucket-markdown)  
### Branch timestamp-app  
Add gitignore from https://github.com/github/gitignore/blob/master/Node.gitignore   
`curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore`

```
cd ~/workspace/timestamp
git init
git remote -t timestamp-app origin https://github.com/minff/free-code-camp.git
git add .
git commit -m "initial"
git branch timestamp-app
git push  (origin)
```
### Branch notes  
```
cd ~/workspace/notes
git init
git remote -t notes origin https://github.com/minff/free-code-camp.git
git add .
git commit -m "initial"
git branch notes
git push
```

