# 正则表达式之入门  [习题链接](http://ife.baidu.com/course/detail/id/29?t=1488452315304)  —  [demo](http://zhinian.info/ife/nuomi/level1/zhengze/index.html) 

## 任务目的

> 1. 掌握JavaScript正则表达式编写规则
> 2. 了解JavaScript中的正则表达式的特殊字符
> 3. 了解JavaScript提供的正则表达式相关方法
> 4. 能用正则表达式做一些简单文本或者数字校验

## 任务描述 

> 1. 编写一个判断给定数字是否为手机号码的正则表达式，测试用例参照但不限于：
>
>    ```JavaScript
>    18812011232  // 测试结果应该为 true
>    18812312     // false
>    12345678909  // false
>    ```
>
> 2. 编写一个判断输入的字符串是否有相邻重复单词的正则表达式，测试用例可以参考但不限于：
>
>    ```JavaScript
>    foo foo bar       // true
>    foo bar foo       // false  有重复单词但是不相邻
>    foo  barbar bar   // false
>    ```

## 任务注意事项

> 1. 完成任务之后，可以对比别人的实现方案，但不建议未尝试就直接搜索答案
> 2. 在正则表达式的世界中，一个问题往往不止一种方案，可以尝试多种方法

## 参考资料

> 1. [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions): 了解JavaScript中正则表达式的基本知识
> 2. [正则表达式30分钟入门教程](http://deerchao.net/tutorials/regex/regex-1.htm): 30分钟入门



# 做题感想

> 这个正则入门题,  第一个匹配手机号的较为简单, 
>
> ```JavaScript
> 		var reNum = /[1][34578]\d{9}/;
> ```
>
> 手机号11位的都是1开头的, 所以第一个就用1,  第二位在百度百科上,  查到三个运营商是 34578 (可能我有漏下,不过这个就同理了), 后面的用\d表示数字0-9, {9} 表示限定9位数字.
>
> 
>
> 第二题对我来说就比较复杂了,  我平时也没用正则, 偶尔用到还是谷歌一下, 所以看到题第一想法就是分解成数组,  纯正则我竟无从下手了......

PS: 感想稍后写…  未完待续