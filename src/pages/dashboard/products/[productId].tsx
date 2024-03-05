import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';
import { apiPaths } from '@/constants/apiPaths';
import Layout from '@/common/components/Layout';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import EditProduct from '@/modules/DashboardPage/Management/EditProduct';
import { EditProductsProps } from '@/modules/DashboardPage/Management/data';

const EditProducts = ({ detailData }: EditProductsProps) => {
  return (
    <Layout pageCategory="dashboardPage">
      <EditProduct detailData={detailData} />
    </Layout>
  );
};

export default EditProducts;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const token = getCookie('token', { req: context.req });
  const params = context.params;
  const productId = params ? params['productId'] : null;
  let detailData = [];
  try {
    // 取得編輯農產品
    const detailParams: ApiParamsType = {
      apiPath: `${apiPaths['productSet']}/${productId}`,
      method: 'GET',
      authToken: token,
    };
    const detailResponse = await fetchApi(detailParams);
    if (detailResponse.statusCode === 200) {
      detailData = detailResponse.data;
    } else if (detailResponse.statusCode === 401) {
      return { notFound: true };
    }
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      detailData,
    },
  };
};
