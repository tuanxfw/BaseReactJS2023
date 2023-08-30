import { Component } from "@constants/constants";
import _ from "lodash";

function isEmptyValue(value: any) {
  const result =
    true &&
    !_.isNaN(value) &&
    !_.isNull(value) &&
    !_.isUndefined(value) &&
    (_.isNumber(value) || _.isBoolean(value) || _.isFunction(value) || _.isElement(value) || !_.isEmpty(value));

  return !result;
}

function mapPayloadPaging(input: any) {
  const defaultPaging: any = {
    page_size: Component.DATATABLE.PAGE_SIZE_DEFAULT,
    page_num: 1,
  };

  return { ...defaultPaging, ...input};
}

function mapResponsePaging(input: any) {
  const { page_size, page_num, total, total_pages, ...data } = input;

  const result = {
    data,
    pagingInfo: {
      total: total || 0,
      current: page_num || 1,
      pageSize: page_size || Component.DATATABLE.PAGE_SIZE_DEFAULT,
      totalPage: total_pages || 1,
    },
  };

  return result;
}

const object = {
  isEmptyValue,
  mapPayloadPaging,
  mapResponsePaging,
};

export default object;
