/**
 *
 * @param {*可以接收一个对应的算法名或者JSON数组或者一个可以返回数组的函数体} sym_name
 * @returns
 */
export default function symbols(sym_name) {
  // console.log('sym_name',JSON.parse(sym_name));
  // 解析sym_name参数
  // 当sym_name参数为数组字符串时
  try {
    return JSON.parse(sym_name);
  } catch (error) {
    console.log(sym_name, "is not an array");
  }
  // 当sym_name参数为函数体字符串时
  try {
    const func = new Function(sym_name);
    return func();
  } catch (error) {
    console.log(sym_name, "is not a function");
  }
  // 定义排序规则
  const order_rule = {
    // 简体中文排序规则
    simplifiedChinese: () => {
      let _change = {
        ary0: ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
        ary1: ["", "十", "百", "千"],
        ary2: ["", "万", "亿", "兆"],
        init: function (name) {
          this.name = name;
        },
        strrev: function () {
          let ary = [];
          for (let i = this.name.length; i >= 0; i--) {
            ary.push(this.name[i]);
          }
          return ary.join("");
        }, //倒转字符串。
        pri_ary: function () {
          let $this = this;
          let ary = this.strrev();
          let zero = "";
          let newary = "";
          let i4 = -1;
          for (let i = 0; i < ary.length; i++) {
            if (i % 4 == 0) {
              //首先判断万级单位，每隔四个字符就让万级单位数组索引号递增
              i4++;
              newary = this.ary2[i4] + newary; //将万级单位存入该字符的读法中去，它肯定是放在当前字符读法的末尾，所以首先将它叠加入$r中，
              zero = ""; //在万级单位位置的“0”肯定是不用的读的，所以设置零的读法为空
            } //关于0的处理与判断。
            if (ary[i] == "0") {
              //如果读出的字符是“0”，执行如下判断这个“0”是否读作“零”
              switch (i % 4) {
                case 0:
                  break; //如果位置索引能被4整除，表示它所处位置是万级单位位置，这个位置的0的读法在前面就已经设置好了，所以这里直接跳过
                case 1:
                case 2:
                case 3:
                  if (ary[i - 1] != "0") {
                    zero = "零";
                  } //如果不被4整除，那么都执行这段判断代码：如果它的下一位数字（针对当前字符串来说是上一个字符，因为之前执行了反转）也是0，那么跳过，否则读作“零”
                  break;
              }
              newary = zero + newary;
              zero = "";
            } else {
              //如果不是“0”
              newary = this.ary0[parseInt(ary[i])] + this.ary1[i % 4] + newary; //就将该当字符转换成数值型,并作为数组ary0的索引号,以得到与之对应的中文读法，其后再跟上它的的一级单位（空、十、百还是千）最后再加上前面已存入的读法内容。
            }
          }
          if (newary.indexOf("零") == 0) {
            newary = newary.substr(1);
          } //处理前面的0
          // 处理十号位前面的一
          if (newary.indexOf("一十")==0) {
            newary=newary.replace(/一十/g, "十")
          }
          return newary;
        },
      }; //创建class类
      function change() {
        this.init.apply(this, arguments);
      }
      change.prototype = _change;
      //创建实例
      let result_arr = [];
      for (let i = 1; i < 1000; i++) {
        let k = new change(`${i}`);
        result_arr.push(k.pri_ary());
      }
      return result_arr;
    },
  };
  // 当sym_name参数既不是数组又不是函数体时
  return order_rule[sym_name]();
}