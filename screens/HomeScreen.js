import React from 'react';
import {Container,Content,Text ,Button ,Form,Item,Input,Label,View} from "native-base";
import { StyleSheet,TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-input'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  submitButton:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 100,

  }
});
let object={};
export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      userInfo:{},
      phone_number:"",
      first_name:"",
      last_name:"",
      pickerData: null,
    };
    this.updateInfo = this.updateInfo.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }
  updateInfo() {
    this.setState({
      type: this.phone.getNumberType(),
      value: this.phone.getValue()
    });
  }

  selectCountry=(country)=>{
    this.phone.selectCountry(country.cca2.toLowerCase())
    this.setState({cca2: country.cca2
    });

  };
  submit=()=>{
    const {first_name,last_name} = this.state;
    this.setState({
      userInfo: {
        phone_number: this.phone.getValue(),
        first_name,
        last_name
      }
    });

  };

  renderInfo() {
      return (
          <View>

            <Text>
              Type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
            </Text>
            <Text>
              Value:{" "}
              <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
            </Text>
          </View>
      );
    }

  render() {
    const { userInfo } = this.state;


    return (
       <Container>
         <Content contentContainerStyle={styles.container}>
           <Text>User Registration</Text>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input
                  onChangeText={first_name=>this.setState({first_name})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input
                  onChangeText={last_name=>this.setState({last_name})}
              />
            </Item>
          </Form>
           <Text>{" "}</Text>
           <Text>Enter Phone number</Text>
           <PhoneInput
               ref={(ref)=>{this.phone = ref;}}
           />
           <View style={styles.submitButton}>
           <Button warning onPress={()=>{this.submit()}}><Text> Submit </Text></Button>
           </View>
         </Content>
       </Container>
    );
  }
}
