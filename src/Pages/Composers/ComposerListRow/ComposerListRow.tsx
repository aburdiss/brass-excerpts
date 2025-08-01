import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useColors } from '../../../utils/customHooks/useColors/useColors';

/**
 * @function ComposerListRow
 * @memberof Composers
 * @component
 * @description A styled list row, designed to look like a contact on an iOS
 * device. This is used when displaying a list of composers.
 * Created 3/18/21
 * @param {Object} props The JSX props passed to this React component
 * @param {string} props.name The name of the composer to display
 * @param {number} props.index The index of the composer. This is used to style
 * the first composer slightly differently.
 * @param {string} props.imageSource The URL of the image to display on the
 * list.
 * @param {Function} props.onPress The function to call when this list row is
 * pressed.
 * @returns {JSX.Element} JSX Render Instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 7/9/23
 * @version 1.2.0
 * @example
 * <ComposerListRow
 *   name={item.name}
 *   index={index}
 *   imageSource={item.image}
 *   onPress={() => {
 *     navigateToComposerDetail(item);
 *   }}
 * />
 */
export default function ComposerListRow({
  name,
  index,
  imageSource,
  onPress,
}: {
  name: String;
  index: Number;
  imageSource: String;
  onPress: (event: GestureResponderEvent) => void;
}) {
  const colors = useColors();
  const styles = StyleSheet.create({
    androidRipple: {
      color: colors.green,
    },
    chevron: {
      color: colors.green,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      backgroundColor: colors.background2,
    },
    image: {
      aspectRatio: 1,
      height: 54,
      width: 54,
      borderRadius: 29,
      backgroundColor: colors.alwaysWhite,
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.text,
    },
    notFirstTextContainer: {
      borderTopColor: colors.systemGray5,
      borderTopWidth: 1,
    },
    textContainer: {
      marginLeft: 15,
      flex: 1,
      height: 78,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 15,
    },
  });

  const divider = index != 0 ? styles.notFirstTextContainer : null;

  return (
    <Pressable
      accessible={true}
      accessibilityLabel={name}
      accessibilityHint={'Navigates to Composer ' + name}
      accessibilityRole="button"
      android_ripple={{
        color: styles.androidRipple.color,
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.7 : 1,
      })}
      onPress={onPress}
    >
      <SafeAreaView style={styles.container} edges={['right', 'left']}>
        <Image source={imageSource} style={styles.image} />
        <View style={{ ...styles.textContainer, ...divider }}>
          <Text style={styles.text} maxFontSizeMultiplier={1.8}>
            {name}
          </Text>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={styles.chevron.color}
          />
        </View>
      </SafeAreaView>
    </Pressable>
  );
}
