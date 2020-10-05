# Contributing Guidelines:

We welcome all contributions to the Hydrator project. The contribution can be a [issue report](https://github.com/devcer/Hydrator/issues) 
or a [pull request](https://github.com/devcer/Hydrator/pulls).

## Contribution workflow:


1. Check that there isn't [already an issue](https://github.com/devcer/Hydrator/issues) about your idea to avoid duplicating work.
    * If there isn't one already, please create one so that others know you're working on this

2. Fork the [devcer/Hydrator repository](https://github.com/devcer/Hydrator) to your GitHub account.

3. Clone the forked repository on your local machine.

 ```bash
 
 git clone https://github.com/<your-github-username>/Hydrator.git
 
 ```
4. Sync the fork, to avoid merge conflicts. 

```bash

    git remote add upstream https://github.com/devcer/Hydrator.git
    git fetch upstream
    git pull upstream master
    git push
    
```

5. Create a new branch with your github username as its name.

 ```bash
 
    git checkout -b <your-github-username>
    
 ```

6. Make the necessary changes / additions within your forked repository.

7. Add and commit changes made.

 ```bash
 
    git add .
    git commit -m "commit message"
    
 ```
8. Push the changes to forked repository.

 ```bash
 
    git push origin <branch-name>
    
 ```

9. Submit a Pull Request against the `master` branch and wait for the code to be reviewed and merged.

If you're not used to this workflow with git, you can start with some [basic docs from GitHub](https://help.github.com/articles/fork-a-repo/).
