To reset your project back to the second commit (`681b1b3aa54ecf6c0e31428ed629e5289b27b4ab`), you can use the `git reset` command. Here are the steps:

1. **Reset to the specific commit**:

```sh
git reset --

hard

 681b1b3aa54ecf6c0e31428ed629e5289b27b4ab
```

This command will reset your working directory and the index to the specified commit, effectively rolling back any changes made after that commit.

2. **Force push the changes to the remote repository** (if you need to update the remote repository):

```sh
git push origin main --force
```

This will force push the changes to the remote repository, making the remote repository match your local repository.

Here is the complete set of commands:

```sh
git reset --hard 681b1b3aa54ecf6c0e31428ed629e5289b27b4ab
git push origin main --force
```

**Note**: Using `--hard` will discard any changes in your working directory and index that are not committed. Make sure you have backed up any important changes before running this command.