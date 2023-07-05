// eslint-disable-next-line import/no-unresolved
import routes from "~react-pages";
import { Suspense, lazy, useLayoutEffect } from "react";
import { App as AppAntd, Skeleton , ConfigProvider } from "antd";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "@components/layout/ErrorBoundary";
import NotFound from "@components/layout/NotFound";
import dayjs from "dayjs";
import i18n, { checkLocale, getCurrentLocale } from "@locales/i18n";
import {
  CommonNotification,
  CommonProcessLoading,
} from "@components/CommonComponent";
// const ReactQueryDevtoolsProduction = lazy(() =>
//   import("react-query/devtools/development").then((d) => ({
//     default: d.ReactQueryDevtools,
//   }))
// );

const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, //số lần refetch khi gặp lỗi
      retryDelay: 2000, //thời gian delay khi refetch khi gặp lỗi
      refetchOnWindowFocus: false, //refetch lại khi focus lại vào cửa sổ
      keepPreviousData: false,
      refetchInterval: false, //tự refetch sau 1 khoảng thời gian
      refetchIntervalInBackground: false, //refetch lại ngay cả khi không focus vào ứng dụng
      staleTime: 1000 * 60 * 5, //thời gian cache
      onError: (error) => {
        console.error(error);
        //showError(error.message);
      },
    },
    mutations: {
      retry: false,
      retryDelay: 2000,
      onError: (error) => {
        console.error(error);
        //showError(error.message);
      },
    },
  },
});

const locale = getCurrentLocale(window.location.pathname);

const App = () => {
  const route = useRoutes([
    ...routes,
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  useLayoutEffect(() => {
    checkLocale(window.location);

    i18n.changeLanguage(locale.ns);
  }, []);

  dayjs.locale(locale?.dayjs);

  return (
    <ConfigProvider locale={locale?.antd}>
      <QueryClientProvider client={queryClient}>
        <AppAntd>
          <Suspense
            fallback={
              <div>
                <Skeleton active />
              </div>
            }
          >
            <CommonNotification />
            <CommonProcessLoading />
            <ErrorBoundary>{route}</ErrorBoundary>
          </Suspense>
          {/* <ReactQueryDevtoolsProduction initialIsOpen={false} /> */}
          <ReactQueryDevtoolsProduction />
        </AppAntd>
      </QueryClientProvider>
    </ConfigProvider>
  );
};

export default App;
