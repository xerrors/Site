---
title: 	遗传算法 - TSP旅行商问题求解
permalink: Genetic-algorithm-tsp
date: 2020-03-29 22:50:46
tag: 
 - blog
 - 人工智能
 - 算法
categories:
 - 人工智能
---

念念不忘，必有回响！

关于遗传算法的解释有很多。建立简单的叙述一下，不明白的地方可以看文章最后方的参考链接，有优秀的博文可以参考。

## 1. 生物进化与遗传算法

遗传算法(Genetic Algorithm，GA)是Holland教授于20世纪60年代提出，它主要借用了生物进化中“物竞天择，适者生存”的自然机理，通过选择、遗传和变异等机制，模拟自然进化过程来求解复杂问题的一种搜索算法。从某种程度上说遗传算法是对生物进化过程进行的数学仿真。与自然界类似，遗传算法从代表问题可能潜在解集的一个种群（population）开始，将择优与随机信息结合起来并逐步迭代，在每一代中通过一定的规则，使用上代中适应性最好的个体（individual），来形成新的种群，如此重复，直到满足指定条件为止。

**生物进化与遗传算法**

生物进化的特性总结如下：达尔文进化论

1. 进化过程发生在**染色体**上，而不是发生在它们所编码的生物体上；
2. 自然选择把染色体以及由它们所译成的结构的表现联系在一起，那些**适应性**好的个体的染色体经常比差的染色体有更多的**繁殖机会**；
3. **繁殖**过程是**进化**发生的时刻。**变异**可以使生物体子代的染色体不同于它们父代的染色体。通过结合两个父代染色体中的物质，**重组**过程可以在子代中产生有很大差异的染色体；
4. 生物进化没有记忆。有关产生个体的信息包含在个体所携带的染色体的集合以及染色体编码的结构之中，这些个体会很好地适应它们的环境。

**算法和自然界的对应关系**

| 遗传算法                           | 生物进化 |
| ---------------------------------- | -------- |
| 适应函数                           | 环境     |
| 适应值函数                         | 适应性   |
| 适应函数值最大的解被保留的概率最大 | 适者生存 |
| 问题的一个解                       | 个体     |
| 解的编码                           | 染色体   |
| 编码的元素                         | 基因     |
| 被选定的一组解                     | 群体     |
| 根据适应函数选择的一组解           | 种群     |
| 以一定的方式由双亲产生后代的过程   | 交配     |
| 编码的某些分量发生变化的过程       | 变异     |

**遗传算法的主要步骤**

遗传算法的控制参数包括**群体规模**N、**算法停止准则**以及**交配概率pc**和**变异概率pm**

