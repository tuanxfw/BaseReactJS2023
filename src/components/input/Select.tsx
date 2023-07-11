import { forwardRef, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { Select as AntdSelect, Col, Row, Divider, Space, Checkbox, Spin } from "antd";
import type { SelectProps } from "antd";
import _ from "lodash";
import { CommonTooltip } from "@components/CommonComponent";

const { Option } = AntdSelect;

//#region Interface
interface ColumnOption {
  fieldName: string;
  header?: string | undefined;
  width?: number | undefined;
}

interface CustomProps extends Omit<SelectProps, "options"> {
  fieldValue: string;
  datalist: Array<any> | any;
  columnOptions: Array<ColumnOption>;
  isCheckAll?: boolean | undefined;
}
//#endregion

//#region Feature
const filterSelectOption = (input: any, event: any) => {
  return (
    _.toString(event.value) === "header" ||
    _.toString(event.label).toLowerCase().includes(input.toLowerCase()) ||
    _.toString(event.value).toLowerCase().includes(input.toLowerCase())
  );
};

const renderOptions = (fieldValue: string, data: Array<any>, columnOptions: Array<ColumnOption>) => {
  const children: Array<any> = [];

  //header
  if (_.some(columnOptions, (col) => !_.isEmpty(col.header))) {
    const header = (
      <Option key={uuidv4()} value="header" disabled>
        <Row className="select-options" key={uuidv4()}>
          {_.map(columnOptions, (col) => {
            return (
              <Col
                key={uuidv4()}
                className="header-select-options"
                {...{
                  xxl: col.width,
                  xl: col.width,
                  lg: col.width,
                  md: col.width,
                  sm: col.width,
                  xs: col.width,
                }}
              >
                {col.header}
              </Col>
            );
          })}
        </Row>
      </Option>
    );

    children.push(header);
  }

  //row
  if (columnOptions && columnOptions?.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const row = data[i];

      children.push(
        <Option key={uuidv4()} value={row[fieldValue]} item={row}>
          <Row className="select-options" key={uuidv4()}>
            {_.map(columnOptions, (col) => {
              return (
                <Col
                  key={uuidv4()}
                  {...{
                    xxl: col.width,
                    xl: col.width,
                    lg: col.width,
                    md: col.width,
                    sm: col.width,
                    xs: col.width,
                  }}
                >
                  <CommonTooltip>{row[col.fieldName]}</CommonTooltip>
                </Col>
              );
            })}
          </Row>
        </Option>,
      );
    }
  }

  return children;
};
//#endregion

const Select = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ fieldValue, datalist, columnOptions, isCheckAll, onChange, ...props }: CustomProps, ref: any) => {
    //#region Hooks
    const { t } = useTranslation(["select"]);
    //#endregion

    //#region Events
    const customOnChange = (value: any, option: any) => {
      if (onChange) onChange(value, option?.item);
    };

    const onCheckAll = (e: any) => {
      if (!onChange || _.isEmpty(fieldValue) || _.isEmpty(datalist)) {
        return;
      }

      if (e.target.checked) {
        onChange(
          _.map(datalist, (obj) => obj[fieldValue]),
          datalist,
        );
      } else {
        onChange([], []);
      }
    };

    //#endregion

    if (_.isFunction(datalist)) {
      return (
        <LazySelect
          fieldValue={fieldValue}
          datalist={datalist}
          columnOptions={columnOptions}
          {...props}
          onChange={customOnChange}
        />
      );
    }

    return (
      <StaticSelect
        {...props}
        onChange={customOnChange}
        dropdownRender={
          isCheckAll
            ? (menu: any) => (
                <>
                  {menu}
                  <Divider style={{ margin: "4px 0" }} />
                  <Space style={{ padding: "0 8px 4px" }}>
                    <Checkbox
                      checked={
                        props.mode === "multiple" && datalist?.length > 0 && props.value?.length === datalist.length
                      }
                      onChange={onCheckAll}
                    >
                      {t("checkAll")}
                    </Checkbox>
                  </Space>
                </>
              )
            : undefined
        }
      >
        {renderOptions(fieldValue, datalist, columnOptions)}
      </StaticSelect>
    );
  },
);

const StaticSelect = (props: any) => {
  return <AntdSelect style={{ width: "100%", ...props.style }} {...props} />;
};

const LazySelect = ({ fieldValue, datalist, columnOptions, ...props }: any) => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDefaultData = async () => {
      const defaultData = await datalist();
      setData(defaultData);
    };
    getDefaultData();
  }, []);

  const onSearch = useMemo(() => {
    const loadOptions = async (value: any) => {
      setFetching(true);
      setData([]);

      const newData = await datalist(value);

      setFetching(false);
      setData(newData);
    };

    return _.debounce(loadOptions, 1000);
  }, []);

  return (
    <AntdSelect
      style={{ width: "100%", ...props.style }}
      onSearch={onSearch}
      notFoundContent={fetching ? <div style={{textAlign: "center"}}><Spin size="small" /> </div>: null}
      {...props}
      filterOption={false}
    >
      {renderOptions(fieldValue, data, columnOptions)}
    </AntdSelect>
  );
};

export default Select;

Select.defaultProps = {
  showSearch: true,
  allowClear: true,
  showArrow: true,
  maxTagCount: "responsive",
  filterOption: filterSelectOption,
};
