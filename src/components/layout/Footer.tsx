import _ from "lodash";
import { Layout, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useParams } from "react-router-dom";
import type { Params } from "react-router-dom";
import FooterStyle from "@style/layout/FooterStyle";
import dictionary from "@locales/dictionary";
import { useTranslation } from "react-i18next";

const buildTime = __APP_VERSION__;

const Footer = () => {
  const params: Params = useParams();

  const { t } = useTranslation(["common"]);

  const genLangItem = (): MenuProps["items"] => {
    const langItem = dictionary.map((item) => {
      return {
        key: item.ns,
        label: item.name,
      };
    });

    return langItem;
  };

  const onChangeLang = ({ key }: any) => {
    window.location.href = window.location.pathname.replace(_.toString(params.lang), key);
  };

  return (
    <FooterStyle>
      <Layout.Footer>
        <div className="info-field">
          <span>
            {t("appFooter")} v{buildTime}
          </span>
        </div>
        <div className="lang-field">
          <Dropdown
            placement="top"
            trigger={["click"]}
            menu={{
              items: genLangItem(),
              onClick: onChangeLang,
            }}
          >
            <span className="ant-dropdown-link">
              <i className="fa-solid fa-language" />
              {_.find(dictionary, (lang) => lang.ns === params.lang)?.name}
            </span>
          </Dropdown>
        </div>
      </Layout.Footer>
    </FooterStyle>
  );
};

export default Footer;
