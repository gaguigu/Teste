import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      serviceTypes: []
      //message: this.props.message
    }
  }  

  static defaultProps = {

    message: 'Mensagem padrão!'

  }

  componentDidMount() {
    this.fetchData();  
  }

  fetchData = async () => {
    const response = await fetch('https://beagleus.com:8443/service-types');
    const serviceTypes = await response.json();
    //console.log("chupeta");
    //console.log(serviceTypes);
    this.setState({ serviceTypes });
  }

  render() {
    let serviceTypes = this.state.serviceTypes;
    return (
      <View style={styles.container}>
        <Text>awdadwdaw</Text>
        <Text>{this.state.message}</Text>
        {serviceTypes.map( serviceType => 
          <Text key={serviceType.id}>Esse é o id: {serviceType.id} e esse é o nome: {serviceType.name}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
