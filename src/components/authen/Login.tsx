import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Button, Col, Row } from "antd";
import {
  CommonForm,
  CommonInputText,
  CommonInputPassword,
  CommonValidTooltip,
} from "@components/CommonComponent";
import LoginStyle from "@style/pages/LoginStyle";
import { useTranslation } from "react-i18next";
import { localStoreUtil, yup, yupResolver } from "@utils/commonUtil";
import { useForm, Controller } from "react-hook-form";

const Login = (props: any) => {
  const { t } = useTranslation(["login", "common"]);

  const schema = yup.object({
    username: yup.string().nullable().notEmpty(),
    password: yup.string().nullable().notEmpty(),
  });

  //#region Hooks
  const {
    control,
    watch,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isDirty, defaultValues },
  } = useForm<any>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  //#endregion

  //#region Method
  const login = async (data: any) => {
    await getUserInfo(data);
    window.location.reload();
  };

  const getUserInfo = async (data: any) => {
    localStoreUtil.setData("userInfo", data);
    window.location.reload();
  };
  //#endregion

  //#region Event
  const onLogin = (data: any, event: any) => {
    login(data);
  };
  //#endregion

  return (
    <LoginStyle>
      <Row className="login-page">
        <Col
          {...{ xxl: 18, xl: 16, lg: 14, md: 10, sm: 6, xs: 0 }}
          className="left-layout"
        ></Col>

        <Col
          {...{ xxl: 6, xl: 8, lg: 10, md: 14, sm: 18, xs: 24 }}
          className="right-layout"
        >
          <Row>
            <Col md={24} className="login-title">
              <div className="logo-app" />
              <h2>{t("common:appTitle")}</h2>
            </Col>
            <Col md={24} className="login-form">
              <CommonForm
                errors={errors}
                watch={watch}
                onSubmit={handleSubmit(onLogin)}
              >
                <Controller
                  control={control}
                  name="username"
                  render={({ fieldState, field }) => (
                    <>
                      <CommonValidTooltip>
                        {fieldState.error?.message}
                      </CommonValidTooltip>
                      <CommonInputText
                        {...field}
                        placeholder={t("username") as string}
                        prefix={<i className="fa-solid fa-user"></i>}
                        autoUpper
                        autoTrim
                      />
                    </>
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  render={({ fieldState, field }) => (
                    <>
                      <CommonValidTooltip>
                        {fieldState.error?.message}
                      </CommonValidTooltip>
                      <CommonInputPassword
                        {...field}
                        placeholder={t("username") as string}
                        prefix={<i className="fa-solid fa-key"></i>}
                        autoTrim
                      />
                    </>
                  )}
                />

                <Button htmlType="submit">{t("login")}</Button>
              </CommonForm>
            </Col>

            <Col md={24} className="advance-action">
              <span>{t("forgetPassword")}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </LoginStyle>
  );
};

export default Login;
