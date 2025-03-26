import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors';
import axios from 'axios';

const API_URL = 'http://localhost:5000/logs';

export default function Acelerometro() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [ballonPosition, setBallonPosition] = useState({ x: 150, y: 300, z: 150 });
  const [color, setColor] = useState('blue');

  const updateBallonPosition = ({ x, y, z }: any) => {
    const newPosition = {
      x: Math.min(Math.max(ballonPosition.x + x * 10, 0), 300),
      y: Math.min(Math.max(ballonPosition.y + y * 10, 0), 600),
      z: Math.min(Math.max(ballonPosition.z + z * 10, 0), 600)
    };

    setBallonPosition(newPosition);
    guardarEnLogs(newPosition);
  };

  useEffect(() => {
    const suscription = Accelerometer.addListener((accelerometro) => {
      setData(accelerometro);
      updateBallonPosition(accelerometro);
    });

    Accelerometer.setUpdateInterval(1500);

    return () => suscription.remove();
  }, []);

  const generarColorAleatorio = () => {
    const colorRandom = `rgb(${Math.floor(Math.random() * 256)}, 
                              ${Math.floor(Math.random() * 256)}, 
                              ${Math.floor(Math.random() * 256)})`;
    setColor(colorRandom);
  };

  useEffect(() => {
    generarColorAleatorio();
  }, [ballonPosition]);

  const guardarEnLogs = async (posicion: { x: number; y: number; z: number }) => {
    try {
      await axios.post(API_URL, {
        timestamp: new Date().toISOString(),
        posicionX: posicion.x,
        posicionY: posicion.y,
        posicionZ: posicion.z
      });
      console.log('Log guardado:', posicion);
    } catch (error) {
      console.error('Error al guardar log:', error);
    }
  };

  return (
    <View style={style.container}>
      <View
        style={[
          style.ball,
          {
            left: ballonPosition.x,
            top: ballonPosition.y,
            right: ballonPosition.z,
            backgroundColor: color
          }
        ]}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  ball: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue'
  }
});
