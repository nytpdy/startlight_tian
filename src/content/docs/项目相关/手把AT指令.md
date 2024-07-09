---
title: 手把AT指令
description: A guide in my new Starlight docs site.
---


## 1.1. AT#A 系列

### 1.1.1. 唤醒

```AT
AT#AQ
```

### 1.1.2. 写入激活锁

```AT
AT#AN
```

### 1.1.3. 擦除激活锁

```AT
AT#AR
```

---

## 1.2. AT#B系列

### 1.2.1. HOME按键

```AT
AT#BA
```

### 1.2.2. OK按键

```AT
AT#BB
```

### 1.2.3. UP按键

```AT
AT#BC
```

### 1.2.4. DOWN按键

```AT
AT#BD
```

### 1.2.5. END按键

```AT
AT#BE
```

### 1.2.6. 上滚计数

```AT
AT#BF[1-9]
```

### 1.2.7. 下滚计数

```AT
AT#BG[1-9]
```

### 1.2.8. END键长按

```AT
AT#BH
```

### 1.2.9. 按键长按,带参数[0-2]

0:长按home
1:长按enter
2:长按end

```AT
AT#BL[0-2]
```

### 1.2.10. 打开广播

```AT
AT#BI
```

### 1.2.11. stc8单片机OTA置为0

```AT
AT#BJ
```

### 1.2.12. 擦除用户nv区

```AT
AT#BK
```

### 1.2.13. 写入SN号

AT#BN+ 15位字符

```AT
AT#BN
```

### 1.2.14. 写入MAC地址

AT#BM+ 12位字符
eg:AT#BM888F10101476
测试服(98开头):AT#BM988F10101476

```AT
AT#BM
```

### 1.2.15. 根据电量重启

```AT
AT#BR
```

### 1.2.16. 息屏睡眠时长设置

0:睡眠5秒
1-8:睡眠对应数字*10秒
9:不睡眠
eg:AT#BS0 //设置睡眠时长为5秒

```AT
AT#BS
```

### 1.2.17. 进入睡眠

```AT
AT#BY
```

## 1.3. AT#C系列

### 1.3.1. 查看胎压nv信息(胎压id,警报设置)

```AT
AT#CC
```

### 1.3.2. 读取电池电压(ADC值)

```AT
AT#CD
```

### 1.3.3. 验证电池电压

```AT
AT#CV
```

### 1.3.4. 读取MAC,SN,BLE_NAME

```AT
AT#CM
```

### 1.3.5. 修改蓝牙名字

eg:AT#CNS301

```AT
AT#CN
```

### 1.3.6. 执行删除所有屏幕对象重新创建进入

close_all_win();
gui_moto_control_enter();

```AT
AT#CW
```

### 1.3.7. 重启

```AT
AT#CR
```

### 1.3.8. 自动测试(MONKEY_TEST_ENABLE 宏打开情况下)

AT#CZ1:开始自动测试
AT#CZ0:关闭自动测试

```AT
AT#CZ
```
