import React from "react";

declare type CSSProperties = {
  [key: string]: React.CSSProperties;
};

class StyleSheetClass {
  static create<Styles extends CSSProperties>(styles: Styles): Styles {
    return styles;
  }
}

export const StyleSheet = StyleSheetClass