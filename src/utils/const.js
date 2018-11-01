export const colorList = [
  "#05A565",
  "#00BF6C",
  "#33D190",
  "#55F4B3",
  "#0DE788",
  "#AC86D5",
  "#FF788E",
  "#FC90C5",
  "#FFDD7C",
  "#C7998C"
];
export const ringOptions = {
  dataEmpty:false,
  title:{
    text:'品类占比',
    textStyle:{
      fontSize:16,
      fontFamily:'PingFang-SC-Medium',
      align:'center',
      fontWeight:"normal",
      lineHeight:18
    },
      left:'20',
      top:'20'
  },
  legend: {
    selectedMode:false,//取消点击事件
    orient: 'vertical',
    right: 20,
    bottom:20,
    itemWidth:10,
    itemHeight:10,
    icon:'circle',
    textStyle:{
      fontSize:12,
      color:'#585F60'
    }
  },
  graphic:{
    show:true,
    type:'rect',
    top:"center",
    left:"38%",
    z:2,
    zlevel:100,
    style:{
      text:'',
      textAlign:'center',
      fill:'#585F60',
      fontSize: 12,
      lineHeight:20
    }
  },
  series: [{
    type:'pie',
    tooltip: {
      show:true,
      trigger: 'item',
      backgroundColor : 'rgba(255,173,80,1)',
      borderRadius : 2,
      padding: 10, 
      formatter: "{b}: {c}家 ({d}%)"

    },
    radius: ['26%', '55%'],
    avoidLabelOverlap: true,//防止标签重叠处理
    // minAngle: 20,//防止重叠设置最小角度
    hoveranination:true,
    center: ['38%','50%'],
    color:colorList,
    itemStyle: {
      normal: {
        label:{
          show: true,
          position:'outer',
          textStyle:{
            fontSize:13
          },
          formatter:"{d}%", 
        },
        labelLine:{
          length:10
        }
      }
    },
    data:[]
  }]
};

export const barLegend = {
      icon:'circle',
      data:[],
      bottom:16,
      left:'center',
      textStyle:{
        color:"#828888",
        fontSize:12
      },
      itemWidth:10,
      itemHeight:10,
      itemGap:10,
      selectedMode:false
      
};
export const barExtend = {
  xAxis:{
    linexAxis:{
      axisLabel:{
        color:"#1B2526",//待修改
        fontSize:12
      }
    }
  },
  series:{ 
    type:'bar',
    barWidth:30,
    label:{
      show:true,
      position:"top",
      fontSize:12,
      color:"#1B2526"
    }
  }
};
export const barToolTip = {
  show:true,
  trigger: 'axis',
  textStyle:{
    fontSize: 12
  },
  axisPointer:{
    type:"line",
    lineStyle:{
      opacity:0
    }
  },
  formatter:function(params){
    var str = "";
    params.forEach(function(item,index){
      let mark = item.marker.replace(/10px/g,'6px');
      str += (mark+item.seriesName + '('+item.value+'家)</br>');
    });
      return str;
  }
};
export const barChartSettings = {
 stack: { '总和': ['采购原因', '供应商原因','仓库原因','其他','未确认']},
 label:{
    formatter:"{d}%"
  }
};
export const normalExtend = {
  tooltip:{
    show:true,
    trigger: 'axis',
    textStyle:{
      fontSize: 12
    },
    axisPointer:{
      type:"line",
      lineStyle:{
        opacity:0
      }
    },
    formatter:"{a}</br><span style='background:#00BF6C;border-radius:6px;display:inline-block;width:6px;height:6px;margin-right:5px;;'></span>"+"{b}: {c}"
  },
  series:{
    type:'bar',
    barWidth:30,
    label:{
      show:true,
      position:"top",
      fontSize:12,
      color:"#1B2526"
    },
    itemStyle:{
　　　 normal:{
　　　　 color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {offset: 0, color: '#ABEEDC'}, 
            {offset: 1, color: '#00BF6C'}
          ],
          globalCoord: false 
　　　　 },
        barBorderRadius:[3, 3, 0, 0]
      }
    },
    markPoint:{
      // symbol:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAABhJREFUGJVj/P///38GIgATMYpGFVJPIQBpmgQQio0LaAAAAABJRU5ErkJggg==',
      symbol:'rect',
      symbolSize:[20,20],
      symbolOffset:[0,'-70%'],
      data:[
        { type : 'max' , name : '最大值'}
      ],
      label:{
        backgroundColor:'#FFB561',
        padding:[4,7],
        color:'#FFFFFF'
      }
    }
  }
};
export const normalLegend = {
  icon:"circle",
  bottom:16,
  textStyle:{
      color:"#828888",
      fontSize:12
  },
  itemWidth:10,
  itemHeight:10,
  selectedMode:false
};
export const barColor = ["#00BF6C","#FFDD7C","#FF788E","#AC86D5","#FC90C5"];
export const lineColor = ["#00BF6C"];
export const pieColor = [
  "#05A565",
  "#00BF6C",
  "#33D190",
  "#55F4B3",
  "#0DE788",
  "#AC86D5",
  "#FF788E",
  "#FC90C5",
  "#FFDD7C",
  "#C7998C"
];
export const pieLegend = [
  {
    icon:'circle',
    data:[
      "品类1","品类2","品类3","品类4","品类5"
    ],
    bottom:34,
    center:'center',
    textStyle:{
      color:"#828888",
      fontSize:12
    },
    itemWidth:10,
    itemHeight:10,
    selectedMode:false
  },
  {
    icon:'circle',
    data:[
      "品类6","品类7","品类8","品类9","品类10"
    ],
    bottom:16,
    center:'center',
    textStyle:{
      color:"#828888",
      fontSize:12
    },
    itemWidth:10,
    itemHeight:10,
    selectedMode:false
  }
];
export const pieSetting = {
  label:{
    formatter:"{d}%"
  }
};
export const lineLegend ={
  icon:"circle",
  name:"品类",
  textStyle:{
    color: "#828888",
    fontSize:12
  },
  itemWidth:10,
  itemHeight:10,
  bottom:16,
  selectedMode:false
    
};
export const lineyAxis = {
  splitLine:{
    show:true,
    lineStyle:{
      color:"#F6F7F8"
    }
  },
  axisTick:{
    show:false
  },
  axisLabel:{
    color:"#1B2526",//待修改
    fontSize:12
  }
};
export const lineExtend = {
  xAxis:{
    axisLabel:{
      color:"#1B2526",//待修改
      fontSize:12
    },
    boundaryGap:true//留白策略
  },
  series:{
    type:'line',
    tooltip: {
      show:true,
      position:'top',
      trigger: 'item',
      backgroundColor : '#FFB561',
      borderRadius : 2,
      padding: [4,7], 
      formatter: "{c}"

    },
    symbolSize:10,
    lineStyle:{
      width:4,
    },
    itemStyle:{
      normal:{
        borderWidth:4
      },
      emphasis:{//折点hover样式
        color:"#00BF6C",
        borderWidth:8,
        borderColor:"rgba(0,191,108,0.45)"
      }
    },
    smooth:false,
  }
};
export const lineTooltip = {
  type:"axis",
  formatter:"{a} : {b} : {c} : {d}"
};
export const publicTitle = {
  text:"???",
  top:"top",
  left:"center",
  textStyle:{
    color:'#0C1012',
    fontSize:16,
    fontWeight:'normal'
  }
};
