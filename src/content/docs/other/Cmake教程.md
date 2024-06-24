---
title: CMake教程
description: A guide in my new Starlight docs site.
---

## cmake教程
## 学习建议

一般来说,普通学习下,了解流程就好,一般项目都会由原厂配置好cmake,你只需要知道怎么修改就行了.你想自己搭建的话,本教材也能支撑你到入门.

所以你是为了效率,可以只看本教材的 [基础使用](https://www.notion.so/Cmake-632fd57b20fb4a18b8ce8e550af2f9e3?pvs=21) 下的 [*运行*](https://www.notion.so/Cmake-632fd57b20fb4a18b8ce8e550af2f9e3?pvs=21) 和 [*示例*](https://www.notion.so/Cmake-632fd57b20fb4a18b8ce8e550af2f9e3?pvs=21).

## 简介

### CMake是什么

**CMake** 是一个跨平台的、开源的构建工具。`cmake` 是 `makefile` 的上层工具，它们的目的正是为了产生可移植的makefile，并简化自己动手写makefile时的巨大工作量.

### makefile是什么

 可以简单的认为是一个工程文件的编译规则，描述了整个工程的编译和链接等规则。其中包含了那些文件需要编译，那些文件不需要编译，那些文件需要先编译，那些文件需要后编译，那些文件需要重建等等。

看着是不是差不多？实际上，我们在编译c语言的时候，都是 `gcc -o outfile filename1 filename2` 这种类似的命名来完成的，但我们一旦文件过多，那就不方便管理了，而且使用库函数，像用 `math` 库，还要给命名加上 `-lm` ，那样就过于麻烦，而且命名不清晰。此时makefile应运而生，来拯救这种情况。但是makefile还是有个小缺点，它确实能跨平台使用，但是，它不同平台的命令（编译链）又不同，所以，你要知道，懒惰才是生产力，cmake就出现了。我们配置好cmake，它将帮我们自动生成makefile。不同平台，生成不同的makefile，一下就帮我解决了烦恼。

<img src="https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/cmake%E7%BC%96%E8%AF%91%E5%9B%BE.png"  />


如图，也就是我们主要是编写 `CMakeLists.txt` 这个文件

假如你添加了静态库,也是在make过程中链接进目标文件

静态库（.a、.lib）和动态库（.so、.dll）,一半来说liunx生成的是.a和,so, win生成的是.lib和.dll

## 基础使用

### 注释

`CMake` 使用 `#` 进行行单行注释，可以放在任何位置。

```bash
# Cmake版本不能低于3.13
cmake_minimum_required(VERSION 3.13)
```

`CMake` 使用 `#[[ ]]` 形式进行块注。

```makefile
#[[ Cmake版本不能低于3.13
我是多行注释]]

cmake_minimum_required(VERSION 3.13)
```

### 目录解释

```makefile
PROJECT_SOURCE_DIR：工程的根目录
 
PROJECT_BINARY_DIR：运行cmake命令的目录，通常为${PROJECT_SOURCE_DIR}/build
 
PROJECT_NAME：返回通过 project 命令定义的项目名称
 
CMAKE_CURRENT_SOURCE_DIR：当前处理的 CMakeLists.txt 所在的路径
 
CMAKE_CURRENT_BINARY_DIR：target 编译目录
 
CMAKE_CURRENT_LIST_DIR：CMakeLists.txt 的完整路径
 
EXECUTABLE_OUTPUT_PATH：重新定义目标二进制可执行文件的存放位置
 
LIBRARY_OUTPUT_PATH：重新定义目标链接库文件的存放位置
```

PROJECT_SOURCE_DIR宏对应的值就是我们在使用cmake命令时，后面紧跟的目录，一般是工程的根目录

### 运行

`windows` 需要带c语言环境,我是用的minGW且设置了环境变量的

```powershell
 cmake -DCMAKE_CXX_COMPILER=g++ -DCMAKE_CC_COMPILER=gcc -DCMAKE_MAKE_PROGRAM=mingw32-make -G "MinGW Makefiles" .
```

- `CMAKE_CXX_COMPILER=g++` -使用`g++`作为C++编译器(或提供完整的program
- `G "MinGW Makefiles"` -使用`gcc`作为C compiler
- `CMAKE_MAKE_PROGRAM=mingw32-make` -使用`mingw32-make`作为make program
- `G "MinGW Makefiles"`使用MinGW Makefile格式而不是Microsoft makefile format

在此之后，您可以像往常一样运行`mingw32-make`，而不是`make`来构建

我自己安装了 `make` ,实测是可以直接编译的

当然,你也可以直接配置vscode的cmake,然后指定自己的mingw路径来构建

一般来说,运行是用命令

```powershell
cmake cmake文件所在路径

#比如当前路径
cmake .

#上一级目录
cmake ..
```

### 示例

目录结构,我在一个文件夹创建了 `app.c`  `app.h`  `hello.c` `main.c` ,然后写了这个几个文件的 `CMakeLists`

```powershell
C:.
└─app
        app.c
        app.h
        CMakeLists.txt
        hello.c
        main.c
```

`app.c`

```c
#include <stdio.h>
#include "app.h"
 
void multiplication_formulas(void){  

    int i = 0,j = 0;  
    for(i=1;i<=9;i++){  
        for(j=1;j<=i;j++){  
            printf("%dx%d=%d\t",j,i,i*j);  
        }  
        printf("\n");     
    }  
}

double add(double a ,double b)
{
    return a+b;
}
```

`hello.c`

```c
#include <stdio.h>
#include "app.h"

void first_program(void)
{
    printf("hello world \n");
}
```

`main.c`

```c
#include <stdio.h>
#include "app.h"

int main()
{
    multiplication_formulas();
    first_program();
    double sum = add(555,666);
    printf("%f",sum);
    return 0;
}
```

`app.h`

```c
#ifndef __APP_H__
#define __APP_H__

void multiplication_formulas(void);
void first_program(void);
double add(double a ,double b);

#endif //__APP_H__
```

`CMakeLists.txt`

```makefile
#-----------------------直接生成可执行文件---------------------------------
# cmake_minimum_required(VERSION 3.20.3)
# project(APP)
#add_executable(app app.c hello.c main.c) #可以用空格或者逗号隔开
#-----------------------直接生成可执行文件end---------------------------------

#-----------------------生成静态库文件--------------------------------------
cmake_minimum_required(VERSION 3.20.3)
project(app)

add_library(app STATIC app.c hello.c) #把这两个文件编译成静态库

#假如只要静态库,上面三句就ok了

add_executable(app_exe main.c) #创建一个可自行文件app_exe
target_link_libraries(app_exe app) #把编译好的静态库链接进app_exe
#----------------------生成静态库文件end--------------------------------------

```

- 在文件准备好后,我们就要准备执行了

```powershell
cmake .
```

执行成功后,会在文件夹生成一个 `CMakeFiles` 的文件夹和 `cmake_install.cmake`  `CMakeCache.txt`  `Makefile` 这些文件

然后我们在makefile目录下执行

```powershell
make
```

以下是执行结果,它会生成一个.exe,我们运行.exe,就是我们写的代码的结果了

```powershell
                                     make
[ 20%] Building C object CMakeFiles/app.dir/app.c.obj
[ 40%] Building C object CMakeFiles/app.dir/hello.c.obj
[ 60%] Linking C static library libapp.a
[ 60%] Built target app
[ 80%] Building C object CMakeFiles/app_exe.dir/main.c.obj
[100%] Linking C executable app_exe.exe
[100%] Built target app_exe
PS C:\Users\nytpd\Desktop\cmake\app> ./app_exe
1x1=1
1x2=2   2x2=4
1x3=3   2x3=6   3x3=9
1x4=4   2x4=8   3x4=12  4x4=16
1x5=5   2x5=10  3x5=15  4x5=20  5x5=25
1x6=6   2x6=12  3x6=18  4x6=24  5x6=30  6x6=36
1x7=7   2x7=14  3x7=21  4x7=28  5x7=35  6x7=42  7x7=49
1x8=8   2x8=16  3x8=24  4x8=32  5x8=40  6x8=48  7x8=56  8x8=64
1x9=9   2x9=18  3x9=27  4x9=36  5x9=45  6x9=54  7x9=63  8x9=72  9x9=81
hello world
1221.000000
```

此时,你就会想到,这些都在我写代码的目录下,那其实不脏文件结构了.

所以,我们可以创建一个新的目录,比如 `build` 目录来存放cmake生成的文件

如下,我们的代码放在 `app` 文件夹中,然后创建了一个新的 `build` 目录

```powershell
C:.
├─app
└─build
```

然后我们只需要进入 `build` 目录执行命令,就可以把cmake的生成文件放在这里面了

```powershell
cd build
cmake ../app
```

### 静态库和动态库制作

```powershell
CMAKE_MINIMUM_REQUIRED(VERSION 3.4.1)  
set(PROJECT_NAME Test0706)  
 
project(${PROJECT_NAME}) 
 
#加载头文件
#include_directories(${PROJECT_SOURCE_DIR}/include/)
 
#生成动态库 .so
# add_library(${PROJECT_NAME}  SHARED test0706.cpp)
 
#生成静态库 .a
#add_library(${PROJECT_NAME} STATIC test0706.cpp)
 
#生成可执行文件
#add_executable(${PROJECT_NAME} test0706.cpp)
 
#链接第三方库
#target_link_libraries(${PROJECT_NAME} 路径)
```

### 指定输出路径

除了我自己切换文件路径来生成文件,当然也可以使用cmake来指定路径

1.设置可执行文件的输出路径：

```makefile
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/../bin)
```

2.静态库 lib 输出路径：

```makefile
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/../bin)
```

3.动态库输出路径（注意这个放在最后）：

```makefile
SET_TARGET_PROPERTIES(dllname PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../bin)
```

### 添加头文件

假如你已经执行或上面的例子了,可能会发现,我也没有添加头文件呀,也确实是这样,cmake会自己找头文件,可以不需要主动添加.但文件一多,层级一乱,cmake就可能找不到你用的头文件,这个时候,就需要我们帮它指一下路了

```makefile
include_directories(headpath) #headpath是头文件的目录名称
```

---

### 遍历当前目录文件添加

我们使用 `add_executable()` 来添加文件,也还是一个一个的要写进去,自己初期写一个文件加一个文件还好,但是假如要加入别人给的,那岂不是又是一番折磨

所以，在CMake中为我们提供了搜索文件的命令，可以使用 `aux_source_directory` 命令或者 `file` 命令。

在 CMake 中使用 `aux_source_directory` 命令可以查找某个路径下的所有源文件，命令格式为：

```makefile
aux_source_directory(< dir > < variable >)

#dir：要搜索的目录
#variable：将从dir目录下搜索到的源文件列表存储到该变量中
```

eg :

```makefile
cmake_minimum_required(VERSION 3.0)
project(TEST) 
include_directories(${PROJECT_SOURCE_DIR}/include) # 添加目录
aux_source_directory(${CMAKE_CURRENT_SOURCE_DIR}/src SRC_LIST) # 搜索 src 目录下的源文件
add_executable(app  ${SRC_LIST}) #将目录下遍历到的文件列表添加到app
```

---

### 遍历目录及其子目录所有文件添加

我们将用到 `file` 指令,这只是它的一个功能

```makefile
file(GLOB/GLOB_RECURSE 变量名 要搜索的文件路径和文件类型)
```

GLOB: 将指定目录下搜索到的满足条件的所有文件名生成一个列表，并将其存储到变量中。
GLOB_RECURSE：递归搜索指定目录，将搜索到的满足条件的文件名生成一个列表，并将其存储到变量中

eg :

```makefile
file(GLOB MAIN_SRC ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp) #遍历source目录下的所有.cpp文件添加到MAIN_SRC中
file(GLOB_RECURSE MAIN_HEAD ${CMAKE_CURRENT_SOURCE_DIR}/include/*.h) #遍历source及其所有子目录下的.h文件,添加到MAIN_HEAD中
```

---

### 链接静态库

```makefile
link_libraries(<static lib> [<static lib>...])
```

- 参数1：指定出要链接的静态库的名字,可以是全名 libxxx.a,也可以是掐头（lib）去尾（.a）之后的名字 xxx
- 参数2-N：规则重复参数一,可以一次

eg:假如我们有一个hello.a

```makefile
# 包含静态库路径
link_directories(${PROJECT_SOURCE_DIR}/lib)
# 链接静态库
link_libraries(hello.a)
```

---

### 链接动态库

```makefile
target_link_libraries(
    <target> 
    <PRIVATE|PUBLIC|INTERFACE> <item>... 
    [<PRIVATE|PUBLIC|INTERFACE> <item>...]...)
```

- target：指定要加载动态库的文件的名字,可以是源文件,可以是动态库文件,可以是可执行文件
- PRIVATE|PUBLIC|INTERFACE：动态库的访问权限，默认为PUBLIC,一般使用默认

PUBLIC：在public后面的库会被Link到前面的target中，并且里面的符号也会被导出，提供给第三方使用。
PRIVATE：在private后面的库仅被link到前面的target中，并且终结掉，第三方不能感知你调了啥库
INTERFACE：在interface后面引入的库不会被链接到前面的target中，只会导出符号。

eg:我们现在编译出来了一个hello.exe,然后需要链接动态库A,B,C

```makefile
target_link_libraries(hello.exe A B C)
```

你在尝试中可能会遇到链接了动态库,但是执行确报错,你需要指出动态库的路径且确保程序能正常访问路径

```makefile
link_directories()
```

### 动态库和静态库的区别

动态库的链接和静态库是完全不同的：

静态库会在生成可执行程序的链接阶段被打包到可执行程序中，所以可执行程序启动，静态库就被加载到内存中了。
动态库在生成可执行程序的链接阶段不会被打包到可执行程序中，当可执行程序被启动并且调用了动态库中的函数的时候，动态库才会被加载到内存

因此，在cmake中指定要链接的动态库的时候，应该将命令写到生成了可执行文件之后

eg:

```makefile
cmake_minimum_required(VERSION 3.0)
project(TEST)
file(GLOB SRC_LIST ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp)
# 添加并指定最终生成的可执行程序名
add_executable(app ${SRC_LIST})
# 指定可执行程序要链接的动态库名字
target_link_libraries(app pthread)
```

---

### set命令(创建变量)

```makefile
set(变量名1 ${变量名1} ${变量名2} ...)
```

- 参数也可以直接是字符串

### 给程序添加宏定义

```makefile
add_definitions(-D宏名称)
```

eg:

```makefile
add_definitions(-DDEBUG)
```

- 添加DEBUG宏定义

### list(列表)

除了上面的set,我们也可以使用list,set的本质也是创建了一个list变量

```makefile
list(APPEND <list> [<element> ...])
```

```makefile
    list(LENGTH <list><output variable>)
    list(GET <list> <elementindex> [<element index> ...]<output variable>)
    list(APPEND <list><element> [<element> ...])
    list(FIND <list> <value><output variable>)
    list(INSERT <list><element_index> <element> [<element> ...])
    list(REMOVE_ITEM <list> <value>[<value> ...])
    list(REMOVE_AT <list><index> [<index> ...])
    list(REMOVE_DUPLICATES <list>)
    list(REVERSE <list>)
    list(SORT <list>)
```

LENGTH　　　　   　　　　 返回list的长度

GET　　　　　　    　　　　返回list中index的element到value中

APPEND　　　　    　　　　添加新element到list中

FIND　　　　　　   　　　　返回list中element的index，没有找到返回-1

INSERT 　　　　　　　　　 将新element插入到list中index的位置

REMOVE_ITEM　　　　　　从list中删除某个element

REMOVE_AT　　　　　　　从list中删除指定index的element

REMOVE_DUPLICATES       从list中删除重复的element

REVERSE 　　　　　　　　将list的内容反转

SORT 　　　　　　　　　　将list按字母顺序排序

---

## 日志

可以在编译的时候输出用户信息

```makefile
message([STATUS|WARNING|AUTHOR_WARNING|FATAL_ERROR|SEND_ERROR] "message to display" ...)
```

- (无) ：重要消息
- `STATUS` ：非重要消息
- `WARNING` ：CMake` 警告, 会继续执行
- `AUTHOR_WARNING` ：CMake 警告 (dev), 会继续执行
- `SEND_ERROR` ：CMake 错误, 继续执行，但是会跳过生成的步骤
- `FATAL_ERROR` ：CMake 错误, 终止所有处理过程

CMake的命令行工具会在stdout上显示STATUS消息，在stderr上显示其他所有消息。CMake的GUI会在它的log区域显示所有消息。

CMake警告和错误消息的文本显示使用的是一种简单的标记语言。文本没有缩进，超过长度的行会回卷，段落之间以新行做为分隔符。

eg:

```makefile
# 输出一般日志信息
message(STATUS "source path: ${PROJECT_SOURCE_DIR}")
# 输出警告信息
message(WARNING "source path: ${PROJECT_SOURCE_DIR}")
# 输出错误信息
message(FATAL_ERROR "source path: ${PROJECT_SOURCE_DIR}")
```

## 流程控制(if else,循环)

在 CMake 的 CMakeLists.txt 中也可以进行流程控制，也就是说可以像写 shell 脚本那样进行条件判断和循环。

### 条件判断

```makefile
if(<condition>)
  <commands>
elseif(<condition>) # 可选快, 可以重复
  <commands>
else()              # 可选快
  <commands>
endif()
```

- `condition` 可以是 常量,变量,字符串
- 在进行条件判断的时候，如果有多个条件，那么可以写多个elseif，最后一个条件可以使用else，但是开始和结束是必须要成对出现的，分别为：if和endif。
- if中的条件可以用  `AND` `OR` `NOT` ,与或非三个操作

还可以进行字符串比较,数字比较,判断文件等操作,但是用得比较少,就不加描述了,下面会列举几个可能会用到的

```makefile
if(EXISTS path) #判断文件是否存在
if(IS_DIRECTORY path) # 判断是否目录,path需要是绝对路径
if(<variable|string> IN_LIST <variable>) #判断某个元素是否在列表中
```

### 循环

```makefile
foreach(<loop_var> <items>)
    <commands>
endforeach()
```

方法一

```makefile
foreach(<loop_var> RANGE <stop>)
```

方法二

```makefile
foreach(<loop_var> RANGE <start> <stop> [<step>])
```

- RANGE：关键字，表示要遍历范围
- start：这是一个正整数，表示范围的起始值，也就是说最小值为 start
- stop：这是一个正整数，表示范围的结束值，也就是说最大值为 stop
- step：控制每次遍历的时候以怎样的步长增长，默认为1，可以不设置
- loop_var：存储每次循环取出的值

eg:

```makefile
cmake_minimum_required(VERSION 3.2)
project(test)

foreach(item RANGE 10 30 2) #foreach(item RANGE 10)
    message(STATUS "当前遍历的值为: ${item}" )
endforeach()

```

方法三,遍历列表

```makefile
cmake_minimum_required(VERSION 3.2)
project(test)
# 创建 list
set(WORD a b c d)
set(NAME ace sabo luffy)
# 遍历 list
foreach(item IN LISTS WORD NAME)
    message(STATUS "当前遍历的值为: ${item}" )
endforeach()
```

结果

```makefile
$ cd build/
$ cmake ..
-- 当前遍历的值为: a
-- 当前遍历的值为: b
-- 当前遍历的值为: c
-- 当前遍历的值为: d
-- 当前遍历的值为: ace
-- 当前遍历的值为: sabo
-- 当前遍历的值为: luffy
-- Configuring done
-- Generating done
-- Build files have been written to: /home/robin/abc/a/build

```

---