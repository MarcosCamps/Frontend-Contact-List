export interface IThemeChild {
  primary: string;
  secondary: string;
  success: string;
  error: string;
  gray: string;
  backgroundColor: string;
}

export interface ITheme {
  [key: string]: IThemeChild;
}
