# git使用

## 项目下载

clone 远程工程：`git clone https://XXXX.git`

fetch 远程分支到本地某分支：`git fetch origin`

## 分支的增删查改

查看分支：`git branch`

查看远程所有分支：`git branch -r`

查看本地和远程所有分支：`git branch -a`

创建分支：`git branch [name]`

切换分支：`git checkout [name]`

创建并切换分支：`git checkout -b [name]`

合并某分支到当前分支：`git merge [name]`

把分支推送到远程：`git push origin [name]`

删除本地分支：`git branch (-d | -D)`

删除远程分支：`git push origin -d`

分支重命名：`git branch (-m | -M)`

## 查看提交信息日志

查看分支最近一次的修改列表：`git status`

查看分支的commit信息(倒叙排列)

git log 查看commit id, Author, Date, commit info

git shortlog 按提交者分类显示提交信息

git log --oneline 只输出commit id 和 commit info

git log --stat 查看增删查改了哪些文件

## 版本回退

回退到上一版本：git reset --hard HEAD^

回退到上上版本：git reset --hard HEAD^^

回退到上上版本：git reset --hard HEAD~2

回退到某个版本：git reset --hard

强制推送到远程分支：git push -f

### 注意

1、HEAD 指向的版本是当前版本，^ 表示上一个版本，~N 表示上N个版本，可简写 

2、git log 可以查看

3、git reflog 可以查看命令历史，用来回到某个未来的版本

文件的添加、提交、拉取、推送、比对、合并

添加新增文件：git add README.md

添加所有新增文件：git add .

暂存变更文件：git stash [save "暂存备注"]

恢复暂存文件：git stash pop

提交变更文件：git commit -m "变更备注"

拉取远程代码：git pull [origin]

推送到远程：git push origin

比对两个分支：git diff

比对两个分支变更的文件列表：git diff --stat

比对本地和远程分支：git diff origin

合并某个分支：git merge

强制覆盖本地分支：

1、`git fetch --all
`
2、`git reset --hard origin/`

3、`git pull`

### 常用选项和其他命令

git 中部分选项解释

`-f --force`：强制

`-d --delete`：删除

`-D --delete --force`

`-m --move`：移动或重命名

`-M --move --force`

`-r --remote`：远程

`-a --all`：所有

#### 其他命令

清空工程

`$ git rm -rf`

每隔X秒运行一次git pull：

`for((i=1;i<=10000;i+=1)); do sleep X && git pull; done`

使用git rebase将一个feature分支变基到master分支

`$ git checkout feature`

`$ git rebase master`

### 配置相关

查看当前配置： `git config --list`

修改 git 的 name 和 email ：

`git config --global user.name [name]`

`git config --global user.email [email]`

今天不小心删除了本地的store文件夹

Step 1： `git status查看自己做了什么操作`

Step 2： `git reset HEAD [ 被删除的文件或文件夹 ]`

Step 3：`git checkout  [ 被删除的文件或文件夹 ]`

至此，查看文件已恢复！

一些自我理解

`origin` 指的是本地托管在服务器上的仓库的版本 [参考文章](https://blog.csdn.net/u011478909/article/details/77683754)

```js
// 常用的几个命令
git add .
git commit -m 'xxxx'
git push origin master
git remote add origin <server address>

git checkout -b feature_x //创建feature_x并切换到feature_x分支（这个分支仍然是本地分支）
git checkout master // 切换到master分支
git branch -d feature_x // 删除feature_x分支

git push origin feature_x // 将feature_x推送到远程仓库中，别人才能看得到

git push //更新本地仓库至最新改动
git merge feature_x //合并feature_x分支到当前分支
//可能会出现冲突 conflicts ,需要人肉修改冲突的地方
//改完之后，再提交
git add <修改的文件名>
git diff <sourch_branch> <target_branch> // 先查看当前分支与所提交到的分支的差异

// 项目发布，打tag
git tag 1.0.0 1b2e1d63ff // 1b2e1d63ff的意思是git log中产生的提交id前10位字符，


```

