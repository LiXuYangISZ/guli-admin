<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="信息描述">
        <el-tag type="info">excel模版说明</el-tag>
        <el-tag>
          <i class="el-icon-download"/>
          <a :href="OSS_PATH + '/excel/template.xlsx'">点击下载模版</a>
        </el-tag>

      </el-form-item>

      <el-form-item label="选择Excel">
        <el-upload
          ref="upload"
          :auto-upload="false"
          :on-success="fileUploadSuccess"
          :on-error="fileUploadError"
          :disabled="importBtnDisabled"
          :limit="1"
          :action="BASE_API+'/eduservice/subject/addSubjects'"
          name="file"
          accept="application/*">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button
            :loading="false"
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload">{{ fileUploadBtnText }}</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {

  data() {
    return {
      BASE_API: process.env.BASE_API, // 接口API地址
      OSS_PATH: process.env.OSS_PATH, // 阿里云OSS地址
      fileUploadBtnText: '上传到服务器', // 按钮文字
      importBtnDisabled: false, // 按钮是否禁用,
      loading: false
    }
  },
  created() {
    
  },
  methods: {
    //上传成功调用的方法
    fileUploadSuccess(response){
      if (response.success === true) {
        this.fileUploadBtnText = '导入成功'
        this.loading = false
        this.$message({
            type: 'success',
            message: response.message
        })
      } 
      //跳转到列表页面
      this.$router.push({path:'/subject/list'})
    },
    //上传失败调用的方法
    fileUploadError(response){
      if(response.success === false){
        this.fileUploadBtnText = '导入失败'
        this.loading = false
        this.$message({
            type: 'error',
            message: response.message
        })
      }
      //跳转到列表页面
      this.$router.push({path:'/subject/list'})
    },
    //点击按钮上传文件到接口
    submitUpload(){
      this.importBtnDisabled = true //上传按钮禁用
      this.loading = true
      this.$refs.upload.submit()
    }
  }
}
</script>