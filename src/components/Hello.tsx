import * as React from "react";
export interface IProps {
  compiler: string;
      framework: string;
}

export const Hello: React.FC<IProps> = (props) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
