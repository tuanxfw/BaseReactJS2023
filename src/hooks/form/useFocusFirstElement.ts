import _ from "lodash";
import { useEffect } from "react";

export default function useFocusFirstElement(formName: string) {
    useEffect(() => {
        setTimeout(() => {
            const form: any = document.evaluate(`//form[@name="${formName}"]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;;

            try {
                form.focus()

                const elements = form.elements;
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].type !== 'hidden'
                        && elements[i].type !== 'button'
                        && !elements[i].disabled
                        && !elements[i].readonly
                        && !elements[i].hidden) {

                        elements[i].focus();
                        break;

                    }
                }
            } catch (e) { }
        }, 500)
    }, [])
}