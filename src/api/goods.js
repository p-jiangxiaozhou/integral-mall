import request from '@/utils/request'

export const getList = (params = { current: 1, pageSize: 10, categoryId }) => request({
    url: '/mdc/goods/list',
    method: 'get',
    params
})

export const getDetail = id => request({
    url: `/mdc/goods/${id}/detail`,
    method: 'get'
})
