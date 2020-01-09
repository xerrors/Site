---
title: 	基于WINDOWS下FLEX与BISON的计算器实现
permalink: bison-calc
date: 2020-01-10 00:23:48
tag: 
 - blog
 - 基础
categories:
 - 基础
zhuanlan: compile
prev:
  title: 基于LR分析表编写语法分析器
  path: /parsing-in-LR-table/
---

之前咱们所设计的语法分析器是使用C++自己编写的，尽管我们只是实现了一个简单的功能，但是还是费了九牛二虎之力，那么这一节，我们就开始使用Bison工具快速为我们创建一个功能强啊的语法分析器，话不多说，各位同学往下看吧！

<!-- more -->

**软件及可参考资源**

[南京大学-词法分析和语法分析课件](https://cs.nju.edu.cn/daixinyu/1006.pdf)

[windows平台下flex和Bison下载地址](https://sourceforge.net/projects/winflexbison/)

## 1. 题目描述

基于词法分析程序自动构造工具Flex与语法分析程序自动构造工具Bison，编制简单的计算器程序。

参考示例程序, 用Flex和Bison实现一个功能更为强大的计算器，尽可能多的包含以下运算（支持浮点数）：

- 加、减、乘、除运算
- 乘方power、开方sqrt运算
-  三角函数运算 – sin、cos...
- 求阶乘
- 求log以10为底的对数

### 题目分析

题目看起来还挺复杂的，而且还用到了没接触过的Bison工具。

## 2. 代码总览

> calc.y

```y
%{
# include <stdio.h>
# include <stdlib.h>
# include <math.h>
# define YYSTYPE float
# define PI acos(-1)
int yylex();
int yyerror();
float deg(int n);
%}

// %union {
//   int type_int;
//   float type_float;
//   double type_double;
// }

/* declare tokens*/
// %token <type_int> NUMBER
// %token <type_float> FLOAT
%token NUMBER FLOAT
%token ADD SUB MUL DIV ABS
%token OP CP CO EOL
%token POW SQRT LOG SIN COS DEG

// %type <type_double> calclist exp factor term

%%
 
calclist: /*nothing */ 
 | calclist exp { printf("%g", $2); return 0;}
 ;
exp: factor
 | exp ADD exp { $$ = $1 + $3; }
 | exp SUB factor { $$ = $1 - $3; }
 ;
 
factor: term
 | factor MUL term { $$ = $1 * $3; }
 | factor DIV term { $$ = $1 / $3; }
 ;
 
term: NUMBER { $$ = $1;}
 | FLOAT { $$ = $1;}
 | term DEG { $$ = deg($1);}
 | OP exp CP { $$ = $2; }
 | SQRT OP term CP { $$ = sqrt($3); }
 | LOG OP term CP { $$ = log10($3); }
 | SIN OP term CP { $$ = sin($3 / 180 * PI); }
 | COS OP term CP { $$ = cos($3 / 180 * PI); }
 | OP exp CP OP exp CP { $$ = $2 * $5; }
 | POW OP term CO term CP { $$ = pow($3, $5); }
 ;
%%

float deg(int n) {
  if (n == 1) {
    return 1;
  } else {
    return n * deg(n-1);
  }
}

int main() {
  yyparse();
}
 
int yyerror(char *s) {
  fprintf(stderr, "error: %s\n", s);
}
```

> calc.l

```l
%option noyywrap
%{
# include"calc.tab.h"
%}

DIGIT [0-9]+
FLOAT {DIGIT}[.]{DIGIT}

%%
"+"  { return ADD; }
"-"   { return SUB; }
"*"  { return MUL; }
"/"   { return DIV; }
"("     { return OP; }
")"     { return CP; }
","     { return CO; }
"!"     { return DEG; }

{DIGIT} { yylval = (YYSTYPE)atoi(yytext); return NUMBER; }
{FLOAT} { yylval = (YYSTYPE)atof(yytext); return FLOAT; }

"pow" { return POW; }
"sqrt" { return SQRT; }
"sin" { return SIN; }
"cos" { return COS; }
"log" { return LOG; }

"//".* 
[ \t]   { /* ignore white space */ }
.      { yyerror("Mystery character"); }
%%
```

