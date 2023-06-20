import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function CodeScanner({ setMenu, setAlterarMenu, setScanned, alterarMenu }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(data);
    setMenu('geral')
    setAlterarMenu('geral')
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão de câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={alterarMenu = 'codeScanner' ? handleBarCodeScanned : undefined}
        style={styles.scanne}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 900,
    width: 392,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#051933',
  },
  scanne: {
    height: '80%',
    width: '80%',
  }
});
