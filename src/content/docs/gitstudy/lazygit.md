---
title: lazygit
description: 可视化git
---

## 什么是lazygit

这是一个git的ui界面,可以跨平台使用,win,macos,linux都是可以的,所以推荐学习,一次学习,永久使用

为什么不直接用git命令,而使用这个呢,你说的对

下面引用原作者的话

```
**lazygit**

你以前肯定听说过：Git is 抛瓦否！但如果它的一切都很几把难用的时候，再抛瓦否又有什么用呢？
交互式重新建立基地需要你在你的编辑器中编辑一个沙雕的 TODO 文件？你他妈在开玩笑吗？ 
要暂存一个文件的部分更改，还要在命令行里面手动处理每个代码块？
如果一个块不能被进一步拆分，但又包含不想暂存的代码，
你必须手动编辑一个莫名奇妙的补丁文件？这去你妈的是在玩我吧？!
有时切换分支的时候，突然叫我暂存更改，但在切换完并取消暂存后，
根本没有任何代码冲突！直接签出分支就是了！ 你 他 妈 的 一 定 是 在 玩 老 子 ！
如果你像我一样只是个普通人，而且你厌倦了听着 Git 有多牛逼实际在你用它时是像吃屎一样恶心时,
lazygit 可能非常适合你。
```

## 官方参考链接

`https://github.com/jesseduffield/lazygit`

## 下载和安装

*此项目是基于go语言开发的,所以需要go语言环境,放心,安装go非常方便,只需要下载,运行,一键安装就行了,不需要你配置各种环境变量*

### go语言官网

https://go.dev/

### macOS

```
brew install jesseduffield/lazygit/lazygit
```

### Linux

```
sudo xbps-install -S lazygit
```

Ubuntu

```
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep -Po '"tag_name": "v\K[^"]*')
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"
tar xf lazygit.tar.gz lazygit
sudo install lazygit /usr/local/bin
```

windows

```
git clone https://github.com/jesseduffield/lazygit.git
cd lazygit
go install
```

## 使用教程

---

### 打开lazygit

- 直接在git同级目录下终端中运行 `lazygit`

---

### 窗口切换

- lazygit中,有5个窗口,分别是 1状态,2文件,3分支,4提交,5贮藏
- `h` / `l`：在左侧由上至下五个功能区焦点切换，也可以通过数字键 1 ~ 5 来切换对应功能区；
- `j` / `k`：功能区内单条记录焦点切换；如 commit 记录焦点切换，分支焦点切换等；
- `[` / `]`：功能区内有多个标签页的，可以通过这两个命令左右切换；如分支区的 `Local Branches` / `Remotes` / `Tags` 这几个标签页的切换；
- `?`：如同 Vimium-c 一样，键入 `?` 会弹出当前功能区的所有可用命令以及其功能描述（相同的一个命令，如 `a`，在不同的功能区其对应的功能也不一样）；

---

### 退出lazygit

直接按 `q` 键退出

---

### 文件选项卡(add,stash,commit操作等)

- 文件差异 : 选中文件会直接在右侧状态栏显示
- add : 快捷键 `space`
- commit : 快捷键 `c` ,然后输入提交信息,回车结束
- 放弃更改 : 快捷键 `d`

---

### 分支选项卡(pull,push操作等)

- 拉取分支代码 : 快捷键 小写 `p`
- 推送分支代码 : 快捷键 大写 `P`

---

提交选项卡(git log等)

- 压缩提交 : 快捷键 `s`
- 删除提交 : 快捷键 `d`
- 回退提交 : 快捷键 `t`
- 改写提交 : 快捷键 `r`
- 检出提交 : 快捷键 `space`
- 压缩提交 : 快捷键 `s`

假如你已经提交到公共仓库,这些命令将有一定危险性,请注意使用.

---

### 总结及进阶

- 看完以上的命令,已经可以覆盖你平常所使用的命令了
- 但它的功能远远不止一次,可以在每个选项卡使用 `?` 查看更多命令及用法
- 你可以使用它方便的修改提交顺序,合并提交,但是为了安全,非必要并不推荐使用
- 这个工具还有最重要的一点,会在命令日志打印出你操作的每一步git命令,让你明白你干了什么,你选择的操作是什么命令,保持操作后看一下执行log,保持容错率,并且使自己不会忘记基础指令