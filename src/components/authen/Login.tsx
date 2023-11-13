import { Button, Col, Row } from "antd";
import { CommonForm, CommonInputText, CommonInputPassword, showMessage } from "@components/CommonComponent";
import LoginStyle from "@style/pages/LoginStyle";
import { useTranslation } from "react-i18next";
import { localStoreUtil, yup, yupResolver } from "@utils/commonUtil";
import { useForm, Controller } from "react-hook-form";
import { useLogin } from "@hooks/fetch/useAuth";
import { IMenuItem, IMenuSub } from "@interface/model/Menu";

const Login = () => {
  const { t } = useTranslation(["login", "common"]);

  const schema = yup.object({
    username: yup.string().nullable().required(),
    password: yup.string().nullable().required(),
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
      //const tokenData = await authn.mutateAsync(data);
      const tokenData = {
        "access_token": "456",
        "refresh_token": "123",
        "token_type": "Bearer",
        "expires_in": 86399,
        "refresh_expires_in": 493261,
        "user_info": {
            "id": "191d4abf4a59464d905d210792fb96e2",
            "username": "admin",
            "tax_code": null,
            "full_name": "VETC",
            "email": "vetc@vetc.com.vn",
            "phone": "0983051325",
            "type": "TVAN",
            "roles": [
                {
                    "username": "admin",
                    "role_code": "ADMIN"
                },
                {
                    "username": "admin",
                    "role_code": "INTEGRATOR"
                }
            ],
            "orgs": {
                "id": null,
                "code": null,
                "name": null,
                "tax_code": null,
                "transfer_type": null,
                "email": null,
                "phone": null,
                "address": null,
                "type": "DN"
            }
        }
    };

      if (!tokenData) {
        //throw new Error(t("common:errors.exception") as string);
        return;
      }
      localStoreUtil.setToken(tokenData);

      // let userInfoData = await getUserInfo.refetch();
      // if (!userInfoData) {
      //   throw new Error(t("common:errors.exception") as string);
      // }
      // localStoreUtil.setData("userInfo", userInfoData);

      const menu = [
        {
          id: "0",
          name: "Sample",
          path: "/sample",
        },
        {
          id: "1",
          name: "Form1",
          path: "/form-1",
        },
        {
          id: "2",
          name: "Form2",
          children: [
            {
              id: "2.1",
              name: "Child Form2",
              path: "/form-2/child-form-2",
            },
          ],
        },
        {
          id: "3",
          name: "Form3",
          children: [
            {
              id: "3.1",
              name: "Child Form 3.1",
              path: "/form-3/child-form-31",
            },
            {
              id: "3.2",
              name: "Child Form 3.2",
              path: "/form-3/child-form-32",
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
      console.error(error);
      showMessage({ type: "error", message: t("common:errors.exception") });
    }
  };

  const parseMenuData = (menuData: any[], parent = "") => {
    let subs: IMenuSub[] = [];
    let items: IMenuItem[] = [];

    menuData.map((menu) => {
      if (menu["children"]) {
        const sub: IMenuSub = {
          id: menu["id"],
          name: menu["name"],
          parent: parent,
        };

        subs.push(sub);

        const result = parseMenuData(menu["children"], menu["id"]);
        subs = subs.concat(result.subs);
        items = items.concat(result.items);
      } else {
        const item: IMenuItem = {
          id: menu["id"],
          name: menu["name"],
          path: menu["path"],
          parent: parent,
        };

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
                      <CommonForm.Item valid={fieldState.error?.message}>
                        <CommonInputText
                          {...field}
                          placeholder={t("username") as string}
                          prefix={<i className="fa-solid fa-user"></i>}
                          autoUpper
                          autoTrim
                        />
                      </CommonForm.Item>
                    </>
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  render={({ fieldState, field }) => (
                    <>
                      <CommonForm.Item valid={fieldState.error?.message}>
                        <CommonInputPassword
                          {...field}
                          placeholder={t("password") as string}
                          prefix={<i className="fa-solid fa-key"></i>}
                          autoTrim
                        />
                      </CommonForm.Item>
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
