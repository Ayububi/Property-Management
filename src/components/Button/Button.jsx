import React from "react";
import { Label } from "recharts";

const Button =({label}) => {
    return(
              <div>
                 <button type="submit" className="btn btn-dark px-4">
                      {label}
                 </button>
               </div>
)};
export default Button;
