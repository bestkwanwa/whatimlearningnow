# 初学 canvas

## 图形

- 获取2d上下文

  `getContext('2d')`

- 矩形

  - 填充矩形

    `fillRect(x,y,w,h)`

  - 描边矩形

    `strokeRect(x,y,w,h)`

  - 清理矩形

    `clearRect(x,y,w,h)`

- 路径

  - 建立路径

    `beginPath()`

  - 建立子路径

    - 直线

      - 起始点

        `moveTo(x,y)`

      - 终点

        `lineTo(x,y)`

      - 闭合

        `closePath()`

    - 圆弧

      `arc(x,y,r,beginRad,endRad,dir)`

    - 切线圆弧

      `arcTo(x1,y1,x2,y2,r)`

    - 二次贝塞尔曲线

      `quadraticCurveTo(cpx1,cpy1,x,y)`

    - 三次贝塞尔曲线

      `bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y)`

    - 矩形

      `rect()`

  - 显示路径

    - 填充：`fill()`
    - 描边：`stroke()`



## 样式

- 着色区域
  - 描边区域： strokeStyle 代表了描边样式，描边区域的绘制方法是 stroke()、strokeRect() 或者strokeText() 。
  - 填充区域： fillStyle 代表了填充样式，填充区域的绘制方法是 fill()、fillRect() 或者fillText() 。

- 着色方式

  - 纯色

  - 渐变

    - 创建渐变对象

      ```js
      // 线性渐变
      gradient=createLinearGradient(x1, y1, x2, y2)
      // 径向渐变
      gradient=createRadialGradient(x1, y1, r1, x2, y2, r2)
      ```

    - 定义渐变的颜色节点

      ```js
      gradient.addColorStop(position, color)
      ```

  - 纹理

    ```js
    // 建立纹理对象
    pattern=context.createPattern(image,"repeat|repeat-x|repeat-y|no-repeat")
    ```

- 影响描边样式的因素
  - strokeStyle：描边的颜色
  - lineWidth：描边宽
  - lineCap：描边端点样式
    - butt
    - round
    - square
  - ineJoin：描边拐角类型
    - miter
    - round
    - bevel
  - miterLimit：拐角最大厚度（只适用于lineJoin=‘miter’ 的情况）
  - setLineDash(segments)：将描边设置为虚线，可以通过getLineDash() 方法获取虚线样式
  - lineDashOffset：虚线的偏移量

## 投影

**投影是上下文对象的一种属性，在绘制图形时，无论执行的是描边方法，还是填充方法，都会在其所绘图形的后面添加投影。**

- 偏移位置
  - shadowOffsetX = float
  - shadowOffsetY = float
- 模糊度： shadowBlur = float
- 颜色：shadowColor = color



