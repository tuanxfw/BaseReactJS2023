import { Col, Row } from "antd";
import {
  DisplayBox,
  CommonInputText,
  CommonInputNumber,
  CommonTextArea,
  CommonForm,
  CommonButton,
  CommonDatePicker,
  CommonSelect,
  CommonModal,
} from "@components/CommonComponent";
import { yup, yupResolver } from "@utils/commonUtil";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

interface IFormInput {
  text?: string;
  number?: number | string;
  date?: string;
  select?: string | number;
  area?: string | null;
}

const DemoForm = () => {
  //#region hooks
  const [modal, setModal] = useState<any>(null);
  //#endregion

  //#region event
  const onOpenModal = () => {
    const data: IFormInput = {
      text: "Giá trị text",
      number: 123123,
      date: "01/01/2025",
    };

    const Modal = CommonModal(FormWithModal);
    setModal(
      <Modal
        title="Form With Modal"
        width={"1000px"}
        propsContent={{
          data: data,
          onClose: () => {
            setModal(null);
          },
        }}
      />,
    );
  };
  //#endregion

  //#region method

  //#endregion

  return (
    <>
      {modal}
      <DisplayBox title={"Form"} isOpen={true}>
        <Row>
          <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
            <Form />
          </Col>
          <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
            <hr />
            <CommonButton onClick={onOpenModal}>Form with modal</CommonButton>
          </Col>
        </Row>
      </DisplayBox>
    </>
  );
};

const Form = () => {
  //#region hooks
  const schema = yup.object({
    text: yup.string().nullable().required(),
    date: yup.string().nullable().required(),
    area: yup.string().nullable().maxLength(10),
  });

  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {},
    resolver: yupResolver<any>(schema),
  });

  //#endregion

  //#region event
  const onSubmit = (data: IFormInput, event: any) => {
    console.log(event?.nativeEvent?.submitter);
    alert(JSON.stringify(data));
  };
  //#endregion

  //#region method

  //#endregion

  return (
    <>
      <CommonForm errors={errors} watch={watch} onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <Controller
              control={control}
              name="text"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item label={"Text"} valid={fieldState.error?.message} required>
                    <CommonInputText {...field} />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <Controller
              control={control}
              name="number"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item label={"Number"} valid={fieldState.error?.message}>
                    <CommonInputNumber {...field} />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <Controller
              control={control}
              name="date"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item required label={"Date"} valid={fieldState.error?.message}>
                    <CommonDatePicker {...field} />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <Controller
              control={control}
              name="select"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item label={"Select"} valid={fieldState.error?.message}>
                    <CommonSelect
                      {...field}
                      datalist={[
                        {
                          value: 1,
                          name: "Name 1",
                        },
                        {
                          value: 2,
                          name: "Name 2",
                        },
                      ]}
                      fieldValue={"value"}
                      columnOptions={[
                        {
                          fieldName: "name",
                        },
                      ]}
                    />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="col-space" {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
            <Controller
              control={control}
              name="area"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item label={"Area"} valid={fieldState.error?.message}>
                    <CommonTextArea {...field} rows={5} />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="form-footer" {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
            <CommonButton btnType="iconText" icon={<i className="fa-solid fa-floppy-disk"></i>} htmlType="submit">
              Submit
            </CommonButton>
            <CommonButton btnType="iconText" icon={<i className="fa-solid fa-rotate-left"></i>} onClick={() => reset()}>
              Reset
            </CommonButton>
          </Col>
        </Row>
      </CommonForm>
    </>
  );
};

const FormWithModal = (props: any) => {
  //#region hooks

  const schema = yup.object({
    text: yup.string().nullable().required(),
    date: yup.string().nullable().required(),
    area: yup.string().nullable().maxLength(10),
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IFormInput>({
    defaultValues: props.data,
    resolver: yupResolver<any>(schema),
  });

  //#endregion

  //#region event
  const onSubmit = (data: IFormInput, event: any) => {
    console.log(event?.nativeEvent?.submitter);
    alert(JSON.stringify(data));
  };

  const onClose = () => CommonModal.confirmClose(isDirty, props.onClose);
  //#endregion

  //#region method

  //#endregion

  return (
    <>
      <CommonForm errors={errors} watch={watch} onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <Controller
              control={control}
              name="text"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item label={"Text"} valid={fieldState.error?.message} required>
                    <CommonInputText {...field} />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <Controller
              control={control}
              name="number"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item label={"Number"} valid={fieldState.error?.message}>
                    <CommonInputNumber {...field} />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <Controller
              control={control}
              name="date"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item required label={"Date"} valid={fieldState.error?.message}>
                    <CommonDatePicker {...field} />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <Controller
              control={control}
              name="select"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item label={"Select"} valid={fieldState.error?.message}>
                    <CommonSelect
                      {...field}
                      datalist={[
                        {
                          value: 1,
                          name: "Name 1",
                        },
                        {
                          value: 2,
                          name: "Name 2",
                        },
                      ]}
                      fieldValue={"value"}
                      columnOptions={[
                        {
                          fieldName: "name",
                        },
                      ]}
                    />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="col-space" {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
            <Controller
              control={control}
              name="area"
              render={({ fieldState, field }) => (
                <>
                  <CommonForm.Item label={"Area"} valid={fieldState.error?.message}>
                    <CommonTextArea {...field} rows={5} />
                  </CommonForm.Item>
                </>
              )}
            />
          </Col>

          <Col className="form-footer" {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
            <CommonButton btnType="text" htmlType="submit">
              Save
            </CommonButton>
            <CommonButton btnType="text" className="close-modal" onClick={onClose}>
              Close
            </CommonButton>
          </Col>
        </Row>
      </CommonForm>
    </>
  );
};

export default DemoForm;
