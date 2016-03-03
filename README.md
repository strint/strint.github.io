# Notes

## 程序设计
* C++, cs106L, 20141107
* Accelerated C++，20141103
* 《Java教程》The Java Tutorial: A Short Course on the Basics, 4th Ed，快速地看了一遍，大致理解了一些基本概念，但是没有动手写代码，所以还是不会用JAVA，感觉这本书写得一般，主要列了一个概念清单，201409~10中的四周.
* SICP chapter 1: Building Abstractions with Procedures, Harold Abelson and Gerald Jay Sussman, 对程序中Procedure的系统讨论，做完了课后46道加深理解的练习题，打开眼界，另外着本书讲编程的一个特点是在细节上每个程序都从高层深入到底层的基本元素，在宏观上提炼了核心的编程思想, 201406&07.
* Best Practices in Programming, Giovanni Agosta, 20140802，从The Practice of Programming这本书中整理出的关键概念，短小精悍，写过一些程序之后读这个感觉里面的建议很有用.

## ML
### ML Theory
* [Regularization of Big Neural Networks](https://www.youtube.com/watch?v=J24dYobuOsI),201408.
* [MIT的人工智能课中神经网络的章节](https://www.youtube.com/watch?v=q0pm3BrIUFo) 原理：这个视频讲的神经网络的方法很吸引人，讲了神经元，然后为神经元建模，做计算修改模型，最后分析利弊，展示了一个建模的完整过程，缺点是时间短，不是很深入，但是展示的过程很有启发性，讲述了创建方法的过程，而不是直接教授方法。201408.
* [Stanford 的机器学习和深度学习网站](http://ufldl.stanford.edu/wiki/index.php/Backpropagation_Algorithm),  实际应用：从公式到代码实现，比较接近实际开发,201408.
* PRML chapter 5: Neural Networks, C. M. Bishop, ljk读书会到此暂停，这一章的内容没有都读，但是核心的神经网络的概念通过看网络上的视频和教程搞明白了,201408.
* PRML chapter 4: Linear Models for Classification, C. M. Bishop, 软件所ljk读书会，跟着读书会每周看两节书，部分地方看懂了，但是没有后续的提问、思考、总结，所以没有整体掌握的感觉, 还有一个原因是第一二章节没有读完，导致读第三四章时欠缺基础知识，这个月把一二章也读了一半, 201407.
* PRML chapter 3: Linear Models for Regression, C. M. Bishop, 软件所ljk读书会，跟着读书会每周看两节书，部分地方看懂了，但是没有后续的提问、思考、总结，所以没有整体掌握的感觉, 201406.
* 神经网络读书班，和Y春晖、L睿凡老师（认识了HeMeng）

### ML Topics
* Factorization Machines with libFM, Steffen Rendle, 一篇关于矩阵分解机的介绍文章，说明了矩阵分解机的目标函数、优化函数、求解方法，并讨论了矩阵分解同一些其它模型的对应关系, 201407.
* Matrix Factorization Techniques for Recommender Systems, Yehuda Koren and Robert Bell and Chris Volinsky, 一篇概述，介绍了矩阵分解应用于推荐系统的思路，比较全面但是不深入, 201407.

## CV
#### A Bite
* Beyond What and Where: Reasoning, Function, Physics, Intent and Causality, Songcun Zhu, 朱老师在中科院自动化所的演讲，认为除了研究图像，计算机视觉应该结合推理、功能、物理、动机、因果从而提高CV的效果，201406.
* Struck: Structured Output Tracking with Kernels, Sam Hare, 周老师5月份给的一篇关于Tracking的文章，让我看一下是否有兴趣，文章中使用了SVM，因为不知的ML的基本框架，所以看的不是很清楚, 201405.

#### SLAM
* Efficient Keyframe-based real-time camera tracking, Zilong Dong and Guofeng Zhang, 浙江大学CAD 实验室发表的一篇camera tracking的文章，设计了一种基于图片显著性和冗余性的关键帧选取方法，设计了一种基于特征的分层的K-Means树的匹配关键帧的方法, 201407.
* Understanding the Basis of the Kalman Filter Via a Simple and Intuitive Derivation, Ramsey Faragher, 一个卡尔曼滤波器的讲义，带有比较好理解的例子，缺点是没有进一步深入到SLAM的具体应用, 201406.
* SLAM for Dummies: A tutorial approach to simultaneous localization and mapping, Soren Riisgaard and Morten Rufus Blas, 周老师在5月给的两篇文章之一，关于SLAM的入门文章，为后面的移动机器人项目做准备的，看了一遍，看得不是很明白, 201405.

#### 测距
* Kinect专利，和同学分工浏览总结了PrimeSense的所有专利,了解Kinct制作的硬件负责程度，并讲给老师听，实验室因此决定不自己做Kinect了，201408.
* Depth Mapping Using Projected Patterns, Barak Freedman etc, 为了了解Kinect，看的一篇PrimeSense申请的关于结构光测据的专利，利用光斑匹配和三角测据实现了深度图像的生成, 201407.
* A Low-Cost Laser Distance Sensor, Kur Konolige etc, 为了了解一个转动激光测据装置看的一篇论文，主要利用了三角测据和光编码器同步生成了平面点云, 201407.

## Navigation
* ROS Navigation Stack Source Code，20141101
* [ROS Tutorial](http://wiki.ros.org/ROS/Tutorials)，把初级和中级教程过了一遍，了解了ROS的工作机制和基本操作，201410第四周.

## Others
* How to read a paper, S. Keshav, 三遍阅读论文的方法，下次可以尝试一下, 201408.
