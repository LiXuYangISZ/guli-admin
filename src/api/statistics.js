import request from '@/utils/request'

export default {
    //生成统计数据
    createStatistics(day) {
        return request({
            url: `/staservice/daily/registerCount/${day}`,
            method: 'post',
        })
    }
}