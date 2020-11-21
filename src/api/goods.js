import request from '@/utils/request'

export const getList = (params = { current: 1, pageSize: 10, categoryId }) => request({
    url: '/goods/list',
    method: 'get',
    params
})

export const getDetail = id => request({
    url: `/goods/${id}/detail`,
    method: 'get'
})
