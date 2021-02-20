import { arraySum, doubleIt, isEven, longestString, whatExtension } from './functions.js';
import util from 'util';
import vm from 'vm';

export const getArgsAndFunctionAccordingToLevel = [{
  fn: doubleIt,
  args: [2, 4, 8, 0, -20, 100],
  fnName: 'doubleInteger'
}, {
  fn: isEven,
  args: [2, 4, 5, 0, -25, Math.floor(Math.random() * 1000000) * 2, 3, 9],
  fnName: 'isNumberEven'
}, {
  fn: whatExtension,
  args: ['mbappe.psg', 'perfectlylegal.torrent', 'spaces are fine in file names.txt', 'this does not have one', '.htaccess'],
  fnName: 'getFileExtension'
}, {
  fn: longestString,
  args: [['one Piece', 'is', 'better', 'than', 'naruto'], ['big', [0, 1, 2, 3, 4], 'tiny'], ['Mbappe', '>', 'Messi', '你好'], [true, false, 'lol'], [{ object: true, mainly: 'to confuse you Mbappe we love you' }, 'x']],
  fnName: 'longestString'
}, {
  fn: arraySum,
  args: [[5, 6, 4, 169], [[['OUH', 5, 6]], 5], [[5], [[[['OUH YEAH'], [5]]]]], [[[[[[2]]]]]]],
  fnName: 'arraySum'
}];

export const getOutput = async (fnString, fnName, arg) => {
  try {
    console.log('GET OUTPUT');
    let result = '';
    const cons = {
      log: (...args) => {
        result += util.format(...args) + '\n';
        return result;
      }
    };
    const context = vm.createContext({ console: cons });
    const script = `${fnString}\n ${fnName}(${arg})`;
    try {
      await vm.runInContext(script, context);
      return result;
    } catch (err) {
      console.log('error:', err.message);
    }
  } catch (e) {
    console.log(e);
  }
};
//# sourceMappingURL=index.js.map