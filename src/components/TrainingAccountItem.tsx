const TrainingAccountItem = ({ item, items, setAccounting }: { item: ITrainingAccount, items: ITrainingAccount[], setAccounting: (accounting: ITrainingAccount[]) => void }) => {

    const handleClick = () => {
        const filterData = items.filter(it => it.id !== item.id);

        setAccounting(filterData);
        localStorage.setItem('training-account-data', JSON.stringify({ 'data': filterData }));
    }

    return (
        <div className="training-account-item">
            <span className="time">{item.date}</span>
            <span className="distance"> {item.distance}</span>
            <button type='button' className="remove-item-btn" onClick={handleClick}>x</button>
        </div>
    )
}

export default TrainingAccountItem