import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CIButton } from '~/components/Button';
import { CIInput } from '~/components/Input';
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/montserrat';
import { verifyInstallation } from 'nativewind';

export const CILogin = () => {
  verifyInstallation();

  const [fontsLoaded] = useFonts({
    Montserrat_Thin: Montserrat_100Thin,
    Montserrat_Thin_Italic: Montserrat_100Thin_Italic,
    Montserrat_ExtraLight: Montserrat_200ExtraLight,
    Montserrat_ExtraLight_Italic: Montserrat_200ExtraLight_Italic,
    Montserrat_Light: Montserrat_300Light,
    Montserrat_Light_Italic: Montserrat_300Light_Italic,
    Montserrat_Regular: Montserrat_400Regular,
    Montserrat_Regular_Italic: Montserrat_400Regular_Italic,
    Montserrat_Medium: Montserrat_500Medium,
    Montserrat_Medium_Italic: Montserrat_500Medium_Italic,
    Montserrat_SemiBold: Montserrat_600SemiBold,
    Montserrat_SemiBold_Italic: Montserrat_600SemiBold_Italic,
    Montserrat_Bold: Montserrat_700Bold,
    Montserrat_Bold_Italic: Montserrat_700Bold_Italic,
    Montserrat_ExtraBold: Montserrat_800ExtraBold,
    Montserrat_ExtraBold_Italic: Montserrat_800ExtraBold_Italic,
    Montserrat_Black: Montserrat_900Black,
    Montserrat_Black_Italic: Montserrat_900Black_Italic,
  });

  return (
    <View className="flex h-full w-full flex-col" style={{ padding: 10 }}>
      <View style={{ marginTop: 100 }}>
        <Text style={{ fontSize: 28 }} className="font-extra font-sans">
          Login
        </Text>
        <Text className="font-sans text-sm text-gray-300 ">Bem vindo de volta ao app</Text>
      </View>

      <View className="flex" style={{ marginTop: 100, gap: 16 }}>
        <CIInput placeholder="Informe o seu e-mail" iconLeft="user" />
        <CIInput placeholder="Informe a sua senha" iconLeft="lock" iconRight="eye" />
        <CIButton label="Entrar" stretch />
      </View>

      <View className="flex gap-2">
        <Text
          className="text-center font-sans"
          style={{ marginTop: 100, textDecorationLine: 'underline' }}>
          Esqueci minha senha
        </Text>
        <Text className="text-center font-sans" style={{ textDecorationLine: 'underline' }}>
          Criar uma conta
        </Text>
      </View>
    </View>
  );
};
