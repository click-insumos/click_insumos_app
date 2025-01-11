import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { Button } from '~/components/Button';
import { Text, View } from 'react-native';

export default function Home() {
  const [fontsLoaded] = useFonts({
    Montserrat_Regular: Montserrat_400Regular,
    Montserrat_Bold: Montserrat_700Bold,
  });

  return (
    <>
      <View className="bg-neutral-light flex flex-1 flex-col items-center justify-center gap-2">
        <Button label="Um texto um pouco maiorrr" intent="primary" loading />
        <Button label="Um texto um pouco maiorrr" intent="secondary" loading />
        <Button label="Um texto um pouco maiorrr" intent="primary" disabled loading />
      </View>
    </>
  );
}
