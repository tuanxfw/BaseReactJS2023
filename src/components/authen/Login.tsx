import { Button, Col, Row } from "antd";
import {
  CommonForm,
  CommonInputText,
  CommonInputPassword,
  CommonValidTooltip,
  showMessage,
} from "@components/CommonComponent";
import LoginStyle from "@style/pages/LoginStyle";
import { useTranslation } from "react-i18next";
import { localStoreUtil, yup, yupResolver } from "@utils/commonUtil";
import { useForm, Controller } from "react-hook-form";
import { useLogin } from "@hooks/fetch/useAuth";

const Login = () => {
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
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const authn = useLogin();

  //#endregion

  //#region Method
  const login = async (data: any) => {
    try {
      const tokenData = await authn.mutateAsync(data);

      if (!tokenData) {
        throw new Error(t("common:errors.exception") as string);
      }
      localStoreUtil.setData("token", tokenData);

      // let userInfoData = await getUserInfo.refetch();
      // if (!userInfoData) {
      //   throw new Error(t("common:errors.exception") as string);
      // }
      // localStoreUtil.setData("userInfo", userInfoData);

      const menu = [
        {
          id: "1",
          name: "Menu 1",
          path: "/sample",
        },
        {
          id: "2",
          name: "Menu 2",
          children: [
            {
              id: "2.1",
              name: "Menu 2.1",
              path: "/form1",
            },
          ],
        },
        {
          id: "3",
          name: "Menu 3",
          children: [
            {
              id: "3.1",
              name: "Menu 3.1",
              path: "/form1",
            },
            {
              id: "3.2",
              name: "Menu 3.2",
              children: [
                {
                  id: "3.2.1",
                  name: "Menu 3.2.1",
                  path: "/form1",
                },
              ],
            },
          ],
        },
      ];

      const menuData = parseMenuData(menu);

      localStoreUtil.setData("menu", {
        tree: menu,
        items: menuData.items,
        subs: menuData.subs,
      });

      window.location.reload();
    } catch (error) {
      //console.error(error);
      //showMessage({type: "error", message: t("common:errors.exception")});
      showMessage({ type: "error", message: t("common:errors.exception") });
    }
  };

  const parseMenuData = (menuData: any[], parent = "") => {
    let subs: any[] = [];
    let items: any[] = [];

    menuData.map((menu) => {
      if (menu["children"]) {
        const sub = { ...menu };
        sub.parent = parent;
        sub.type = "sub";
        delete sub.children;

        subs.push(sub);

        const result = parseMenuData(menu.children, menu["id"]);
        subs = subs.concat(result.subs);
        items = items.concat(result.items);
      } else {
        const item = { ...menu };
        item.parent = parent;
        item.type = "item";

        items.push(item);
      }
    });

    return {
      subs: subs,
      items: items,
    };
  };
  //#endregion

  //#region Event
  const onLogin = (data: any) => {
    login(data);
  };
  //#endregion

  return (
    <LoginStyle>
      <Row className="login-page">
        <Col {...{ xxl: 18, xl: 16, lg: 14, md: 10, sm: 6, xs: 0 }} className="left-layout"></Col>

        <Col {...{ xxl: 6, xl: 8, lg: 10, md: 14, sm: 18, xs: 24 }} className="right-layout">
          <Row>
            <Col md={24} className="login-title">
              <div className="logo-app" />
              <h2>{t("common:appTitle")}</h2>
            </Col>
            <Col md={24} className="login-form">
              <CommonForm errors={errors} watch={watch} onSubmit={handleSubmit(onLogin)}>
                <Controller
                  control={control}
                  name="username"
                  render={({ fieldState, field }) => (
                    <>
                      <CommonValidTooltip>{fieldState.error?.message}</CommonValidTooltip>
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
                      <CommonValidTooltip>{fieldState.error?.message}</CommonValidTooltip>
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
