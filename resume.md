### xuxiaoyu的简历
* 邮箱：xuxiaoyu2048[at]foxmail.com | 电话：152108三5三95 
* 博客：http://strint.github.io/ | GitHub：https://github.com/strint  

---

### 教育经历
* 2009.9~2013.6 北京邮电大学 计算机学院 计算机科学与技术专业 本科生；
* 2014.6~2017.4 北京邮电大学 计算机学院 移动机器人与智能技术实验室 硕士研究生。


---

### 技术背景
* 常用语言：C++/C，Python；常用开发环境：Visual Studio/SVN，Linux/Vim/Git；
* 并行和分布式程序设计：SPEEDES（离散事件并行仿真服务），[Pthreads，MPI](https://github.com/strint/DML/tree/master/logistic_regression)；
* 机器学习：[逻辑回归，LBFGS，OWLQN](https://github.com/strint/LogisticRegression_OWLQN_Notes)，[卷积神经网络](http://blog.csdn.net/strint/article/details/44163869)；
* 计算机：了解常用的[计算机系统知识](https://github.com/strint/littleWheels/tree/master/CSAPP)、[算法和数据结构知识](https://github.com/strint/littleWheels/tree/master/AlgorithmsAndDataStructures)，了解[函数式程序设计](https://github.com/strint/sicpAns)；
* 英语：六级，经常阅读英文书籍、文档、论文，经常阅读英文书籍、文档、论文，可以做日常和工作交流。

---

### 项目经历
* **并行逻辑回归**（2016.2~ ）

将OWLQN优化算法使用Pthreads和MPI并行化，求解逻辑回归问题，进行中...[项目链接](https://github.com/strint/DML/tree/master/logistic_regression)

* **	空军（和部分陆军）作战系统建模**（2015.3~2015.12）

使用C++、利用SPEEDES并行离散事件计算框架，对空军作战进行仿真建模。对指挥中心、机场、飞机、雷达等的行为进行建模，采用了离散事件、发布订购机制等实现了系统。主要使用了状态队列解决了指挥中心的事件处理顺序问题，使用信号量解决了机场跑道资源争用问题，使用事件描述了飞机的起飞、巡逻、追踪等各种飞行状态、使用二阶龙格库塔方法对攻击的杀伤进行计算等，完成了系统的主要结构的设计和实现。

* **新闻文本分类**（2014.11~2014.11）

对新闻文本进行分类。共10类新闻文本，训练集、测试集每类各1000篇；使用中科院的NLPIR进行分词、去停用词；编写了JAVA程序计算出每类CHI值最高的500个词，拼接成一个5000维的特征向量；计算特征的TF值作为特征值；使用LibSVM进行归一化、交叉验证等训练出模型；分类的总体正确率为82.11%，平均召回率82.94%。解决的主要问题包括处理流程的实现、特征的选取、程序效率的优化等。

* **《计算机程序的构造和解释》第一、二章习题答案**（2014.6~2015.7）

使用函数式编程语言Scheme为MIT经典的计算机教材《计算机程序的构造和解释》（即SICP）做了前两章共140道习题的解答（https://github.com/strint/sicpAns ），供其它SICP学习者参考。利用函数式语言实现了支持类型转换和泛型的算数系统等各种程序。

* **垂直搜索引擎原型**（2013.3~2013.6）

实现对旅游信息的搜索。在Linux环境下，针对去哪儿网，使用Python urllib2开发了爬虫，爬取了去哪儿网的20万条旅游信息（约占十分之一），使用MongoDB存储下来，并使用Apache Solr搭建了索引和搜索部分；系统能够搜索某地、某个时间段、带有某个关键词的旅游信息。解决的问题包括了解网站数据的传输方式、系统地爬取网站数据等。

---

### 工作记录
* 近期的工作记录：https://github.com/strint/strint.github.io/issues/9

