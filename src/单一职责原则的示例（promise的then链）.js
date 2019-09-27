// 加载图片
function loadImg(src) {
    return new Promise(function (resolve, reject){
        const img = document.createElement('img');
        img.onload = function (){
            resolve(img)
        }
        img.onerror = function (){
            reject('图片加载失败')
        }
        img.src = src
    })
}

const src = 'https://www.imooc.com/static/img/index/logo_new.png';
const result = loadImg(src);

result.then(function (img) {
    console.log('img.width', img.width)
    return img
}).then(function (img) {
    console.log('img.height', img.height)
}).catch(function (ex) {
    // 统一捕获异常
    console.log(ex)
})
