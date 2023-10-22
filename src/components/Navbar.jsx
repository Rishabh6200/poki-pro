import React from 'react'
import './css/Navbar.css'
const Navbar = ({ input }) => {

    const handleSearch = (e) => {
        input(e.target.value);
    }

    return (
        <>
            <div className="all d-flex">
                <div className="p1 w-25"></div>
                <div className="navbar w-100">
                    <div className="nav-part">
                        <div className="input-group">
                            <input type='search'
                                className="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                                onChange={handleSearch} />
                        </div>
                    </div>
                </div>
                <div className="p2 w-25"></div>
            </div>
        </>
    )
}

export default Navbar
