# 自定义右键菜单  [习题链接](http://ife.baidu.com/course/detail/id/26) [demo链接](http://zhinian.info/ife/nuomi/level1/oncontextmenu/index.html)

## 任务目的

> 1. 了解js中的oncontextmenu事件
> 2. 了解如何获取鼠标位置
> 3. 了解如何实现页面屏蔽右键菜单

## 任务描述

> 1. 实现鼠标右击时，出现自定义菜单。点击非自定义菜单区域时，隐藏自定义菜单。参考样例（[点击查看](http://i1.piimg.com/567571/09144a3a46cafbf0.png)），实现页面开发，要求实现效果基本一致。
> 2. 点击自定义菜单条目时，弹出菜单条目名称。

## 任务注意事项

> 1. 自定义菜单出现在鼠标指针右下方，当右边区域不够大，展示在左下方，同理，当下方区域不够时，展示在鼠标指针上方
> 2. 注意测试不同情况，尤其是极端情况下的效果
> 3. 尽量不要使用第三方库，包括jQuery

## 参考资料

> 1. [oncontextmenu](http://www.runoob.com/jsref/event-oncontextmenu.html): 了解JavaScript中oncontextmenu的基本知识
> 2. [event那些事](http://xchb.work/2016/07/25/event%E9%82%A3%E4%BA%9B%E4%BA%8B/) 收集整理的事件相关资料



## 做这个题使用的知识点：

1. oncontextmenu事件, 我使用的有addEventListener监听和function函数

> ```JavaScript
> document.addEventListener('click', function () {
>     		menu.style.display = 'none';
> });
> const newMenu = document.getElementById('newMenu');
> newMenu.oncontextmenu = function (event) {
>           ......
> }
> ```

2. 根据event对象,  获取鼠标位置.

   ``` JavaScript
   // 获取鼠标点击坐标
       		l = event.pageX;
       		t = event.pageY;
   ```

3. 屏蔽原始右键菜单

   ```JavaScript
   newMenu.oncontextmenu = function (event) {
     .......
     // return FALSE 是为了禁用原本的右键菜单
     return false;
   }
   ```

4. 目前还有一个问题没有解决: 

     **实现鼠标右击时，出现自定义菜单。点击非自定义菜单区域时，隐藏自定义菜单**

