import { useEffect } from "react";

export default function useConsoleLog(watch: any) {
    useEffect(() => {
        const subscription = watch(async (value: any, { name, type }: any) => {
            console.debug({ value, name, type });
        });
        return () => subscription?.unsubscribe ? subscription.unsubscribe() : null;
    }, [watch])
}