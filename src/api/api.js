import service from '@/utils/request.js';



//


//------------------------------------- Login ------------------------------------------------------//
// 登录
export const requestLogin = params => { return service.get(`/api/v1/user/login` + params,).then(res => res.data); };


//------------------------------------- dataSource ------------------------------------------------------//

//添加文件夹
export const addFolder = params => { return service.post(`/api/v1/folder/insert` , params).then(res => res.data); };
//查询文件夹
















