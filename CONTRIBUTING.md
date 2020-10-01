# How to Contribute

- Suggest an issue or ask for getting assigned to an issue
- **Star** the repository
- Once you are assigned to the issue, fork the repository
 ![fork image](https://help.github.com/assets/images/help/repository/fork_button.jpg)
- Clone the forked repository on your local machine 
 ![code ui](https://docs.github.com/assets/images/help/repository/code-button.png)

 ```bash
 
 git clone https://github.com/<your-github-username>/hydrator.git
 
 ```
 **Replace \<your-github-username\> with your username!**

- Sync the fork, to avoid merge conflicts - 

  ```bash
    git remote add upstream https://github.com/devcer/hydrator.git
    git fetch upstream
    git pull upstream master
    git push
    ```

- Create a new branch with your github username as its name

 ```bash
    git checkout -b <your-github-username>
  ```
- Make the required changes on this branch

- Add and commit changes made - 

 ```bash
    git add .
    git commit -m "commit message"
 ```
- Push the changes to forked repository

 ```bash
    git push origin <branch-name>
 ```
- On github page of your forked repo make a pull request

 ![pull request image](https://help.github.com/assets/images/help/pull_requests/choose-base-and-compare-branches.png)

- Wait for the maintainers to review the pull request