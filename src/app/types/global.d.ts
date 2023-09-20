declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
