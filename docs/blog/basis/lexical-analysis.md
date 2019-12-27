---
title: 编译原理-构造词法分析器
permalink: lexical-analysis
date: 2019-12-28 00:04:58
tag: 
 - blog
 - 基础
categories:
 - 基础
---

这篇文章是记录我在学习编译原理实验的时候遇到的一些问题以及自己的做法。记录一下自己踩过的坑！第一个题目比较简单，是基于 flex 构造词法分析器，只要掌握一些 flex 的基础就可以完成。

<!-- more -->

在开始之前先分享一个我认为比较好的 flex 的教程，

[南京大学-词法分析和语法分析课件](https://cs.nju.edu.cn/daixinyu/1006.pdf)
[windows平台下flex下载地址](https://sourceforge.net/projects/winflexbison/)

这个课件可以说是科班学生做实验的时候的一份极好的材料了，里面不仅包含词法分析器所需要用到的 flex 教程，也包含后面语法分析所需要的 bison 教程，值得一读！

## 题目一

【问题描述】设计c语言常见单词的正规式，编制lex源文件，利用flex编译得到词法分析的.c文件，继而对该文件编译得到词法分析器。

【输入形式】输入一段c语言程序

【输出形式】各类单词的token字，或者给出程序中的单词错误。

这次的实验算是简单一点的，只需要掌握一些 flex 的基本使用方法就可以完成。

挖坑待补!!!

代码详情：

```c
%option noyywrap
%{
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    int line=1;    
    typedef struct Msg {
        int line;
        char token[100];
        char word[100];
        struct Msg* next;
    }Msg, *pMsg;

    pMsg m, p;
    int error = 0;

    void push(int line, const char* token, const char* word) {
        pMsg tmp = (pMsg)malloc(sizeof(Msg));
        tmp->line = line;
        strcpy(tmp->token, token);
        strcpy(tmp->word, word);
        p->next = tmp;
        p = p->next;
    }
%}
DIGIT [0-9]
OINTEGER [1-9]{DIGIT}*
INTEGER ("+"|"-")?({OINTEGER}|0)
DECIMAL {INTEGER}(.(0)*{OINTEGER})?
FLOAT {DECIMAL}(e{INTEGER})
LETTER [a-zA-Z]
ID ({LETTER}|_)({LETTER}|_|{DIGIT})*
OPT ("+="|"-="|"*="|"/="|"+"|"-"|"*"|"/"|">="|"<="|"=="|"="|">"|"<")
KEYWORD ("if"|"else"|"scanf"|"for"|"printf"|"return"|"sqrt"|"abs"|"main"|"float")
TI [%|&]{LETTER}
ERROR_FLOAT {DIGIT}*.{DIGIT}{DIGIT}*e
%%
\n {++line;}
(void|int|double|short|char) {push(line, "type", yytext);}
{INTEGER} {push(line, "integer", yytext);}
{DECIMAL} {push(line, "decimal", yytext);}
{FLOAT} {push(line, "float", yytext);}
{ERROR_FLOAT} {error = 1; printf("Error at Line %d: Illegal floating point number \"%s\".\n", line, yytext);}
{KEYWORD} {push(line, "keyword", yytext);}
{ID} {push(line, "identify", yytext);}
("("|")"|"{"|"}"|"["|"]"|"\""|","|";") {push(line, "bracket", yytext);}
{OPT} {push(line, "OPT", yytext);}
{TI} {push(line, "typeidentify", yytext);}
"//".*  {}
[/][*][^*]*[*]+([^*/][^*]*[*]+)*[/]       {}
. {}
%%
int printmsg() {
    if (error)
        return 0;
    p = m;
    p = p->next;
    while(p) {
        printf("line%d:(%s, %s)\n", p->line, p->token, p->word);
        p = p->next;
    }
}

int main() {
    m = (pMsg)malloc(sizeof(Msg));
    p = m;
    yyin=stdin;
    yylex();
    printmsg();
}
```