![mark](http://src.xerrors.fun/blog/20200329/u4EV0dkTilkL.png)

**遗传算法的主要特点**

1. 遗传算法是一个**随机搜索算法**，适用于数值求解具有多参数、多变量、多目标的复杂最优化问题。
2. 遗传算法对待求解问题的**指标函数**没有什么特殊的要求，如不要求连续性、导数存在、单峰值等假设，甚至不需要显示地写出指标函数。
3. 经过编码以后，遗传算法几乎不需要任何与问题有关的知识，唯一需要的信息是适应值的计算。也不需要使用者对问题有很深入的了解和求解技巧，只需通过选择、交配和变异等简单的操作便可求解复杂的问题，是一个比较**通用的优化算法**。
4. 遗传算法具有天然的**并行性**，适用于并行化求解。

## 2. 遗传算法的实现

主要为以下几个步骤

1. 如何编码？
2. 如何定义适应函数？
3. 初始种群的产生
4. 如何选择
5. 交配策略
6. 变异策略

### 编码问题

对一个具体的应用问题如何编码是应用遗传算法的首要问题，也是遗传算法应用的难点。事实上，还不存在一种通用的编码方法，特殊的问题往往需要采用特殊的编码方法。目前几种常用的编码技术主要包括二进制编码、浮点数编码、字符编码等。

### 适应函数

遗传算法中的适应度函数也称为**评价函数**，是用来判断群体中的个体的优劣程度的指标，是根据所求问题的目标函数来进行评估的。适应度函数是算法演化过程的驱动力，是进行自然选择的唯一依据。在具体应用中，适应度函数的设计要结合求解问题本身的要求而定。适应度函数设计直接影响到遗传算法的性能。（下面没看懂）

1. **非线性加速适应函数**。该方法利用已有的信息构造适应函数。
2. **线性加速适应函数**。该方法是将当前得到的最优指标函数值放大为指标函数值平均值的M倍。
另一种定义适应函数的方法是利用染色体指标函数值从小到大的排列序号作为适应函数值，利用该值采用“赌轮盘”的方法得到每个染色体被选中的概率。

### 初始种群的产生

遗传算法中初始种群中的个体可以是随机产生的，但是最好采用如下策略来设定：

1. 根据问题的固有知识，设法把握最优解所占空间在整个问题空间中的分布范围，然后，在此分布范围内设定初始群体。
2. 先随机生成一定数目的个体，然后从中挑出最好的个体加入到初始群体中。这种过程不断迭代，直到初始群体中个体数达到了预先确定的规模。

然后进行选择、交叉和变异等运算，解决问题。

### 选择策略

选择操作也称为复制（reproduction），是指从当前种群中选出个体以生成交配池（mating pool）的过程。所选出的这些个体具有良好的特征，以便产生优良的后代。较大的选择压力使最优个体有较高的复制数目，从而使算法收敛速度快，但也较容易出现过早收敛的现象。相对而言，较小的选择压力一般能使群体保持足够的多样性，从而增大算法收敛到全局最优的概率，但算法的收敛速度一般较慢。

1. 轮盘赌选择

轮盘赌选择（Roulette Wheel Selection）策略在遗传算法中使用的最多。在轮盘赌选择方法中先按个体的选择概率产生一个轮盘，轮盘每个区的角度与个体的选择概率成正比，然后产生一个随机数，它落入转盘的哪个区域就选择相应的个体交叉。很显然，选择概率大的个体被选中的可能性较大，获得交叉的机会也就越大。

$$P\left(x_{i}\right)=\frac{f\left(x_{i}\right)}{\sum_{j=1}^{N} f\left(x_{j}\right)}$$

在实际计算时，可以按照个体顺序求出每个个体的累积概率，然后产生一个随机数，它落入累积概率的哪个区域就选择相应的个体交叉。

2. 锦标赛选择

锦标赛选择（Tournament Selection）是先在群体中随机选择 *k* 个个体（放回或不放回）进行比较，适应值最好的个体被选择作为生成下一代的父体。反复执行该过程，直到下一代个体数量达到预定的群体规模。参数*k*称为竞赛规模，一般取*k* = 2。

锦标赛选择常常比轮盘赌选择方法能得到更加多样化的群体。这种方法使得适应值好的个体具有较大的生存机会，与此同时，由于它只使用适应值的相对值作为选择的标准，而与适应值的数值大小不成直接比例，从而能避免超级个体的影响，一定程度上避免了过早收敛和停滞现象的发生。

### 交配（交叉）策略

当两个生物机体配对或者复制时，它们的染色体相互混合，产生一个由双方基因组成的全新的染色体组。这一过程称为重组（recombination）或者交叉（crossover）。交叉得到的后代可能继承了上代的优良基因，其后代会比它们的父母更加优秀，但也可能继承了上代的不良基因，其后代则会比它们的父母差，难以生存，甚至不能再复制自己。越能适应环境的后代越能继续复制自己并将其基因传给后代。因此，每一代总是比其父母一代生存和复制得更好。交叉的具体步骤如下：

① 从交配池中随机取出要交配的一对个体；

② 根据位串长度*L*，对要交配的一对个体，随机选取[1, *L*-1]中一个或多个的整数*k*作为交叉点；

③ 根据交叉概率*pc*（0 < *pc* < 1）实施交叉操作，配对个体在交叉点处，相互交换各自的部分内容，从而形成一对新的个体。

（1）一点交叉

一点交叉（Single-point Crossover）是最基础的一种交叉方式。从交配池中随机选择两个个体，然后随机选择一个交叉点，该点前后的两个个体的部分结构进行互换，并生成两个新的个体。Holland教授曾指出，一点交叉算子不利于长距模式的保留和重组，而且位串末尾的重要基因总是被交换，因此在实际应用中采用的并不多。

![mark](http://src.xerrors.fun/blog/20200329/2UEz73of4gP0.png)

图片源自@[算法爱好者](https://mp.weixin.qq.com/s/VKU7UQ2iYzGfnbk41ltdBA)

其中修复重复基因根据业务需要看是否需要。如旅行商问题需要去除重复基因。

（2）两点交叉

两点交叉（Two-point Crossover）的操作与一点交叉类似，只是设置了两个交叉点，将两个交叉点之间的串互相交换。

![mark](http://src.xerrors.fun/blog/20200329/qz7AGoyI5YIs.png)

图片源自@[算法爱好者](https://mp.weixin.qq.com/s/VKU7UQ2iYzGfnbk41ltdBA)

（3）多点交叉

类似于两点交叉，多点交叉（Multipoint Crossover）是指对于选定的两个个体，随机选择多个交叉点，然后进行基因交换。

### 变异策略

对于位串而言，变异可以使串中的某些位的数字发生变化。变异与选择和交叉结合在一起，保证了遗传算法的有效性，使遗传算法具有局部的搜集搜索能力；同时使得遗传算法保持种群的多样性，以防止非成熟收敛。在变异操作中，变异概率不能取的太大，如果变异概率大于0.5，则遗传算法就退化为随机算法，而遗传算法的一些重要特性和搜索能力也不复存在。

变异的具体操作为：对 *Pt* 中任一个体，随机产生一个实数，0 ≤ ρ ≤1，如果 ρ 大于已定义的变异概率的阈值 ρm，就对该个体进行变异。

1. 基于位置的变异——2136457，变异后为2413657 
2. 基于次序的变异——2136457，变异后为2436157 
3. 打乱变异——2136457，一变异结果为2463157 

## 3. TSP 问题求解

TSP的解是一个路径，我们可以把一个路径作为一个个体，路径上面的节点作为基因，特点是这个基因不能够重复，所以在交叉之后需要去除重复。

所以整个算法的思路就是：

1. 随机生成一个初始群体（虽然不是一个好的办法，但确实是最简单的一个办法）
2. 通过锦标赛选择策略选择出交配池。
3. 从交配池里面随机选择出两个个体按照交配概率进行交配，不交配的话就直接放入新群体里面。
4. 如果进行交配就进行两点交换-变异处理-去除重复，之后放入新的群体
5. 重复2-4

**初始化参数**

```python
import numpy as np
import matplotlib.pyplot as plt

len_plot = []

# 城市个数
n = 10

# 交叉概率
pc = 0.8

# 变异概率
pm = 0.15

# 创建地图
cmap = np.array([
    [   0.   , 2538.94 , 2873.8  , 2575.27 , 2318.1  , 2158.71 , 2216.58 , 3174.04 , 3371.13 , 3540.24 ],
    [2538.94 ,    0.   , 1073.54 ,  111.288,  266.835,  395.032,  410.118,  637.942,  853.554, 1055.   ],
    [2873.8  , 1073.54 ,    0.   ,  964.495,  988.636, 1094.32 , 1382.73 , 1240.15 , 1460.25 , 1687.   ],
    [2575.27 ,  111.288,  964.495,    0.   ,  262.053,  416.707,  503.563,  624.725,  854.916, 1068.42 ],
    [2318.1  ,  266.835,  988.636,  262.053,    0.   ,  163.355,  395.14 ,  885.   , 1110.86 , 1318.19 ],
    [2158.71 ,  395.032, 1094.32 ,  416.707,  163.355,    0.   ,  338.634, 1030.34 , 1248.58 , 1447.69 ],
    [2216.58 ,  410.118, 1382.73 ,  503.563,  395.14 ,  338.634,    0.   ,  984.068, 1160.26 , 1323.7  ],
    [3174.04 ,  637.942, 1240.15 ,  624.725,  885.   , 1030.34 ,  984.068,    0.   ,  243.417,  473.768],
    [3371.13 ,  853.554, 1460.25 ,  854.916, 1110.86 , 1248.58 , 1160.26 ,  243.417,    0.   ,  232.112],
    [3540.24 , 1055.   , 1687.   , 1068.42 , 1318.19 , 1447.69 , 1323.7  ,  473.768,  232.112,    0.   ]
], dtype='float').reshape([n, n])
```

**计算适应值的函数**

也就是路径之和


```python
# 计算适应值的函数
def calc(path):
    # best = 8916
    length = 0
    for i in range(len(path)-1):
        length += cmap[path[i], path[i+1]]
    return length
```

**生成初始种群**

采用最简单的随机化生成，虽然并不是很好的方法，可以使用启发式知识来初始化种群。

```python
# 生成初始种群
def init_races(size):
    races = []
    # 采用最简单的随机化生成，虽然并不是很好的方法
    for i in range(size):
        race = [0] * (n+1)
        for j in range(1, n):
            tmp = np.random.randint(1, n)
            while race[tmp] > 0:
                tmp = np.random.randint(1, n)
            race[tmp] = j
        races.append(race)
    return races
```

**筛选出一个交配池**


```python
# 筛选出一个交配池
def tournament(old_races, size):
    # 锦标赛选择法
    pool = []
    for _ in range(size):
        i, j = np.random.randint(0, size, 2)
        # 选出其中最小的一个
        if calc(old_races[i]) < calc(old_races[j]):
            pool.append(old_races[i])
        else:
            pool.append(old_races[j])
    return pool
```

**交配算法**

```python
# 交配算法
def crossover(pool, size):
    new_races = []
    while len(new_races) < size:
        i1, i2 = np.random.randint(0, size, 2)
        p1 = pool[i1].copy()
        p2 = pool[i2].copy()
        if np.random.random() > pc:
            new_races.extend([p1, p2])
        else:
            i, j = get_2_randint()
            # 交换两点之间的序列
            p1[i:j-1], p2[i:j-1] = p2[i:j-1], p1[i:j-1]
            # 变异处理
            p1 = mutation(p1)
            p2 = mutation(p2)
            # 去除重复
            p1, p2 = currect(p1, p2)
            new_races.extend([p1, p2])
        
    return new_races

def get_2_randint():
    # 获取两个随机数作为两个交叉点
    i = j = 0
    # 为了确保 i 比 j 小，且 i 与 j 之间至少相隔两个元素
    while i >= j - 2 or j - i == n:
        i, j = np.random.randint(0, n+1, 2)
    return i, j
```

**去除重复**


```python
# 去除重复
def currect(a, b):
    # 因为是因为交换才产生的重复，所以其中一个系列中重复出现的就是另外一个序列缺少的
    # 所以思路就是找到这两个序列的重复的，然后交换即可。
    i, j = find_last_repeat(a), find_last_repeat(b)
    while i or j:
        a[i], b[j] = b[j], a[i]
        i, j = find_last_repeat(a), find_last_repeat(b)
    return a, b

# 寻找重复元素的位置
def find_last_repeat(path):
    # 首尾是起点
    # print(path)
    for i in path[1:-1]:
        if path.count(i) > 1:
            return path.index(i)
    return None
```

**主函数**


```python
def main():
    size = 20
    # 初始种群
    races = init_races(size)
    result = min([calc(i) for i in races])
    # 挑选个体放入交配池
    for _ in range(10*n):
        pool = tournament(races, size)
        races = crossover(pool, size)
        result = min([calc(i) for i in races])
        len_plot.append(result)
        print(result)

if __name__ == '__main__':
    main()
    plt.plot(len_plot)
```

**运行结果**

结果总是在8700-9200之间，效果不错，但是还有待改进。

![mark](http://src.xerrors.fun/blog/20200329/iUhPth063Y8d.png)

## 4. 遗传算法的优缺点

**优点**：

1. 多解搜索算法，避免局部最优。
2. 从群体出发，具有并行性。
3. 在计算精度要求不高时，遗传算法求解速度更快，鲁棒性强，且不依赖于具体问题。
4. 具有可扩展性，容易与其他算法结合。
5. 搜索使用评价函数启发，过程简单

**缺点**：

1. 对初始种群有一定要求，可以结合启发式算法改进。
2. 超参数如交配概率、变异概率等，他们的选择直接影响算法的优劣。
3. 快要接近最优解时，收敛速度较慢。
4. 易出现早熟的问题，失去多样性。

## 参考资料

[1] [白话讲解遗传算法-算法爱好者](https://mp.weixin.qq.com/s/VKU7UQ2iYzGfnbk41ltdBA)

[2] 《人工智能概述》第四章