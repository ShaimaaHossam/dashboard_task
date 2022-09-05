import Controls from "./Controls";
import InputsRow from "./InputsRow"
import Options from "./Options";
import Table from "./Table";
function TableContainer(){
    return(
        <div className="mx-8 bg-white rounded-lg  border-1 border-gray-300 mb-12">
            <InputsRow />
            <Options />
            <Table />
            <Controls />
        </div>
    )
}
export default TableContainer;