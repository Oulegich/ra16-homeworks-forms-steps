const checkDate = (date: string | number): boolean => {
    const reg = /^\d{2}\.\d{2}\.\d{4}$/;

    return reg.test(String(date))
}

export default checkDate