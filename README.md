## 前端图形验证码组件

### 效果图

![效果图](./src/img/img.png)

### 说明

- 使用canvas实现

- 4位，数字加大写字母的验证码

- 点击可以实现图片的变化

### 使用

1.克隆项目，主要代码在`src/components/vue-img-verify.vue`中
``` bash
git clone https://github.com/luguanrui/vue-img-verify.git
```
2.演示代码

DOM:

``` javascript
<vue-img-verify @getImgCode="getImgCode" ref="vueImgVerify" />
```

JS:

``` javascript
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
```
