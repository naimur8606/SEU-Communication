import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Search = () => {

    const [searchKey, setSearchKey] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
        const searchName = e.target.elements.name.value;
        const searchId = e.target.elements.id.value;
        setSearchKey({ id: searchId, name: searchName })
    }

    return (
        <div className="">
            <Helmet>
                <title>SEUC | Search</title>
            </Helmet>
            <div className="border-b p-3">
                <form onSubmit={handleSubmit}>
                    <div className="grid text-center md:grid-cols-2 gap-2">
                        <div>
                            <label>Name:</label>
                            <input className="border text-base p-1 rounded-lg ml-1" name="name" />
                        </div>
                        <div>
                            <label>SEU ID:</label>
                            <input className="border text-base p-1 rounded-lg ml-1" name="id" />
                        </div>
                        <div>
                            <label>Batch:</label>
                            <input className="border text-base p-1 rounded-lg ml-1" name="id" />
                        </div>
                        <div>
                            <label>Department:</label>
                            <input className="border text-base p-1 rounded-lg ml-1" name="id" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-2">
                        <button className="text-[#f68e35] border border-[#f68e35] py-1 px-5 rounded-lg hover:bg-[#f68e35] hover:text-white" type="submit" >Search</button>
                    </div>
                </form>
            </div>
            <h1>{searchKey?.id}</h1>
            <h1>{searchKey?.name}</h1>
        </div>
    )
};
export default Search;