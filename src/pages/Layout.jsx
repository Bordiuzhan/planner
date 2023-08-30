import { Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectFilter } from '../redux/selectors';
import { setFilterData } from '../redux/filterslice';

const Layout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ua');
  const dispatch = useDispatch();
  const searchKeyword = useSelector(selectFilter);

  const handleSearchChange = e => {
    dispatch(setFilterData(e.currentTarget.value));
  };

  

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-wraper">
          <Link to={'/'} className="header-logo">
            Event Planner
          </Link>
          <div className=" header-nav">
            <form className="search-form">
              <input
                type="text"
                placeholder="Search by keywords"
                className="search"
                value={searchKeyword}
                onChange={handleSearchChange}
              />
            </form>
            <div className="wrapper-select">
              <select
                className="select"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                <option value="ua" className="select-one">
                  UK
                </option>
                <option value="en" className="select-one">
                  EN
                </option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
