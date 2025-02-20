import { useState } from "react"
import TrainingAccountingForm from "./TrainingAccountingForm"
import TrainingAccountList from "./TrainingAccountList"
import getItems from "../urils/getItems";

const TrainingAccount = () => {

    const [accounting, setAccounting] = useState<ITrainingAccount[] | undefined>([...getItems()]);

    return (
        <div className="training-account">
            <TrainingAccountingForm accounting={accounting} setAccounting={setAccounting} />
            <TrainingAccountList setAccounting={setAccounting} />
        </div>
    )
}

export default TrainingAccount