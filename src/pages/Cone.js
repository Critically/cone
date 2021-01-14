import React, { Component } from 'react'
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

class Cone extends Component {

    componentDidMount() {
      this.sceneSetup();
      this.addCustomSceneObjects();
      this.startAnimationLoop();
    }

    componentWillUnmount() {
      window.cancelAnimationFrame(this.requestID);
      this.controls.dispose();
    }

    sceneSetup = () => {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );;
      this.camera.position.set( -50, -25, 200 );
      // OrbitControls allow a camera to orbit around the object
      // https://threejs.org/docs/#examples/controls/OrbitControls renderer.domElement
      this.controls = new OrbitControls( this.camera, this.mount );
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(  window.innerWidth, window.innerHeight );
      this.mount.appendChild( this.renderer.domElement ); // mount using React ref
    };

    addCustomSceneObjects = () => {
    const lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );

    this.scene.add( lights[ 0 ] );
    this.scene.add( lights[ 1 ] );
    this.scene.add( lights[ 2 ] );

        const material = new THREE.MeshPhongMaterial( {
          color: 0x808080, //808080  серый
          emissive: 0x072534,
          side: THREE.DoubleSide,
          flatShading: true
      } );
        const normal = new THREE.Vector3( 0, 0, 1 );
        const color = new THREE.Color( 0xffaa00 );
        const face = new THREE.Face3( 0, 1, 2, normal, color, 0 );

        for (var i=0; i< this.props.location.state.length; i++){
          var geom = new THREE.Geometry();
          geom.vertices.push( new THREE.Vector3( this.props.location.state[i].a.x, this.props.location.state[i].a.y, this.props.location.state[i].a.z ) );
          geom.vertices.push( new THREE.Vector3(  this.props.location.state[i].p1.x, this.props.location.state[i].p1.y, this.props.location.state[i].p1.z ) );
          geom.vertices.push( new THREE.Vector3(  this.props.location.state[i].p2.x, this.props.location.state[i].p2.y, this.props.location.state[i].p2.z ) );
          geom.faces.push( face );
          this.scene.add( new THREE.Mesh( geom, material ) );
        }
    };

    startAnimationLoop = () => {
      this.renderer.render( this.scene, this.camera );
      this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    render() {
      return <div ref={ref => (this.mount = ref)} />;
    }
    
  }

  export default Cone;