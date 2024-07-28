import request from '@/utils/request'

export default {
    //1. 生成统计数据
    createStatistics(day) {
        return request({
            url: `/staservice/daily/registerCount/${day}`,
            method: 'post',
        })
    },
    // 2. 图标显示统计信息
    showData(searchObj){
        return request({
            url: `/staservice/daily/showData/${searchObj.type}/${searchObj.begin}/${searchObj.end}`,
            method: 'get',
        })
    }
}