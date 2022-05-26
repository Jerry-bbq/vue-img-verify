class ImageVerify {
    constructor({ id, width, height }) {
        this.id = id
        this.width = width || 90
        this.height = height || 48
        // 四位数
        this.bit = 4
        // 五条干扰线
        this.lineNum = 5
        // 四十个点
        this.dotNum = 40
        this.ctx = null
        this.pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890' // 字符串
        // 结果
        this.code = ''
        this.init()
    }
    init() {
        if (!this.id) {
            throw new Error('The id of canvas is required')
        }
        const canvas = document.getElementById(this.id)
        if (!canvas) {
            throw new Error('Can not find element by id')
        }
        this.ctx = canvas.getContext('2d')
        this.start()
    }
    start() {
        this.drawBg()
        this.drawText()
        this.drawLine()
        this.drawDot()
    }
    drawBg() {
        this.ctx.save()
        this.ctx.fillStyle = this.randomColor(180, 230)
        this.ctx.fillRect(0, 0, this.width, this.height)
        this.ctx.restore()
    }
    drawText() {
        this.code = ''
        for (let i = 0; i < this.bit; i++) {
            const text = this.pool[this.randomNum(0, this.pool.length - 1)]
            this.code += text
            // fontSize: [18, 35]
            const fontSize = this.randomNum(18, 35)
            const deg = this.randomNum(-30, 30)
            this.ctx.save()
            this.ctx.font = `${fontSize}px Simhei`
            this.ctx.textBaseline = 'top'
            this.ctx.fillStyle = this.randomColor(80, 120)
            this.ctx.translate(20 * i + 8, this.height / 2)
            this.ctx.rotate((deg * Math.PI) / 180)
            this.ctx.fillText(text, 0, -fontSize / 2)
            this.ctx.restore()
        }
    }
    // 干扰线
    drawLine() {
        for (let i = 0; i < this.lineNum; i++) {
            this.ctx.save()
            this.ctx.beginPath()
            this.ctx.moveTo(this.randomNum(0, this.width), this.randomNum(0, this.height))
            this.ctx.lineTo(this.randomNum(0, this.width), this.randomNum(0, this.height))
            this.ctx.strokeStyle = this.randomColor(150, 230)
            this.ctx.closePath()
            this.ctx.stroke()
            this.ctx.restore()
        }
    }
    // 随机点
    drawDot() {
        for (let i = 0; i < this.dotNum; i++) {
            this.ctx.save()
            this.ctx.beginPath()
            this.ctx.arc(this.randomNum(0, this.width), this.randomNum(0, this.height), 1, 0, 2 * Math.PI)
            this.ctx.closePath()
            this.ctx.fillStyle = this.randomColor(150, 200)
            this.ctx.fill()
            this.ctx.restore()
        }
    }
    // 随机数
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    // 随机颜色
    randomColor(min, max) {
        const r = this.randomNum(min, max)
        const g = this.randomNum(min, max)
        const b = this.randomNum(min, max)
        return `rgb(${r},${g},${b})`
    }
}
export default ImageVerify