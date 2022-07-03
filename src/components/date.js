import DatePicker from 'sassy-datepicker';

function Date() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <DatePicker onChange={onChange} />
  );
}

export default Date;