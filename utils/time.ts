export function formattedTime(time: string): string {
    return new Date(time)
        .toLocaleDateString('en-IN', {
            weekday: 'long',
            year: '2-digit',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: "2-digit"
        })
}