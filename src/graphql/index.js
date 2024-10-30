import client from './client';
import {gql} from 'graphql-request';


// 封装查询请求
export const fetchExamplesServices = (data) => {
    const query = gql`
  query getData($data: GenericScalar!){
    downloadExamplesServices(inputData: $data){
      code
      message
      }
  }
`;
    return client.request(query, {data})
        .then(result => result)
        .catch(err => err)
}

// cda
export const fetchDownloadCdasByAdmNo = (admNo) => {
    const query = gql`
  query getData($admNo: String!){
    downloadCdasByAdmNo(admNo: $admNo){
      code
      message
      }
  }
`;
    return client.request(query, {admNo})
        .then(result => result)
        .catch(err => err)
}
