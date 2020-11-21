import request from "@/utils/request";

export const getList = () => request({
    url: '/category/list',
    method: 'get'
})