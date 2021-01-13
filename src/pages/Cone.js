import React, { Component } from 'react'
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

class Cone extends Component {
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const controls = new OrbitControls( camera, renderer.domElement );
        camera.position.set( -50, -25, 200 );
        controls.update();

        var material = new THREE.MeshBasicMaterial( { color: 0x808080, side: THREE.DoubleSide } );
        const normal = new THREE.Vector3( 0, 0, 1 );
        const color = new THREE.Color( 0xffaa00 );
        const face = new THREE.Face3( 0, 1, 2, normal, color, 0 );

        for (var i=0; i< this.props.location.state.length; i++){
          var geom = new THREE.Geometry();
          geom.vertices.push( new THREE.Vector3( this.props.location.state[i].a.x, this.props.location.state[i].a.y, this.props.location.state[i].a.z ) );
          geom.vertices.push( new THREE.Vector3(  this.props.location.state[i].p1.x, this.props.location.state[i].p1.y, this.props.location.state[i].p1.z ) );
          geom.vertices.push( new THREE.Vector3(  this.props.location.state[i].p2.x, this.props.location.state[i].p2.y, this.props.location.state[i].p2.z ) );
          geom.faces.push( face );
          scene.add( new THREE.Mesh( geom, material ) );
        }

        var animate = function () {
          requestAnimationFrame( animate );
          controls.update();
          renderer.render( scene, camera );
        };
        animate();
      }
    render() {
      return (
        <div />
      )
    }
  }

  export default Cone;