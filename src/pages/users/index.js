import React, { useEffect } from 'react';
import { Link } from 'umi';
import * as echarts from 'echarts';
import * as maptalks from 'maptalks';
import * as THREE from 'three';

const Users = props => {
  console.log(props, '====props=');
  console.log(maptalks, '=====');
  console.log(echarts, '==================echarts');
  const examples = () => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  };

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  // echarts要在react中的componentDidMount中引入，也就是现在的useEffect
  useEffect(() => {
    examples();
    animate();
    // new maptalks.Map('map', {
    //   center: [-0.113049,51.498568],
    //   zoom: 14,
    //   baseLayer: new maptalks.TileLayer('base', {
    //     urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    //     subdomains: ['a','b','c','d'],
    //     attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    //   })
    // });

    var map = new maptalks.Map('map', {
      center: [-0.113049, 51.49856],
      zoom: 14,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate:
          'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd'],
        attribution:
          '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
      }),
    });

    var layer = new maptalks.VectorLayer('vector').addTo(map);

    new maptalks.Marker([-0.113049, 51.49856], {
      symbol: [
        {
          markerFile: 'avatar.jpg',
          markerWidth: 29,
          markerHeight: 29,
          markerDy: -20,
        },
        {
          markerFile: 'marker.png',
        },
      ],
    }).addTo(layer);
  }, []);

  return (
    <>
      <h1>users</h1>
      <Link to="/home">TO HOME</Link>
      <Link to="/">TO 首页</Link>
      <div id="map" style={{ width: 2000, height: 2000 }}></div>
      <div id="main" style={{ width: 1400, height: 1400 }}></div>
    </>
  );
};

Users.wrappers = ['@/wrappers/auth'];
Users.title = 'Users';

export default Users;
