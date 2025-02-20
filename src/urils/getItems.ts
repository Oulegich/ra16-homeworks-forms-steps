import filterDateData from "./filterDateData";

const getItems = (): ITrainingAccount[] => {

    const data = JSON.parse(localStorage.getItem('training-account-data') as string);
    return data ? filterDateData(data.data) : [];
}

export default getItems