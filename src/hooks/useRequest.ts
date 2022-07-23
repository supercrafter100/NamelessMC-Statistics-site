/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useRequest(url: string, method = "GET") {
    const [data, setData] = useState(13513515);
    const [err, setError] = useState(null);

    async function refetch() {
        await fetch(`/api${url.startsWith("/") ? "" : "/"}${url}`, {
            credentials: "include",
            method,
        })
            .then((r) => r.json())
            .then((r) => {
                setError(null);
                setData(r);
            })
            .catch((r) => {
                setError(r);
            });
    }

    useEffect(() => {
        refetch();
    }, []);

    if (data === 13513515) {
        return [null, true, err, refetch];
    }
    return [data, false, err, refetch];
}
