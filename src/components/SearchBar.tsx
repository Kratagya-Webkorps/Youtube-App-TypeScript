import React, { useState, ChangeEvent, FormEvent } from "react";

    interface Props {
        handleFormSubmit: (termFromSearchBar: string) => void;
    }

    const SearchBar: React.FC<Props> = ({ handleFormSubmit }) =>  {
        const [term, setTerm] = useState<string>('');
        const [selectedItem, setSelectedItem] = useState<string>('Select Link Type');

        const handleItemClick = (item:string) => {
            setSelectedItem(item);
        };

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setTerm(event.target.value);
        };

        const handleSubmit = (event:FormEvent<HTMLFormElement>)=> {
            event.preventDefault();
            if (selectedItem === 'Select Link Type') {
                alert("Please select a link type from the dropdown.");
            }
            else if (
                (selectedItem === 'Youtube Video' && term.includes('watch')) ||
                (selectedItem === 'Youtube Channel' && term.includes('com/@')) ||
                (selectedItem === 'KeyWords' && !term.includes('www.youtube.com'))
            ) {
                handleFormSubmit(term);
            }
            else {
                alert("Please enter detail same as selected dropdown.");
            }
        };

        return (
            <>
                <div className='search-bar ui segment'>
                    <form onSubmit={handleSubmit} className='ui form'>
                        <div className='field'>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {selectedItem}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <p className="dropdown-item" onClick={() => handleItemClick('KeyWords')} style={{ cursor: 'pointer' }}>KeyWords</p>
                                    <p className="dropdown-item" onClick={() => handleItemClick('Youtube Video')} style={{ cursor: 'pointer' }}>Youtube Video</p>
                                    <p className="dropdown-item" onClick={() => handleItemClick('Youtube Channel')} style={{ cursor: 'pointer' }}>Youtube Channel</p>
                                </div>
                            </div>
                            <input className="form-control form-control-lg col-sm-10" type="text" onChange={handleChange} name='video-search' placeholder="Enter Link" />

                        </div>
                    </form>
                </div>
            </>
        );
    };

    export default SearchBar;


