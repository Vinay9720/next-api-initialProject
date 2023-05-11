Steps when you created local project before adding repo in github.

open git hub in google chrome and login.
Create a repo and copy clone link. Code => HTTPS link
Come to your vs code and open terminal and give the following commands

git remote -v -----------------(this commands will return url's if repo is already added, if not then continue ADD REPO SECTION or skip it)

ADD REPO SECTION
git remote add origin url ------( url that you copied above in line 2)
git remote -v --------------- to crosscheck if it is added or not. If not then repeat the above step
git branch -m master main ---------- check the branch in your github in google chrome and in your local machine. in this case master is local branch and main is remote branch (remote means github in google chrome). This command changes branch name from master to main.
git add . ----------- you need to stage all of your changes
git commit -m 'message' ----------- message can be anything that describe your changes of code
git push -u origin main -f ----------- this will push your code to git hub. go to your github and check your changes are there or not

---

---

Steps when you already created git repo and wanted to clone it in your machine
Open git hub in google chrome and login.
Go to your repo and copy clone link. Code => HTTPS link.
Open folder where you want to clone the project.
Open terminal and follow below commands
git clone url ------ url is copied in line 22
cd navigate to this project
npm install or npm i
npm start

Now you want make changes
git branch branch-name -------- this command will create a local branch and here do your changes

after you have made changes and you wanted to push the changes then follow below steps
install extension stash if not there in your vs code. got to Source Control and you will see stash. Click Stash include untracked and give a name. all of your changes will be saved and you can see them in stash drawer.
git checkout main ----- if your initial branch is main.
git pull ------- will pull recent changes from other developers
git checkout yourBranch -------- go to your created local branch
git pull
git add .
git commit -m 'message'
git push -u origin yourBranchName
