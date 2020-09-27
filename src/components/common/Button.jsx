import React from "react";
import cn from "classnames";

//cn("Class for all Button-components", {'extra class': condition})
const Button = ({className, outline, children, onClick}) => {
  return <button onClick={onClick} className={cn("button", className, {'button--outline': outline})}>{children}</button>;
};

export default Button;
