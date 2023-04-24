import { Appbar as PaperAppBar, Text } from 'react-native-paper';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import tw from '../../helpers/tailwind';
import { TouchableOpacity, View } from 'react-native';
import BackSVG from '../../assets/icons/btn_back.svg';
import MenuSVG from '../../assets/icons/menu.svg';

type Props = {
  children?: React.ReactNode;
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
  style?: object;
  back?: boolean;
  menu?: boolean;
  title?: boolean;
}

/**
 * component definition
 * @returns ReactNode
 */
const AppBar: React.FC<Props> = ({children=<></>, navigation, route, style={}, back=true, menu=false, title=true }) => {

  return (
    <View style={tw.style(`w-full flex-row p-4 relative`, style)}>
      <View style={tw`flex-row`}>
        {menu ? 
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
            style={tw`mr-3`}
          >
            <MenuSVG width={30} height={30} /> 
          </TouchableOpacity>
          : <></>
        }
        {back ? 
          <TouchableOpacity
            onPress={navigation.goBack}
            activeOpacity={0.7}
          >
            <BackSVG width={30} height={30} /> 
          </TouchableOpacity>
          : <></>
        }
      </View>
      
      {title ? 
        <Text style={tw`font-RalewaySemiBold text-2xl mx-auto`}>{route.name}</Text>
        : <Text style={tw`font-RalewaySemiBold text-2xl mx-auto`}> </Text>
      }
      <View style={tw`flex-row`}>
        {children}
      </View>
    </View>
  );
}

export default AppBar;

// type Props = {
//   navigation: StackNavigationProp<ParamListBase>;
//   route: RouteProp<ParamListBase>;
//   style?: object;
// }

// /**
//  * component definition
//  * @returns ReactNode
//  */
// const AppBar: React.FC<Props> = ({ navigation, route, style={} }) => {

//   return (
//     <PaperAppBar.Header style={tw.style(style)}>
//       {/* <PaperAppBar.Content title={route.name} /> */}
//       {/* <PaperAppBar.Action icon="magnify" onPress={() => {}} /> */}
//     </PaperAppBar.Header>
//   );
// }

// export default AppBar;