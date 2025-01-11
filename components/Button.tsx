import { forwardRef } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { cva } from 'class-variance-authority';

type ButtonProps = {
  label: string;
  intent?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'xl';
  disabled?: boolean;
  loading?: boolean;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      label,
      intent = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      ...touchableProps
    },
    ref
  ) => {
    const indicatorColor = disabled ? '#a1a1a1' : intent === 'primary' ? 'white' : '#3c5597';

    const buttonClasses = cva(
      ['flex', 'justify-center', 'items-center', 'rounded-full', 'px-6', 'py-3'],
      {
        variants: {
          intent: {
            primary: ['bg-primary-blue', 'border-primary-blue', 'hover:bg-primary-blue-light'],
            secondary: ['bg-gray-50', 'border', 'border-primary-blue', 'hover:bg-gray-100'],
          },
          size: {
            sm: ['py-2', 'px-4', 'text-sm'],
            md: ['py-3', 'px-6', 'text-base'],
            xl: ['py-4', 'px-8', 'text-lg'],
          },
          disabled: {
            true: ['bg-gray-100', 'border-gray-300', 'opacity-50'],
            false: [],
          },
        },
        defaultVariants: {
          intent: 'primary',
          size: 'md',
          disabled: false,
        },
      }
    );

    const textClasses = cva(['font-sans'], {
      variants: {
        intent: {
          primary: ['text-white'],
          secondary: ['text-primary-blue'],
        },
        size: {
          sm: ['text-sm'],
          md: ['text-base'],
          xl: ['text-lg'],
        },
        disabled: {
          true: ['text-gray-300'],
          false: [],
        },
      },
      defaultVariants: {
        intent: 'primary',
        size: 'md',
        disabled: false,
      },
    });

    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.7}
        disabled={disabled || loading}
        {...touchableProps}
        className={buttonClasses({ intent, size, disabled })}>
        {loading ? (
          <ActivityIndicator color={indicatorColor} />
        ) : (
          <Text className={textClasses({ intent, size, disabled })}>{label}</Text>
        )}
      </TouchableOpacity>
    );
  }
);
