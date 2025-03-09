import client from './client';
import {gql} from 'graphql-request';
import cloneDeep from "lodash/cloneDeep";


// 封装查询请求
export const fetchExamplesServices = (data) => {
    const query = gql`query getexamplesServices($content: DataInputType!){
        examplesServices(data: $content)
    }`;
    let content = cloneDeep(data)
    content.data.forEach((item)=> {
        item['serviceCode'] = item['service_code'];
        item['serviceName'] = item['service_name'];
        delete item['service_code']
        delete item['service_name']
    })
    // 变量名必须和上面查询语句中的变量名一致
    return client.request(query, {content})
        .then(result => result)
        .catch(err => err)
}

// cda
export const fetchDownloadCdasByAdmNo = (admNo) => {
    const query = gql`
  query readCdasByAdmNo($admNo: String!){
    readCdasByAdmNo(admNo: $admNo)
  }
`;
    return client.request(query, {admNo})
        .then(result => result)
        .catch(err => err)
}
