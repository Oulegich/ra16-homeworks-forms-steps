import getItems from "../urils/getItems"
import TrainingAccountItem from "./TrainingAccountItem"

const TrainingAccountList = ({setAccounting }: { setAccounting: (accounting: ITrainingAccount[]) => void }) => {

    const currentItems = getItems();

    return (
        <div className="training-account-content">
            <div className="heders-training-account">
                <span className="training-account-date">Дата (ДД.ММ.ГГ) </span>
                <span className="training-account-distance">Пройдено км </span>
                <span className="training-account-actions">Действия</span>
            </div>
            <ul className="list-training-account">
                {currentItems.map(item => (
                    <li key={item.id} className="training-account-elem">
                        <TrainingAccountItem item={item} items={currentItems} setAccounting={setAccounting} />
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default TrainingAccountList