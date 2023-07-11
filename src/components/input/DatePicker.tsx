import { forwardRef, useEffect, useState } from "react";
import { DatePicker as AntdPicker } from "antd";
import type { DatePickerProps } from "antd";
import _ from "lodash";
import { Format } from "@constants/constants";
import type { Dayjs } from "dayjs";
import { dateUtil } from "@utils/commonUtil";
interface CustomProps extends Omit<DatePickerProps, "picker" | "value"> {
  pickerType?: "time" | "date" | "datetime" | "week" | "month" | "quarter" | "year";
  onChange?: (value?: any) => void;
  value?: string | null | undefined;
}

const format = {
  time: {
    input: Format.DATE_TIME_FORMAT.TIME,
    output: Format.DATE_TIME_FORMAT.TIME,
    view: Format.DATE_TIME_FORMAT.TIME,
  },
  date: {
    input: Format.DATE_TIME_FORMAT.DATE,
    output: Format.DATE_TIME_FORMAT.DATE,
    view: Format.DATE_TIME_FORMAT.DATE,
  },
  datetime: {
    input: Format.DATE_TIME_FORMAT.DATE_TIME,
    output: Format.DATE_TIME_FORMAT.DATE_TIME,
    view: Format.DATE_TIME_FORMAT.DATE_TIME,
  },
  week: {
    input: Format.DATE_TIME_FORMAT.WEEK + "-" + Format.DATE_TIME_FORMAT.YEAR,
    output: {
      weekAndYear: Format.DATE_TIME_FORMAT.WEEK + "-" + Format.DATE_TIME_FORMAT.YEAR,
      week: Format.DATE_TIME_FORMAT.WEEK,
      year: Format.DATE_TIME_FORMAT.YEAR,
      startDate: Format.DATE_TIME_FORMAT.DATE,
      endDate: Format.DATE_TIME_FORMAT.DATE,
    },
    view: Format.DATE_TIME_FORMAT.WEEK + "-" + Format.DATE_TIME_FORMAT.YEAR,
  },
  month: {
    input: Format.DATE_TIME_FORMAT.MONTH + "/" + Format.DATE_TIME_FORMAT.YEAR,
    output: {
      monthAndYear: Format.DATE_TIME_FORMAT.MONTH + "/" + Format.DATE_TIME_FORMAT.YEAR,
      month: Format.DATE_TIME_FORMAT.MONTH,
      year: Format.DATE_TIME_FORMAT.YEAR,
      startDate: Format.DATE_TIME_FORMAT.DATE,
      endDate: Format.DATE_TIME_FORMAT.DATE,
    },
    view: Format.DATE_TIME_FORMAT.MONTH + "/" + Format.DATE_TIME_FORMAT.YEAR,
  },
  quarter: {
    input: Format.DATE_TIME_FORMAT.QUARTER + "-" + Format.DATE_TIME_FORMAT.QUARTER,
    output: {
      quarterAndYear: Format.DATE_TIME_FORMAT.QUARTER + "-" + Format.DATE_TIME_FORMAT.QUARTER,
      quarter: Format.DATE_TIME_FORMAT.QUARTER,
      year: Format.DATE_TIME_FORMAT.YEAR,
      startDate: Format.DATE_TIME_FORMAT.DATE,
      endDate: Format.DATE_TIME_FORMAT.DATE,
    },
    view: Format.DATE_TIME_FORMAT.QUARTER + "-" + Format.DATE_TIME_FORMAT.YEAR,
  },
  year: {
    input: Format.DATE_TIME_FORMAT.YEAR,
    output: {
      year: Format.DATE_TIME_FORMAT.YEAR,
      startDate: Format.DATE_TIME_FORMAT.DATE,
      endDate: Format.DATE_TIME_FORMAT.DATE,
    },
    view: Format.DATE_TIME_FORMAT.YEAR,
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DatePicker = forwardRef(({ pickerType, onChange, ...props }: CustomProps, _ref: any) => {
  const commonOnchange = (value: any) => {
    if (onChange) onChange(value);
  };

  if (pickerType === "time") {
    return <CustomTimePicker commonOnchange={commonOnchange} {...props} />;
  } else if (pickerType === "datetime") {
    return <CustomDateTimePicker commonOnchange={commonOnchange} {...props} />;
  } else if (pickerType === "week") {
    return <CustomWeekPicker commonOnchange={commonOnchange} {...props} />;
  } else if (pickerType === "month") {
    return <CustomMonthPicker commonOnchange={commonOnchange} {...props} />;
  } else if (pickerType === "quarter") {
    return <CustomQuarterPicker commonOnchange={commonOnchange} {...props} />;
  } else if (pickerType === "year") {
    return <CustomYearPicker commonOnchange={commonOnchange} {...props} />;
  }

  //pickerType === "date"
  return <CustomDatePicker commonOnchange={commonOnchange} {...props} />;
});

const CustomTimePicker = ({ commonOnchange, ...props }: any) => {
  const [value, setValue] = useState<Dayjs | null | undefined>(props.value);

  useEffect(() => {
    setValue(dateUtil.stringToDate(props.value, format.time.input));
  }, [props.value]);

  const onChange: DatePickerProps["onChange"] = (value) => {
    const output = dateUtil.dateToString(value, format.time.output);

    commonOnchange(output);

    setValue(value);
  };

  return (
    <AntdPicker
      picker="time"
      format={format.time.view}
      placeholder={format.time.view}
      {...props}
      value={value}
      onChange={onChange}
      className={"custom-antd-picker " + _.toString(props.className)}
    />
  );
};

const CustomDatePicker = ({ commonOnchange, ...props }: any) => {
  const [value, setValue] = useState<Dayjs | null | undefined>(props.value);

  useEffect(() => {
    setValue(dateUtil.stringToDate(props.value, format.date.input));
  }, [props.value]);

  const onChange: DatePickerProps["onChange"] = (value) => {
    const output = dateUtil.dateToString(value, format.date.output);

    commonOnchange(output);

    setValue(value);
  };

  return (
    <AntdPicker
      format={format.date.view}
      placeholder={format.date.view}
      {...props}
      value={value}
      onChange={onChange}
      className={"custom-antd-picker " + _.toString(props.className)}
    />
  );
};

const CustomDateTimePicker = ({ commonOnchange, ...props }: any) => {
  const [value, setValue] = useState<Dayjs | null | undefined>(props.value);

  useEffect(() => {
    setValue(dateUtil.stringToDate(props.value, format.datetime.input));
  }, [props.value]);

  const onChange: DatePickerProps["onChange"] = (value) => {
    const output = dateUtil.dateToString(value, format.datetime.output);

    commonOnchange(output);

    setValue(value);
  };

  return (
    <AntdPicker
      format={format.datetime.view}
      placeholder={format.datetime.view}
      {...props}
      showTime
      value={value}
      onChange={onChange}
      className={"custom-antd-picker " + _.toString(props.className)}
    />
  );
};

const CustomWeekPicker = ({ commonOnchange, ...props }: any) => {
  const [value, setValue] = useState<Dayjs | null | undefined>(props.value);

  useEffect(() => {
    setValue(dateUtil.stringToDate(props.value, format.week.input));
  }, [props.value]);

  const onChange: DatePickerProps["onChange"] = (value) => {
    const output = {
      weekAndYear: dateUtil.dateToString(value, format.week.output.weekAndYear),
      week: dateUtil.dateToString(value, format.week.output.week),
      year: dateUtil.dateToString(value, format.week.output.year),
      startDate: value ? dateUtil.dateToString(value.day(1), format.week.output.startDate) : "",
      endDate: value ? dateUtil.dateToString(value.day(7), format.week.output.endDate) : "",
    };

    commonOnchange(output);

    setValue(value);
  };

  return (
    <AntdPicker
      format={format.week.view}
      placeholder={format.week.view}
      {...props}
      picker="week"
      value={value}
      onChange={onChange}
      className={"custom-antd-picker " + _.toString(props.className)}
    />
  );
};

const CustomMonthPicker = ({ commonOnchange, ...props }: any) => {
  const [value, setValue] = useState<Dayjs | null | undefined>(props.value);

  useEffect(() => {
    setValue(dateUtil.stringToDate(props.value, format.month.input));
  }, [props.value]);

  const onChange: DatePickerProps["onChange"] = (value) => {
    const output = {
      monthAndYear: dateUtil.dateToString(value, format.month.output.monthAndYear),
      month: dateUtil.dateToString(value, format.month.output.month),
      year: dateUtil.dateToString(value, format.month.output.year),
      startDate: value ? dateUtil.dateToString(value.startOf("month"), format.month.output.startDate) : "",
      endDate: value ? dateUtil.dateToString(value.endOf("month"), format.month.output.endDate) : "",
    };

    commonOnchange(output);

    setValue(value);
  };

  return (
    <AntdPicker
      format={format.month.view}
      placeholder={format.month.view}
      {...props}
      picker="month"
      value={value}
      onChange={onChange}
      className={"custom-antd-picker " + _.toString(props.className)}
    />
  );
};

const CustomQuarterPicker = ({ commonOnchange, ...props }: any) => {
  const [value, setValue] = useState<Dayjs | null | undefined>(props.value);

  useEffect(() => {
    setValue(dateUtil.stringToDate(props.value, format.quarter.input));
  }, [props.value]);

  const onChange: DatePickerProps["onChange"] = (value) => {
    const output = {
      quarterAndYear: dateUtil.dateToString(value, format.quarter.output.quarter),
      quarter: dateUtil.dateToString(value, format.quarter.output.quarter),
      year: dateUtil.dateToString(value, format.quarter.output.year),
      startDate: value ? dateUtil.dateToString(value.startOf("quarter"), format.quarter.output.startDate) : "",
      endDate: value ? dateUtil.dateToString(value.endOf("quarter"), format.quarter.output.endDate) : "",
    };

    commonOnchange(output);

    setValue(value);
  };

  return (
    <AntdPicker
      format={format.quarter.view}
      placeholder={format.quarter.view}
      {...props}
      picker="quarter"
      value={value}
      onChange={onChange}
      className={"custom-antd-picker " + _.toString(props.className)}
    />
  );
};

const CustomYearPicker = ({ commonOnchange, ...props }: any) => {
  const [value, setValue] = useState<Dayjs | null | undefined>(props.value);

  useEffect(() => {
    setValue(dateUtil.stringToDate(props.value, format.year.input));
  }, [props.value]);

  const onChange: DatePickerProps["onChange"] = (value) => {
    const output = {
      year: dateUtil.dateToString(value, format.quarter.output.year),
      startDate: value ? dateUtil.dateToString(value.startOf("year"), format.quarter.output.startDate) : "",
      endDate: value ? dateUtil.dateToString(value.endOf("year"), format.quarter.output.endDate) : "",
    };

    commonOnchange(output);

    setValue(value);
  };

  return (
    <AntdPicker
      format={format.year.view}
      placeholder={format.year.view}
      {...props}
      picker="year"
      value={value}
      onChange={onChange}
      className={"custom-antd-picker " + _.toString(props.className)}
    />
  );
};

export default DatePicker;

DatePicker.defaultProps = {
  allowClear: true,
  pickerType: "date",
  onChange: (value: any) => console.log(value),
  changeOnBlur: true,
};
