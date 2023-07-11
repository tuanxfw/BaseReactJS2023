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
} from "@components/CommonComponent";
import { yup, yupResolver } from "@utils/commonUtil";
import { Controller, useForm } from "react-hook-form";

interface IFormInput {
  text?: string;
  number?: number | string;
  date?: string;
  select?: string | number;
  area?: string | null;
}

const DemoForm = () => {
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
      <DisplayBox title={"Form"} isOpen={true}>
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
              <CommonButton
                btnType="iconText"
                icon={<i className="fa-solid fa-rotate-left"></i>}
                onClick={() => reset()}
              >
                Reset
              </CommonButton>
            </Col>
          </Row>
        </CommonForm>
      </DisplayBox>
    </>
  );
};
export default DemoForm;
