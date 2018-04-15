## 基于vue的前端图形验证码

## 效果图

![效果图](./src/img/img.png)

## 说明

* 4位数字加大写字母的验证码

* 点击可以实现图片的变化

## 使用canvas

## 使用

* 引入组件 img-verify

* 接受子组件img-verify 传递的参数

      <ImgVerify @printCanvas="imgCode"/>
  
      methods: {
          imgCode(code){
            console.log(code)
          }
       },
