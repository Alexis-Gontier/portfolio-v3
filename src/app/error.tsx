"use client"

import { useEffect } from "react";

type ErrorProps = {
    error: Error & { digest?: string }
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <p>Error: {error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}