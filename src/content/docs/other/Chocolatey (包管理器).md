---
title: windows包管理器,choco
description: A guide in my new Starlight docs site.
---


## Chocolatey (包管理器)/choco教程

官网链接

https://community.chocolatey.org/

linux 有apt, mac有Homebrew,那这个工具,就是windows上的它们

你需要的python,vs code,jdk,node,7-zip等等,都可以使用它来下载

## 安装

需要使用管理员权限打开cmd或者powershell

### cmd安装

```bash
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

powershell安装

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

安装完成，运行`choco 或 choco -?`检查一下是否安装正确。

### 安装中可能遇到的问题

- 问题1 : 无法加载文件,禁止远程脚本运行

```powershell
1、Installing chocolatey on this machine & : 无法加载文件 C:\Users\Admin\AppData\Local\Temp\chocolatey\chocInstall\tools\chocolateyInstall.ps1，

2、所在位置 C:\Users\johnny\AppData\Local\Temp\chocolatey\chocoInstall\tools\chocolateysetup.psm1:212 字符: 5 +     throw "Installation of Chocolatey to default folder requires Admi ... +     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
```

因为在此系统上 禁止运行远程脚本。有关详细信息，请参阅 [PowerShell 执行策略](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4)输入以下命令将执行策略设置为允许签名的远程脚本就行了。

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

---

- 问题2 : 解压失败

使用以下命令,然后重新运行安装命令,记得需在管理员权限powershell中运行

```powershell
$env:chocolateyUseWindowsCompression = 'true'
```

## 使用

### 搜索app

```powershell
choco search 关键字
```

### 更新app

```powershell
update命令更新包
```

### 下载app

```powershell
choco install 软件包名称
// 安装Node：
choco install nodejs.install //最新版本，当前是11.6.0
choco install nodejs-lts     //lts的最新版本，当前是10.15.0

// 安装git：
choco install git.install
// 安装Chrome：
choco install googlechrome
// 安装VS Code：
choco install vscode
// 安装7-zip：
choco install 7zip.install
// 安装IntelliJ IDEA：
choco install intellijidea-community //社区版
choco install intellijidea-ultimate  //旗舰版

```

### 卸载app

```powershell
choco uninstall 软件包名称
```

### 查看此工具安装app列表

```powershell
choco list
```

### 工具帮助

```powershell
choco -?
```

## 图形界面

当然,都windows了,用命令下软件岂不是委屈了自己,你也可以使用它的图形界面

```powershell
// 安装
choco install chocolateygui // 安装之后输入 chocolateygui 打开图形界面安装你想安装的软件即可
```

也可以使用在线网站查找app

https://community.chocolatey.org/packages

在网站上有一些同名的软件包，不同之处在于一个后面有Install，另一个则没有。这两者的区别是：有Install的软件包在安装之后，会在控制面板的添加和删除程序中找到。