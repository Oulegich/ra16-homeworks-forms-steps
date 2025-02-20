import { useState } from 'react';
import filterDateData from '../urils/filterDateData';
import checkDate from '../urils/checkDate';

const TrainingAccountingForm = ({ setAccounting, accounting }: { setAccounting: (accounting: ITrainingAccount[]) => void, accounting: ITrainingAccount[] | undefined }) => {

    const zero = 0;

    const [data, setData] = useState<ITrainingAccount>({
        id: Date.now(),
        date: '',
        distance: zero.toFixed(1)
    });

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setData((prevInput) => {

            if (name == 'date') {

                const newData = {
                    ...prevInput,
                    [name]: name === 'date'
                        ? value.length == 2 ? value.substring(0, 2) + '.' : value.length == 5 ? value.substring(0, 5) + '.' : value.substring(0, 10) : value.substring(0, 10)
                };

                return newData;
            }

            const newData = { ...prevInput, [name]: value || zero.toFixed(1) }

            return newData;
        });
    });

    const removeDate = () => {
        setData((prevInput) => {

            const newData = {
                ...prevInput, ['date']: ''
            };

            return newData;
        });
    }

    const removeDistance = () => {
        setData((prevInput) => {

            const newData = {
                ...prevInput, ['distance']: zero.toFixed(1)
            };

            return newData;
        });
    }


    const handleSubmit = ((e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (checkDate(data.date) && data.distance != '0.0') {

            const newData = { ...data };

            if (accounting) {

                const findIndex = accounting.findIndex(elem => elem.date === data.date);

                if (findIndex === -1) {

                    newData.id = Date.now();

                    const newArrayData = filterDateData([...accounting, newData]);

                    setAccounting(filterDateData(newArrayData));
                    localStorage.setItem('training-account-data', JSON.stringify({ 'data': newArrayData }))
                } else {
                    const updatedArrayData = accounting.map(elem => {
                        if (elem.date === data.date) {
                            return { ...elem, distance: parseFloat(String(elem.distance)) + parseFloat(String(data.distance)) };
                        }
                        return elem;
                    });

                    setAccounting(filterDateData([...updatedArrayData]));
                    localStorage.setItem('training-account-data', JSON.stringify({ 'data': updatedArrayData }));
                }
            } else {
                newData.id = Date.now();

                const newArrayData = filterDateData([newData]);

                setAccounting(filterDateData(newArrayData));
                localStorage.setItem('training-account-data', JSON.stringify({ 'data': newArrayData }));
            }

            setData({
                id: Date.now(),
                date: '',
                distance: zero.toFixed(1)
            });
        }
    })

    return (
        <form className='training-account-form' onSubmit={handleSubmit}>
            <label className="training-account-date-label">Дата (ДД.ММ.ГГ)
                <div className="input-btn-date">
                    <input type="text" onChange={handleChange} name='date' className="training-account-date-input" value={data.date} placeholder='01.01.0001' />
                    <button className='remove-data-btn' type='button' onClick={removeDate}>x</button>
                </div>
            </label>

            <label className="training-account-distance-label">Пройдено км
                <div className="input-btn-distance">
                    <input type="text" onChange={handleChange} name='distance' className="training-account-distance-input" value={data.distance} />
                    <button className='remove-distance-btn' type='button' onClick={removeDistance}>x</button>
                </div>
            </label>

            <button type="submit" className='training-account-submit'>OK</button>
        </form>
    )
}

export default TrainingAccountingForm