---
title: git 常用指令学习
description: git常用指令
---

[git网页全教程](https://www.yiibai.com/git)点这

[已有项目上传github空仓库点这](https://www.notion.so/github-c478598aa54e46e2942c81f96dd83496?pvs=21)

### 总结

```c
git status                                //检查当前git目录

git add                                   //添加修改过后的文件

git status                                //再次查看状态，时候有遗漏

git commit -m "我合并了代码"               //提交这次修改到本地仓库

git status                                //查看状态，是否有push提示

git stash                                 //暂存当前修改,返回成head状态,也是方便pull
git checkout .                            //清除分支所有修改,方便pull

git pull                                  //合并云端代码，合并后需要再次运行项目，再次检查后提交，有冲突则手动合并

git push                                  //提交代码到云端仓库
```

- git init - 初始化仓库。

```c
pwd显示当前目录
cat 文本类文件名，可以查看内容 如：cat hello.txt
rm 文件名，可以删除文件
git init 初始化当前目录，生成.git文件
```

- git add . - 添加文件到暂存区。

```c
git add hello.txt  **将hello.txt添加进暂存区
```

- git commit - 将暂存区内容添加到仓库中

```c
git commit -m '我是添加的提交说明'
```

- git clone - 拷贝一份远程仓库，也就是下载一个项目
- git reset - 回退版本

```c
- git reset --hard HEAD^ 回退到上个版本
- git reset --hard HEAD~n 回退到上n个版本
```

- git rm - 将文件从暂存区和工作区中删除
- git mv - 移动或重命名工作区文件夹

### 提交日志

- git log - 查看提交历史

```c
git log 直接查看
git log --pretty==oneline 每条日志都只显示一行
git log --oneline 效果和上面一样，哈希值只显示部分
```

- git reflog 查看版本号
- git reset --hard 6fcfc89 回退到6fcfc89这个版本

- git blame <文件名> 以列表形式查看指定文件的历史修改记录

### 远程操作

- git remote 远程仓库操作 git remote add origin 远程库地址
- git clone 仓库地址
- git fetch 从远程获取代码库
- git pull 下载远程代码并合并

```c
git pull origin master 检查自己是不是最新版本
```

- git push 上传远程代码并合并

```c
git push -u origin master 把本地仓库分支推送到源仓库，加上-u，把本地master和远程master关联
git push origin master 关联后，可以不加-u使用,直接git pull
```

### 分支

- git checkout -b dev - 创建并切换到dev这个分支
- git branch - 查看当前分支
- git branch -a 查看所有分支
- git checkout - 分支名 切换分支
- git merge 分支名 - 用于合并指定分支到当前分支上，默认快速合并
- git merge –no-ff -m “注释” 分支名     带参数的合并
- git branch -d 分支名 -删除分支

```c
查看分支：git branch

创建分支：git branch name

切换分支：git checkout name

创建+切换分支：git checkout –b name

合并某分支到当前分支：git merge name

删除分支：git branch –d name
```

### .ssh文件生成

要用git生成.ssh文件，你可以按照以下步骤：

1. [打开Git Bash，输入**`ssh-keygen -t rsa -C "你的邮箱"`**，然后连续按三个回车](https://blog.csdn.net/qq_42449963/article/details/109908560)。
2. [你会看到一个提示**`Enter file in which to save the key`**，后面是一个路径，这就是你的.ssh文件夹的位置**1**](https://blog.csdn.net/qq_42449963/article/details/109908560)。
3. [在.ssh文件夹里面，你会找到两个文件：**`id_rsa`**和**`id_rsa.pub`**。前者是私钥，后者是公钥](https://blog.csdn.net/wangshuai33/article/details/102762324)。
4. [你可以把公钥文件的内容复制到需要的地方，比如GitHub或GitLab](https://blog.csdn.net/weixin_44291453/article/details/106763561)。

```python
**ssh-keygen -t rsa -C "你的邮箱"**
```

### git用户名,邮箱

[网页教程](https://www.cnblogs.com/chloneda/p/git-config.html)点这里

对于本地 **git repo** 配置，先进入 **本地git repo** 目录，使用命令：

```bash
git config user.name "your-username"
git config user.email "your-email-address"
```

在git服务器中，任意非 **本地git repo** 中，使用以下命令配置全局配置：

```bash
git config --global user.name "your-username"
git config --global user.email "your-email-address"
```

可以用命令查看自己是否配置成功

```jsx
git config user.name
```

### 所有命令

```bash
git init                                                  # 初始化本地git仓库（创建新仓库）
git config --global user.name "xxx"                       # 配置用户名
git config --global user.email "xxx@xxx.com"              # 配置邮件
git config --global color.ui true                         # git status等命令自动着色
git config --global color.status auto
git config --global color.diff auto
git config --global color.branch auto
git config --global color.interactive auto
git config --global --unset http.proxy                    # remove  proxy configuration on git
git clone git+ssh://git@192.168.53.168/VT.git             # clone远程仓库
git status                                                # 查看当前版本状态（是否修改）
git add xyz                                               # 添加xyz文件至index
git add .                                                 # 增加当前子目录下所有更改过的文件至index
git commit -m 'xxx'                                       # 提交
git commit --amend -m 'xxx'                               # 合并上一次提交（用于反复修改）
git commit -am 'xxx'                                      # 将add和commit合为一步
git rm xxx                                                # 删除index中的文件
git rm -r *                                               # 递归删除
git log                                                   # 显示提交日志
git log -1                                                # 显示1行日志 -n为n行
git log -5
git log --stat                                            # 显示提交日志及相关变动文件
git log -p -m
git show dfb02e6e4f2f7b573337763e5c0013802e392818         # 显示某个提交的详细内容
git show dfb02                                            # 可只用commitid的前几位
git show HEAD                                             # 显示HEAD提交日志
git show HEAD^                                            # 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本
git tag                                                   # 显示已存在的tag
git tag -a v2.0 -m 'xxx'                                  # 增加v2.0的tag
git show v2.0                                             # 显示v2.0的日志及详细内容
git log v2.0                                              # 显示v2.0的日志
git diff                                                  # 显示所有未添加至index的变更
git diff --cached                                         # 显示所有已添加index但还未commit的变更
git diff HEAD^                                            # 比较与上一个版本的差异
git diff HEAD -- ./lib                                    # 比较与HEAD版本lib目录的差异
git diff origin/master..master                            # 比较远程分支master上有本地分支master上没有的
git diff origin/master..master --stat                     # 只显示差异的文件，不显示具体内容
git remote add origin git+ssh://git@192.168.53.168/VT.git # 增加远程定义（用于push/pull/fetch）
git branch                                                # 显示本地分支
git branch --contains 50089                               # 显示包含提交50089的分支
git branch -a                                             # 显示所有分支
git branch -r                                             # 显示所有原创分支
git branch --merged                                       # 显示所有已合并到当前分支的分支
git branch --no-merged                                    # 显示所有未合并到当前分支的分支
git branch -m master master_copy                          # 本地分支改名
git checkout -b master_copy                               # 从当前分支创建新分支master_copy并检出
git checkout -b master master_copy                        # 上面的完整版
git checkout features/performance                         # 检出已存在的features/performance分支
git checkout --track hotfixes/BJVEP933                    # 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支
git checkout v2.0                                         # 检出版本v2.0
git checkout -b devel origin/develop                      # 从远程分支develop创建新本地分支devel并检出
git checkout -- README                                    # 检出head版本的README文件（可用于修改错误回退）
git merge origin/master                                   # 合并远程master分支至当前分支
git cherry-pick ff44785404a8e                             # 合并提交ff44785404a8e的修改
git push origin master                                    # 将当前分支push到远程master分支
git push origin :hotfixes/BJVEP933                        # 删除远程仓库的hotfixes/BJVEP933分支
git push --tags                                           # 把所有tag推送到远程仓库
git fetch                                                 # 获取所有远程分支（不更新本地分支，另需merge）
git fetch --prune                                         # 获取所有原创分支并清除服务器上已删掉的分支
git pull origin master                                    # 获取远程分支master并merge到当前分支
git mv README README2                                     # 重命名文件README为README2
git reset --hard HEAD                                     # 将当前版本重置为HEAD（通常用于merge失败回退）
git rebase
git branch -d hotfixes/BJVEP933                           # 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）
git branch -D hotfixes/BJVEP933                           # 强制删除分支hotfixes/BJVEP933
git ls-files                                              # 列出git index包含的文件
git show-branch                                           # 图示当前分支历史
git show-branch --all                                     # 图示所有分支历史
git whatchanged                                           # 显示提交历史对应的文件修改
git revert dfb02e6e4f2f7b573337763e5c0013802e392818       # 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818
git ls-tree HEAD                                          # 内部命令：显示某个git对象
git rev-parse v2.0                                        # 内部命令：显示某个ref对于的SHA1 HASH
git reflog                                                # 显示所有提交，包括孤立节点
git show HEAD@{5}
git show master@{yesterday}                               # 显示master分支昨天的状态
git log --pretty=format:'%h %s' --graph                   # 图示提交日志
git show HEAD~3
git show -s --pretty=raw 2be7fcb476
git stash                                                 # 暂存当前修改，将所有至为HEAD状态
git stash list                                            # 查看所有暂存
git stash show -p stash@{0}                               # 参考第一次暂存
git stash apply stash@{0}                                 # 应用第一次暂存
git grep "delete from"                                    # 文件中搜索文本“delete from”
git grep -e '#define' --and -e SORT_DIRENT
git gc
git fsck
```