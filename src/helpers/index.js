export const amountFormat = (amount) => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const generateId = () => {
    const random = Math.random().toString(36).substr(2)
    const date =  Date.now().toString(36)

    return random + date;
}

export const dateFormat = date => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month:'long',
        day: '2-digit',
    }

    return newDate.toLocaleDateString('en-US', options)
}