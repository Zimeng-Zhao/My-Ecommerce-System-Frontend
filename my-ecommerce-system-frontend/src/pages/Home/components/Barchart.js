//柱状图组件
//1 把功能代码都放到这个组件
//2 把可变的部分抽象成props参数
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const BarChart = ({title, data}) =>{
        //写法2 hook
    const chartRef = useRef(null);
    useEffect(() =>{

        //保证dom可用 才进行图表的渲染
        // const chartDom = document.getElementById('main');//1.获取要渲染图标的dom节点
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);//2.初始化生成一个图标实例对象
        const option = {//3.准备图表参数
        title:{
            text: title
            },
        xAxis: {
            type: 'category',
            data: data
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [10,40,70],
            type: 'bar'
            }
        ]
        };
        //使用图标参数完成图表的渲染
        option && myChart.setOption(option);
    },[])

    
    // return <div><div id='main' style={{width:'500px', height:'400px'}}></div></div>//图标渲染强制要求图标得渲染需要有宽和高
    return <div ref={chartRef} style={{width:'500px', height:'400px'}}></div>
}

export default BarChart;