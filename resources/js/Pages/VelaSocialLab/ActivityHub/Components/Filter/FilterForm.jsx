// FilterForm.jsx
import DateInput from "@/FigmaComponents/Inputs/DateInput";
import SearchInput from "@/FigmaComponents/Inputs/SearchInput";
import axios from "axios";
export default function FilterForm({ data, setData, minDate, maxDate, className='' }) {

    console.log(data);
    const handleSearchChange = (value) => {
        setData('name', value);

    };
    const filterDateFrom = (e) => {
        setData('startDate', e.target.value);
        if(data.startDate!='' && data.startDate!=''){
            fetchData(data.startDate, data.endDate);
        }
    };
    const filterDateTo = (e) => {
        setData('endDate', e.target.value);
        if(data.endDate!='' && data.endDate!=''){
            fetchData(data.startDate, data.endDate);
        }
    };
    const fetchData = async(startDate,endDate) => {
        try{
            const response = await axios.get(route('activity.filterByDate', {startDate: startDate, endDate: endDate}));
            alert(response.status);
        }
        catch(error){
            console.log(error);
        }
    };
    return (
        <div className={`bg-white h-20 rounded-lg dark:bg-slate-800 flex items-center p-4 space-x-16 fullhd:h-28 ${className}`}>
            <div className="flex flex-col space-y-1">
                <label className="text-sm dark:text-gray-300">Pesquise por Nome</label>
                <SearchInput
                    onSearchChange={handleSearchChange} // Passa o valor para o setData do formulário
                    placeholder="Busque por nome..."
                />
            </div>
            <div className="flex space-x-6">
                <div className="flex flex-col space-y-1">
                    <label className="text-sm dark:text-gray-300">De: </label>
                    <DateInput
                        id="startDate"
                        name="startDate"
                        value={data.startDate}
                        className="mt-1 block !min-w-48 h-10"
                        autoComplete="startDate"
                        isFocused={true}
                        onChange={filterDateFrom}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-sm dark:text-gray-300">Até: </label>
                    <DateInput
                        id="endDate"
                        name="endDate"
                        value={data.endDate}
                        className="mt-1 block !min-w-48 h-10"
                        autoComplete="endDate"
                        isFocused={true}
                        onChange={filterDateTo}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>
            </div>
        </div>
    );
}
