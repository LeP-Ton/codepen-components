/**
 *
 * @param {*可以接收一个对应的算法名或者JSON对象} sym_name
 * @returns
 */
export default function symbols(sym_name) {
  const algorithm = {
    simplifiedChinese: () => {
      return ["一", "二", "三"];
    },
    traditionalChinese: () => {
      return [""];
    },
  };
  return algorithm[sym_name]();
}
