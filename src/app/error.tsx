'use client'

import ErrorPage from '@/components/wrapper/error-page'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <ErrorPage error={error} reset={reset} />
    )
}