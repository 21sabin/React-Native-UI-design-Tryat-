import React, {useState} from 'react';
import DatePicker from 'react-native-datepicker';
import {normalize} from '../utilities/utils';

const MyDatePicker = () => {
  const [selectedDate, setDate] = useState<any>(null);
  return (
    <DatePicker
      style={{
        width: normalize(300),
        backgroundColor: '#F5F7F9',
        borderColor: '#F5F7F9',
        borderRadius: normalize(20),
        borderWidht: 0,
      }}
      date={selectedDate}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2021-01-12"
      maxDate="2022-12-30"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{}}
      onDateChange={date => {
        console.log(date);
        setDate(date);
      }}
    />
  );
};

export {MyDatePicker};
