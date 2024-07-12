import CustomButton from '@/components/atoms/CustomButton/CustomButton';
import { InputField } from '@/components/atoms/input-field/input';
import Modal from '@/components/atoms/modal/modal';
import Text from '@/components/atoms/text/text';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';
import { setUser } from '@/store/slices/authSlice';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const ProfileInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.auth.userProfile);
  const [openModal, setOpenModal] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setFirstName(userProfile.firstName);
    setLastName(userProfile.lastName);
    setEmail(userProfile.email);
    setPhone(userProfile.phone);
  }, [userProfile]);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!firstName) errors.firstName = 'First name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = 'Phone number is invalid';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleUpdate = () => {
    if (validate()) {
      
      dispatch(setUser({ firstName, lastName, email, phone }));
      setOpenModal(true)
    }
  };

  return (
    <div className="space-y-4">
      <div className='md:w-[40%] w-full '>
        <label>First Name</label>
        <InputField
          width='100%'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
      </div>
      <div className='md:w-[40%] w-full '>
        <label>Last Name</label>
        <InputField
          width='100%'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
      </div>
      <div className="flex items-center space-x-4">
        <div className='md:w-[40%] w-full '>
          <label>Adresse email</label>
          <InputField
            width='100%'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div className='md:w-[40%] w-full '>
        <label>Phone No.</label>
        <InputField
          width='100%'
          noFormat={true}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
      <div className="flex mx-auto justify-center w-full">
        <CustomButton
          label="Update"
          classNames="hover:opacity-[0.8] bg-[#0F123F] min-w-[200px] text-white"
          onClick={handleUpdate}
        />
      </div>
      <Modal  isOpen={openModal} onClose={() => setOpenModal(false)} >
        <div className='md:w-[300px] justify-center items-center  md:h-[300px] h-[100%] flex flex-col'>
          <Image className='w-[150px] h-[150px]' alt='' width={500} height={500} src={'/assets/icons/accepted.svg'}/>
          <Text className='font-bold'> Profile Update Successfully</Text>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileInfo;
