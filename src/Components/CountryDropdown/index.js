
import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const CountryDropdown = ()=>{

    const [isOpenModal, setisOpenModel] = useState(false);



    return (
        <>
           <Button className='countryDrop' onClick={() =>setisOpenModel(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>


            <Dialog open={isOpenModal} onClose={() =>setisOpenModel(false)} className='locationModel'  TransitionComponent={Transition}>
                <h4>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button  className='close_' onClick={() =>setisOpenModel(false)}><MdClose/></Button>

                <div className='headerSearch w-100'>
                     <input type='text' placeholder='Search your area...' />
                     <Button> <IoIosSearch/></Button>  
                </div>

                <ul className='countryList mt-3'>
                    <li><Button onClick={() =>setisOpenModel(false)} >India</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Nepal</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Russia</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Qatar</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Oman</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Poland</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >UK</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >England</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Sweden</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Spain</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Canada</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Mexico</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Iran</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >China</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Iceland</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Italy</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Austria</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >France</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Andorra</Button></li>
                    <li><Button onClick={() =>setisOpenModel(false)} >Denmark</Button></li>
                </ul>

            </Dialog>
        </>
    )

}

export default CountryDropdown;