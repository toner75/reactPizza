import React from 'react';
import { connect } from 'react-redux';
import { dropdownOn, dropdownOff } from '../actions/actions';
import Dropdown from '../dropdown/dropdown';

import arrowImg from '../../assets/img/svg/arrow-up.svg'

import './sort.css';

const Sort = ( {dropdown, dropOn, dropOff, sort} ) => {

    let dropdownElem;

    const toggleDropdown = () => {
        dropdown ? dropOff() : dropOn();
    };

    if (dropdown) {
        dropdownElem = <Dropdown />;
    } else {
        dropdownElem = null;
    }
    
    return (
        <>
            <div className="sort">
                <img className="sort__dropdown-arrow active" src={arrowImg} alt="arrow-icon" />
                <div className="sort__title">Сортировать по:</div>
                <button 
                    className="sort__type" 
                    onClick={toggleDropdown}>{sort}</button>
            </div>

            {dropdownElem}
        </>
    );
};

const mapStateToProps = ( {dropdown, sort} ) => {
    return { dropdown, sort }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dropOn: () => { dispatch( dropdownOn() ) },
        dropOff: () => { dispatch( dropdownOff() ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);