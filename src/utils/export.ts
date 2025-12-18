export const exportToCsv = (data: any[], filename: string) => {
    const headers = ['ID', 'Agent', 'Customer', 'Duration', 'Status', 'Date', 'Cost'];
    const csvContent = [
        headers,
        ...data.map(call => [
            call.id,
            call.agent,
            call.customer,
            call.duration,
            call.status,
            call.date,
            call.cost
        ])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};