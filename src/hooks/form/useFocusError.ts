import _ from "lodash";
import { useEffect } from "react";

export default function useFocusError(formName: string, errors: any) {
  useEffect(() => {
    if (!_.isEmpty(errors)) {
      try {
        const firstFieldError = Object.keys(errors).reduce((field: string, a: any) => {
          return errors[field] ? field : a;
        }, "");

        let element: any;
        if (firstFieldError) {
          try {
            element = document.evaluate(
              `//form[@name="${formName}"]//*[@name="${firstFieldError}"]//input`,
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null,
            ).singleNodeValue;
            element.focus();
          } catch (error) {
            element = document.evaluate(
              `//form[@name="${formName}"]//*[@name="${firstFieldError}"]`,
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null,
            ).singleNodeValue;
            element.focus();
          }
        }
      } catch (errors) {
        /* empty */
      }
    }
  }, [errors]);
}
