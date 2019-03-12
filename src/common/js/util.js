/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description:  解析url参数
 *          ？id=12345&a=b
 *          return Object {id:12345, a:b}
 * @Date: 2019-03-11 21:44:47
 * @LastEditTime: 2019-03-12 13:35:53
 */

export function urlParse() {
    let url = window.location.search;
    // console.log(url);
    let obj = {};
    // ^ 放在开头表示非
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
        arr.forEach(item => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
}
