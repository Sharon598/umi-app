import React from 'react';
import { Link } from 'umi';
import ReactEcharts from 'echarts-for-react';

const Login = () => {
  // const reportOptions = { // echart 配置
  //   title: {
  //     text: '本周周报统计',
  //     x: 'center',
  //   },
  //   tooltip: {
  //     trigger: 'item',
  //     formatter: '{b} : {c} 人({d}%)',
  //   },
  //   legend: {
  //     orient: 'vertical',
  //     left: 'left',
  //     data: ['提交人数', '未提交人数'],
  //   },
  //   series: [
  //     {
  //       type: 'pie',
  //       radius: '55%',
  //       center: ['50%', '60%'],
  //       data: [
  //         { value: 200, name: '已提交' },
  //         { value: 30, name: '未提交' },
  //       ],
  //       itemStyle: {
  //         emphasis: {
  //           shadowBlur: 10,
  //           shadowOffsetX: 0,
  //           shadowColor: 'rgba(0, 0, 0, 0.5)',
  //         },
  //       },
  //     },
  //   ],
  // };

  return (
    <div>
      {/* <ReactEcharts option={reportOptions} /> */}
      <Link to="/users">TO USERS</Link>
      <Link to="/">TO 首页</Link>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
