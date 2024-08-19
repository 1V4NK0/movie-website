import { useEffect } from "react";

export function useKey(callbackFunc, key) {
    useEffect(
        function () {
          const callback = (e) => {
            if (e.code.toLowerCase() === key.toLowerCase()) {
              callbackFunc();
            }
          };
          document.addEventListener("keydown", callback);
    
          return function () {
            document.removeEventListener("keydown", callback);
          };
        },
        [callbackFunc, key]
      );
}