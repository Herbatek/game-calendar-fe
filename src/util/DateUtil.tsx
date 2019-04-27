export const getCurrentMonthName = () => {
    return new Date().toLocaleString('en-uk', {month: 'long'})
};

export const getNumberOfDaysInCurrentMonth = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
};