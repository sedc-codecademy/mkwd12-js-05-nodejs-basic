# Common Git Commands

## git clone
Creates a copy of a remote repository locally.

Example:
```bash
git clone <repository_URL>
```

## git status
Checks the current status of the working directory and staging area, showing which files have been modified, added, or deleted.

Example:
```bash
git status
```

## git add
Adds changes in the working directory to the staging area, preparing them to be committed.

Example:
```bash
git add file.txt
```

## git commit
Saves changes from the staging area to the repository with a descriptive message.

Example:
```bash
git commit -m "Add new feature"
```

## git pull
Fetches changes of the branch we are currently at from a remote repository and merges them into the current branch in the local repository.

Example:
```bash
git pull
```

## git push
Uploads local repository changes of the branch we are currently at, to a remote repository (the same branch we currently at).

Example:
```bash
git push
```

## git merge
Combines changes from different branches into the current branch. This means that the code of the branch `feature-branch` will be merged (applied) in the branch we currently are at.

Example:
```bash
git merge feature-branch
```

## git checkout #1
Will create a new branch out of the branch we currently at. Imagine we are on branch `main`, when we do `git checkout -b my-new-branch` we are creating a new branch named `my-new-branch` out of `main`. The flag `-b` is used only when we create a brand new branch.

Example:
```bash
git checkout -b my-new-branch
```

## git checkout #2
Switching to the branch named `my-feature` in the local repository, if the branch is existing. Note: we can notice that the flag `-b` is missing.

Example:
```bash
git checkout my-feature
```
