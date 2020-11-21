import request from "@/utils/request";

export const getList = () => request({
    url: '/mdc/category/list',
    method: 'get'
})