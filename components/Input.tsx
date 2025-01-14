import { Text, TextInput, TextInputProps, View } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

type InputProps = {
  size?: 'sm' | 'md' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  errorMessage?: string;
} & TextInputProps;

export const Input = ({
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft = undefined,
  iconRight = undefined,
  errorMessage = undefined,
  ...inputProps
}: InputProps) => {
  return (
    <View className="flex w-full flex-col gap-1">
      <View className="flex w-full flex-row items-center justify-around gap-3 rounded-full border border-gray-400 px-6 py-3 ">
        {iconLeft && <FeatherIcon name={iconLeft} size={16} color={'#808080'} />}
        <TextInput className="w-full px-0 py-0 font-sans" {...inputProps} />
        {iconRight && <FeatherIcon name={iconRight} size={16} color={'#808080'} />}
      </View>
      {errorMessage && (
        <View className="flex flex-row items-center justify-start gap-3 pl-6">
          <FeatherIcon name="alert-circle" size={16} color="#F44336" />
          <Text className="font-sans text-error">{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};
