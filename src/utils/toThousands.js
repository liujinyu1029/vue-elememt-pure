export const toThousands = (num,n=2)=> {
  try{
    var symbol = /%/.test(num) && '%' ||'';
    var sign = /^-\d+/.test(num) ? '-' : '';
    var num = +(num+'').replace(/[^\d.]*/g,'');
    var m = n>0 ? 1 : 0;
    //四舍五入 begin
    var n1 = n+1;
    var num = (num.toString().match(new RegExp('\\d+(\\.\\d{'+m+','+n1+'})?','g'))||[''])[0];
    var num = eval('Math.round(num*1e'+n+')/1e'+n);
    //四舍五入 end
    var numArr = num.toString().split('.');
    var tempArr = [];
    var handArr = numArr[0].match(/\d/g)||[''];
    handArr.reverse().forEach(function(v,i){
      if(!(i%3)&&i) {
        tempArr.push(',')
      } ;
      tempArr.push(v)
    });
  }catch(e){
    throw new Error('小工具toThousands报错：',e)
  }
  return sign+tempArr.join('').split('').reverse().join('') + (numArr[1] && ('.'+numArr[1]) || '')+symbol;
}