---
title: lvgl模拟器移植
description: lvgl模拟器移植
---

## lvgl模拟器移植
从头手把手教你如何移植lvgl,当然,你也可以直接进入总结进行下载
[进入总结](#总结)

### 第一步,进入官网文档

1. 先进入到官网,由于是国外网站,可能会加载缓慢 
   [点击进入lvgl.io](https://lvgl.io/)
   

<img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1710333585326.png"  />

2. 选择官方文档进入,[也可以点我进入](https://docs.lvgl.io/master/)
   
***

### 第二步,选择文档的pc模拟器

1. 现在默认我们已经打开了官方文档,选择侧边栏的Integration and Drivers

<img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1710333993527.png"  height=400/>

2. 打开选项后继续选择Simulator on PC
   <img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1710334170840.png"  />

***

### 第三部,选择对应模拟器软件进入官方仓库

1. 我们在上一步打开Simulator on PC后,右面将会出现对应说明,我们选择codeblocks这一个模拟器
 <img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1710334317201.png"  />

2. 之后会跳转到官方仓库,[点我直接进入](https://github.com/lvgl/lv_port_win_codeblocks)

***

### 第四步,下载官方库代码

1. 按照直接的步骤,你已经进入了官方仓库
   [也可以点我直接进入](https://github.com/lvgl/lv_port_win_codeblocks)

   我们需要下载此仓库代码,可以使用以下命令下载,需要电脑有git环境

   ```git
   git clone https://github.com/lvgl/lv_port_win_codeblocks.git
   ```
   <br>

    没有git环境也可以直接下载zip
    [也可以直接点击我下载](https://codeload.github.com/lvgl/lv_port_win_codeblocks/zip/refs/heads/master)
    >此下载路径为官方路径,可能失效

***

### 第五步,下载lvgl

1. 经过上面的步骤,我们已经把模拟器下载好了,但是打开cbp文件并不能成功运行,这也是文档没有提到的,很多人卡住的地方

2. 在上面的文件下载完成后,其中有一个lvgl文件,打开后是空的,这也还是模拟器不能运行的原因,需要我们自己去下载lvgl放入吃文件,或者运行以下命令,此命令用来更新子模块
   ```
   git submodule update --init --recursive
   ```
3. 当然,我们也可以自行下载
   可以进入步骤一的官方版本库进行下载
   也可以在lvgl文件夹中使用以下命令
   ```
   https://github.com/lvgl/lvgl.git
   ```
<br>

4. 没有git环境,需要下载压缩包解压
   [点我下载](https://codeload.github.com/lvgl/lvgl/zip/09cb87cdc6a0168a98bc0a3182a8439b13249ead)
   >注,此压缩包下载路径为官方库,下载版本为
   09cb87cdc6a0168a98bc0a3182a8439b13249ead

***

### 第六步,完成并运行

恭喜你,到了这一步骤,你已经成功完成模拟器移植了
可以打开文件夹的lvgl.cbp文件,`ctrl`+`F10`运行了

假如要创建新的文件,推荐在模拟器同级目录下创建一个文件夹,避免各种问题

### 总结

可以使用以下命令一键完成

第一步,下载模拟器
```git
git clone https://github.com/lvgl/lv_port_win_codeblocks.git
```

第二步,进入文件夹,下载子库(lvgl)
```git
git submodule update --init --recursive
```

第三步
```
打开文件夹的lvgl.cbp文件,ctrl+F10运行
```
---

### 附加,lvgl 9.1版本过后编译不过问题

假如你遇到的报错是如下内容,那么可以参考此解决方法

```
error: 'CREATE_WAITABLE_TIMER_MANUAL_RESET' undeclared (first use in this function)
```

因为LVGL V9版本更新了很多新特性，其中windows平台部分也进行了优化,所以我们下载的codeblocks自带的minGW版本会跟不上,所以我们需要自行下载一个来替换

#### 操作步骤

1. 获取MinGW更新版本(建议使用13.2.0版本，因为此版本已经过测试)
   https://github.com/niXman/mingw-builds-binaries/releases/tag/13.2.0-rt_v11-rev1

   我是下载的如下版本
   <img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1712543666044.png"  />

<br>

2. 打开Code::blocks 20.03安装的MinGW目录（默认安装目录是C:\Program Files\CodeBlocks\MinGW），并删除所有内容.

<br>

3. 将下载得到的 MinGW 压缩包中的内容解压到C:\Program Files\CodeBlocks\MinGW目录

<br>

4. 然后重新打开codeblock工程rebuild就行啦 

5. 总结就是下载新版本替换原本codeblock的minGW版本文件

### 附加2,CodeBlocks中的文件过多导致.o文件信息过长，从而导致gcc链接失败的问题。

出现在把自己的ui文件夹放在模拟器的上级文件夹,会导致第一次能编译成功,第二次就不行了,由百问网帮忙解决

The error is as follows:

<img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1717071915560.png"  />

Or:

<img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1717071932932.png"  />

# Setting steps

Go "Settings->Compiler...->"Other settings" tab -> click "Advanced options". 

In the dialog that pops up, go to the "Others" tab and look near the bottom:

- Use flat objects
- Use full paths for source files (GDB workaround)

<img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1717072013467.png"  />

<img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/1717072022407.png"  />