import { Component } from "@constants/constants";
import { IPagingTable } from "@interface/model/PagingApi";
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
  const defaultPaging = {
    page_size: Component.DATATABLE.PAGE_SIZE_DEFAULT,
    total_elements: 1,
  };

  return { ...defaultPaging, ...input };
}

function mapResponsePaging(input: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { page_size, page_number, total_elements, total_pages, ...rest } = input;

  const data = rest;
  const pagingInfo: IPagingTable = {
    total: total_elements || 0,
    current: page_number || 1,
    pageSize: page_size || Component.DATATABLE.PAGE_SIZE_DEFAULT,
  };

  const result = {
    data,
    pagingInfo,
  };

  return result;
}

const object = {
  isEmptyValue,
  mapPayloadPaging,
  mapResponsePaging,
};

export default object;
