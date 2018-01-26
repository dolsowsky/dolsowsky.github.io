let ide = (obj) => {
  return document.getElementById(obj);
};
    // import Inputmask from 'inputmask';

window.onload = () => {
    // console.log('Start.');

    let i1, i2, par, calc, Result, pv;

    //Парсим числа из VALUE
    par = (tar) => {
      return parseInt(tar, 10);
    }
    //

    i1 = ide('inp');
    i2 = ide('inp1');

    i2.onchange = () => {
      if(i2.value > 24) i2.value = 24;
      Result();
    }
    i1.onchange = () => {
      if(i2.value > 1000000) i2.value = 1000000;
      Result();
    }

//Результат
    Result = () => {
        ide('1').innerHTML = par(i1.value) + 'р';
        ide('2').innerHTML = par(par(i1.value) / par(i2.value)) + 'р';
        ide('3').innerHTML = par(i1.value) + par(i1.value)/100 + 'р';
        ide('4').innerHTML = par(i1.value)/10 + 'р';
        ide('5').innerHTML = par((par(i1.value)/10)/par(i2.value)) + 'р'
    }

  //
    //Вызов Result
    ide('res').onclick = () => {
      Result();
    }
    //

}
