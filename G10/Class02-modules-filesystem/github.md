## Git VS GitHub
Git is the version control system that manages the source code history and tracks changes locally, while GitHub is a web-based platform that hosts Git repositories, provides collaboration tools, and facilitates remote team collaboration. Many other platforms, like GitLab and Bitbucket, also offer similar services to GitHub

[Github Installation link](https://gitforwindows.org/ )\
[Github Tutorial](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)

Check git version on your machine 
```sh
git -v
```

## Basic git commands

Git clone\
Git clone is a command for downloading existing source code from a remote repository (like Github, for example). In other words, Git clone basically makes an identical copy of the latest version of a project in a repository and saves it to your computer.
```git clone <https://name-of-the-repository-link>```


**Git status**

The Git status command gives us all the necessary information about the current branch. 

```git status```


**Git add**

When we create, modify or delete a file, these changes will happen in our local and won't be included in the next commit (unless we change the configurations).\
We need to use the git add command to include the changes of a file(s) into our next commit.\
To add a single file:

```git add <filename>```

To add everything at once:

```git add .```


**Git commit**

This is maybe the most-used command of Git. Once we reach a certain point in development, we want to save our changes (maybe after a specific task or issue).

Git commit is like setting a checkpoint in the development process which you can go back to later if needed.

We also need to write a short message to explain what we have developed or changed in the source code.

```git commit -m "commit message"```


**Git push**

After committing your changes, the next thing you want to do is send your changes to the remote server. Git push uploads your commits to the remote repository.

```git push <remote> <branch-name>```

However, if your branch is newly created, then you also need to upload the branch with the following command:

```git push --set-upstream <remote> <name-of-your-branch>```


**Git pull**

The git pull command is used to get updates from the remote repo. This command is a combination of git fetch and git merge which means that, when we use git pull, it gets the updates from remote repository (git fetch) and immediately applies the latest changes in your local (git merge).

```git pull <remote>```

## Git GUI
Git GUI provides a visual interface for common Git operations.

**Clone a Repository**
To start working with an existing Git repository, you can clone it using Git GUI:

- Click on the "Clone Existing Repository" button.\
- Enter the repository URL and the destination directory.\
- Click "Clone" to download the repository to your local machine.

**Open an Existing Repository**
If you already have a local repository, you can open it in Git GUI:

- Click on "File" > "Open Existing Repository."\
- Navigate to your local repository and select the repository folder.

**Stage and Commit Changes**
- Make changes to your files in your working directory.\
- Open Git GUI and click "Rescan" to detect the changes.\
- Select the files you want to stage by checking the boxes.\
- Click "Stage Changed" to move the changes to the staging area.\
- Enter a commit message in the "Message" field.\
- Click "Commit" to commit the changes.