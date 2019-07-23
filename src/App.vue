<template>
  <div id="app">
    <h3>前端图片验证码：</h3>
    <vue-img-verify @getImgCode="getImgCode" ref="vueImgVerify" />
    <div style="margin: 20px 0">
      <button @click="handleClick">点击</button>
    </div>
    <fieldset>
      <legend>说明：</legend>
      <ul>
        <li>使用canvas实现图片验证码</li>
        <li>4位数字与大写字母随机显示</li>
        <li>5条干扰线</li>
        <li>40个干扰小点</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import vueImgVerify from './components/vue-img-verify'

export default {
  name: 'App',
  data() {
    return {
      imgCode: ''
    }
  },
  methods: {
    // 点击图片获取验证码
    getImgCode(code) {
      this.imgCode = code
      console.log('验证码: ' + this.imgCode)
    },
    // 点击按钮获取验证码
    handleClick() {
      this.imgCode = this.$refs.vueImgVerify.draw()
      console.log('验证码: ' + this.imgCode)
    }
  },
  components: {
    vueImgVerify
  }
}
</script>
