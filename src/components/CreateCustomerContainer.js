import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setSubmit, goHome } from '../modules/customers'
import CreateCustomer2 from './CreateCustomer2';
import { useNavigate } from 'react-router-dom';

const CreateCustomerContainer = () => {
    const addCustomer = useSelector(state=> state.customers.addCustomer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onHome = () => {
        dispatch(goHome(navigate))
    }
    const onChange = (e) => {
        dispatch(setInput(e));
    }
    const onSubmit= () => {
        dispatch(setSubmit());
    }
    return (
        <CreateCustomer2 onHome={onHome} onChange={onChange} onSubmit={onSubmit} addCustomer={addCustomer}/>
    );
};

export default CreateCustomerContainer;