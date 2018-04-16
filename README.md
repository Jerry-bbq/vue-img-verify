## vue的前端图形验证码组件

## 效果图

![效果图](./src/img/img.png)

## 说明

* 使用canvas实现

* 4位，数字加大写字母的验证码

* 点击可以实现图片的变化

      父组件：
      <ImgVerify @draw="imgCode" ref='imgVerify'/>
  
      methods: {
          imgCode(code){
            console.log(code)
          }
       },

* 父组件调用子组件的方法来实现图形的变化
      
      父组件：
      <ImgVerify @draw="imgCode" ref='imgVerify'/>
      <button @click="handleClick">点击</botton>  
      methods: {
        handleClick(){
          this.$refs.imgVerify.draw()
        }
      },

## 使用

* 下载组件v-img-verify

* 父组件

		<ImgVerify @imgCode="imgCode" ref="imgVerify"/>
		
		  export default {
		    name: 'App',
		    methods: {
		      imgCode(code) {
		        console.log(code)
		      },
		      handleClick(){
		        this.$refs.imgVerify.draw()
		      }
		    },
		    components: {
		      ImgVerify
		    }
		  }
