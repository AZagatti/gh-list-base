import 'styled-components';
import light from './themes/light';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: typeof light.colors
  }
}