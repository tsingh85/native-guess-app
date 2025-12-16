import { View, Text } from 'react-native';

function PrimaryButton(props) {
  return (
    <View>
      {/* //Children is something that is passed between the opening and closing tags of a component */}
      <Text>{props.children}</Text>
    </View>
  );
}

export default PrimaryButton;
