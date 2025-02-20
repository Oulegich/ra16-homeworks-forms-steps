const filterDateData = (data: ITrainingAccount[]): ITrainingAccount[] => {
    return data.sort((itemA, itemB) => {
        const dateA = String(itemA.date).split('.').reverse().join('');
        const dateB = String(itemB.date).split('.').reverse().join('');

        if (dateA > dateB) {
            return -1;
        } else if (dateA < dateB) {
            return 1;
        }

        return 0;
    })
}

export default filterDateData